/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import clsx from 'clsx';
import { Field, FieldArray } from 'formik';
import React, { useEffect, useState } from 'react';
import { KTSVG } from '../../../../_metronic/helpers';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import {
	fetchActiveModeofWork,
	fetchActiveRecruitmentStatus,
	fetchActiveSource,
} from '../../../reducers/mastersReducers/mastersAction';
import { useParams } from 'react-router-dom';
import { NO_RECORDS_FOUND } from '../../../helpers/globalConstant';
import { convertDate } from '../../../helpers/helperFunction';

interface Props {
	isMobile: any;
	setFieldValue: any;
	errors: any;
	touched: any;
	values: any;
	getActiveModeofWork: any;
	modeofWorkRes: any;
	getActiveSource: any;
	sourceRes: any;
	recruitmentStatusRes: any;
	getActiveRecruitmentStatus: any;
}

const Step3 = ({
	isMobile,
	values,
	setFieldValue,
	getActiveModeofWork,
	modeofWorkRes,
	getActiveSource,
	sourceRes,
	recruitmentStatusRes,
	getActiveRecruitmentStatus,
	touched,
	errors,
}: Props) => {
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [toDate, setToDate] = useState<Date>(new Date());

	const params = useParams();

	useEffect(() => {
		getActiveModeofWork();
		getActiveSource();
		getActiveRecruitmentStatus();
	}, []);

	// --------------------------------------------------
	const convert = (inputDateString: any) => {
		const inputTime = '00000';
		const dateObj = new Date(inputDateString); // Convert date string to Date object

		// Set the time components
		dateObj.setHours(parseInt(inputTime.substr(0, 2), 10));
		dateObj.setMinutes(parseInt(inputTime.substr(2, 2), 10));
		dateObj.setSeconds(parseInt(inputTime.substr(4, 2), 10));

		// Format the date object to the desired string format
		const formattedDateString = dateObj.toString();
		return formattedDateString;
	};

	const setDatePickerDate = (date: string) => {
		const currentDate = new Date(date);

		if (currentDate.toString() !== 'Invalid Date') {
			return currentDate;
		} else {
			return null;
		}
	};

	return (
		<>
			<div className="row mb-lg-6 mt-2">
				<div className="col-lg-3">
					<label className="col-form-label fw-bold fs-6 required">
						Current Salary
					</label>
					<div className="">
						<Field
							placeholder="Current Salary"
							type="text"
							name="current_salary"
							autoComplete="off"
							className={clsx('form-control bg-transparent')}
						/>
						{errors.current_salary && touched.current_salary && (
							<div className="fv-plugins-message-container">
								<div className="fv-help-block">
									<span role="alert">{`${errors.current_salary}`}</span>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="col-lg-3">
					<label className="col-form-label fw-bold fs-6 required">
						Expexted Salary
					</label>
					<div className="">
						<Field
							placeholder="Expexted Salary"
							type="text"
							name="expected_salary"
							autoComplete="off"
							className={clsx('form-control bg-transparent')}
						/>
						{errors.expected_salary && touched.expected_salary && (
							<div className="fv-plugins-message-container">
								<div className="fv-help-block">
									<span role="alert">{`${errors.expected_salary}`}</span>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="col-lg-3">
					<label className="col-form-label fw-bold fs-6 required">
						Total Experience (Years)
					</label>
					<div className="">
						<Field
							placeholder="Total Experience (Years)"
							type="text"
							name="total_experience"
							autoComplete="off"
							className={clsx('form-control bg-transparent')}
						/>
						{errors.total_experience && touched.total_experience && (
							<div className="fv-plugins-message-container">
								<div className="fv-help-block">
									<span role="alert">{`${errors.total_experience}`}</span>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="col-lg-3">
					<label className="col-form-label fw-bold fs-6">
						Notice Period (Months)
					</label>
					<div className="">
						<Field
							placeholder="Notice Period (Months)"
							type="text"
							name="notice_period"
							autoComplete="off"
							className={clsx('form-control bg-transparent')}
						/>
					</div>
				</div>
			</div>
			<div className="row mb-lg-6 mt-2">
				<label className="col-form-label fw-bold fs-6">
					Previous Companies
				</label>
				<FieldArray
					name="previs_companies"
					render={({ insert, remove, push }) => {
						return (
							<div className="row mb-lg-6">
								{values?.previs_companies?.map((detail: any, index: any) => {
									return (
										<div
											className={`row mb-4 
                       ${isMobile && 'border position-relative p-4'} `}
											key={index}
										>
											<div className="col-md-4 field-with-error-height">
												<Field
													placeholder="Company Name"
													type="text"
													name={`previs_companies.${index}.coumpany_name`}
													autoComplete="off"
													className={clsx('form-control bg-transparent')}
												/>
											</div>
											<div className="col-lg-3 field-with-error-height">
												<DatePicker
													className="form-control bg-transparent"
													selected={
														values.previs_companies[index].from &&
														values.previs_companies[index].from.length > 0
															? setDatePickerDate(
																	values.previs_companies[index].from
															  )
															: startDate
													}
													onChange={(date) => {
														setStartDate(date as Date);
														setFieldValue(
															`previs_companies.${index}.from`,
															date ? convertDate(date) : convertDate(startDate)
														);
													}}
												/>
											</div>
											<div className="col-lg-3 field-with-error-height">
												<DatePicker
													className="form-control bg-transparent"
													selected={
														values.previs_companies[index].to &&
														values.previs_companies[index].to.length > 0
															? setDatePickerDate(
																	values.previs_companies[index].to
															  )
															: new Date(toDate)
													}
													onChange={(date) => {
														setToDate(date as Date);
														setFieldValue(
															`previs_companies.${index}.to`,
															date ? convertDate(date) : convertDate(toDate)
														);
													}}
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
									);
								})}

								<div className="d-flex justify-content-start mt-2">
									<button
										type="button"
										className="btn btn-light btn-sm btn-active-light-primary"
										onClick={() => {
											push({
												candidate_master_id: '',
												coumpany_name: '',
												from: '',
												to: '',
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
						);
					}}
				/>
			</div>
			<div className="row mb-lg-6 mt-2">
				<div className="col-lg-4">
					<label className="col-form-label fw-bold fs-6 required">
						Mode of Work
					</label>
					<div className="">
						<Field
							as="select"
							name="mode_of_work_id"
							className={clsx('form-control bg-transparent form-select')}
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
						{errors.mode_of_work_id && touched.mode_of_work_id && (
							<div className="fv-plugins-message-container">
								<div className="fv-help-block">
									<span role="alert">{`${errors.mode_of_work_id}`}</span>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="col-lg-4">
					<label className="col-form-label fw-bold fs-6 required">
						Source of Connection
					</label>
					<div className="">
						<Field
							as="select"
							name="source_id"
							className={clsx('form-control bg-transparent form-select')}
						>
							<option value={''} disabled>
								Select Source
							</option>
							{Boolean(sourceRes) && sourceRes.length > 0 ? (
								sourceRes?.map((list: any, i: any) => (
									<>
										{params.id == null && (
											<option key={i} value={list.id}>
												{list.source}
											</option>
										)}
										{params.id != null && (
											<option key={i} value={list.id}>
												{list.source}
											</option>
										)}
									</>
								))
							) : (
								<option>{NO_RECORDS_FOUND}</option>
							)}
						</Field>
						{errors.source_id && touched.source_id && (
							<div className="fv-plugins-message-container">
								<div className="fv-help-block">
									<span role="alert">{`${errors.source_id}`}</span>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="col-lg-4">
					<label className="col-form-label fw-bold fs-6">
						Recruitment Status
					</label>
					<div className="">
						<Field
							as="select"
							name="recruitment_status_id"
							className={clsx('form-control bg-transparent form-select')}
						>
							<option value={''} disabled>
								Select Recriutment Status
							</option>
							{Boolean(recruitmentStatusRes) &&
							recruitmentStatusRes.length > 0 ? (
								recruitmentStatusRes?.map((list: any, i: any) => (
									<>
										{params.id == null && (
											<option key={i} value={list.id}>
												{list.recruitment_status}
											</option>
										)}
										{params.id != null && (
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
						{errors.recruitment_status_id && touched.recruitment_status_id && (
							<div className="fv-plugins-message-container">
								<div className="fv-help-block">
									<span role="alert">{`${errors.recruitment_status_id}     `}</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state: any) => {
	return {
		modeofWorkRes: state.getActiveModeofWorkReducer.data,
		sourceRes: state.getActiveSourceReducer.data,
		recruitmentStatusRes: state.getActiveRecruitmentStatusReducer.data,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getActiveModeofWork: () => dispatch(fetchActiveModeofWork()),
		getActiveSource: () => dispatch(fetchActiveSource()),
		getActiveRecruitmentStatus: () => dispatch(fetchActiveRecruitmentStatus()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
