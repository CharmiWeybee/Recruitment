/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useWindowSize } from '../../../helpers/useWindowSize';
import { KTCard, KTCardBody, KTSVG } from '../../../../_metronic/helpers';
import {
	ADD_CANDIDATE,
	ADD_INTERVIEW,
	CANDIDATE_DETAIL,
} from '../../../helpers/routesConstant';
import Loader from '../../common/loader/Loader';
import { connect } from 'react-redux';
import { fetchActiveCandidates } from '../../../reducers/Candidates/candidateAction';
import { BackBtn } from '../../../helpers/BackBtn';

interface Props {
	getCandidates: any;
	candidateListRes: any;
	candidateListLoading: any;
	candidateListErr: any;
}

const ViewCandidate = ({
	getCandidates,
	candidateListRes,
	candidateListLoading,
}: Props) => {
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState<string>('');
	const { isMobile, windowSize } = useWindowSize();

	useEffect(() => {
		getCandidates();
	}, [getCandidates]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);
	};

	const filteredList =
		!candidateListLoading &&
		Array.isArray(candidateListRes) &&
		candidateListRes.filter((list: any) => {
			const name = list.name.toLowerCase();
			return name.includes(searchValue.toLowerCase());
		});

	return (
		<div>
			<div className="mb-3 head1 d-flex">
				<BackBtn />
				View Candidates
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
							onClick={() => navigate(ADD_CANDIDATE)}
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
					{candidateListLoading && <Loader />}
					{!candidateListLoading &&
						candidateListRes &&
						candidateListRes.length > 0 && (
							<table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
								<thead>
									<tr>
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
											action
										</th>
									</tr>
								</thead>
								<tbody className="text-gray-600 fw-bold">
									{!candidateListLoading &&
										filteredList &&
										filteredList.map((list: any, index: any) => {
											return (
												<tr key={index}>
													<th scope="row">{list.id}</th>
													<td>{list.name}</td>
													<td>{list.contect_no}</td>

													<td>
														{' '}
														<span
															className="btn btn-sm btn-icon btn-light-primary me-4"
															title="View"
															onClick={() =>
																navigate(`${CANDIDATE_DETAIL}/${list.id}`)
															}
														>
															<i className="fa fa-eye"></i>
														</span>
														<span
															className="btn btn-sm btn-icon btn-light-primary me-4"
															title="Edit"
															onClick={() =>
																navigate(`${ADD_CANDIDATE}/${list.id}`)
															}
														>
															<KTSVG
																path="/media/icons/duotune/art/art005.svg"
																className="svg-icon-3"
															/>
														</span>
														<span
															className="btn btn-sm btn-icon btn-light-primary me-4"
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
														<span
															className="btn btn-sm btn-icon btn-light-primary me-4"
															title="Schedule Interview"
															onClick={() =>
																navigate(`${ADD_INTERVIEW}/${list.id}`)
															}
														>
															<i className="fa fa-clock"></i>
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
		candidateListRes: state.getActiveCandidateReducer.data,
		candidateListLoading: state.getActiveCandidateReducer.loading,
		candidateListErr: state.getActiveCandidateReducer.error,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getCandidates: () => dispatch(fetchActiveCandidates()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCandidate);
