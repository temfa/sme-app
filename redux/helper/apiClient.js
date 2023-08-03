import axios from 'axios';
import { getCookie } from 'cookies-next';
var loginToken = '';
var cookieToken;
var options = 1 / 24;

loginToken = getCookie('Token', options);
if (loginToken === null) {
    cookieToken = getCookie('Token', options);
} else {
    cookieToken = getCookie('Token', options);
}

const axiosInstance = axios.create({
    baseURL: 'http://178.128.174.252'
    // baseURL: '//http://178.128.174.252> /'
});

export default axiosInstance;
