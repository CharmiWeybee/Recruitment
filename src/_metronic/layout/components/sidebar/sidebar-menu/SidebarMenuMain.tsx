/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
	ADD_CANDIDATE,
	DASHBOARD,
	VIEW_CANDIDATE,
	VIEW_CANDIDATE_REORT,
	VIEW_DEGREE,
	VIEW_INTERVIEWER,
	VIEW_INTERVIEW_MODE,
	VIEW_INTERVIEW_REPORT,
	VIEW_INTERVIEW_TYPE,
	VIEW_MODE_OF_WORK,
	VIEW_RECRUITMENT_STATUS,
	VIEW_SKILL,
	VIEW_SKILL_TYPE,
	VIEW_SOURCE,
} from '../../../../../app/helpers/routesConstant';
import { SidebarMenuItem } from './SidebarMenuItem';
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub';

const SidebarMenuMain = () => {
	const masterMenu = [
		{ to: VIEW_DEGREE, title: 'Degree' },
		{ to: VIEW_SOURCE, title: 'Source' },
		{ to: VIEW_SKILL_TYPE, title: 'Skill Type' },
		{ to: VIEW_SKILL, title: 'Skill' },
		{ to: VIEW_RECRUITMENT_STATUS, title: 'Recruitment Status' },
		{ to: VIEW_MODE_OF_WORK, title: 'Mode of Work' },
		{ to: VIEW_INTERVIEW_TYPE, title: 'Interview Type' },
		{ to: VIEW_INTERVIEWER, title: 'Interviewer' },
		{ to: VIEW_INTERVIEW_MODE, title: 'Interview Mode' },
	];

	return (
		<>
			<SidebarMenuItem
				to={DASHBOARD}
				title="Dashboard"
				icon="/media/icons/duotune/art/art002.svg"
				fontIcon="bi-layers"
			/>
			<SidebarMenuItemWithSub
				to={VIEW_DEGREE}
				icon={'/media/icons/duotune/general/gen022.svg'}
				title="Masters"
				fontIcon="bi-app-indicator"
			>
				{masterMenu.map((menu: any, i: any) => {
					return (
						<SidebarMenuItem
							to={`${menu.to}`}
							title={menu.title}
							fontIcon="bi-layers"
							hasBullet={true}
							key={i}
						/>
					);
				})}
			</SidebarMenuItemWithSub>

			<SidebarMenuItemWithSub
				to={'case'}
				icon={'/media/icons/duotune/abstract/abs027.svg'}
				title="Candidates"
				fontIcon="bi-app-indicator"
			>
				<SidebarMenuItem
					to={`${ADD_CANDIDATE}`}
					title={'Add Candidate'}
					fontIcon="bi-layers"
					hasBullet={true}
				/>
				<SidebarMenuItem
					to={`${VIEW_CANDIDATE}`}
					title={'View Candidate'}
					fontIcon="bi-layers"
					hasBullet={true}
				/>
			</SidebarMenuItemWithSub>
			<SidebarMenuItemWithSub
				to={'case'}
				icon={'/media/icons/duotune/abstract/abs015.svg'}
				title="Reports"
				fontIcon="bi-app-indicator"
			>
				<SidebarMenuItem
					to={`${VIEW_CANDIDATE_REORT}`}
					title={'Candidate Report'}
					fontIcon="bi-card-list"
					hasBullet={true}
				/>
				<SidebarMenuItem
					to={`${VIEW_INTERVIEW_REPORT}`}
					title={'Interview Report'}
					fontIcon="bi-card-list"
					hasBullet={true}
				/>
			</SidebarMenuItemWithSub>
		</>
	);
};

export { SidebarMenuMain };
