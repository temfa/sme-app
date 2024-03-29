import { getCookie } from 'cookies-next';
import { compProfile, login } from '../types/actionTypes';
import apiRoutes from '../helper/apiRoutes';
import axiosInstance from '../helper/apiClient';
//Complete Profile Action
export const profileLoadStart = (errorMessages) => ({
    type: compProfile.PROFILE_LOAD_START,
    payload: errorMessages
});
export const profileLoadSuccess = (profile) => ({
    type: compProfile.PROFILE_LOAD_SUCCESS,
    payload: profile
});
export const profileLoadError = (errorMessages) => ({
    type: login.PROFILE_LOAD_ERROR,
    payload: errorMessages
});

export const CompProfile = () => {
    const cookie = getCookie('cookieToken');
    return (dispatch) => {
        dispatch(profileLoadStart());
        axiosInstance
            .get(`https://testvate.live${apiRoutes.authProfile}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Client-Type': 'web',
                    Authorization: `Bearer ${cookie}`
                }
            })
            .then((response) => {
                dispatch(profileLoadSuccess(response));
            })
            .catch((error) => {
                // //console.logerror);
            });
    };
};

//Commplete Profile End
