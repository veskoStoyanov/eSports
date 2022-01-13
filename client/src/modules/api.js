// // Libraries
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// URLS
import { urls } from '../config'; 

export const getSports = () => axios(urls.sports);

export const generateUnicId = () => uuidv4();