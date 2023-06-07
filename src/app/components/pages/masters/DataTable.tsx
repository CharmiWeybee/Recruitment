/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { KTCardBody, KTSVG } from '../../../../_metronic/helpers';
import Loader from '../../common/loader/Loader';
import { useNavigate } from 'react-router-dom';

interface Props {
	listLoading: any;
	listRes: any;
	filteredList: any;
	navigateVar: any;
	columnsArr: any;
}

const DataTable = ({
	listLoading,
	listRes,
	filteredList,
	navigateVar,
	columnsArr,
}: Props) => {
	const navigate = useNavigate();
	return (
		<>
			<KTCardBody className="py-4">
				{listLoading && <Loader />}
				{!listLoading && listRes && listRes.length > 0 && (
					<table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
						<thead>
							<tr>
								{columnsArr &&
									columnsArr.map((columns: any, index: any) => (
										<th
											className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0"
											key={index}
										>
											{columns}
										</th>
									))}
							</tr>
						</thead>
						<tbody className="text-gray-600 fw-bold">
							{!listLoading &&
								filteredList &&
								filteredList.map((list: any, index: any) => {
									return (
										<tr key={index}>
											<th scope="row">{list.id}</th>
											<td>{list.skill}</td>
											<td>{list.skill_type.skill_type}</td>
											<td>
												{list.status === 1 ? (
													<span className="badge badge-lg badge-light-success fw-bold my-2">
														Active
													</span>
												) : (
													<span className="badge badge-lg badge-light-danger fw-bold my-2">
														In Active
													</span>
												)}
											</td>
											<td>
												{' '}
												<span
													className="btn btn-sm btn-icon btn-light-primary me-4"
													onClick={() => navigate(`${navigateVar}/${list.id}`)}
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
		</>
	);
};

export default DataTable;
