/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
	searchparam,
	showToastMessageFailure,
	showToastMessageSuccess,
} from '../../helpers/helperFunction';
import { VIEW_CANDIDATE } from '../../helpers/routesConstant';
import {
	ADD_CANDIDATE_FAILURE,
	ADD_CANDIDATE_REQUEST,
	ADD_CANDIDATE_SUCCESS,
	GET_ACTIVE_CANDIDATE_FAILURE,
	GET_ACTIVE_CANDIDATE_REQUEST,
	GET_ACTIVE_CANDIDATE_SUCCESS,
	GET_ALL_CANDIDATE_FAILURE,
	GET_ALL_CANDIDATE_REQUEST,
	GET_ALL_CANDIDATE_SUCCESS,
	GET_CANDIDATE_BY_ID_FAILURE,
	GET_CANDIDATE_BY_ID_REQUEST,
	GET_CANDIDATE_BY_ID_SUCCESS,
	UPDATE_CANDIDATE_FAILURE,
	UPDATE_CANDIDATE_REQUEST,
	UPDATE_CANDIDATE_SUCCESS,
} from '../actionTypes';
import {
	addCandidateService,
	getActiveCandidates,
	getAllCandidates,
	getCandidateById,
	updateCandidateService,
} from './candidateService';

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

export const fetchActiveCandidates = () => {
	return async (dispatch: any) => {
		dispatch(request(GET_ACTIVE_CANDIDATE_REQUEST));

		await getActiveCandidates().then(
			(result: any) =>
				dispatch(success(GET_ACTIVE_CANDIDATE_SUCCESS, result.data)),
			(error: any) =>
				dispatch(failure(GET_ACTIVE_CANDIDATE_FAILURE, error.message))
		);
	};
};

export const fetchAllCandidates = (
	searchObj: searchparam,
	queryParams?: any
) => {
	return async (dispatch: any) => {
		dispatch(request(GET_ALL_CANDIDATE_REQUEST));

		await getAllCandidates(searchObj, queryParams).then(
			(result: any) =>
				dispatch(success(GET_ALL_CANDIDATE_SUCCESS, result.data)),
			(error: any) =>
				dispatch(failure(GET_ALL_CANDIDATE_FAILURE, error.message))
		);
	};
};

export const fetchCandidateById = (id: any) => {
	return async (dispatch: any) => {
		dispatch(request(GET_CANDIDATE_BY_ID_REQUEST));

		await getCandidateById(id).then(
			(result: any) =>
				dispatch(success(GET_CANDIDATE_BY_ID_SUCCESS, result.data)),
			(error: any) =>
				dispatch(failure(GET_CANDIDATE_BY_ID_FAILURE, error.message))
		);
	};
};

export const addCandidate = (formData: any, callback: any) => {
	return async (dispatch: any) => {
		dispatch(request(ADD_CANDIDATE_REQUEST));

		await addCandidateService(formData).then(
			(result: any) => {
				showToastMessageSuccess('Candidate added succesfully');
				dispatch(success(ADD_CANDIDATE_SUCCESS, result));
				callback(VIEW_CANDIDATE);
			},
			(error: any) => {
				dispatch(failure(ADD_CANDIDATE_FAILURE, error.message));
				showToastMessageFailure();
			}
		);
	};
};

export const updateCandidate = (
	fromData: object,
	id: number,
	callback: Function
) => {
	return async (dispatch: any) => {
		dispatch(request(UPDATE_CANDIDATE_REQUEST));

		await updateCandidateService(fromData, id).then(
			(result: any) => {
				dispatch(success(UPDATE_CANDIDATE_SUCCESS, result));
				showToastMessageSuccess('Candidate updated successfully');
				callback(VIEW_CANDIDATE);
			},
			(error: any) => {
				dispatch(failure(UPDATE_CANDIDATE_FAILURE, error.message));
				showToastMessageFailure();
			}
		);
	};
};
