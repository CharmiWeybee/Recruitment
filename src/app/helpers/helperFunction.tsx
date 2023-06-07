/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import moment from 'moment';
import { toast } from 'react-toastify';

interface searchObj {
	[key: string]: any;
}

// Toast Message
export const showToastMessageSuccess = (message?: string) => {
	toast.success(message ? message : 'Details submitted!', {
		className: 'toast-message',
	});
};
export const showToastMessageFailure = (message?: string) => {
	toast.error(message ? message : 'Something went wrong', {
		className: 'toast-message',
	});
};

// Pascal Case
export const capitalizeFirstLetter = (string: any) => {
	if (!string) {
		return;
	}

	const words = string.split(' ');
	const pascalCase = words
		.map((word: any) => {
			return word[0].toUpperCase() + word.substring(1);
		})
		.join(' ');
	return pascalCase;
};

// Random Num Generator
export const getRandomInt = (min: any, max: any) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Date to dd/mm/yy format
export const convert = (str: string): string => {
	const date = new Date(str),
		mnth = ('0' + (date.getMonth() + 1)).slice(-2),
		day = ('0' + date.getDate()).slice(-2);
	return [date.getFullYear(), mnth, day].join('-');
};

export function getFormData(values: object): FormData {
	const bodyFormData = new FormData();
	for (const [key, value] of Object.entries(values)) {
		if (Array.isArray(value)) {
			for (let i = 0; i < value.length; i++) {
				const item = value[i];
				for (const [subKey, subValue] of Object.entries(item)) {
					if (subValue instanceof File) {
						bodyFormData.append(`${key}[${i}][${subKey}]`, subValue);
					} else {
						bodyFormData.append(`${key}[${i}][${subKey}]`, String(subValue));
					}
				}
			}
		} else {
			if (value instanceof File) {
				bodyFormData.append(key, value);
			} else {
				bodyFormData.append(key, String(value));
			}
		}
	}
	return bodyFormData;
}

export function getSearchParameter(search: any) {
	const params: searchObj = {};
	search.forEach((value: any, key: any) => {
		params[key] = value;
	});

	// Set default values for page and pagesize if they are not present in the search parameters
	if (!params.page) {
		params.page = 1;
	}
	if (!params.pagesize) {
		params.pagesize = 10;
	}

	return { ...params };
}

export interface searchparam {
	pagenumber?: any;
	pagesize?: any;
	orderby?: string;
	search?: string;
	sortby?: string;
	isActive?: string;
}
export function getSearchQueryString(searchObj: searchparam) {
	let queryString = '';
	for (const [key, value] of Object.entries(searchObj)) {
		queryString = queryString.concat(`${key}=${value}&`);
	}
	return queryString;
}

export const convertDateFormat = (dateString: any) => {
	const formattedDate = moment(dateString, 'M/D/YYYY, h:mm:ss A').format(
		'YYYY-MM-DDTHH:mm'
	);
	return formattedDate;
};

export const getFileExtension = (fileName: any) => {
	return fileName.split('.').pop().toLowerCase();
};

export const convertDate = (dateString: any) => {
	const date = new Date(dateString);
	const formattedDate = date.toISOString().split('T')[0];
	return formattedDate;
};

export const viewDateandTime = (inputDate: any) => {
	const date = new Date(inputDate);
	const formattedDate = date.toLocaleDateString('en-US', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
	const formattedTime = date.toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
	});
	const convertedDateTime = `${formattedDate} ${formattedTime}`;
	return convertedDateTime;
};
