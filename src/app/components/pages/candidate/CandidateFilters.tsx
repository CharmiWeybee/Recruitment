/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';

interface Props {
	selectedSearchvalues: any;
	handleRemoveFilter: any;
	values: any;
	setFieldValue: any;
}

const CandidateFilters = ({
	selectedSearchvalues,
	handleRemoveFilter,
	values,
	setFieldValue,
}: Props) => {
	return (
		<div>
			<div className="d-flex filter-section">
				{values.degree_id && selectedSearchvalues.degree && (
					<div
						className="btn btn-sm bg-body btn-color-gray-700 fw-bold"
						onClick={() => handleRemoveFilter('degree', setFieldValue)}
					>
						{selectedSearchvalues.degree}
						&nbsp;{' '}
						<span>
							<i className="fa fa-times"></i>
						</span>
					</div>
				)}
				{values.skill_id && selectedSearchvalues.skill && (
					<div
						className="btn btn-sm bg-body btn-color-gray-700 fw-bold"
						onClick={() => handleRemoveFilter('skill', setFieldValue)}
					>
						{selectedSearchvalues.skill}
						&nbsp;{' '}
						<span>
							<i className="fa fa-times"></i>
						</span>
					</div>
				)}
				{values.recruitment_status_id &&
					selectedSearchvalues.recruitment_status && (
						<div
							className="btn btn-sm bg-body btn-color-gray-700 fw-bold"
							onClick={() =>
								handleRemoveFilter('recruitment_status', setFieldValue)
							}
						>
							{selectedSearchvalues.recruitment_status}
							&nbsp;{' '}
							<span>
								<i className="fa fa-times"></i>
							</span>
						</div>
					)}
				{values.mode_of_work_id && selectedSearchvalues.mode_of_work && (
					<div
						className="btn btn-sm bg-body btn-color-gray-700 fw-bold"
						onClick={() => handleRemoveFilter('mode_of_work', setFieldValue)}
					>
						{selectedSearchvalues.mode_of_work}
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

export default CandidateFilters;
