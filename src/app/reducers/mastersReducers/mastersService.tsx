import { axiosInstance } from "../../helpers/apiRequest";
import {
  ACTIVE_DEGREE,
  ACTIVE_INTERVIEWER,
  ACTIVE_INTERVIEW_MODE,
  ACTIVE_INTERVIEW_TYPE,
  ACTIVE_MODE_OF_WORK,
  ACTIVE_RECRUITMENT_STATUS,
  ACTIVE_SKILL,
  ACTIVE_SOURCE,
  DEGREE,
  INTERVIEWER,
  INTERVIEW_MODE,
  INTERVIEW_TYPE,
  MODE_OF_WORK,
  RECRUITMENT_STATUS,
  SKILL,
  SKILL_TYPE,
  SOURCE,
} from "../../helpers/config";

export const getAllDegrees = async () => {
  const res = await axiosInstance.get(`${DEGREE}`);
  return res;
};
export const getActiveDegrees = async () => {
  const res = await axiosInstance.get(`${ACTIVE_DEGREE}`);
  return res;
};
export const getDegreesById = async (id: any) => {
  const res = await axiosInstance.get(`${DEGREE}/${id}`);
  return res;
};
export const postDegreeService = async (formData: any) => {
  return axiosInstance({
    method: "post",
    url: DEGREE,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const updateDegreeService = async (formData: any, id: number) => {
  return axiosInstance.put(`${DEGREE}/${id}`, formData);
};

export const getAllSource = async () => {
  const res = await axiosInstance.get(`${SOURCE}`);
  return res;
};
export const getActiveSource = async () => {
  const res = await axiosInstance.get(`${ACTIVE_SOURCE}`);
  return res;
};
export const getSourceById = async (id: any) => {
  const res = await axiosInstance.get(`${SOURCE}/${id}`);
  return res;
};
export const postSourceService = async (formData: any) => {
  return axiosInstance({
    method: "post",
    url: SOURCE,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const updateSourceService = async (formData: any, id: number) => {
  return axiosInstance.put(`${SOURCE}/${id}`, formData);
};

export const getAllSkillType = async () => {
  const res = await axiosInstance.get(`${SKILL_TYPE}`);
  return res;
};
export const getSkillTypeById = async (id: any) => {
  const res = await axiosInstance.get(`${SKILL_TYPE}/${id}`);
  return res;
};
export const postSkillTypeService = async (formData: any) => {
  return axiosInstance({
    method: "post",
    url: SKILL_TYPE,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const updateSkillTypeService = async (formData: any, id: number) => {
  return axiosInstance.put(`${SKILL_TYPE}/${id}`, formData);
};

export const getAllSkill = async () => {
  const res = await axiosInstance.get(`${SKILL}`);
  return res;
};
export const getActiveSkill = async () => {
  const res = await axiosInstance.get(`${ACTIVE_SKILL}`);
  return res;
};
export const getSkillById = async (id: any) => {
  const res = await axiosInstance.get(`${SKILL}/${id}`);
  return res;
};
export const postSkillService = async (formData: any) => {
  return axiosInstance({
    method: "post",
    url: SKILL,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const updateSkillService = async (formData: any, id: number) => {
  return axiosInstance.put(`${SKILL}/${id}`, formData);
};

export const getAllRecruitmentStatus = async () => {
  const res = await axiosInstance.get(`${RECRUITMENT_STATUS}`);
  return res;
};

export const getActiveRecruitmentStatus = async () => {
  const res = await axiosInstance.get(`${ACTIVE_RECRUITMENT_STATUS}`);
  return res;
};
export const getRecruitmentStatusById = async (id: any) => {
  const res = await axiosInstance.get(`${RECRUITMENT_STATUS}/${id}`);
  return res;
};
export const postRecruitmentStatusService = async (formData: any) => {
  return axiosInstance({
    method: "post",
    url: RECRUITMENT_STATUS,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const updateRecruitmentStatusService = async (
  formData: any,
  id: number
) => {
  return axiosInstance.put(`${RECRUITMENT_STATUS}/${id}`, formData);
};

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

export const getAllModeOfWork = async () => {
  const res = await axiosInstance.get(`${MODE_OF_WORK}`);
  return res;
};
export const getActiveModeOfWork = async () => {
  const res = await axiosInstance.get(`${ACTIVE_MODE_OF_WORK}`);
  return res;
};
export const getModeOfWorkById = async (id: any) => {
  const res = await axiosInstance.get(`${MODE_OF_WORK}/${id}`);
  return res;
};
export const postModeOfWorkService = async (formData: any) => {
  return axiosInstance({
    method: "post",
    url: MODE_OF_WORK,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const updateModeOfWorkService = async (formData: any, id: number) => {
  return axiosInstance.put(`${MODE_OF_WORK}/${id}`, formData);
};

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

export const getAllInterviewType = async () => {
  const res = await axiosInstance.get(`${INTERVIEW_TYPE}`);
  return res;
};
export const getActiveInterviewType = async () => {
  const res = await axiosInstance.get(`${ACTIVE_INTERVIEW_TYPE}`);
  return res;
};
export const getInterviewTypeById = async (id: any) => {
  const res = await axiosInstance.get(`${INTERVIEW_TYPE}/${id}`);
  return res;
};
export const postInterviewTypeService = async (formData: any) => {
  return axiosInstance({
    method: "post",
    url: INTERVIEW_TYPE,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const updateInterviewTypeService = async (formData: any, id: number) => {
  return axiosInstance.put(`${INTERVIEW_TYPE}/${id}`, formData);
};

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

export const getAllInterviewer = async () => {
  const res = await axiosInstance.get(`${INTERVIEWER}`);
  return res;
};

export const getActiveInterviewer = async () => {
  const res = await axiosInstance.get(`${ACTIVE_INTERVIEWER}`);
  return res;
};
export const getInterviewerById = async (id: any) => {
  const res = await axiosInstance.get(`${INTERVIEWER}/${id}`);
  return res;
};
export const postInterviewerService = async (formData: any) => {
  return axiosInstance({
    method: "post",
    url: INTERVIEWER,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const updateInterviewerService = async (formData: any, id: number) => {
  return axiosInstance.put(`${INTERVIEWER}/${id}`, formData);
};

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

export const getAllInterviewMode = async () => {
  const res = await axiosInstance.get(`${INTERVIEW_MODE}`);
  return res;
};

export const getActiveInterviewMode = async () => {
  const res = await axiosInstance.get(`${ACTIVE_INTERVIEW_MODE}`);
  return res;
};
export const getInterviewModeById = async (id: any) => {
  const res = await axiosInstance.get(`${INTERVIEW_MODE}/${id}`);
  return res;
};
export const postInterviewModeService = async (formData: any) => {
  return axiosInstance({
    method: "post",
    url: INTERVIEW_MODE,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const updateInterviewModeService = async (formData: any, id: number) => {
  return axiosInstance.put(`${INTERVIEW_MODE}/${id}`, formData);
};

// -------------------------------------------------------------------------------------------
