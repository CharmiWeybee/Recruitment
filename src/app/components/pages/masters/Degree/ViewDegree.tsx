/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from 'react';
import { KTCard, KTCardBody, KTSVG } from '../../../../../_metronic/helpers';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from '../../../../helpers/useWindowSize';
import { fetchAllDegrees } from '../../../../reducers/mastersReducers/mastersAction';
import { connect } from 'react-redux';
import Loader from '../../../common/loader/Loader';
import { ADD_DEGREE } from '../../../../helpers/routesConstant';
import { BackBtn } from '../../../../helpers/BackBtn';

interface Props {
	getDegrees: any;
	degreeListRes: any;
	degreeListLoading: any;
	degreeListErr: any;
}

const ViewDegree = ({
	getDegrees,
	degreeListRes,
	degreeListLoading,
}: Props) => {
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState<string>('');
	const { isMobile, windowSize } = useWindowSize();

	useEffect(() => {
		getDegrees();
	}, []);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);
	};

	const filteredDegreeList =
		!degreeListLoading &&
		Array.isArray(degreeListRes) &&
		degreeListRes.filter((degree: any) => {
			const degreeName = degree.degree.toLowerCase();
			return degreeName.includes(searchValue.toLowerCase());
		});

	return (
		<div>
			<div className="mb-3 head1 d-flex">
				<BackBtn />
				Degrees
			</div>
			<KTCard>
				<div className="card-header border-0 pt-6 flex-nowrap">
					<div className="card-title">
						<div className="d-flex align-items-center position-relative my-1">
							<KTSVG
								path="/media/icons/duotune/general/gen021.svg"
								className="svg-icon-1 position-absolute ms-6"
							/>
							<input
								type="text"
								data-kt-user-table-filter="search"
								className="form-control form-control-solid search-bar ps-14"
								onChange={handleSearch}
							/>
						</div>
					</div>

					<div className="card-toolbar">
						<div
							className="d-flex justify-content-end"
							data-kt-user-table-toolbar="base"
						></div>
						<button
							type="button"
							className={`btn btn-primary ${isMobile && 'p-3'}`}
							onClick={() => navigate(ADD_DEGREE)}
						>
							<KTSVG
								path="/media/icons/duotune/arrows/arr075.svg"
								className={`svg-icon-2 ${isMobile && 'm-0'}`}
							/>
							{isMobile ? null : 'Add'}
						</button>
					</div>
				</div>
				<KTCardBody className="py-4">
					{degreeListLoading && <Loader />}
					{!degreeListLoading &&
						filteredDegreeList &&
						filteredDegreeList.length > 0 && (
							<table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
								<thead>
									<tr>
										<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
											Id
										</th>
										<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
											degree
										</th>
										<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
											status
										</th>
										<th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
											action
										</th>
									</tr>
								</thead>
								<tbody className="text-gray-600 fw-bold">
									{!degreeListLoading &&
										filteredDegreeList &&
										filteredDegreeList.map((degree: any, index: any) => {
											return (
												<tr key={index}>
													<th scope="row">{degree.id}</th>
													<td>{degree.degree}</td>
													<td>
														{degree.status === 1 ? (
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
															onClick={() =>
																navigate(`${ADD_DEGREE}/${degree.id}`)
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
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		degreeListRes: state.getAllDegreeReducer.data,
		degreeListLoading: state.getAllDegreeReducer.loading,
		degreeListErr: state.getAllDegreeReducer.error,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getDegrees: () => dispatch(fetchAllDegrees()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewDegree);
