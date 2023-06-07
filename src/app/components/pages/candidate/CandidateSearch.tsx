/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import clsx from 'clsx';
import { Field } from 'formik';
import React from 'react';
import { useParams } from 'react-router';
import { NO_RECORDS_FOUND } from '../../../helpers/globalConstant';
import { connect } from 'react-redux';
import {
	fetchActiveDegrees,
	fetchActiveModeofWork,
	fetchActiveRecruitmentStatus,
	fetchActiveSkill,
} from '../../../reducers/mastersReducers/mastersAction';

interface Props {
	degreeRes: any;
	skillRes: any;
	recruitmentStatusRes: any;
	modeofWorkRes: any;

	setFieldValue: any;
	setSearchvalues: any;
	handleSearchValues: any;
	handleClear: any;
}

const CandidateSearch = ({
	degreeRes,
	skillRes,
	recruitmentStatusRes,
	modeofWorkRes,

	setFieldValue,
	handleSearchValues,
	handleClear,
}: Props) => {
	const params = useParams();

	return (
		<>
			<div className="d-flex search-dropdowns">
				<div className="d-flex flex-wrap my-1">
					<div className="d-flex my-0">
						<Field
							as="select"
							name="degree_id"
							className={clsx(
								'form-select form-select-sm border-body bg-body w-150px me-5'
							)}
							onChange={(e: any) => {
								handleSearchValues(e);
								setFieldValue('degree_id', e.target.value);
							}}
						>
							<option value={''} disabled>
								Select Degree
							</option>
							{degreeRes && degreeRes.length > 0 ? (
								degreeRes?.map((list: any, i: any) => (
									<>
										{!params.id && (
											<option key={i} value={list.id}>
												{list.degree}
											</option>
										)}
										{params.id && (
											<option key={i} value={list.id}>
												{list.degree}
											</option>
										)}
									</>
								))
							) : (
								<option>{NO_RECORDS_FOUND}</option>
							)}
						</Field>

						<Field
							as="select"
							name="skill_id"
							className={clsx(
								'form-select form-select-sm border-body bg-body w-150px me-5'
							)}
							onChange={(e: any) => {
								handleSearchValues(e);
								setFieldValue('skill_id', e.target.value);
							}}
						>
							<option value={''} disabled>
								Select Skill
							</option>
							{skillRes && skillRes.length > 0 ? (
								skillRes?.map((list: any, i: any) => (
									<>
										{!params.id && (
											<option key={i} value={list.id}>
												{list.skill}
											</option>
										)}
										{params.id && (
											<option key={i} value={list.id}>
												{list.skill}
											</option>
										)}
									</>
								))
							) : (
								<option>{NO_RECORDS_FOUND}</option>
							)}
						</Field>

						<Field
							as="select"
							name="recruitment_status_id"
							className={clsx(
								'form-select form-select-sm border-body bg-body w-150px me-5'
							)}
							onChange={(e: any) => {
								handleSearchValues(e);
								setFieldValue('recruitment_status_id', e.target.value);
							}}
						>
							<option value={''} disabled>
								Select Recruitment Status
							</option>
							{recruitmentStatusRes && recruitmentStatusRes.length > 0 ? (
								recruitmentStatusRes?.map((list: any, i: any) => (
									<>
										{!params.id && (
											<option key={i} value={list.id}>
												{list.recruitment_status}
											</option>
										)}
										{params.id && (
											<option key={i} value={list.id}>
												{list.recruitment_status}
											</option>
										)}
									</>
								))
							) : (
								<option>{NO_RECORDS_FOUND}</option>
							)}
						</Field>
						<Field
							as="select"
							name="mode_of_work_id"
							className={clsx(
								'form-select form-select-sm border-body bg-body w-150px me-5'
							)}
							onChange={(e: any) => {
								handleSearchValues(e);
								setFieldValue('mode_of_work_id', e.target.value);
							}}
						>
							<option value={''} disabled>
								Select Mode of Work
							</option>
							{modeofWorkRes && modeofWorkRes.length > 0 ? (
								modeofWorkRes?.map((list: any, i: any) => (
									<>
										{!params.id && (
											<option key={i} value={list.id}>
												{list.mode_of_work}
											</option>
										)}
										{params.id && (
											<option key={i} value={list.id}>
												{list.mode_of_work}
											</option>
										)}
									</>
								))
							) : (
								<option>{NO_RECORDS_FOUND}</option>
							)}
						</Field>

						<button
							type="button"
							className="btn btn-sm bg-body btn-color-gray-700 btn-active-color-primary fw-bold"
							onClick={() => handleClear(setFieldValue)}
						>
							<i className="fa fa-times"></i> Clear All
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
const mapStateToProps = (state: any) => {
	return {
		degreeRes: state.getActiveDegreeReducer.data,
		skillRes: state.getActiveSkillReducer.data,
		modeofWorkRes: state.getActiveModeofWorkReducer.data,
		recruitmentStatusRes: state.getActiveRecruitmentStatusReducer.data,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getActiveDegree: () => dispatch(fetchActiveDegrees()),
		getActiveSkills: () => dispatch(fetchActiveSkill()),
		getActiveRecruitmentStatus: () => dispatch(fetchActiveRecruitmentStatus()),
		getActiveModeofWork: () => dispatch(fetchActiveModeofWork()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateSearch);
