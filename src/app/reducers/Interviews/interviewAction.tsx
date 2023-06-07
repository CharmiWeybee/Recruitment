/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
	searchparam,
	showToastMessageFailure,
	showToastMessageSuccess,
} from '../../helpers/helperFunction';
import { CANDIDATE_DETAIL, VIEW_CANDIDATE } from '../../helpers/routesConstant';
import {
	ADD_INTERVIEW_FAILURE,
	ADD_INTERVIEW_REQUEST,
	ADD_INTERVIEW_SUCCESS,
	GET_ACTIVE_CANDIDATE_INTERVIEW_FAILURE,
	GET_ACTIVE_CANDIDATE_INTERVIEW_REQUEST,
	GET_ACTIVE_CANDIDATE_INTERVIEW_SUCCESS,
	GET_INTERVIEW_BY_CANDIDATE_ID_FAILURE,
	GET_INTERVIEW_BY_CANDIDATE_ID_REQUEST,
	GET_INTERVIEW_BY_CANDIDATE_ID_SUCCESS,
	GET_INTERVIEW_BY_ID_FAILURE,
	GET_INTERVIEW_BY_ID_REQUEST,
	GET_INTERVIEW_BY_ID_SUCCESS,
	GET_INTERVIEW_FAILURE,
	GET_INTERVIEW_REQUEST,
	GET_INTERVIEW_SUCCESS,
	UPDATE_INTERVIEW_FAILURE,
	UPDATE_INTERVIEW_REQUEST,
	UPDATE_INTERVIEW_SUCCESS,
} from '../actionTypes';
import {
	addInterviewService,
	getActiveCandidateInterview,
	getInterviewsByCandidateId,
	getInterviewsById,
	updateInterviewService,
	viewInterviewService,
} from './interviewService';

const request = (type: string) => {
	return {
		type,
	};
};
const success = (type: string, data: object) => {
	return {
		type,
		payload: data,
	};
};
const failure = (type: string, error: string) => {
	return {
		type,
		payload: error,
	};
};

export const addInterview = (
	formData: any,
	callback: any,
	candidateId: any
) => {
	return async (dispatch: any) => {
		dispatch(request(ADD_INTERVIEW_REQUEST));

		await addInterviewService(formData).then(
			(result: any) => {
				showToastMessageSuccess('Interview added succesfully');
				dispatch(success(ADD_INTERVIEW_SUCCESS, result));
				callback(`${CANDIDATE_DETAIL}/${candidateId}`);
			},
			(error: any) => {
				dispatch(failure(ADD_INTERVIEW_FAILURE, error.message));
				showToastMessageFailure();
			}
		);
	};
};
export const updateInterview = (
	fromData: object,
	id: number,
	callback: Function,
	candidateId: number
) => {
	return async (dispatch: any) => {
		dispatch(request(UPDATE_INTERVIEW_REQUEST));

		await updateInterviewService(fromData, id).then(
			(result: any) => {
				dispatch(success(UPDATE_INTERVIEW_SUCCESS, result));
				showToastMessageSuccess('Interview updated successfully');
				callback(`${CANDIDATE_DETAIL}/${candidateId}`);
			},
			(error: any) => {
				dispatch(failure(UPDATE_INTERVIEW_FAILURE, error.message));
				showToastMessageFailure();
			}
		);
	};
};

export const fetchInterviewsById = (id: any) => {
	return async (dispatch: any) => {
		dispatch(request(GET_INTERVIEW_BY_ID_REQUEST));

		await getInterviewsById(id).then(
			(result: any) =>
				dispatch(success(GET_INTERVIEW_BY_ID_SUCCESS, result.data)),
			(error: any) =>
				dispatch(failure(GET_INTERVIEW_BY_ID_FAILURE, error.message))
		);
	};
};

export const fetchInterviewsByCandidateId = (id: any) => {
	return async (dispatch: any) => {
		dispatch(request(GET_INTERVIEW_BY_CANDIDATE_ID_REQUEST));

		await getInterviewsByCandidateId(id).then(
			(result: any) =>
				dispatch(success(GET_INTERVIEW_BY_CANDIDATE_ID_SUCCESS, result.data)),
			(error: any) =>
				dispatch(failure(GET_INTERVIEW_BY_CANDIDATE_ID_FAILURE, error.message))
		);
	};
};

export const fetchInterview = () => {
	return async (dispatch: any) => {
		dispatch(request(GET_INTERVIEW_REQUEST));

		await viewInterviewService().then(
			(result: any) => dispatch(success(GET_INTERVIEW_SUCCESS, result.data)),
			(error: any) => dispatch(failure(GET_INTERVIEW_FAILURE, error.message))
		);
	};
};

export const fetchActiveCandidateInterview = (
	searchObj: searchparam,
	queryParams?: any
) => {
	return async (dispatch: any) => {
		dispatch(request(GET_ACTIVE_CANDIDATE_INTERVIEW_REQUEST));

		await getActiveCandidateInterview(searchObj, queryParams).then(
			(result: any) =>
				dispatch(success(GET_ACTIVE_CANDIDATE_INTERVIEW_SUCCESS, result.data)),
			(error: any) =>
				dispatch(failure(GET_ACTIVE_CANDIDATE_INTERVIEW_FAILURE, error.message))
		);
	};
};
