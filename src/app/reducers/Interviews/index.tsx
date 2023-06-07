import { getInterviewByIdReducer } from './getInterviewsByIdReducer';
import { getInterviewByCandidateIdReducer } from './getInterviewByCandidateIdReducer';
import { viewInterviewReducer } from './viewInterviewReducer';
import { addInterviewReducer } from './addInterviewReducer';
import { getActiveCandidateInterviewReducer } from './getActiveCandidateInterviewReducer';
import { updateInterviewReducer } from './updateInterviewReducer';

const InterviewReducer = {
	getInterviewByIdReducer,
	getInterviewByCandidateIdReducer,
	viewInterviewReducer,
	addInterviewReducer,
	updateInterviewReducer,
	getActiveCandidateInterviewReducer,
};

export default InterviewReducer;
