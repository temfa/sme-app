import { getCookie } from 'cookies-next';
import apiRoutes from '../helper/apiRoutes';
import { vninType } from '../types/actionTypes';
import axiosInstance from '../helper/apiClient';
export const vninLoad = () => ({
    type: vninType.VNIN_START
});
export const vninSuccess = (vninMSeccess) => ({
    type: vninType.VNIN_SUCCESS,
    payload: vninMSeccess
});
export const vninError = (vninMError) => ({
    type: vninType.VNIN_ERROR,
    payload: vninMError
});
export const postvnin = (vninItems) => (dispatch) => {
    let cookie;

    if (getCookie('cookieToken') == undefined) {
        cookie = getCookie('existingToken');
    } else {
        cookie = getCookie('cookieToken');
    }

    // dispatch(accountNumberLoadStart());
    axios
        .post(`https://testvate.live${apiRoutes.vnin}`, vninItems, {
            headers: {
                'Content-Type': 'application/json',
                'X-Client-Type': 'web',
                Authorization: `Bearer ${cookie}`
            }
        })
        .then((response) => {
            setTimeout(() => {
                if (response?.data?.message) {
                    axios
                        .get(
                            `https://testvate.live${apiRoutes.verifyVNinAdd}`,
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'X-Client-Type': 'web',
                                    Authorization: `Bearer ${cookie}`
                                }
                            }
                        )
                        .then((response) => {
                            dispatch(vninSuccess(response?.data));
                        })
                        .catch((error) =>
                            dispatch(vninError(error?.response?.data?.message))
                        );
                }
            }, 2000);
        })
        .catch((error) => dispatch(vninError(error?.response?.data?.message)));
};
//Vnin end
