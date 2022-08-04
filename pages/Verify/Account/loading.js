import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../redux/helper/apiClient';
import apiRoutes from '../../../redux/helper/apiRoutes';
import styles from './styles.module.css';

const AccountLoading = () => {
    const [accountInfo, setAccountInfo] = useState('');
    const router = useRouter();
    const [timeInterval, setTimeInterval] = useState(0);

    setTimeout(() => {
        setTimeInterval(timeInterval + 1);
    }, 40000);

    useEffect(() => {
        setTimeout(() => {
            // do something here 1 sec after current has changed

            const accountData = {
                affiliateCode: 'ENG',
                ccy: 'NGN'
            };
            axiosInstance
                .post(`${apiRoutes.createAccount}`, accountData)
                .then((response) => {
                    console.log('Accoutn Info', response.data);
                    setAccountInfo(response.data.message);
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                    setAccountInfo(error.response.data.message);
                });
            if (
                accountInfo ===
                'You already have an account with us. Please contact us for more information'
            ) {
                router.push('../../Succes');
            } else {
                router.push('../Failed');
            }
        }, 40000);
    }, [timeInterval]);

    return (
        <>
            <div className={styles.cover}>
                <div className={styles.covInn}>
                    <div className={styles.load}>
                        <svg
                            width="59"
                            height="15"
                            viewBox="0 0 59 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.svg}
                        >
                            <circle
                                cx="7.5"
                                cy="7.25684"
                                r="7"
                                fill="#6CCF00"
                            />
                            <circle
                                cx="29.5"
                                cy="7.25684"
                                r="7"
                                fill="#6CCF00"
                            />
                            <circle
                                cx="51.5"
                                cy="7.25684"
                                r="7"
                                fill="#6CCF00"
                            />
                        </svg>
                    </div>
                    <p className={styles.kindly}>
                        Kindly wait while the system fetches your account
                        number, this will take a moment.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AccountLoading;