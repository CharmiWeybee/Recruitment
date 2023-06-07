/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/default-param-last */

import {
	UPDATE_INTERVIEW_FAILURE,
	UPDATE_INTERVIEW_SUCCESS,
	UPDATE_INTERVIEW_REQUEST,
} from '../actionTypes';

const initialState = {
	loading: false,
	data: {},
	error: '',
};

interface actionObject {
	type: string;
	payload: any;
}

const updateInterviewReducer = (state = initialState, action: actionObject) => {
	switch (action.type) {
		case UPDATE_INTERVIEW_REQUEST:
			return {
				...state,
				loading: true,
				error: '',
			};
		case UPDATE_INTERVIEW_SUCCESS:
			return {
				...state,
				loading: false,
				error: '',
				data: action.payload,
			};
		case UPDATE_INTERVIEW_FAILURE:
			return {
				...state,
				loading: false,
				data: '',
				error: action.payload,
			};
		default:
			return state;
	}
};

export { updateInterviewReducer };
