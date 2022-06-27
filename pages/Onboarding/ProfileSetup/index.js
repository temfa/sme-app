import React, { useState } from 'react';
import { ButtonComp, Progressbar } from '../../../components';
import lineImage from '../../../public/Assets/Svgs/Rectangle 12.svg';
import Image from 'next/image';
// import ProfileCard from '../../../components/ReusableComponents/ProfileCard';
import RegisteredForm from '../../../components/layout/RegisteredForms/RegisteredForm';
import StepTwoBVNAuthenticator from '../../../components/layout/NotRegisteredForms/StepTwoBVNAuthenticator';
import StepThreeCompleteProfile1 from '../../../components/layout/NotRegisteredForms/StepThreeCompleteProfile1';
import StepFourCompProfile2BizDetails from '../../../components/layout/NotRegisteredForms/StepFourCompProfile2BizDetails';
import StepFiveSuccessPage from '../../../components/layout/NotRegisteredForms/StepFiveSucceesPage';
import Card from '../../../components/layout/NotRegisteredForms/Card';
import styles from './styles.module.css';

const ProfileSetup = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [bgcolor, setBgcolor] = useState(false);
    const [showFirstStep, setShowFirstStep] = useState(true);
    const [showSecondStep, setShowSecondStep] = useState(false);
    const [showThirdStep, setShowThirdStep] = useState(false);
    const [showFourthStep, setShowFourthStep] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [progress, setProgress] = useState('25%');
    const [switchs, setSwitch] = useState(true);

    // A function to handle business registration status
    const handleRegistrationStatus = () => {
        setIsRegistered(true);
        setBgcolor((prevState) => !prevState);
    };
    const switchRegistrationStatus = () => {
        setIsRegistered(false);
        setBgcolor((prevState) => !prevState);
    };

    // Handle the mulstistep hide and display of a particular step
    const handleShowSecondStep = () => {
        setShowSecondStep(true);
        setShowFirstStep(false);
    };

    // Handle the multistep to display the third step
    const handleShowThirdStep = () => {
        setShowThirdStep(true);
        setShowSecondStep(false);
    };

    // Handle the multistep to display the fourth step
    const handleShowFourthStep = () => {
        setShowThirdStep(false);
        setShowFourthStep(true);
    };

    // Handle the multistep to display the fifth-success step
    const handleShowSuccessStep = () => {
        // alert('working');
        setShowThirdStep(false);
        setShowSuccess(true);
    };
    const handleShowThirdStepOnly = () => {
        // setShowThirdStep(true);
        // showFirstStep(false);
        // setShowSecondStep(false);
        // setShowFourthStep(false);
        alert('working');
    };

    return (
        <div className={styles.bodyWrapper}>
            {showFirstStep ? (
                <Card>
                    {/* <ProfileCard width="50%" height="0"> */}
                    <div className={styles.cardHeading}>
                        <h3 className={styles.LeftHeading}>Profile Setup</h3>
                        <Progressbar
                            bgcolor="#6CCF00"
                            progressCount={progress}
                            height={14}
                            progWidth="27%"
                        />
                        {/* <Imag 
                    src="/width" 
                    alt="lineImage" /> */}
                    </div>
                    <p
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
                                Yes
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
                                No
                            </p>
                        </span>
                    </div>

                    {/* THE FORM */}
                    <RegisteredForm
                        isRegistered={isRegistered}
                        handleShowSecondStep={handleShowSecondStep}
                    />

                    {/* END OF THE FORM */}

                    {/* <ButtonComp
                            width="100%"
                            height="52px"
                            text="Next"
                            type="button"
                            backgroundColor="#6ccf00"
                            color="#ffffff"
                            fontWeight="900"
                            margin="80% 0 0 0"
                            onClick={handleShowSecondStep}
                        /> */}
                </Card>
            ) : (
                ''
            )}

            {/* Second step of the multistep form if registered */}
            {showSecondStep ? (
                <StepTwoBVNAuthenticator
                    handleShowThirdStep={handleShowThirdStep}
                />
            ) : (
                ''
            )}

            {showThirdStep ? (
                <StepThreeCompleteProfile1
                    handleShowThirdStepOnly={handleShowThirdStepOnly}
                    handleShowSuccessStep={handleShowSuccessStep}
                />
            ) : (
                ''
            )}
            {showSuccess ? (
                <StepFiveSuccessPage
                    handleShowSuccessStep={handleShowSuccessStep}
                />
            ) : (
                ''
            )}
        </div>
    );
};

export default ProfileSetup;
