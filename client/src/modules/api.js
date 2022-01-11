// // Libraries
import axios from 'axios';

// URLS
import { urls } from '../config'; 

export const getSports = () => axios(urls.sports);