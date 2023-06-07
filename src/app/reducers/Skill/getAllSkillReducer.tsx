/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
	GET_ALL_DEGREE_FAILURE,
	GET_ALL_DEGREE_REQUEST,
	GET_ALL_DEGREE_SUCCESS,
	GET_ALL_SKILL_FAILURE,
	GET_ALL_SKILL_REQUEST,
	GET_ALL_SKILL_SUCCESS,
} from '../actionTypes';

const initialState = {
	loading: false,
	data: {},
	error: '',
};

const getAllSkillReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case GET_ALL_SKILL_REQUEST:
			return {
				...state,
				loading: true,
				data: {},
				error: '',
			};
		case GET_ALL_SKILL_SUCCESS:
			return {
				...state,
				loading: false,
				error: '',
				data: action.payload,
			};
		case GET_ALL_SKILL_FAILURE:
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

export { getAllSkillReducer };
