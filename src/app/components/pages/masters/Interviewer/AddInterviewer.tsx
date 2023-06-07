/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { DISCARD, SUBMIT } from '../../../../helpers/globalConstant';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getFormData } from '../../../../helpers/helperFunction';
import Loader from '../../../common/loader/Loader';
import { VIEW_INTERVIEWER } from '../../../../helpers/routesConstant';
import {
	fetchInterviewerById,
	postInterviewer,
	updateInterviewer,
} from '../../../../reducers/mastersReducers/mastersAction';
import { BackBtn } from '../../../../helpers/BackBtn';

interface Props {
	postData: any;
	getDataById: any;
	dataRes: any;
	dataLoading: any;
	updateData: any;
}

const AddInterviewer = ({
	postData,
	dataLoading,
	dataRes,
	getDataById,
	updateData,
}: Props) => {
	const navigate = useNavigate();
	const params = useParams();

	const initialValues = {
		name: '',
		contect_no: '',
		email: '',
		status: true,
	};

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
				Add Interviewer
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
										Interviewer
									</label>
									<div className="">
										<input
											placeholder="Interviewer"
											type="text"
											autoComplete="off"
											{...formik.getFieldProps('name')}
											className={clsx(
												'form-control bg-transparent',
												{
													'is-invalid':
														formik.touched.name && formik.errors.name,
												},
												{
													'is-valid':
														formik.touched.name && !formik.errors.name,
												}
											)}
										/>
										{formik.touched.name && formik.errors.name && (
											<div className="fv-plugins-message-container">
												<div className="fv-help-block">
													<span role="alert">{`${formik.errors.name}`}</span>
												</div>
											</div>
										)}
									</div>
								</div>
								<div className="col-lg-12">
									<label className="col-form-label fw-bold fs-6 required">
										Contact Number
									</label>
									<div className="">
										<input
											placeholder="Contact Number"
											type="text"
											autoComplete="off"
											{...formik.getFieldProps('contect_no')}
											className={clsx(
												'form-control bg-transparent',
												{
													'is-invalid':
														formik.touched.contect_no &&
														formik.errors.contect_no,
												},
												{
													'is-valid':
														formik.touched.contect_no &&
														!formik.errors.contect_no,
												}
											)}
										/>
										{formik.touched.contect_no && formik.errors.contect_no && (
											<div className="fv-plugins-message-container">
												<div className="fv-help-block">
													<span role="alert">{`${formik.errors.contect_no}`}</span>
												</div>
											</div>
										)}
									</div>
								</div>
								<div className="col-lg-12">
									<label className="col-form-label fw-bold fs-6 required">
										Email
									</label>
									<div className="">
										<input
											placeholder="Email"
											type="text"
											autoComplete="off"
											{...formik.getFieldProps('email')}
											className={clsx(
												'form-control bg-transparent',
												{
													'is-invalid':
														formik.touched.email && formik.errors.email,
												},
												{
													'is-valid':
														formik.touched.email && !formik.errors.email,
												}
											)}
										/>
										{formik.touched.email && formik.errors.email && (
											<div className="fv-plugins-message-container">
												<div className="fv-help-block">
													<span role="alert">{`${formik.errors.email}`}</span>
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
								onClick={() => navigate(VIEW_INTERVIEWER)}
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
		dataRes: state.getInterviewerByIdReducer.data,
		dataLoading: state.getInterviewerByIdReducer.loading,
		dataErr: state.getInterviewerByIdReducer.error,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		postData: (data: object, callback: Function) =>
			dispatch(postInterviewer(data, callback)),
		updateData: (data: object, callback: Function, id: number) =>
			dispatch(updateInterviewer(data, callback, id)),
		getDataById: (id: any) => dispatch(fetchInterviewerById(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddInterviewer);
