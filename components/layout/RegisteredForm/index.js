import React, { useState, useEffect } from 'react';
import ButtonComp from '../../ReusableComponents/Button';
import Card from '../NotRegisteredForms/Card';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Link from 'next/link';
import styles from './styles.module.css';
import StepTwoBVNAuthenticator from '../NotRegisteredForms/StepTwoBVNAuthenticator';

import { useDispatch, useSelector } from 'react-redux';
import Liveness from '../NotRegisteredForms/Liveness';
import { useRouter } from 'next/router';
import withAuth from '../../HOC/withAuth';
import { runVerifyOtp } from '../../../redux/actions/verifyBvnOtp';
import { existingUserProfileData } from '../../../redux/actions/existingProfileAction';
import { loadCountry } from '../../../redux/actions/getCountriesAction';

const ExistingMultiStep = () => {
    const router = useRouter();
    const [page, setPage] = useState(0);
    const [pageType, setPageType] = useState('');
    const [country, setCountry] = useState();
    const [loads, setLoads] = useState(false);
    const dispatch = useDispatch();
    const { existingUserProfilee, errorMessage } = useSelector(
        (state) => state.existingUserProfileReducer
    );
    const { countries } = useSelector((state) => state.countryReducer);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        otp: [''],
        type: 'false',
        userId: '',
        emailData: '',
        password: '',
        confPassword: ''
    });
    const { otpActData, otpErrorMessage } = useSelector(
        (state) => state.otpReducer
    );
    const [cookie, setCookies] = useState('');
    useEffect(() => {
        dispatch(loadCountry());
    }, []);
    useEffect(() => {
        const {
            query: { id }
        } = router;
        setPage(parseInt({ id }.id));
    });
    useEffect(() => {}, [page]);
    useEffect(() => {
        if (countries !== null) {
            countries.filter((item) => {
                if (item.name === 'Nigeria') {
                    setCountry(item);
                }
            });
        }
        if (typeof window !== 'undefined') {
            let accounts = window.localStorage.getItem('account');
            var newAccounts = JSON.parse(accounts);
            let loginWith = localStorage.getItem('LoginWith');
            // //console.log(loginWith);
            //  //console.log(newAccounts);
        }
    }, [countries]);
    const [setType, typeset] = useState('false');
    // useEffect(() => {
    //     if (!errorMessage) {
    //         setPage(page + 1);
    //     } else if (
    //         existingUserProfilee.data.message ==
    //         'Profile setup Intialization completed'
    //     ) {
    //         setPage(page + 1);
    //     }
    // }, [errorMessage]);
    if (typeof window !== 'undefined') {
        let accounts = window.localStorage.getItem('account');
        var newAccounts = JSON.parse(accounts);
        let loginWith = localStorage.getItem('LoginWith');
        // //console.log(loginWith);
        // //console.log(newAccounts.user.email);
    }

    // //console.log(formData.emailData, newAccounts.user?.email);
    // //console.log(formData.emailData, newAccounts.email);
    const phonenumber = () => {
        if (newAccounts.phoneNumber != undefined) {
            return newAccounts.phoneNumber;
        } else {
            return newAccounts.user.phoneNumber;
        }
    };
    const handleOtp = () => {
        const otpData = {
            phoneNumber: phonenumber(),
            otp: formData.otp
        };
        dispatch(runVerifyOtp(otpData));
    };
    const [otpError, setOtpError] = useState('');
    useEffect(() => {
        if (otpErrorMessage) {
            setOtpError(otpErrorMessage.response.data.message);
        } else if (otpActData) {
            //  //console.log('otpErrorI');
            router.push({
                pathname: '/Onboarding/ExistingProfileSetup',
                query: { id: 1 }
            });
        }
    }, [otpErrorMessage, otpActData]);

    //  //console.log(page);

    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return (
                    <FirstStep
                        formData={formData}
                        setFormData={setFormData}
                        action={handleOtp}
                        otpError={otpError}
                    />
                );
            case 1:
                return (
                    <SecondStep
                        errorMessage={errorMessage}
                        loads={loads}
                        move={() => {
                            // //console.log(formData.emailData);
                            let userEmail;
                            if (
                                newAccounts?.email !== null &&
                                newAccounts?.email !== undefined
                            ) {
                                userEmail = newAccounts.email;
                            } else if (
                                newAccounts?.user?.email !== undefined &&
                                newAccounts?.user?.email !== null
                            ) {
                                userEmail = newAccounts.user.email;
                            } else {
                                userEmail = formData.emailData;
                            }
                            // //console.log(newAccounts.email);
                            // //console.log(newAccounts.user);
                            // //console.log(formData.emailData);
                            const userData = {
                                userId: formData.userId,
                                email: userEmail,
                                password: formData.password,
                                confirmPassword: formData.confPassword
                            };
                            // //console.log(userData);
                            dispatch(existingUserProfileData(userData));
                            // setLoading((prev) => !prev);
                            setLoads((prev) => !prev);
                        }}
                        formData={formData}
                        setFormData={setFormData}
                        action={() => {
                            router.push({
                                pathname: '/Onboarding/ExistingProfileSetup',
                                query: { id: 0 }
                            });
                        }}
                        loading={loading}
                        setLoading={setLoading}
                        err={errorMessage}
                    />
                );

            case 2:
                return (
                    <div className={styles.livenes}>
                        <Liveness
                            action={() => {
                                setLoads((prev) => !prev);
                                router.push({
                                    pathname:
                                        '/Onboarding/ExistingProfileSetup',
                                    query: { id: 3 }
                                });
                            }}
                            cookie={cookie}
                            loading={loading}
                            setLoading={setLoading}
                            // action={handleSubmitt}
                        />
                    </div>
                );

            case 3:
                return (
                    <StepThree
                        action={() => {
                            router.push({
                                pathname: '/Onboarding/ExistingProfileSetup',
                                query: { id: 2 }
                            });
                        }}
                        handleSubmit={handleSubmit}
                        handleSubmitNew={handleSubmitNew}
                        countryNames={country}
                        mainAccount={newAccounts}
                    />
                );
            case 4:
                return (
                    <StepFour
                        title={pageType}
                        action={() => {
                            router.push({
                                pathname: '/Onboarding/ExistingProfileSetup',
                                query: { id: 3 }
                            });
                            setPageType('');
                        }}
                        formData={formData}
                        setFormData={setFormData}
                        countryNames={country}
                    />
                );
            default:
                return <FirstStep />;
        }
    };
    function handleSubmit() {
        // setLoads((prev) => !prev);
        router.push({
            pathname: '/Onboarding/ExistingProfileSetup',
            query: { id: 4 }
        });
        setFormData({ ...formData, type: 'true' });
    }
    function handleSubmitNew() {
        router.push({
            pathname: '/Onboarding/ExistingProfileSetup',
            query: { id: 4, pageType: 'New' }
        });
        setFormData({ ...formData, type: 'false' });
    }

    useEffect(() => {
        // //console.log('new bvn:', bvnNin.message);
        if (existingUserProfilee.data) {
            setCookies(existingUserProfilee.data.data.token);
            if (
                existingUserProfilee.data.message ==
                    'Profile setup Intialization completed' ||
                errorMessage?.response?.data?.message ===
                    'An account already exists with this email, if you have already setup your profile with this email just login'
            ) {
                let loginWith = localStorage.getItem('LoginWith');
                if (loginWith !== null) {
                    //  //console.log(loginWith);
                    router.push({
                        pathname: '/Onboarding/ExistingProfileSetup',
                        query: { id: 2 }
                    });
                    setFormData({ ...formData, type: 'true' });
                } else if (loginWith === null) {
                    router.push({
                        pathname: '/Onboarding/ExistingProfileSetup',
                        query: { id: 3 }
                    });
                    setFormData({ ...formData, type: 'true' });
                }
            }
        }
    }, [existingUserProfilee]);
    return (
        <>
            <>{conditionalComponent()}</>
        </>
    );
};

export default ExistingMultiStep;
