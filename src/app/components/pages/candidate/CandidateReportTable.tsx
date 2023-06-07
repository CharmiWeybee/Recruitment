/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { KTCardBody, KTSVG } from '../../../../_metronic/helpers';
import Loader from '../../common/loader/Loader';
import {
	ADD_CANDIDATE,
	ADD_INTERVIEW,
	CANDIDATE_DETAIL,
} from '../../../helpers/routesConstant';
import { useNavigate } from 'react-router-dom';

interface Props {
	candidateListLoading: any;
	candidateListRes: any;
}

const CandidateReportTable = ({
	candidateListLoading,
	candidateListRes,
}: Props) => {
	const navigate = useNavigate();

	return (
		<>
			<KTCardBody className="py-4 report-cards">
				{candidateListLoading && <Loader />}
				{!candidateListLoading &&
					candidateListRes &&
					candidateListRes.length > 0 && (
						<table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
							<thead>
								<tr className="report-table-header">
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										Id
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										candidate name
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										contact number
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										degree
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										recruitment status
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										mode of work
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										Total experiance
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										Skills
									</th>
									<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
										action
									</th>
								</tr>
							</thead>
							<tbody className="text-gray-600 fw-bold">
								{!candidateListLoading &&
									candidateListRes &&
									candidateListRes.map((list: any, index: any) => {
										return (
											<tr key={index}>
												<th scope="row">{list.id}</th>
												<td>{list.name}</td>
												<td>{list.contect_no}</td>
												<td>{list.degree}</td>
												<td>{list.recruitment_status}</td>
												<td>{list.mode_of_work}</td>
												{list.total_experience === '1' ? (
													<td>{list.total_experience} Year</td>
												) : (
													<td>{list.total_experience} Years</td>
												)}
												<td>{list.skills}</td>
												<td>
													{' '}
													<span
														className="btn btn-sm btn-icon btn-light-primary me-4"
														title="View Details"
														onClick={() =>
															navigate(`${CANDIDATE_DETAIL}/${list.id}`)
														}
													>
														<i className="fa fa-eye"></i>
													</span>
													<span
														className="btn btn-sm btn-icon btn-light-warning me-4"
														title="Resume"
													>
														<a
															href={list.resume_id}
															target="_blank"
															rel="noreferrer"
														>
															<KTSVG
																path="/media/icons/duotune/general/gen005.svg"
																className="svg-icon-3"
															/>
														</a>
													</span>
												</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					)}
			</KTCardBody>
		</>
	);
};

export default CandidateReportTable;
