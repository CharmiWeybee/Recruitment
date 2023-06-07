/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useMemo, useState } from 'react';
import { BackBtn } from '../../../helpers/BackBtn';
import { KTCard, KTSVG } from '../../../../_metronic/helpers';
import { useWindowSize } from '../../../helpers/useWindowSize';
import { connect } from 'react-redux';
import { fetchActiveCandidateInterview } from '../../../reducers/Interviews/interviewAction';
import {
	getSearchParameter,
	searchparam,
} from '../../../helpers/helperFunction';
import { useSearchParams } from 'react-router-dom';
import { Paginate } from '../../common/Paginate';
import InterviewReportTable from './InterviewReportTable';
import { Form, Formik } from 'formik';
import InterviewSearch from './InterviewSearch';
import InterviewFilters from './InterviewFilters';
import {
	fetchActiveInterviewMode,
	fetchActiveInterviewType,
	fetchActiveInterviewer,
} from '../../../reducers/mastersReducers/mastersAction';

interface Props {
	interviewListRes: any;
	getActiveCandidatesInterview: any;
	interviewListLoading: any;
	getActiveInterviewTypes: any;
	getActiveInterviewModes: any;
	getActiveInterviewer: any;
	interviewerRes: any;
	interviewModeRes: any;
	interviewTypeRes: any;
}

const InterviewReport = ({
	interviewListRes,
	getActiveCandidatesInterview,
	interviewListLoading,
	getActiveInterviewTypes,
	getActiveInterviewModes,
	getActiveInterviewer,
	interviewModeRes,
	interviewerRes,
	interviewTypeRes,
}: Props) => {
	const { isMobile, windowSize } = useWindowSize();
	const [searchParam, setSearchParam] = useSearchParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchValues, setSearchValues] = useState({
		interviewer_id: '',
		interview_type_id: '',
		interview_mode_id: '',
	});
	const [selectedSearchvalues, setSelectedSearchValues] = useState({
		interviewer: '',
		interview_type: '',
		interview_mode: '',
	});
	const statusArr = [
		{ id: 1, status: 'Scheduled' },
		{ id: 2, status: 'Conducted' },
	];
	const searchObj = useMemo(
		() => getSearchParameter(searchParam),
		[searchParam]
	);

	useEffect(() => {
		getActiveCandidatesInterview(searchObj.page, { ...searchObj });
		getActiveInterviewTypes();
		getActiveInterviewer();
		getActiveInterviewModes();
	}, []);

	const getSearchParamsObject = (
		searchParams: Record<string, string | undefined>
	) => {
		const searchObj: any = {};
		Object.entries(searchParams).forEach(([key, value]) => {
			searchObj[key] = value?.toString() || '';
		});
		return searchObj;
	};

	useEffect(() => {
		if (searchParam) {
			const updatedSearchObj = getSearchParamsObject(
				Object.fromEntries(searchParam.entries())
			);
			getActiveCandidatesInterview(updatedSearchObj);
		}
	}, [searchParam]);

	useEffect(() => {
		if (searchValues && Object.keys(searchValues).length > 0) {
			const updatedSearchParams = new URLSearchParams(searchParams.toString());
			updatedSearchParams.set('interviewer_id', searchValues.interviewer_id);
			updatedSearchParams.set(
				'interview_type_id',
				searchValues.interview_type_id
			);
			updatedSearchParams.set(
				'interview_mode_id',
				searchValues.interview_mode_id
			);

			const updatedSearchObj = getSearchParamsObject(
				Object.fromEntries(updatedSearchParams.entries())
			);
			setSearchParam(updatedSearchObj);
		}
	}, [searchValues]);

	const colArr = [
		'id',
		'candidate name',
		'interviewer',
		'interview type',
		'interview mode',
		'date & time',
		'total ratings',
		'status',
	];
	const handlePagination = (page: any) => {
		const updatedSearchObj = { ...searchObj, page };
		setSearchParam(updatedSearchObj);
		getActiveCandidatesInterview(updatedSearchObj);
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

	const initialValues = {
		interviewer_id: '',
		interview_type_id: '',
		interview_mode_id: '',
	};

	const handleClear = (setFieldValue: any) => {
		setFieldValue('interviewer_id', '');
		setFieldValue('interview_type_id', '');
		setFieldValue('interview_mode_id', '');
		// getActiveCandidatesInterview(searchObj.page, { ...searchObj });
	};

	const addFilterTag = (filterName: any, value: any) => {
		switch (filterName) {
			case 'interviewer_id':
				{
					const selectedInterviewer = interviewerRes?.find(
						(interviewer: any) => Number(interviewer.id) === Number(value)
					);
					if (selectedInterviewer) {
						setSelectedSearchValues((prevValues) => ({
							...prevValues,
							interviewer: selectedInterviewer.name,
						}));
					}
				}
				break;
			case 'interview_type_id':
				{
					const selectedInterviewType = interviewTypeRes?.find(
						(interviewType: any) => Number(interviewType.id) === Number(value)
					);
					if (selectedInterviewType) {
						setSelectedSearchValues((prevValues) => ({
							...prevValues,
							interview_type: selectedInterviewType.interview_type,
						}));
					}
				}
				break;
			case 'interview_mode_id':
				{
					const selectedInterviewMode = interviewModeRes?.find(
						(interviewMode: any) => Number(interviewMode.id) === Number(value)
					);
					if (selectedInterviewMode) {
						setSelectedSearchValues((prevValues) => ({
							...prevValues,
							interview_mode: selectedInterviewMode.interview_mode,
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
			case 'interviewer':
				setSelectedSearchValues((prevValues) => ({
					...prevValues,
					interviewer: '',
				}));
				currentSearchValues = { ...currentSearchValues, interviewer_id: '' };
				setFieldValue('interviewer_id', '');
				break;
			case 'interview_type':
				setSelectedSearchValues((prevValues) => ({
					...prevValues,
					interview_type: '',
				}));
				currentSearchValues = { ...currentSearchValues, interview_type_id: '' };
				setFieldValue('interview_type_id', '');
				break;
			case 'interview_mode':
				setSelectedSearchValues((prevValues) => ({
					...prevValues,
					interview_mode: '',
				}));
				currentSearchValues = {
					...currentSearchValues,
					interview_mode_id: '',
				};
				setFieldValue('interview_mode_id', '');

				break;

			default:
				break;
		}
		setSearchValues({ ...currentSearchValues });
		getActiveCandidatesInterview(currentSearchValues);
	};

	return (
		<div>
			<div className="mb-3 head1 d-flex">
				<BackBtn />
				Interview Report
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
							<InterviewSearch
								setFieldValue={setFieldValue}
								statusArr={statusArr}
								// setSearchvalues={setSearchValues}
								handleSearchValues={handleSearchValues}
								handleClear={handleClear}
							/>
							<InterviewFilters
								setFieldValue={setFieldValue}
								values={values}
								handleRemoveFilter={handleRemoveFilter}
								selectedSearchvalues={selectedSearchvalues}
							/>
						</Form>
					)}
				</Formik>
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
						{/* <button
							type="button"
							className={`btn btn-primary ${isMobile && 'p-3'}`}
							// onClick={() => navigate(ADD_DEGREE)}
						>
							<KTSVG
								path="/media/icons/duotune/arrows/arr075.svg"
								className={`svg-icon-2 ${isMobile && 'm-0'}`}
							/>
							{isMobile ? null : 'Add'}
						</button> */}
					</div>
				</div>
				<InterviewReportTable
					colArr={colArr}
					interviewListLoading={interviewListLoading}
					interviewListRes={interviewListRes}
				/>
			</KTCard>
			<div className="d-flex justify-content-end">
				<Paginate
					itemsPerPage={5}
					itemLength={Number(interviewListRes?.totalCount)}
					currentPage={Number(searchObj.page || 1)}
					handleClick={handlePagination}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		interviewListRes: state.getActiveCandidateInterviewReducer.data,
		interviewListLoading: state.getActiveCandidateInterviewReducer.loading,

		interviewTypeRes: state.getActiveInterviewTypeReducer.data,
		interviewerRes: state.getActiveInterviewerReducer.data,
		interviewModeRes: state.getActiveInterviewModeReducer.data,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getActiveCandidatesInterview: (searchObj: searchparam, queryParams?: any) =>
			dispatch(fetchActiveCandidateInterview(searchObj, queryParams)),

		getActiveInterviewTypes: () => dispatch(fetchActiveInterviewType()),
		getActiveInterviewer: () => dispatch(fetchActiveInterviewer()),
		getActiveInterviewModes: () => dispatch(fetchActiveInterviewMode()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(InterviewReport);
