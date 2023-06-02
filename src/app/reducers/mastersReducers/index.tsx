import { getAllDegreeReducer } from "../Degree/getAllDegreesReducer";
import { getDegreeByIdReducer } from "../Degree/getDegreeByIdReducer";
import { getAllSourceReducer } from "../Source/getAllSourceReducer";
import { getSourceByIdReducer } from "../Source/getSourceByIdReducer";
import { getAllSkillTypeReducer } from "../SkillType/getAllSkillTypeReducer";
import { getSkillTypeByIdReducer } from "../SkillType/getSkillTypeByIdReducer";
import { getAllSkillReducer } from "../Skill/getAllSkillReducer";
import { getSkillByIdReducer } from "../Skill/getSkillByIdReducer";
import { getAllModeofWorkReducer } from "../ModeofWork/getAllModeofWorkReducer";
import { getModeofWorkByIdReducer } from "../ModeofWork/getModeofWorkByIdReducer";
import { getAllRecruitmentStatusReducer } from "../RecruitmentStatus/getAllRecruitmentStatusReducer";
import { getRecruitmentStatusByIdReducer } from "../RecruitmentStatus/getRecruitmentStatusByIdReducer";
import { getAllInterviewTypeReducer } from "../InterviewType/getAllInterviewTypeReducer";
import { getInterviewTypeByIdReducer } from "../InterviewType/getInterviewTypeByIdReducer";
import { getAllInterviewerReducer } from "../Interviewer/getAllInterviewerReducer";
import { getInterviewerByIdReducer } from "../Interviewer/getInterviewerByIdReducer";
import { getAllInterviewModeReducer } from "../InterviewMode/getAllInterviewModeReducer";
import { getInterviewModeByIdReducer } from "../InterviewMode/getInterviewModeByIdReducer";
import { getActiveDegreeReducer } from "../Degree/getActiveDegreesReducer";
import { getActiveSkillReducer } from "../Skill/getActiveSkillReducer";
import { getActiveModeofWorkReducer } from "../ModeofWork/getActiveModeofWorkReducer";
import { getActiveSourceReducer } from "../Source/getActiveSourceReducer";
import { getActiveRecruitmentStatusReducer } from "../RecruitmentStatus/getActiveRecruitmentStatusReducer";
import { getActiveInterviewTypeReducer } from "../InterviewType/getActiveInterviewTypeReducer";
import { getActiveInterviewModeReducer } from "../InterviewMode/getActiveInterviewModeReducer";
import { getActiveInterviewerReducer } from "../Interviewer/getActiveInterviewerReducer";

const masterReducers = {
  getAllDegreeReducer,
  getDegreeByIdReducer,
  getAllSourceReducer,
  getSourceByIdReducer,
  getAllSkillTypeReducer,
  getSkillTypeByIdReducer,
  getAllSkillReducer,
  getSkillByIdReducer,
  getAllModeofWorkReducer,
  getModeofWorkByIdReducer,
  getAllRecruitmentStatusReducer,
  getRecruitmentStatusByIdReducer,
  getAllInterviewTypeReducer,
  getInterviewTypeByIdReducer,
  getAllInterviewerReducer,
  getInterviewerByIdReducer,
  getAllInterviewModeReducer,
  getInterviewModeByIdReducer,
  getActiveDegreeReducer,
  getActiveSkillReducer,
  getActiveModeofWorkReducer,
  getActiveSourceReducer,
  getActiveRecruitmentStatusReducer,
  getActiveInterviewTypeReducer,
  getActiveInterviewModeReducer,
  getActiveInterviewerReducer,
};

export default masterReducers;
