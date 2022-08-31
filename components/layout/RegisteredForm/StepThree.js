import React, { useState } from 'react';
import ButtonComp from '../../ReusableComponents/Button';
import styles from './styles.module.css';
import Link from 'next/link';
import Progressbar from '../../ReusableComponents/Progressbar';
import ArrowBackSvg from '../../ReusableComponents/ArrowBackSvg';

const StepThree = ({ action, handleSubmit, handleSubmitNew }) => {
    const account = localStorage.getItem('displayAccount');
    const accountDetails = JSON.parse(account);
    const [isRegistered, setIsRegistered] = useState(false);
    const [progress, setProgress] = useState('50%');
    const [bgcolor, setBgcolor] = useState(false);

    const [bcolor, setBColor] = useState(false);

    const handleRegistrationStatus = () => {
        setIsRegistered(true);
        setBgcolor(true);
    };
    const switchRegistrationStatus = () => {
        setIsRegistered(false);
        setBgcolor(false);
    };
    const handleBusiness = () => {
        setBColor(false);
    };
    const handleBusinessTog = () => {
        setBColor(true);
    };
    let countryName = '';
    let countryNames;

    if (typeof window !== 'undefined') {
        countryName = window.localStorage.getItem('country');
        if (countryName === null) {
            countryNames = window.localStorage.getItem('country');
        } else {
            countryNames = JSON.parse(countryName);
        }
    }
    const [activeBtn, setActiveBtn] = useState(true);
    return (
        <div className={styles.body}>
            <section className={styles.sectionI}>
                <div>
                    <img src="../Assets/Images/profileSetup1.png" alt="" />
                </div>
            </section>
            <section className={styles.sectionII}>
                <div className={styles.secondStepForm}>
                    <div className={styles.cardHeading}>
                        <ArrowBackSvg action={action} />
                        <div>
                            <h3 className={styles.LeftHeading}>
                                Complete your Profile
                            </h3>
                        </div>
                        {/* <Imag
                    src="/width"
                    alt="lineImage" /> */}
                    </div>
                    {/* <Imag
                    src="/width"
                    alt="lineImage" /> */}
                    {/* <p
                style={{
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '19px',
                    color: '#3E3E3E'
                }}
            >
                Is your business registered?
            </p>
            <div className={styles.ButtonWrapper}>
                <span
                    className={styles.ToggleNo}
                    onClick={switchRegistrationStatus}
                    style={
                        bgcolor
                            ? { background: '#f8f8f8' }
                            : { background: '#6ccf00' }
                    }
                >
                    <p
                        className={styles.ToggleNoText}
                        style={
                            bgcolor
                                ? { color: '#a5a5a5' }
                                : { color: '#ffffff' }
                        }
                    >
                        No
                    </p>
                </span>
                <span
                    className={styles.ToggleYes}
                    onClick={handleRegistrationStatus}
                    style={
                        bgcolor
                            ? { background: '#6ccf00' }
                            : { background: '#f8f8f8' }
                    }
                >
                    <p
                        className={styles.ToggleYesText}
                        style={
                            bgcolor
                                ? { color: '#ffffff' }
                                : { color: '#a5a5a5' }
                        }
                    >
                        Yes
                    </p>
                </span>
            </div> */}
                    {/* <p>
                Contine with your personal account or open a new business
                account
            </p> */}
                    <div className={styles.formWrapper}>
                        <div className={styles.formInner}>
                            {accountDetails.email === null ? null : (
                                <div>
                                    <label>Email </label>

                                    <input
                                        placeholder="Enter Your Email"
                                        className={styles.textInput}
                                        required
                                        readOnly
                                        value={accountDetails.email}
                                    />
                                </div>
                            )}

                            <div>
                                <label>Account Number </label>

                                <input
                                    placeholder="Account Numberl"
                                    className={styles.textInput}
                                    required
                                    readOnly
                                    value={accountDetails.accountNumber}
                                />
                            </div>
                            <div>
                                <label>Full Name </label>

                                <input
                                    placeholder="Enter Your Email"
                                    className={styles.textInput}
                                    required
                                    readOnly
                                    value={accountDetails.fullName}
                                />
                            </div>
                            <div>
                                <label>Phone Number </label>
                                <div className={styles.phone}>
                                    <div className={styles.phoneHeader}>
                                        <span>
                                            <img
                                                src={countryNames.flags.svg}
                                                alt=""
                                            />
                                        </span>
                                        <p>{countryNames.baseCurrency}</p>
                                    </div>
                                    <div className={styles.phoneDetails}>
                                        {/* <p>{countryNames.countryCode}</p> */}
                                        <input
                                            type="number"
                                            placeholder="812 345 6789"
                                            value={accountDetails.phoneNumber}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={styles.genBtm}
                                style={{ marginBottom: '0px' }}
                            >
                                <label>Your Gender </label>

                                <select name="" id="">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={handleSubmitNew}>
                            Contine with this Personal account
                        </button>
                        <p onClick={handleSubmit} className={styles.open}>
                            Click to open a <span>New Busiess Account</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StepThree;
