/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field } from 'formik';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { NO_RECORDS_FOUND } from '../../../helpers/globalConstant';

interface Props {
	interviewTypeRes: any;
	interviewerRes: any;
	interviewModeRes: any;
	setFieldValue: any;
	handleClear: any;
	handleSearchValues: any;
	statusArr: any;
}

const InterviewSearch = ({
	interviewTypeRes,
	interviewerRes,
	interviewModeRes,
	setFieldValue,
	handleClear,
	handleSearchValues,
	statusArr,
}: Props) => {
	const params = useParams();
	return (
		<>
			<div className="d-flex search-dropdowns">
				<div className="d-flex flex-wrap my-1">
					<div className="d-flex my-0">
						<Field
							as="select"
							name="interviewer_id"
							className={clsx(
								'form-select form-select-sm border-body bg-body w-150px me-5'
							)}
							onChange={(e: any) => {
								handleSearchValues(e);
								setFieldValue('interviewer_id', e.target.value);
							}}
						>
							<option value={''} disabled>
								Select Interviewer
							</option>
							{interviewerRes && interviewerRes.length > 0 ? (
								interviewerRes?.map((list: any, i: any) => (
									<>
										{!params.id && (
											<option key={i} value={list.id}>
												{list.name}
											</option>
										)}
										{params.id && (
											<option key={i} value={list.id}>
												{list.name}
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
							name="interview_type_id"
							className={clsx(
								'form-select form-select-sm border-body bg-body w-150px me-5'
							)}
							onChange={(e: any) => {
								handleSearchValues(e);
								setFieldValue('interview_type_id', e.target.value);
							}}
						>
							<option value={''} disabled>
								Select Interview Type
							</option>
							{interviewTypeRes && interviewTypeRes.length > 0 ? (
								interviewTypeRes?.map((list: any, i: any) => (
									<>
										{!params.id && (
											<option key={i} value={list.id}>
												{list.interview_type}
											</option>
										)}
										{params.id && (
											<option key={i} value={list.id}>
												{list.interview_type}
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
							name="interview_mode_id"
							className={clsx(
								'form-select form-select-sm border-body bg-body w-150px me-5'
							)}
							onChange={(e: any) => {
								handleSearchValues(e);
								setFieldValue('interview_mode_id', e.target.value);
							}}
						>
							<option value={''} disabled>
								Select Interview Mode
							</option>
							{interviewModeRes && interviewModeRes.length > 0 ? (
								interviewModeRes?.map((list: any, i: any) => (
									<>
										{!params.id && (
											<option key={i} value={list.id}>
												{list.interview_mode}
											</option>
										)}
										{params.id && (
											<option key={i} value={list.id}>
												{list.interview_mode}
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
		interviewTypeRes: state.getActiveInterviewTypeReducer.data,
		interviewerRes: state.getActiveInterviewerReducer.data,
		interviewModeRes: state.getActiveInterviewModeReducer.data,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(InterviewSearch);
