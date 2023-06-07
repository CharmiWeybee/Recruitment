/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	GET_ACTIVE_CANDIDATE_INTERVIEW_FAILURE,
	GET_ACTIVE_CANDIDATE_INTERVIEW_REQUEST,
	GET_ACTIVE_CANDIDATE_INTERVIEW_SUCCESS,
} from '../actionTypes';

const initialState = {
	loading: false,
	data: {},
	error: '',
};

const getActiveCandidateInterviewReducer = (
	state = initialState,
	action: any
) => {
	switch (action.type) {
		case GET_ACTIVE_CANDIDATE_INTERVIEW_REQUEST:
			return {
				...state,
				loading: true,
				data: {},
				error: '',
			};
		case GET_ACTIVE_CANDIDATE_INTERVIEW_SUCCESS:
			return {
				...state,
				loading: false,
				error: '',
				data: action.payload.data?.data,
			};
		case GET_ACTIVE_CANDIDATE_INTERVIEW_FAILURE:
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

export { getActiveCandidateInterviewReducer };
