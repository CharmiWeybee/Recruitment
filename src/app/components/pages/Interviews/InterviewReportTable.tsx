/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { KTCardBody } from '../../../../_metronic/helpers';
import Loader from '../../common/loader/Loader';
import { viewDateandTime } from '../../../helpers/helperFunction';

interface Props {
	interviewListLoading: any;
	colArr: any;
	interviewListRes: any;
}

const InterviewReportTable = ({
	interviewListLoading,
	colArr,
	interviewListRes,
}: Props) => {
	return (
		<>
			<KTCardBody className="py-4 report-cards">
				<table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
					{interviewListLoading && <Loader />}
					<thead>
						{!interviewListLoading && (
							<tr className="report-table-header">
								{colArr &&
									colArr.map((columns: any, index: any) => (
										<th
											className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0"
											key={index}
										>
											{columns}
										</th>
									))}
							</tr>
						)}
					</thead>
					<tbody className="text-gray-600 fw-bold">
						{!interviewListLoading &&
							interviewListRes &&
							interviewListRes.length > 0 &&
							interviewListRes.map((list: any, index: any) => {
								return (
									<tr key={index}>
										<th scope="row">{list.id}</th>
										<td>{list.name}</td>
										<td>{list.interviewer_id.name}</td>
										<td>{list.interview_type.interview_type}</td>
										<td>{list.interview_mode.interview_mode}</td>
										<td>{viewDateandTime(list.date)}</td>
										<td>{list.total_rating}</td>
										<td>
											{list.total_rating == '0.00' ? (
												<span className="badge badge-lg badge-light-warning fw-bold my-2">
													Scheduled
												</span>
											) : (
												<span className="badge badge-lg badge-light-success fw-bold my-2">
													Conducted
												</span>
											)}
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</KTCardBody>
		</>
	);
};

export default InterviewReportTable;
