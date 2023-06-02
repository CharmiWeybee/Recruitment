import { getInterviewByIdReducer } from "./getInterviewsByIdReducer";
import { getInterviewByCandidateIdReducer } from "./getInterviewByCandidateIdReducer";
import { viewInterviewReducer } from "./viewInterviewReducer";
import { addInterviewReducer } from "./addInterviewReducer";

const InterviewReducer = {
  getInterviewByIdReducer,
  getInterviewByCandidateIdReducer,
  viewInterviewReducer,
  addInterviewReducer,
};

export default InterviewReducer;
