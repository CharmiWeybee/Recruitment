/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useNavigate } from 'react-router-dom';
import { KTSVG } from '../../_metronic/helpers';

export interface Props {
	classname?: string;
	path?: any;
}

export const BackBtn: React.FC<Props> = ({ classname, path }) => {
	const navigate = useNavigate();

	const handleNavigate = (path: any) => {
		navigate(path);
	};
	return (
		<div className={`back-btn pe-3 ${classname ? classname : ''}`}>
			<div
				title="Back"
				className={`btn btn-custom btn-icon-muted btn-active-light btn-active-color-primary rounded-circle p-0 pb-1`}
				onClick={() => handleNavigate(path ? path : -1)}
			>
				<KTSVG
					path="/media/icons/duotune/arrows/arr063.svg"
					className="svg-icon-3 m-0"
				/>
			</div>
		</div>
	);
};
