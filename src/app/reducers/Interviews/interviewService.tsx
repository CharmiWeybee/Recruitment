/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { axiosInstance } from '../../helpers/apiRequest';
import {
	ACTIVE_CANDIDATE_INTERVIEW,
	INTERVIEW,
	INTERVIEW_BY_ID,
} from '../../helpers/config';
import {
	getSearchQueryString,
	searchparam,
} from '../../helpers/helperFunction';

export const addInterviewService = async (formData: any) => {
	return axiosInstance({
		method: 'post',
		url: INTERVIEW,
		data: formData,
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};

export const viewInterviewService = async () => {
	return axiosInstance.get(`${INTERVIEW}`);
};

export const updateInterviewService = async (formData: any, id: number) => {
	return axiosInstance({
		method: 'put',
		url: `${INTERVIEW}/${id}`,
		data: formData,
	});
};

export const getInterviewsById = async (id: any) => {
	const res = await axiosInstance.get(`${INTERVIEW_BY_ID}/${id}`);
	return res;
};

export const getInterviewsByCandidateId = async (id: any) => {
	const res = await axiosInstance.get(`${INTERVIEW}/${id}`);
	return res;
};

export const getActiveCandidateInterview = async (
	searchObj: searchparam,
	queryParams?: any
) => {
	const queryString = getSearchQueryString(searchObj);
	const res = await axiosInstance.get(
		`${ACTIVE_CANDIDATE_INTERVIEW}?${queryString}`
	);
	return res;
};
