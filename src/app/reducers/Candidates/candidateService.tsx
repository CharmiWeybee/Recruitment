/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { axiosInstance } from '../../helpers/apiRequest';
import { CANDIDATE, CANDIDATE_REPORT } from '../../helpers/config';
import {
	getSearchQueryString,
	searchparam,
} from '../../helpers/helperFunction';

export const getActiveCandidates = async () => {
	const res = await axiosInstance.get(`${CANDIDATE}`);
	return res;
};

export const getAllCandidates = async (
	searchObj: searchparam,
	queryParams?: any
) => {
	const queryString = getSearchQueryString(searchObj);
	const res = await axiosInstance.get(`${CANDIDATE_REPORT}?${queryString}`);
	return res;
};

export const getCandidateById = async (id: any) => {
	const res = await axiosInstance.get(`${CANDIDATE_REPORT}/${id}`);
	return res;
};

export const addCandidateService = async (formData: any) => {
	return axiosInstance({
		method: 'post',
		url: CANDIDATE_REPORT,
		data: formData,
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};

export const updateCandidateService = async (formData: any, id: number) => {
	return axiosInstance({
		method: 'post',
		url: `${CANDIDATE_REPORT}/update/${id}`,
		data: formData,
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};
