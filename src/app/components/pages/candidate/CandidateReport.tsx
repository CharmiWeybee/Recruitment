/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useWindowSize } from '../../../helpers/useWindowSize';
import { KTCard, KTSVG } from '../../../../_metronic/helpers';
import { ADD_CANDIDATE } from '../../../helpers/routesConstant';
import Loader from '../../common/loader/Loader';
import { connect } from 'react-redux';
import { fetchAllCandidates } from '../../../reducers/Candidates/candidateAction';
import { Paginate } from '../../common/Paginate';
import {
	getSearchParameter,
	searchparam,
} from '../../../helpers/helperFunction';
import { Form, Formik } from 'formik';
import CandidateSearch from './CandidateSearch';
import {
	fetchActiveDegrees,
	fetchActiveModeofWork,
	fetchActiveRecruitmentStatus,
	fetchActiveSkill,
} from '../../../reducers/mastersReducers/mastersAction';
import CandidateReportTable from './CandidateReportTable';
import CandidateFilters from './CandidateFilters';
import { BackBtn } from '../../../helpers/BackBtn';

interface Props {
	getCandidates: any;
	candidateListRes: any;
	candidateListLoading: any;
	candidateListErr: any;
	getActiveDegree: any;
	getActiveSkills: any;
	getActiveRecruitmentStatus: any;
	getActiveModeofWork: any;
	degreeRes: any;
	skillRes: any;
	recruitmentStatusRes: any;
	modeofWorkRes: any;
}

const CandidateReport = ({
	getCandidates,
	candidateListRes,
	candidateListLoading,
	getActiveDegree,
	getActiveSkills,
	getActiveRecruitmentStatus,
	getActiveModeofWork,
	degreeRes,
	skillRes,
	recruitmentStatusRes,
	modeofWorkRes,
}: Props) => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const { isMobile, windowSize } = useWindowSize();
	const [searchParam, setSearchParam] = useSearchParams();
	const [searchValues, setSearchValues] = useState({
		degree_id: '',
		skill_id: '',
		recruitment_status_id: '',
		mode_of_work_id: '',
	});
	const [selectedSearchvalues, setSelectedSearchValues] = useState({
		degree: '',
		skill: '',
		recruitment_status: '',
		mode_of_work: '',
	});
	const searchObj = useMemo(
		() => getSearchParameter(searchParam),
		[searchParam]
	);

	useEffect(() => {
		getCandidates(searchObj.page, { ...searchObj });
		getActiveDegree();
		getActiveSkills();
		getActiveModeofWork();
		getActiveRecruitmentStatus();
	}, []);

	const handleClear = (setFieldValue: any) => {
		setFieldValue('degree_id', '');
		setFieldValue('skill_id', '');
		setFieldValue('recruitment_status_id', '');
		setFieldValue('mode_of_work_id', '');
		// const updatedSearchParams = new URLSearchParams(searchParams);
		// updatedSearchParams.set('Search', ''); // Clear the 'Search' parameter
		// setSearchParams(updatedSearchParams); // Update the searchParams state with the cleared value
		// getCandidates(searchObj.page, { ...searchObj, ...updatedSearchParams });
	};

	useEffect(() => {
		if (searchValues && Object.keys(searchValues).length > 0) {
			const updatedSearchParams = new URLSearchParams(searchParams.toString());
			updatedSearchParams.set('degree_id', searchValues.degree_id);
			updatedSearchParams.set('skill_id', searchValues.skill_id);
			updatedSearchParams.set(
				'recruitment_status_id',
				searchValues.recruitment_status_id
			);
			updatedSearchParams.set('mode_of_work_id', searchValues.mode_of_work_id);

			const updatedSearchObj = getSearchParamsObject(
				Object.fromEntries(updatedSearchParams.entries())
			);
			setSearchParam(updatedSearchObj);
		}
	}, [searchValues]);

	useEffect(() => {
		if (searchParam) {
			const updatedSearchObj = getSearchParamsObject(
				Object.fromEntries(searchParam.entries())
			);
			getCandidates(updatedSearchObj);
		}
	}, [searchParam]);

	const handlePagination = (page: any) => {
		const updatedSearchObj = { ...searchObj, page };
		setSearchParam(updatedSearchObj);
		getCandidates(updatedSearchObj);
	};
	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const updatedSearchParams = new URLSearchParams(searchParams.toString());
		updatedSearchParams.set('Search', event.target.value);
		updatedSearchParams.set('page', '1');

		const updatedSearchObj = getSearchParamsObject(
			Object.fromEntries(updatedSearchParams.entries())
		);
		setSearchParam({ ...updatedSearchObj, ...searchParam });
	};

	const getSearchParamsObject = (
		searchParams: Record<string, string | undefined>
	) => {
		const searchObj: any = {};
		Object.entries(searchParams).forEach(([key, value]) => {
			searchObj[key] = value?.toString() || '';
		});
		return searchObj;
	};

	const initialValues = {
		degree_id: '',
		skill_id: '',
		recruitment_status_id: '',
		mode_of_work_id: '',
	};

	const addFilterTag = (filterName: any, value: any) => {
		switch (filterName) {
			case 'degree_id':
				{
					const selectedDegree = degreeRes?.find(
						(degree: any) => Number(degree.id) === Number(value)
					);
					if (selectedDegree) {
						setSelectedSearchValues((prevValues) => ({
							...prevValues,
							degree: selectedDegree.degree,
						}));
					}
				}
				break;
			case 'skill_id':
				{
					const selectedSkill = skillRes?.find(
						(skill: any) => Number(skill.id) === Number(value)
					);
					if (selectedSkill) {
						setSelectedSearchValues((prevValues) => ({
							...prevValues,
							skill: selectedSkill.skill,
						}));
					}
				}
				break;
			case 'recruitment_status_id':
				{
					const selectedRecruitmentStatus = recruitmentStatusRes?.find(
						(recruitmentStatus: any) =>
							Number(recruitmentStatus.id) === Number(value)
					);
					if (selectedRecruitmentStatus) {
						setSelectedSearchValues((prevValues) => ({
							...prevValues,
							recruitment_status: selectedRecruitmentStatus.recruitment_status,
						}));
					}
				}
				break;
			case 'mode_of_work_id':
				{
					const selectedModeofWork = modeofWorkRes?.find(
						(modeofWork: any) => Number(modeofWork.id) === Number(value)
					);
					if (selectedModeofWork) {
						setSelectedSearchValues((prevValues) => ({
							...prevValues,
							mode_of_work: selectedModeofWork.mode_of_work,
						}));
					}
				}
				break;
			default:
				break;
		}
	};

	const handleSearchValues = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		setSearchValues((prevSearchValues) => ({
			...prevSearchValues,
			[name]: value,
		}));
		addFilterTag(name, value);
	};

	const handleRemoveFilter = (filterName: string, setFieldValue: any) => {
		let currentSearchValues = searchValues;
		switch (filterName) {
			case 'degree':
				setSelectedSearchValues((prevValues) => ({
					...prevValues,
					degree: '',
				}));
				currentSearchValues = { ...currentSearchValues, degree_id: '' };
				setFieldValue('degree_id', '');
				break;
			case 'skill':
				setSelectedSearchValues((prevValues) => ({
					...prevValues,
					skill: '',
				}));
				currentSearchValues = { ...currentSearchValues, skill_id: '' };
				setFieldValue('skill_id', '');
				break;
			case 'recruitment_status':
				setSelectedSearchValues((prevValues) => ({
					...prevValues,
					recruitment_status: '',
				}));
				currentSearchValues = {
					...currentSearchValues,
					recruitment_status_id: '',
				};
				setFieldValue('recruitment_status_id', '');

				break;
			case 'mode_of_work':
				setSelectedSearchValues((prevValues) => ({
					...prevValues,
					mode_of_work: '',
				}));
				currentSearchValues = { ...currentSearchValues, mode_of_work_id: '' };
				setFieldValue('mode_of_work_id', '');
				break;
			default:
				break;
		}
		setSearchValues({ ...currentSearchValues });
		getCandidates(currentSearchValues);
	};

	return (
		<div>
			<div className="d-flex flex-column">
				<div className="mb-3 head1 d-flex">
					<BackBtn />
					Candidate Report
				</div>
				<div className="mb-3">
					<Formik
						enableReinitialize={true}
						initialValues={initialValues}
						onSubmit={(values: any) => {
							// onSubmit(values);
						}}
					>
						{({ values, setFieldValue }) => (
							<Form className="form">
								<CandidateSearch
									setFieldValue={setFieldValue}
									setSearchvalues={setSearchValues}
									handleSearchValues={handleSearchValues}
									handleClear={handleClear}
								/>
								<CandidateFilters
									setFieldValue={setFieldValue}
									values={values}
									handleRemoveFilter={handleRemoveFilter}
									selectedSearchvalues={selectedSearchvalues}
								/>
							</Form>
						)}
					</Formik>
				</div>
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
								value={searchParams.get('Search') || ''}
								onChange={handleSearch}
							/>
						</div>
					</div>

					<div className="card-toolbar">
						<div
							className="d-flex justify-content-end"
							data-kt-user-table-toolbar="base"
						></div>
					</div>
				</div>
				<CandidateReportTable
					candidateListLoading={candidateListLoading}
					candidateListRes={candidateListRes}
				/>
			</KTCard>
			<div className="d-flex justify-content-end">
				<Paginate
					itemsPerPage={5}
					itemLength={Number(candidateListRes?.totalCount)}
					currentPage={Number(searchObj.page || 1)}
					handleClick={handlePagination}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		candidateListRes: state.getAllCandidateReducer.data,
		candidateListLoading: state.getAllCandidateReducer.loading,
		candidateListErr: state.getAllCandidateReducer.error,

		degreeRes: state.getActiveDegreeReducer.data,
		skillRes: state.getActiveSkillReducer.data,
		modeofWorkRes: state.getActiveModeofWorkReducer.data,
		recruitmentStatusRes: state.getActiveRecruitmentStatusReducer.data,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getCandidates: (searchObj: searchparam, queryParams?: any) =>
			dispatch(fetchAllCandidates(searchObj, queryParams)),

		getActiveDegree: () => dispatch(fetchActiveDegrees()),
		getActiveSkills: () => dispatch(fetchActiveSkill()),
		getActiveRecruitmentStatus: () => dispatch(fetchActiveRecruitmentStatus()),
		getActiveModeofWork: () => dispatch(fetchActiveModeofWork()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateReport);
