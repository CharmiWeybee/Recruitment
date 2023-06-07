/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';

interface Props {
	values: any;
	selectedSearchvalues: any;
	handleRemoveFilter: any;
	setFieldValue: any;
}

const InterviewFilters = ({
	values,
	selectedSearchvalues,
	handleRemoveFilter,
	setFieldValue,
}: Props) => {
	return (
		<div>
			<div className="d-flex filter-section">
				{values.interviewer_id && selectedSearchvalues.interviewer && (
					<div
						className="btn btn-sm bg-body btn-color-gray-700 fw-bold"
						onClick={() => handleRemoveFilter('interviewer', setFieldValue)}
					>
						{selectedSearchvalues.interviewer}
						&nbsp;{' '}
						<span>
							<i className="fa fa-times"></i>
						</span>
					</div>
				)}
				{values.interview_type_id && selectedSearchvalues.interview_type && (
					<div
						className="btn btn-sm bg-body btn-color-gray-700 fw-bold"
						onClick={() => handleRemoveFilter('interview_type', setFieldValue)}
					>
						{selectedSearchvalues.interview_type}
						&nbsp;{' '}
						<span>
							<i className="fa fa-times"></i>
						</span>
					</div>
				)}
				{values.interview_mode_id && selectedSearchvalues.interview_mode && (
					<div
						className="btn btn-sm bg-body btn-color-gray-700 fw-bold"
						onClick={() => handleRemoveFilter('interview_mode', setFieldValue)}
					>
						{selectedSearchvalues.interview_mode}
						&nbsp;{' '}
						<span>
							<i className="fa fa-times"></i>
						</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default InterviewFilters;
