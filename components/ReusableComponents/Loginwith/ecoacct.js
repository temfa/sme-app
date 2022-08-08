import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import ButtonComp from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { accountNumberData } from '../../../redux/actions/actions';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Loader from '../Loader';

const Ecoacct = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [outType, setOutType] = useState();
    const [activeBtn, setActiveBtn] = useState(true);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { accountNumber, errorMessages } = useSelector(
        (state) => state.accountNumberReducer
    );
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const eccoacctSubmit = (data) => {
        setLoading(true);
        const postData = {
            accountNo: data.accountNumber
        };
        dispatch(accountNumberData(postData));
    };
    const acctTest = () => {
        console.log(errorMessages);
        if (errorMessages) {
            setError(errorMessages);
            setLoading(false);
        } else if (accountNumber.message === 'SUCCESS') {
            router.push('/Onboarding/ExistingProfileSetup');
        }
    };
    useEffect(() => {
        acctTest();
    }, [accountNumber, errorMessages]);
    return (
        <form onSubmit={handleSubmit(eccoacctSubmit)}>
            {error ? <p className={styles.error}>{error}</p> : null}
            <div className={styles.cover}>
                <div>
                    <label>Enter Your Ecobank Account Number</label>
                    <br />
                    <input
                        placeholder="123*******62"
                        type="text"
                        className={styles.idInput}
                        {...register('accountNumber', {
                            required: 'Account Number is Required'
                        })}
                        name="accountNumber"
                    />
                </div>
                <p className={styles.error}>{errors?.accountNumber?.message}</p>
            </div>
            <div className={styles.btn}>
                {/* <Link href="/Onboarding/ExistingProfileSetup"> */}
                {loading ? (
                    <Loader />
                ) : (
                    <ButtonComp
                        disabled={activeBtn}
                        active={activeBtn ? 'active' : 'inactive'}
                        text="Login"
                        type="submit"
                    />
                )}
                {/* </Link> */}
            </div>
        </form>
    );
};

export default Ecoacct;
