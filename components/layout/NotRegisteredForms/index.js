import React, { useState, useEffect } from 'react';
import Card from './Card/index';
import ButtonComp from '../../ReusableComponents/Button';
import RegisteredForm from './RegisteredForm';
import StepTwoBVNAuthenticator from './StepTwoBVNAuthenticator';
import StepThreeCompleteProfile1 from './StepThreeCompleteProfile1';
import styles from './styles.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
    createProfileSetup,
    verifyOtp,
    loadCountry
} from '../../../redux/actions/actions';
const ProfileSetups = () => {
    const dispatch = useDispatch();
    const { countries } = useSelector((state) => state.countryReducer);

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        type: 'UNREGISTERED BUSINESS',
        rcnumber: '',
        tinNumber: '',
        bvNumber: '',
        phoneNumber: '',
        countryCode: '',
        dateOfBirth: '',
        bvnOtp: '',
        gender: '',
        bussinessName: '',
        bussinessName: '',
        businessType: '',
        streetName: '',
        localGoverment: '',
        city: '',
        state: '',
        custCategory: 'Individual',
        referralCode: ''
    });
    const countryName = localStorage.getItem('country');
    const countryNames = JSON.parse(countryName);
    useEffect(() => {
        dispatch(loadCountry());
    }, []);
    useEffect(() => {
        if (countries !== null) {
            countries.filter((item) => {
                if (item.name === countryNames.countriess) {
                    setFormData({
                        ...formData,
                        countryCode: item.countryCode
                    });
                }
            });
        }
    }, [countries]);
    const [activeBtn, setActiveBtn] = useState(true);
    const { isLoading, profile, errorMessages } = useSelector(
        (state) => state.profileSetup
    );
    const { Loading, otp, otpErrorMessage } = useSelector((state) => state.otp);
    const [error, setError] = useState([]);
    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return (
                    <RegisteredForm
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
            case 1:
                return (
                    <StepTwoBVNAuthenticator
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
            case 2:
                return (
                    <StepThreeCompleteProfile1
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
            default:
                return (
                    <RegisteredForm
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
        }
    };
    // useEffect(() => {
    //     console.log(errorMessages, otpErrorMessages);
    // }, []);

    function handleSubmit() {
        // console.log('firstAPi');

        const profileData = {
            type: formData.type,
            registrationNumber: formData.rcnumber,
            tin: formData.tinNumber,
            bvn: formData.bvNumber,
            phoneNumber: formData.countryCode + formData.phoneNumber,
            countryCode: formData.countryCode,
            dob: formData.dateOfBirth
        };
        setError(errorMessages);
        if (!errorMessages) {
            setPage(page + 1);
        }
        dispatch(createProfileSetup(profileData));
    }

    const handleSubmitII = () => {
        const otpData = {
            phoneNumber: formData.countryCode + formData.phoneNumber,
            otp: '123456'
        };
        dispatch(verifyOtp(otpData));
        console.log('secondAPi');
        setError(otpErrorMessage);
        if (!otpErrorMessage) {
            setPage(page + 1);
        }
    };
    return (
        <Card>
            <div className={styles.error}>{error}</div>
            {conditionalComponent()}

            {page === 2 ? null : (
                <ButtonComp
                    disabled={activeBtn}
                    active={activeBtn ? 'active' : 'inactive'}
                    onClick={page === 0 ? handleSubmit : handleSubmitII}
                    type="submit"
                    text={page === 2 ? 'Next' : 'Next'}
                />
            )}
        </Card>
    );
};

export default ProfileSetups;