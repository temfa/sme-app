import React, { useEffect, useState } from 'react';
import { ButtonComp, Messagesvg } from '../../components';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import Loading from './Loading';
import Failed from './Failed';
const Verify = () => {
    // const router = useRouter();
    const [activeBtn, setActiveBtn] = useState(true);
    const [res, setRes] = useState('');
    const [resError, setResErros] = useState('');
    const { query, isReady, push } = useRouter();
    const handleClick = () => {
        push('./Auth/Login');
    };
    const [timeInterval, setTimeInterval] = useState(0);

    setTimeout(() => {
        setTimeInterval(timeInterval + 1);
    }, 1000);
    useEffect(() => {
        var token = query['token'];
        console.log('hello', token);
        if (!isReady) return;
        if (token) {
            setTimeout(() => {
                axios
                    .get(
                        `https://ellevate-app.herokuapp.com/verification/email/${token}`
                    )
                    .then((response) => {
                        console.log(response.data.message);
                        setRes(response.data.message);
                    })
                    .catch((error) => {
                        console.log(error.response.data.statusCode);
                        setResErros(error.response.data.statusCode);
                    });
            }, 1000);
        }
    }, [isReady, timeInterval]);

    return (
        <>
            {res === 'Email verified successfully' ? (
                <div className={styles.verifyCov}>
                    <div className={styles.body}>
                        <Messagesvg />
                        <div className={styles.email}>
                            <h3 className={styles.verifyEmail}>
                                Your email address has been verfied!
                            </h3>
                        </div>

                        <div onClick={handleClick}>
                            <ButtonComp
                                disabled={activeBtn}
                                active={activeBtn ? 'active' : 'inactive'}
                                type="submit"
                                text="Continue To Login"
                            />
                        </div>
                    </div>
                </div>
            ) : resError === 400 ? (
                <Failed />
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Verify;
