import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Card from '../../../components/layout/NotRegisteredForms/Card';
import Link from 'next/link';
import Success from '../../../components/ReusableComponents/Success';
import { ButtonComp } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';

const ExistingSuccess = ({ handleShowSuccessStep }) => {
    const [activeBtn, setActiveBtn] = useState(true);
    // let accountDetails;
    // let accountNumber;
    // if (typeof window !== 'undefined') {
    //     accountDetails = window.localStorage.getItem('accountNumber');
    //     if (accountDetails === null) {
    //         accountNumber = '';
    //     } else {
    //         accountNumber = JSON.parse(accountDetails);
    //     }
    // }
    const { bankAccounts, errorMessage } = useSelector(
        (state) => state.bankAccountsReducer
    );
    useEffect(() => {
        dispatch(bankAccountsData());
        console.log(bankAccounts);
    }, [bankAccounts]);
    return (
        <div className={styles.cover}>
            <>
                <div className={styles.Success}>
                    <Success />
                </div>
                <div className={styles.successBody}>
                    <h2 className={styles.h2}>
                        Your Business account is ready!
                    </h2>
                    <h3>
                        Your Account Number is <span>{bankAccounts}</span>
                    </h3>
                    <Link href="/Dashboard">
                        <ButtonComp
                            disabled={activeBtn}
                            active={activeBtn ? 'active' : 'inactive'}
                            // onClick={handleSubmit}
                            type="submit"
                            text="Proceed To Dashboard"
                        />
                    </Link>
                    <p>
                        With your Ellevate Account, you have Deposit/Inflow
                        Limit: N1,000,000
                    </p>
                </div>
            </>
        </div>
    );
};

export default ExistingSuccess;
