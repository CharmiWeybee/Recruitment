/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { DISCARD, SUBMIT } from '../../../../helpers/globalConstant';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
	fetchAllSkillType,
	fetchSkillById,
	postSkill,
	updateSkill,
} from '../../../../reducers/mastersReducers/mastersAction';
import { getFormData } from '../../../../helpers/helperFunction';
import Loader from '../../../common/loader/Loader';
import { VIEW_SKILL } from '../../../../helpers/routesConstant';
import { BackBtn } from '../../../../helpers/BackBtn';

interface Props {
	postData: any;
	getDataById: any;
	dataRes: any;
	dataLoading: any;
	updateData: any;
	getAllSkillTypes: any;
	skillTypeRes: any;
	skillTypeLoading: any;
}

const AddSkill = ({
	postData,
	dataLoading,
	dataRes,
	getDataById,
	updateData,
	getAllSkillTypes,
	skillTypeLoading,
	skillTypeRes,
}: Props) => {
	const navigate = useNavigate();
	const params = useParams();

	const initialValues = {
		skill: '',
		skill_type_id: '',
		status: true,
	};

	useEffect(() => {
		getAllSkillTypes();
	}, []);

	useEffect(() => {
		if (params.id) {
			getDataById(params.id);
		}
	}, [params.id]);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: params.id
			? { ...dataRes, status: dataRes.status === 0 ? false : true }
			: initialValues,
		onSubmit: async () => {
			const newFormData: any = getFormData(formik.values);
			params.id
				? updateData(formik.values, navigate, params.id)
				: postData(newFormData, navigate);
		},
	});

	return (
		<>
			<div className="mb-3 head1 d-flex">
				<BackBtn />
				Add Skill
			</div>
			<div className="card mb-5 mb-xl-10">
				{dataLoading && <Loader />}

				{!dataLoading && formik.values && (
					<form
						className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
						noValidate
						id="kt_login_signup_form"
						onSubmit={formik.handleSubmit}
					>
						<div className="card-body border-top p-9">
							<div className="row mb-lg-6">
								<div className="col-lg-12">
									<label className="col-form-label fw-bold fs-6 required">
										Skill
									</label>
									<div className="">
										<input
											placeholder="Skill"
											type="text"
											autoComplete="off"
											{...formik.getFieldProps('skill')}
											className={clsx(
												'form-control bg-transparent',
												{
													'is-invalid':
														formik.touched.skill && formik.errors.skill,
												},
												{
													'is-valid':
														formik.touched.skill && !formik.errors.skill,
												}
											)}
										/>
										{formik.touched.skill && formik.errors.skill && (
											<div className="fv-plugins-message-container">
												<div className="fv-help-block">
													<span role="alert">{`${formik.errors.skill}`}</span>
												</div>
											</div>
										)}
									</div>
								</div>
								<div className="col-lg-12">
									<label className="col-form-label fw-bold fs-6 required">
										Skill Type
									</label>
									<div className="">
										<select
											name="skill_type_id"
											value={formik.values.skill_type_id}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											style={{ display: 'block' }}
											className="form-control bg-transparent"
										>
											<option value="" selected={true} disabled>
												Select Skill Type
											</option>
											{!skillTypeLoading &&
												skillTypeRes &&
												skillTypeRes.length > 0 &&
												skillTypeRes?.map((list: any, i: any) => {
													return (
														<option key={i} value={list.id}>
															{list.skill_type}
														</option>
													);
												})}
										</select>
										{formik.touched.skill_type_id &&
											formik.errors.skill_type_id && (
												<div className="fv-plugins-message-container">
													<div className="fv-help-block">
														<span role="alert">{`${formik.errors.skill_type_id}`}</span>
													</div>
												</div>
											)}
									</div>
								</div>
								<div className="col-lg-12">
									<label className="col-form-label fw-bold fs-6 required">
										Status
									</label>
									<div className="input-group-prepend">
										<div className="">
											<input
												id="status"
												name="status"
												type="checkbox"
												checked={formik.values.status}
												className="form-check-input"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
											/>
											<span className="col-form-label fw-bold fs-6 ">
												&nbsp; {formik.values.status ? 'Active' : 'InActive'}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-footer d-flex justify-content-end py-6 px-9">
							<button
								type="button"
								className="btn btn-light btn-active-light-primary me-4"
								onClick={() => navigate(VIEW_SKILL)}
							>
								{DISCARD}
							</button>
							<button
								type="submit"
								id="kt_sign_up_submit"
								className="btn btn-primary"
								disabled={formik.isSubmitting}
							>
								<span className="indicator-label">{SUBMIT}</span>
							</button>
						</div>
					</form>
				)}
			</div>
		</>
	);
};

const mapStateToProps = (state: any) => {
	return {
		dataRes: state.getSkillByIdReducer.data,
		dataLoading: state.getSkillByIdReducer.loading,
		dataErr: state.getSkillByIdReducer.error,

		skillTypeRes: state.getAllSkillTypeReducer.data,
		skillTypeLoading: state.getAllSkillTypeReducer.loading,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		postData: (data: object, callback: Function) =>
			dispatch(postSkill(data, callback)),
		updateData: (data: object, callback: Function, id: number) =>
			dispatch(updateSkill(data, callback, id)),
		getDataById: (id: any) => dispatch(fetchSkillById(id)),
		getAllSkillTypes: () => dispatch(fetchAllSkillType()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSkill);
