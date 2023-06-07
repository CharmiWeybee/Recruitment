/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React, { useEffect } from 'react';
import clsx from 'clsx';
import { Field, FieldArray } from 'formik';
import { KTSVG } from '../../../../_metronic/helpers';
import { connect } from 'react-redux';
import {
	fetchActiveDegrees,
	fetchActiveSkill,
} from '../../../reducers/mastersReducers/mastersAction';
import { NO_RECORDS_FOUND } from '../../../helpers/globalConstant';
import { useParams } from 'react-router-dom';

interface Props {
	isMobile: any;
	setFieldValue: any;
	errors: any;
	touched: any;
	values: any;
	getActiveDegree: any;
	degreeRes: any;
	getActiveSkills: any;
	skillRes: any;
}

const Step2 = ({
	isMobile,
	values,
	getActiveDegree,
	degreeRes,
	getActiveSkills,
	skillRes,
	setFieldValue,
	errors,
	touched,
}: Props) => {
	const params = useParams();

	useEffect(() => {
		getActiveDegree();
		getActiveSkills();
	}, []);

	return (
		<>
			<div className="row mb-lg-6 mt-2">
				<div className="col-lg-4">
					<label className="col-form-label fw-bold fs-6 required">Degree</label>
					<div className="">
						<div className="">
							<Field
								as="select"
								name="degree_id"
								className={clsx('form-control bg-transparent form-select')}
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
							{errors.degree_id && touched.degree_id && (
								<div className="fv-plugins-message-container">
									<div className="fv-help-block">
										<span role="alert">{`${errors.degree_id}`}</span>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<label className="col-form-label fw-bold fs-6">Passing Year</label>
					<div className="">
						<Field
							placeholder="Passing Year"
							type="text"
							name="passing_year"
							autoComplete="off"
							className={clsx('form-control bg-transparent')}
						/>
					</div>
				</div>
				<div className="col-lg-4">
					<label className="col-form-label fw-bold fs-6 required">
						Passing Grade
					</label>
					<div className="">
						<Field
							placeholder="Passing Grade"
							type="text"
							name="passing_grade"
							autoComplete="off"
							className={clsx('form-control bg-transparent')}
						/>
						{errors.passing_grade && touched.passing_grade && (
							<div className="fv-plugins-message-container">
								<div className="fv-help-block">
									<span role="alert">{`${errors.passing_grade}`}</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="row mb-lg-6 mt-2">
				<label className="col-form-label fw-bold fs-6 required">Skills</label>
				<FieldArray
					name="skills"
					render={({ insert, remove, push }) => (
						<div className="row mb-lg-6">
							{values?.skills?.map((detail: any, index: any) => (
								<div
									className={`row mb-4 
                       ${isMobile && 'border position-relative p-4'} `}
									key={index}
								>
									<div className="col-md-4 field-with-error-height">
										<Field
											as="select"
											name={`skills.${index}.skill_master_id`}
											className={clsx(
												'form-control bg-transparent form-select'
											)}
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
										{touched?.skills?.[index]?.skill_master_id &&
											errors?.skills?.[index]?.skill_master_id && (
												<div className="fv-plugins-message-container">
													<div className="fv-help-block">
														<span role="alert">{`${errors.skills?.[index]?.skill_master_id}`}</span>
													</div>
												</div>
											)}
									</div>

									<div className="col-lg-4 field-with-error-height">
										<Field
											placeholder="Experiance"
											type="text"
											name={`skills.${index}.experience`}
											autoComplete="off"
											className={clsx('form-control bg-transparent')}
										/>
										{touched?.skills?.[index]?.experience &&
											errors?.skills?.[index]?.experience && (
												<div className="fv-plugins-message-container">
													<div className="fv-help-block">
														<span role="alert">{`${errors.skills?.[index]?.experience}`}</span>
													</div>
												</div>
											)}
									</div>
									<div className="col-lg-3 field-with-error-height">
										<Field
											placeholder="Self Ratings"
											type="text"
											name={`skills.${index}.self_rating`}
											autoComplete="off"
											className={clsx('form-control bg-transparent')}
										/>
									</div>

									<button
										className={`col-lg-1 btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger ${
											isMobile && 'position-absolute'
										}`}
										onClick={() => remove(index)}
										style={
											isMobile
												? {
														top: '-16px',
														right: ' -16px',
												  }
												: undefined
										}
									>
										<KTSVG
											path="/media/icons/duotune/general/gen040.svg"
											className="svg-icon-muted svg-icon-2hx"
										/>
									</button>
								</div>
							))}

							<div className="d-flex justify-content-start mt-2">
								<button
									type="button"
									className="btn btn-light btn-sm btn-active-light-primary"
									onClick={() => {
										push({
											candidate_master_id: '',
											skill_master_id: '',
											experience: '',
											self_rating: '',
										});
									}}
								>
									<KTSVG
										path="/media/icons/duotune/arrows/arr075.svg"
										className="svg-icon-2"
									/>
									Add
								</button>
							</div>
						</div>
					)}
				/>
			</div>
		</>
	);
};

const mapStateToProps = (state: any) => {
	return {
		degreeLoading: state.getActiveDegreeReducer.loading,
		degreeRes: state.getActiveDegreeReducer.data,

		skillsLoading: state.getActiveSkillReducer.loading,
		skillRes: state.getActiveSkillReducer.data,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getActiveDegree: () => dispatch(fetchActiveDegrees()),
		getActiveSkills: () => dispatch(fetchActiveSkill()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
