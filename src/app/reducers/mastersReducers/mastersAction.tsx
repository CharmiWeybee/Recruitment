import {
  showToastMessageFailure,
  showToastMessageSuccess,
} from "../../helpers/helperFunction";
import {
  VIEW_DEGREE,
  VIEW_INTERVIEWER,
  VIEW_INTERVIEW_MODE,
  VIEW_INTERVIEW_TYPE,
  VIEW_MODE_OF_WORK,
  VIEW_RECRUITMENT_STATUS,
  VIEW_SKILL,
  VIEW_SKILL_TYPE,
  VIEW_SOURCE,
} from "../../helpers/routesConstant";
import {
  GET_ACTIVE_DEGREE_FAILURE,
  GET_ACTIVE_DEGREE_REQUEST,
  GET_ACTIVE_DEGREE_SUCCESS,
  GET_ACTIVE_INTERVIEWER_FAILURE,
  GET_ACTIVE_INTERVIEWER_REQUEST,
  GET_ACTIVE_INTERVIEWER_SUCCESS,
  GET_ACTIVE_INTERVIEW_MODE_FAILURE,
  GET_ACTIVE_INTERVIEW_MODE_REQUEST,
  GET_ACTIVE_INTERVIEW_MODE_SUCCESS,
  GET_ACTIVE_INTERVIEW_TYPE_FAILURE,
  GET_ACTIVE_INTERVIEW_TYPE_REQUEST,
  GET_ACTIVE_INTERVIEW_TYPE_SUCCESS,
  GET_ACTIVE_MODE_OF_WORK_FAILURE,
  GET_ACTIVE_MODE_OF_WORK_REQUEST,
  GET_ACTIVE_MODE_OF_WORK_SUCCESS,
  GET_ACTIVE_RECRUITMENT_STATUS_FAILURE,
  GET_ACTIVE_RECRUITMENT_STATUS_REQUEST,
  GET_ACTIVE_RECRUITMENT_STATUS_SUCCESS,
  GET_ACTIVE_SKILL_FAILURE,
  GET_ACTIVE_SKILL_REQUEST,
  GET_ACTIVE_SKILL_SUCCESS,
  GET_ACTIVE_SOURCE_FAILURE,
  GET_ACTIVE_SOURCE_REQUEST,
  GET_ACTIVE_SOURCE_SUCCESS,
  GET_ALL_DEGREE_FAILURE,
  GET_ALL_DEGREE_REQUEST,
  GET_ALL_DEGREE_SUCCESS,
  GET_ALL_INTERVIEWER_FAILURE,
  GET_ALL_INTERVIEWER_REQUEST,
  GET_ALL_INTERVIEWER_SUCCESS,
  GET_ALL_INTERVIEW_MODE_FAILURE,
  GET_ALL_INTERVIEW_MODE_REQUEST,
  GET_ALL_INTERVIEW_MODE_SUCCESS,
  GET_ALL_INTERVIEW_TYPE_FAILURE,
  GET_ALL_INTERVIEW_TYPE_REQUEST,
  GET_ALL_INTERVIEW_TYPE_SUCCESS,
  GET_ALL_MODE_OF_WORK_FAILURE,
  GET_ALL_MODE_OF_WORK_REQUEST,
  GET_ALL_MODE_OF_WORK_SUCCESS,
  GET_ALL_RECRUITMENT_STATUS_FAILURE,
  GET_ALL_RECRUITMENT_STATUS_REQUEST,
  GET_ALL_RECRUITMENT_STATUS_SUCCESS,
  GET_ALL_SKILL_FAILURE,
  GET_ALL_SKILL_REQUEST,
  GET_ALL_SKILL_SUCCESS,
  GET_ALL_SKILL_TYPE_FAILURE,
  GET_ALL_SKILL_TYPE_REQUEST,
  GET_ALL_SKILL_TYPE_SUCCESS,
  GET_ALL_SOURCE_FAILURE,
  GET_ALL_SOURCE_REQUEST,
  GET_ALL_SOURCE_SUCCESS,
  GET_DEGREE_BY_ID_FAILURE,
  GET_DEGREE_BY_ID_REQUEST,
  GET_DEGREE_BY_ID_SUCCESS,
  GET_INTERVIEWER_BY_ID_FAILURE,
  GET_INTERVIEWER_BY_ID_REQUEST,
  GET_INTERVIEWER_BY_ID_SUCCESS,
  GET_INTERVIEW_MODE_BY_ID_FAILURE,
  GET_INTERVIEW_MODE_BY_ID_REQUEST,
  GET_INTERVIEW_MODE_BY_ID_SUCCESS,
  GET_INTERVIEW_TYPE_BY_ID_FAILURE,
  GET_INTERVIEW_TYPE_BY_ID_REQUEST,
  GET_INTERVIEW_TYPE_BY_ID_SUCCESS,
  GET_MODE_OF_WORK_BY_ID_FAILURE,
  GET_MODE_OF_WORK_BY_ID_REQUEST,
  GET_MODE_OF_WORK_BY_ID_SUCCESS,
  GET_RECRUITMENT_STATUS_BY_ID_FAILURE,
  GET_RECRUITMENT_STATUS_BY_ID_REQUEST,
  GET_RECRUITMENT_STATUS_BY_ID_SUCCESS,
  GET_SKILL_BY_ID_FAILURE,
  GET_SKILL_BY_ID_REQUEST,
  GET_SKILL_BY_ID_SUCCESS,
  GET_SKILL_TYPE_BY_ID_FAILURE,
  GET_SKILL_TYPE_BY_ID_REQUEST,
  GET_SKILL_TYPE_BY_ID_SUCCESS,
  GET_SOURCE_BY_ID_FAILURE,
  GET_SOURCE_BY_ID_REQUEST,
  GET_SOURCE_BY_ID_SUCCESS,
  POST_DEGREE_FAILURE,
  POST_DEGREE_REQUEST,
  POST_DEGREE_SUCCESS,
  POST_INTERVIEWER_FAILURE,
  POST_INTERVIEWER_REQUEST,
  POST_INTERVIEWER_SUCCESS,
  POST_INTERVIEW_MODE_FAILURE,
  POST_INTERVIEW_MODE_REQUEST,
  POST_INTERVIEW_MODE_SUCCESS,
  POST_INTERVIEW_TYPE_FAILURE,
  POST_INTERVIEW_TYPE_REQUEST,
  POST_INTERVIEW_TYPE_SUCCESS,
  POST_MODE_OF_WORK_FAILURE,
  POST_MODE_OF_WORK_REQUEST,
  POST_MODE_OF_WORK_SUCCESS,
  POST_RECRUITMENT_STATUS_FAILURE,
  POST_RECRUITMENT_STATUS_REQUEST,
  POST_RECRUITMENT_STATUS_SUCCESS,
  POST_SKILL_FAILURE,
  POST_SKILL_REQUEST,
  POST_SKILL_SUCCESS,
  POST_SKILL_TYPE_FAILURE,
  POST_SKILL_TYPE_REQUEST,
  POST_SKILL_TYPE_SUCCESS,
  POST_SOURCE_FAILURE,
  POST_SOURCE_REQUEST,
  POST_SOURCE_SUCCESS,
  UPDATE_DEGREE_FAILURE,
  UPDATE_DEGREE_REQUEST,
  UPDATE_DEGREE_SUCCESS,
  UPDATE_INTERVIEWER_FAILURE,
  UPDATE_INTERVIEWER_REQUEST,
  UPDATE_INTERVIEWER_SUCCESS,
  UPDATE_INTERVIEW_MODE_FAILURE,
  UPDATE_INTERVIEW_MODE_REQUEST,
  UPDATE_INTERVIEW_MODE_SUCCESS,
  UPDATE_INTERVIEW_TYPE_FAILURE,
  UPDATE_INTERVIEW_TYPE_REQUEST,
  UPDATE_INTERVIEW_TYPE_SUCCESS,
  UPDATE_MODE_OF_WORK_FAILURE,
  UPDATE_MODE_OF_WORK_REQUEST,
  UPDATE_MODE_OF_WORK_SUCCESS,
  UPDATE_RECRUITMENT_STATUS_FAILURE,
  UPDATE_RECRUITMENT_STATUS_REQUEST,
  UPDATE_RECRUITMENT_STATUS_SUCCESS,
  UPDATE_SKILL_FAILURE,
  UPDATE_SKILL_REQUEST,
  UPDATE_SKILL_SUCCESS,
  UPDATE_SKILL_TYPE_FAILURE,
  UPDATE_SKILL_TYPE_REQUEST,
  UPDATE_SKILL_TYPE_SUCCESS,
  UPDATE_SOURCE_FAILURE,
  UPDATE_SOURCE_REQUEST,
  UPDATE_SOURCE_SUCCESS,
} from "../actionTypes";
import {
  getAllDegrees,
  getAllSource,
  postDegreeService,
  getDegreesById,
  updateDegreeService,
  getSourceById,
  postSourceService,
  updateSourceService,
  getAllSkillType,
  getSkillTypeById,
  postSkillTypeService,
  updateSkillTypeService,
  getAllSkill,
  getSkillById,
  postSkillService,
  updateSkillService,
  getAllRecruitmentStatus,
  getRecruitmentStatusById,
  postRecruitmentStatusService,
  updateRecruitmentStatusService,
  getModeOfWorkById,
  postModeOfWorkService,
  updateInterviewTypeService,
  getAllInterviewer,
  getInterviewerById,
  postInterviewerService,
  updateInterviewerService,
  getAllInterviewMode,
  getInterviewModeById,
  postInterviewModeService,
  updateInterviewModeService,
  getAllModeOfWork,
  updateModeOfWorkService,
  getAllInterviewType,
  getInterviewTypeById,
  postInterviewTypeService,
  getActiveDegrees,
  getActiveSkill,
  getActiveModeOfWork,
  getActiveSource,
  getActiveRecruitmentStatus,
  getActiveInterviewType,
  getActiveInterviewer,
  getActiveInterviewMode,
} from "./mastersService";
const request = (type: string) => {
  return { type: type };
};
const success = (type: string, data: object, master?: string) => {
  return { type: type, payload: data, master: master };
};
const failure = (type: string, err: any) => {
  return { type: type, payload: err };
};

export const fetchAllDegrees = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_DEGREE_REQUEST));
    return getAllDegrees().then(
      (result: any) => {
        dispatch(success(GET_ALL_DEGREE_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_DEGREE_FAILURE, error.message));
      }
    );
  };
};
export const fetchActiveDegrees = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ACTIVE_DEGREE_REQUEST));
    return getActiveDegrees().then(
      (result: any) => {
        dispatch(success(GET_ACTIVE_DEGREE_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ACTIVE_DEGREE_FAILURE, error.message));
      }
    );
  };
};
export const fetchDegreesById = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_DEGREE_BY_ID_REQUEST));
    return getDegreesById(id).then(
      (result: any) => {
        dispatch(success(GET_DEGREE_BY_ID_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_DEGREE_BY_ID_FAILURE, error.message));
      }
    );
  };
};
export const postDegrees = (formData: object, callback: Function) => {
  return async (dispatch: any) => {
    dispatch(request(POST_DEGREE_REQUEST));

    await postDegreeService(formData).then(
      (result: any) => {
        dispatch(success(POST_DEGREE_SUCCESS, result));
        showToastMessageSuccess("Degree added successfully");
        callback(VIEW_DEGREE);
      },
      (error: any) => {
        dispatch(failure(POST_DEGREE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const updateDegrees = (
  fromData: object,
  callback: Function,
  id: number
) => {
  return async (dispatch: any) => {
    dispatch(request(UPDATE_DEGREE_REQUEST));

    await updateDegreeService(fromData, id).then(
      (result: any) => {
        dispatch(success(UPDATE_DEGREE_SUCCESS, result));
        showToastMessageSuccess("Degree updated successfully");
        callback(VIEW_DEGREE);
      },
      (error: any) => {
        dispatch(failure(UPDATE_DEGREE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const fetchAllSource = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_SOURCE_REQUEST));
    return getAllSource().then(
      (result: any) => {
        dispatch(success(GET_ALL_SOURCE_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_SOURCE_FAILURE, error.message));
      }
    );
  };
};
export const fetchActiveSource = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ACTIVE_SOURCE_REQUEST));
    return getActiveSource().then(
      (result: any) => {
        dispatch(success(GET_ACTIVE_SOURCE_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ACTIVE_SOURCE_FAILURE, error.message));
      }
    );
  };
};
export const fetchSourceById = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_SOURCE_BY_ID_REQUEST));
    return getSourceById(id).then(
      (result: any) => {
        dispatch(success(GET_SOURCE_BY_ID_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_SOURCE_BY_ID_FAILURE, error.message));
      }
    );
  };
};
export const postSource = (formData: object, callback: Function) => {
  return async (dispatch: any) => {
    dispatch(request(POST_SOURCE_REQUEST));

    await postSourceService(formData).then(
      (result: any) => {
        dispatch(success(POST_SOURCE_SUCCESS, result));
        showToastMessageSuccess("Source added successfully");
        callback(VIEW_SOURCE);
      },
      (error: any) => {
        dispatch(failure(POST_SOURCE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const updateSource = (
  fromData: object,
  callback: Function,
  id: number
) => {
  return async (dispatch: any) => {
    dispatch(request(UPDATE_SOURCE_REQUEST));

    await updateSourceService(fromData, id).then(
      (result: any) => {
        dispatch(success(UPDATE_SOURCE_SUCCESS, result));
        showToastMessageSuccess("Source updated successfully");
        callback(VIEW_SOURCE);
      },
      (error: any) => {
        dispatch(failure(UPDATE_SOURCE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const fetchAllSkillType = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_SKILL_TYPE_REQUEST));
    return getAllSkillType().then(
      (result: any) => {
        dispatch(success(GET_ALL_SKILL_TYPE_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_SKILL_TYPE_FAILURE, error.message));
      }
    );
  };
};
export const fetchSkillTypeById = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_SKILL_TYPE_BY_ID_REQUEST));
    return getSkillTypeById(id).then(
      (result: any) => {
        dispatch(success(GET_SKILL_TYPE_BY_ID_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_SKILL_TYPE_BY_ID_FAILURE, error.message));
      }
    );
  };
};
export const postSkillType = (formData: object, callback: Function) => {
  return async (dispatch: any) => {
    dispatch(request(POST_SKILL_TYPE_REQUEST));

    await postSkillTypeService(formData).then(
      (result: any) => {
        dispatch(success(POST_SKILL_TYPE_SUCCESS, result));
        showToastMessageSuccess("Skill Type added successfully");
        callback(VIEW_SKILL_TYPE);
      },
      (error: any) => {
        dispatch(failure(POST_SKILL_TYPE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const updateSkillType = (
  fromData: object,
  callback: Function,
  id: number
) => {
  return async (dispatch: any) => {
    dispatch(request(UPDATE_SKILL_TYPE_REQUEST));

    await updateSkillTypeService(fromData, id).then(
      (result: any) => {
        dispatch(success(UPDATE_SKILL_TYPE_SUCCESS, result));
        showToastMessageSuccess("Skill Type updated successfully");
        callback(VIEW_SKILL_TYPE);
      },
      (error: any) => {
        dispatch(failure(UPDATE_SKILL_TYPE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const fetchAllSkill = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_SKILL_REQUEST));
    return getAllSkill().then(
      (result: any) => {
        dispatch(success(GET_ALL_SKILL_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_SKILL_FAILURE, error.message));
      }
    );
  };
};
export const fetchActiveSkill = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ACTIVE_SKILL_REQUEST));
    return getActiveSkill().then(
      (result: any) => {
        dispatch(success(GET_ACTIVE_SKILL_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ACTIVE_SKILL_FAILURE, error.message));
      }
    );
  };
};
export const fetchSkillById = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_SKILL_BY_ID_REQUEST));
    return getSkillById(id).then(
      (result: any) => {
        dispatch(success(GET_SKILL_BY_ID_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_SKILL_BY_ID_FAILURE, error.message));
      }
    );
  };
};
export const postSkill = (formData: object, callback: Function) => {
  return async (dispatch: any) => {
    dispatch(request(POST_SKILL_REQUEST));

    await postSkillService(formData).then(
      (result: any) => {
        dispatch(success(POST_SKILL_SUCCESS, result));
        showToastMessageSuccess("Skill added successfully");
        callback(VIEW_SKILL);
      },
      (error: any) => {
        dispatch(failure(POST_SKILL_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const updateSkill = (
  fromData: object,
  callback: Function,
  id: number
) => {
  return async (dispatch: any) => {
    dispatch(request(UPDATE_SKILL_REQUEST));

    await updateSkillService(fromData, id).then(
      (result: any) => {
        dispatch(success(UPDATE_SKILL_SUCCESS, result));
        showToastMessageSuccess("Skill updated successfully");
        callback(VIEW_SKILL);
      },
      (error: any) => {
        dispatch(failure(UPDATE_SKILL_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const fetchAllRecruitmentStatus = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_RECRUITMENT_STATUS_REQUEST));
    return getAllRecruitmentStatus().then(
      (result: any) => {
        dispatch(success(GET_ALL_RECRUITMENT_STATUS_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_RECRUITMENT_STATUS_FAILURE, error.message));
      }
    );
  };
};

export const fetchActiveRecruitmentStatus = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ACTIVE_RECRUITMENT_STATUS_REQUEST));
    return getActiveRecruitmentStatus().then(
      (result: any) => {
        dispatch(
          success(GET_ACTIVE_RECRUITMENT_STATUS_SUCCESS, result.data.data)
        );
      },
      (error: any) => {
        dispatch(failure(GET_ACTIVE_RECRUITMENT_STATUS_FAILURE, error.message));
      }
    );
  };
};
export const fetchRecruitmentStatusById = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_RECRUITMENT_STATUS_BY_ID_REQUEST));
    return getRecruitmentStatusById(id).then(
      (result: any) => {
        dispatch(
          success(GET_RECRUITMENT_STATUS_BY_ID_SUCCESS, result.data.data)
        );
      },
      (error: any) => {
        dispatch(failure(GET_RECRUITMENT_STATUS_BY_ID_FAILURE, error.message));
      }
    );
  };
};
export const postRecruitmentStatus = (formData: object, callback: Function) => {
  return async (dispatch: any) => {
    dispatch(request(POST_RECRUITMENT_STATUS_REQUEST));

    await postRecruitmentStatusService(formData).then(
      (result: any) => {
        dispatch(success(POST_RECRUITMENT_STATUS_SUCCESS, result));
        showToastMessageSuccess("Recruitment Status added successfully");
        callback(VIEW_RECRUITMENT_STATUS);
      },
      (error: any) => {
        dispatch(failure(POST_RECRUITMENT_STATUS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const updateRecruitmentStatus = (
  fromData: object,
  callback: Function,
  id: number
) => {
  return async (dispatch: any) => {
    dispatch(request(UPDATE_RECRUITMENT_STATUS_REQUEST));

    await updateRecruitmentStatusService(fromData, id).then(
      (result: any) => {
        dispatch(success(UPDATE_RECRUITMENT_STATUS_SUCCESS, result));
        showToastMessageSuccess("Recruitment Status updated successfully");
        callback(VIEW_RECRUITMENT_STATUS);
      },
      (error: any) => {
        dispatch(failure(UPDATE_RECRUITMENT_STATUS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const fetchAllModeofWork = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_MODE_OF_WORK_REQUEST));
    return getAllModeOfWork().then(
      (result: any) => {
        dispatch(success(GET_ALL_MODE_OF_WORK_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_MODE_OF_WORK_FAILURE, error.message));
      }
    );
  };
};

export const fetchActiveModeofWork = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ACTIVE_MODE_OF_WORK_REQUEST));
    return getActiveModeOfWork().then(
      (result: any) => {
        dispatch(success(GET_ACTIVE_MODE_OF_WORK_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ACTIVE_MODE_OF_WORK_FAILURE, error.message));
      }
    );
  };
};

export const fetchModeofWorkById = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_MODE_OF_WORK_BY_ID_REQUEST));
    return getModeOfWorkById(id).then(
      (result: any) => {
        dispatch(success(GET_MODE_OF_WORK_BY_ID_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_MODE_OF_WORK_BY_ID_FAILURE, error.message));
      }
    );
  };
};
export const postModeofWork = (formData: object, callback: Function) => {
  return async (dispatch: any) => {
    dispatch(request(POST_MODE_OF_WORK_REQUEST));

    await postModeOfWorkService(formData).then(
      (result: any) => {
        dispatch(success(POST_MODE_OF_WORK_SUCCESS, result));
        showToastMessageSuccess("Mode of Work added successfully");
        callback(VIEW_MODE_OF_WORK);
      },
      (error: any) => {
        dispatch(failure(POST_MODE_OF_WORK_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const updateModeofWork = (
  fromData: object,
  callback: Function,
  id: number
) => {
  return async (dispatch: any) => {
    dispatch(request(UPDATE_MODE_OF_WORK_REQUEST));

    await updateModeOfWorkService(fromData, id).then(
      (result: any) => {
        dispatch(success(UPDATE_MODE_OF_WORK_SUCCESS, result));
        showToastMessageSuccess("Interview Type updated successfully");
        callback(VIEW_MODE_OF_WORK);
      },
      (error: any) => {
        dispatch(failure(UPDATE_MODE_OF_WORK_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const fetchAllInterviewType = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_INTERVIEW_TYPE_REQUEST));
    return getAllInterviewType().then(
      (result: any) => {
        dispatch(success(GET_ALL_INTERVIEW_TYPE_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_INTERVIEW_TYPE_FAILURE, error.message));
      }
    );
  };
};

export const fetchActiveInterviewType = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ACTIVE_INTERVIEW_TYPE_REQUEST));
    return getActiveInterviewType().then(
      (result: any) => {
        dispatch(success(GET_ACTIVE_INTERVIEW_TYPE_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ACTIVE_INTERVIEW_TYPE_FAILURE, error.message));
      }
    );
  };
};

export const fetchInterviewTypeById = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_INTERVIEW_TYPE_BY_ID_REQUEST));
    return getInterviewTypeById(id).then(
      (result: any) => {
        dispatch(success(GET_INTERVIEW_TYPE_BY_ID_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_INTERVIEW_TYPE_BY_ID_FAILURE, error.message));
      }
    );
  };
};
export const postInterviewType = (formData: object, callback: Function) => {
  return async (dispatch: any) => {
    dispatch(request(POST_INTERVIEW_TYPE_REQUEST));

    await postInterviewTypeService(formData).then(
      (result: any) => {
        dispatch(success(POST_INTERVIEW_TYPE_SUCCESS, result));
        showToastMessageSuccess("Interview Type added successfully");
        callback(VIEW_INTERVIEW_TYPE);
      },
      (error: any) => {
        dispatch(failure(POST_INTERVIEW_TYPE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const updateInterviewType = (
  fromData: object,
  callback: Function,
  id: number
) => {
  return async (dispatch: any) => {
    dispatch(request(UPDATE_INTERVIEW_TYPE_REQUEST));

    await updateInterviewTypeService(fromData, id).then(
      (result: any) => {
        dispatch(success(UPDATE_INTERVIEW_TYPE_SUCCESS, result));
        showToastMessageSuccess("Interview Type updated successfully");
        callback(VIEW_INTERVIEW_TYPE);
      },
      (error: any) => {
        dispatch(failure(UPDATE_INTERVIEW_TYPE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const fetchAllInterviewer = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_INTERVIEWER_REQUEST));
    return getAllInterviewer().then(
      (result: any) => {
        dispatch(success(GET_ALL_INTERVIEWER_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_INTERVIEWER_FAILURE, error.message));
      }
    );
  };
};

export const fetchActiveInterviewer = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ACTIVE_INTERVIEWER_REQUEST));
    return getActiveInterviewer().then(
      (result: any) => {
        dispatch(success(GET_ACTIVE_INTERVIEWER_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ACTIVE_INTERVIEWER_FAILURE, error.message));
      }
    );
  };
};
export const fetchInterviewerById = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_INTERVIEWER_BY_ID_REQUEST));
    return getInterviewerById(id).then(
      (result: any) => {
        dispatch(success(GET_INTERVIEWER_BY_ID_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_INTERVIEWER_BY_ID_FAILURE, error.message));
      }
    );
  };
};
export const postInterviewer = (formData: object, callback: Function) => {
  return async (dispatch: any) => {
    dispatch(request(POST_INTERVIEWER_REQUEST));

    await postInterviewerService(formData).then(
      (result: any) => {
        dispatch(success(POST_INTERVIEWER_SUCCESS, result));
        showToastMessageSuccess("Interviewer added successfully");
        callback(VIEW_INTERVIEWER);
      },
      (error: any) => {
        dispatch(failure(POST_INTERVIEWER_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const updateInterviewer = (
  fromData: object,
  callback: Function,
  id: number
) => {
  return async (dispatch: any) => {
    dispatch(request(UPDATE_INTERVIEWER_REQUEST));

    await updateInterviewerService(fromData, id).then(
      (result: any) => {
        dispatch(success(UPDATE_INTERVIEWER_SUCCESS, result));
        showToastMessageSuccess("Interviewer updated successfully");
        callback(VIEW_INTERVIEWER);
      },
      (error: any) => {
        dispatch(failure(UPDATE_INTERVIEWER_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const fetchAllInterviewMode = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_INTERVIEW_MODE_REQUEST));
    return getAllInterviewMode().then(
      (result: any) => {
        dispatch(success(GET_ALL_INTERVIEW_MODE_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_INTERVIEW_MODE_FAILURE, error.message));
      }
    );
  };
};

export const fetchActiveInterviewMode = () => {
  return (dispatch: any) => {
    dispatch(request(GET_ACTIVE_INTERVIEW_MODE_REQUEST));
    return getActiveInterviewMode().then(
      (result: any) => {
        dispatch(success(GET_ACTIVE_INTERVIEW_MODE_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_ACTIVE_INTERVIEW_MODE_FAILURE, error.message));
      }
    );
  };
};
export const fetchInterviewModeById = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_INTERVIEW_MODE_BY_ID_REQUEST));
    return getInterviewModeById(id).then(
      (result: any) => {
        dispatch(success(GET_INTERVIEW_MODE_BY_ID_SUCCESS, result.data.data));
      },
      (error: any) => {
        dispatch(failure(GET_INTERVIEW_MODE_BY_ID_FAILURE, error.message));
      }
    );
  };
};
export const postInterviewMode = (formData: object, callback: Function) => {
  return async (dispatch: any) => {
    dispatch(request(POST_INTERVIEW_MODE_REQUEST));

    await postInterviewModeService(formData).then(
      (result: any) => {
        dispatch(success(POST_INTERVIEW_MODE_SUCCESS, result));
        showToastMessageSuccess("Interview Mode added successfully");
        callback(VIEW_INTERVIEW_MODE);
      },
      (error: any) => {
        dispatch(failure(POST_INTERVIEW_MODE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const updateInterviewMode = (
  fromData: object,
  callback: Function,
  id: number
) => {
  return async (dispatch: any) => {
    dispatch(request(UPDATE_INTERVIEW_MODE_REQUEST));

    await updateInterviewModeService(fromData, id).then(
      (result: any) => {
        dispatch(success(UPDATE_INTERVIEW_MODE_SUCCESS, result));
        showToastMessageSuccess("Interview Mode updated successfully");
        callback(VIEW_INTERVIEW_MODE);
      },
      (error: any) => {
        dispatch(failure(UPDATE_INTERVIEW_MODE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
// -----------------------------------------------------------------------
