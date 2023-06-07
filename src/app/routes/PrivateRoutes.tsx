import { Route, Routes } from 'react-router-dom';
import { MasterLayout } from '../../_metronic/layout/MasterLayout';
import { DASHBOARD } from '../helpers/routesConstant';
import Dashboard from '../components/pages/Dashboard/Dashboard';
import ViewDegree from '../components/pages/masters/Degree/ViewDegree';
import AddDegree from '../components/pages/masters/Degree/AddDegree';
import ViewSource from '../components/pages/masters/Source/ViewSource';
import AddSource from '../components/pages/masters/Source/AddSource';
import ViewSkillType from '../components/pages/masters/SkillTypes/ViewSkillType';
import AddSkillType from '../components/pages/masters/SkillTypes/AddSkillType';
import ViewSkill from '../components/pages/masters/Skill/ViewSkill';
import AddSkill from '../components/pages/masters/Skill/AddSkill';
import ViewRecruitmentStatus from '../components/pages/masters/RecruitmentStatus/ViewRecruitmentStatus';
import AddRecruitmentStatus from '../components/pages/masters/RecruitmentStatus/AddRecruitmentStatus';
import ViewModeOfWork from '../components/pages/masters/ModeOfWork/ViewModeOfWork';
import AddModeofWork from '../components/pages/masters/ModeOfWork/AddModeofWork';
import ViewInterviewType from '../components/pages/masters/InterviewType/ViewInterviewType';
import AddInterviewType from '../components/pages/masters/InterviewType/AddInterviewType';
import ViewInterviewer from '../components/pages/masters/Interviewer/ViewInterviewer';
import AddInterviewer from '../components/pages/masters/Interviewer/AddInterviewer';
import ViewInterviewMode from '../components/pages/masters/InterviewMode/ViewInterviewMode';
import AddInterviewMode from '../components/pages/masters/InterviewMode/AddInterviewMode';
import AddCandidate from '../components/pages/candidate/AddCandidate';
import ViewCandidate from '../components/pages/candidate/ViewCandidate';
import CandidateReport from '../components/pages/candidate/CandidateReport';
import AddInterview from '../components/pages/Interviews/AddInterview';
import CandidateDetail from '../components/pages/candidate/CandidateDetail';
import InterviewReport from '../components/pages/Interviews/InterviewReport';

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MasterLayout />}>
				<Route path={DASHBOARD} element={<Dashboard />} />
				<Route path="/master/degree" element={<ViewDegree />} />
				<Route path="/master/add-degree" element={<AddDegree />} />
				<Route path="/master/add-degree/:id" element={<AddDegree />} />

				<Route path="/master/source" element={<ViewSource />} />
				<Route path="/master/add-source" element={<AddSource />} />
				<Route path="/master/add-source/:id" element={<AddSource />} />

				<Route path="/master/skill-type" element={<ViewSkillType />} />
				<Route path="/master/add-skill-type" element={<AddSkillType />} />
				<Route path="/master/add-skill-type/:id" element={<AddSkillType />} />

				<Route path="/master/skills" element={<ViewSkill />} />
				<Route path="/master/add-skill" element={<AddSkill />} />
				<Route path="/master/add-skill/:id" element={<AddSkill />} />

				<Route
					path="/master/recruitment-status"
					element={<ViewRecruitmentStatus />}
				/>
				<Route
					path="/master/add-recruitment-status"
					element={<AddRecruitmentStatus />}
				/>
				<Route
					path="/master/add-recruitment-status/:id"
					element={<AddRecruitmentStatus />}
				/>

				<Route path="/master/mode-of-work" element={<ViewModeOfWork />} />
				<Route path="/master/add-mode-of-work" element={<AddModeofWork />} />
				<Route
					path="/master/add-mode-of-work/:id"
					element={<AddModeofWork />}
				/>

				<Route path="/master/interview-type" element={<ViewInterviewType />} />
				<Route
					path="/master/add-interview-type"
					element={<AddInterviewType />}
				/>
				<Route
					path="/master/add-interview-type/:id"
					element={<AddInterviewType />}
				/>

				<Route path="/master/interviewer" element={<ViewInterviewer />} />
				<Route path="/master/add-interviewer" element={<AddInterviewer />} />
				<Route
					path="/master/add-interviewer/:id"
					element={<AddInterviewer />}
				/>
				<Route path="/master/interview-mode" element={<ViewInterviewMode />} />
				<Route
					path="/master/add-interview-mode"
					element={<AddInterviewMode />}
				/>
				<Route
					path="/master/add-interview-mode/:id"
					element={<AddInterviewMode />}
				/>
				<Route path="/master/add-candidate" element={<AddCandidate />} />
				<Route path="/master/add-candidate/:id" element={<AddCandidate />} />
				<Route path="/master/candidate" element={<ViewCandidate />} />
				<Route path="/master/candidate-report" element={<CandidateReport />} />
				<Route path="/master/interview-report" element={<InterviewReport />} />
				<Route
					path={'/master/add-interview/:candidateId'}
					element={<AddInterview />}
				/>
				<Route
					path={'/master/add-interview/:candidateId/:interviewId'}
					element={<AddInterview />}
				/>
				<Route
					path={'/master/candidate-detail/:candidateId'}
					element={<CandidateDetail />}
				/>
			</Route>
		</Routes>
	);
};

export { PrivateRoutes };
