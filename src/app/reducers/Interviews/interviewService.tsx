import { axiosInstance } from "../../helpers/apiRequest";
import { INTERVIEW, INTERVIEW_BY_ID } from "../../helpers/config";

export const addInterviewService = async (formData: any) => {
  return axiosInstance({
    method: "post",
    url: INTERVIEW,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const viewInterviewService = async () => {
  return axiosInstance.get(`${INTERVIEW}`);
};

export const updateInterviewService = async (formData: any, id: number) => {
  return axiosInstance({
    method: "put",
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
