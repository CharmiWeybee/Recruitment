/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import { fetchCandidateById } from '../../../reducers/Candidates/candidateAction';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../common/loader/Loader';
import { fetchInterviewsByCandidateId } from '../../../reducers/Interviews/interviewAction';
import { KTCard, KTCardBody, KTSVG } from '../../../../_metronic/helpers';
import { ADD_INTERVIEW } from '../../../helpers/routesConstant';
import { BackBtn } from '../../../helpers/BackBtn';

interface Props {
	candidateRes: any;
	getCandidateById: any;

	getInterviewById: any;
	interviewLoading: any;
	interviewRes: any;
	skillRes: any;
}

const CandidateDetail = ({
	candidateRes,
	getCandidateById,
	getInterviewById,
	interviewLoading,
	interviewRes,
	skillRes,
}: Props) => {
	const params = useParams();
	const navigate = useNavigate();
	const [skill, setSkill] = useState('');

	useEffect(() => {
		getCandidateById(params.candidateId);
		getInterviewById(params.candidateId);
		handleSkill(skillRes);
	}, []);

	const handleSkill = (skillRes: any) => {
		const formattedSkills = skillRes?.map(({ skill, experience }: any) => {
			const experienceText = experience === 1 ? 'year' : 'years';
			return `${skill} (${experience} ${experienceText})`;
		});
		const result = formattedSkills?.join(', ');
		result && setSkill(result);
	};

	return (
		<>
			<div className=" d-flex justify-content-between">
				<div className="d-flex align-items-center">
					{' '}
					<BackBtn />
					<span className="fw-bold fs-3">Candidate Details</span>
				</div>
				{candidateRes &&
					candidateRes.resume_id &&
					candidateRes.resume_id !== 'undefined' && (
						<a href={candidateRes.resume_id} target="_blank" rel="noreferrer">
							<button className="btn btn-primary mb-2">Resume</button>
						</a>
					)}
			</div>

			{!interviewLoading && candidateRes && (
				<>
					<div className="card mb-5 mb-xl-10">
						<div className="row p-9">
							<div className="col-lg-6">
								<div className="mb-7">
									<span className="col-form-label fw-bold fs-6">Name: </span>
									<span className="text1">
										&nbsp; {candidateRes.name} - (
										{candidateRes.total_experience} Years)
									</span>
								</div>
								<div className="mb-7">
									<span className="col-form-label fw-bold fs-6">Email: </span>
									<span className="text1">&nbsp; {candidateRes.email}</span>
								</div>
								<div className="mb-7">
									<span className="col-form-label fw-bold fs-6">
										Contact Number:{' '}
									</span>
									<span className="text1">
										&nbsp; {candidateRes.contect_no}
									</span>
								</div>
								<div className="">
									<span className="col-form-label fw-bold fs-6">Skills: </span>
									<span className="text1">&nbsp; {skill}</span>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="mb-7">
									<span className="col-form-label fw-bold fs-6">Degree: </span>
									<span className="text1">
										&nbsp; {candidateRes.degree?.degree}
									</span>
								</div>
								<div className="mb-7">
									<span className="col-form-label fw-bold fs-6">
										Current Salary:{' '}
									</span>
									<span className="text1">
										&nbsp; {candidateRes.current_salary}
									</span>
								</div>
								<div className="mb-7">
									<span className="col-form-label fw-bold fs-6">
										Expected Salary:{' '}
									</span>
									<span className="text1">
										&nbsp; {candidateRes.expected_salary}
									</span>
								</div>
								<div className="mb-7">
									<span className="col-form-label fw-bold fs-6">
										Recruitment Status:{' '}
									</span>
									<span className="text1">
										&nbsp;{' '}
										{candidateRes.recruitment__status?.recruitment_status}
									</span>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
			<div className="p-4">
				<span className="fw-bold fs-3">Scheduled Interviews</span>
			</div>
			<KTCard>
				<KTCardBody className="py-4">
					{interviewLoading && <Loader />}
					{!interviewLoading && interviewRes && interviewRes.length === 0 && (
						<div className="d-flex justify-content-center head2">
							No Interviews Found
						</div>
					)}
					{!interviewLoading && interviewRes && interviewRes.length > 0 && (
						<table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
							<thead>
								<tr>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										Id
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										Interview Type
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										Date
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										Interview Mode
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										Interviewer
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										Location/ Link
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										Remarks
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										Actions
									</th>
								</tr>
							</thead>
							<tbody className="text-gray-600 fw-bold">
								{!interviewLoading &&
									interviewRes &&
									interviewRes.map((list: any, index: any) => {
										return (
											<tr key={index}>
												<th scope="row">{list.id}</th>
												<td>{list.interview_type.interview_type}</td>
												<td>{list.date}</td>
												<td>{list.interview_mode.interview_mode}</td>
												<td>{list.interviewer_id.name}</td>
												<td>{list.location_link}</td>
												<td>{list.remarks}</td>
												<td>
													{' '}
													<span
														className="btn btn-sm btn-icon btn-light-primary me-4"
														onClick={() =>
															navigate(
																`${ADD_INTERVIEW}/${params.candidateId}/${list.id}`
															)
														}
													>
														<KTSVG
															path="/media/icons/duotune/art/art005.svg"
															className="svg-icon-3"
														/>
													</span>
												</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					)}
				</KTCardBody>
			</KTCard>
		</>
	);
};

const mapStateToProps = (state: any) => {
	return {
		interviewLoading: state.getInterviewByCandidateIdReducer.loading,

		candidateRes: state.getInterviewByCandidateIdReducer.data.candidate?.[0],
		interviewRes: state.getInterviewByCandidateIdReducer.data.interviews,
		skillRes: state.getInterviewByCandidateIdReducer.data.skills,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getCandidateById: (id: any) => dispatch(fetchCandidateById(id)),
		getInterviewById: (id: any) => dispatch(fetchInterviewsByCandidateId(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateDetail);
