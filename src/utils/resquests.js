import axios from 'axios';
import { BASEURL } from './baseRequestEndpoints';

const cookies = document.cookie ? document.cookie.split('; ') : "";
const CSRFTOKEN = cookies.indexOf('csrftoken') >= 0 ? cookies.find((item) => item.match(/^csrftoken/)).slice("csrftoken".length + 1) : "none";

export const requestWithCSRF = axios.create({
  baseURL: BASEURL,
  headers: {
    'X-CSRFToken': CSRFTOKEN,
    'Content-Type': 'application/json'
  }
})

export const requestWithAuth = axios.create({
  baseURL: BASEURL,
  headers: {
    'X-CSRFToken': CSRFTOKEN,
    'Authorization': `Token ${localStorage.getItem('AUTHTOKEN')}`
  }
})