/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	GET_INTERVIEW_BY_CANDIDATE_ID_FAILURE,
	GET_INTERVIEW_BY_CANDIDATE_ID_REQUEST,
	GET_INTERVIEW_BY_CANDIDATE_ID_SUCCESS,
} from '../actionTypes';

const initialState = {
	loading: false,
	data: {},
	error: '',
};

const getInterviewByCandidateIdReducer = (
	state = initialState,
	action: any
) => {
	switch (action.type) {
		case GET_INTERVIEW_BY_CANDIDATE_ID_REQUEST:
			return {
				...state,
				loading: true,
				data: {},
				error: '',
			};
		case GET_INTERVIEW_BY_CANDIDATE_ID_SUCCESS:
			return {
				...state,
				loading: false,
				error: '',
				data: action.payload.data,
			};
		case GET_INTERVIEW_BY_CANDIDATE_ID_FAILURE:
			return {
				...state,
				loading: false,
				data: {},
				error: action.payload,
			};
		default:
			return state;
	}
};

export { getInterviewByCandidateIdReducer };
