// // Libraries
import axios from 'axios';

// URLS
import { urls } from '../config'; 

export const fetch = (url, method = 'GET', data) => {
	const options = {
		method,
		url,
	};

	if (data) {
		options.data = data;
	}

	return axios(options);
};

export const getSports = () => fetch(urls.sports);

export const postBet  = (data, id) => fetch(`${urls.bet}/${id}`, 'POST', data);

export const fetchBets  = (id) => fetch(`${urls.bet}/${id}`);

export const putBets  = (data, id) => fetch(`${urls.bet}/${id}`, 'PUT', data);

export const deleteBet  = (id, uui) => fetch(`${urls.bet}/${uui}?bet=${id}`, 'DELETE');