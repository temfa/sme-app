import React, { useState, useEffect } from 'react';
import ButtonComp from '../Button';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import {
    loadbank,
    getBeneficiariesData,
    postInterBankEnquiry
} from '../../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import BeneficiaryAvatarSvg from '../ReusableSvgComponents/BeneficiaryAvatarSvg';
import SourceSvg from '../ReusableSvgComponents/SourceSvg';
import Loader from '../Loader';

const SingleTransfer = ({
    othersaction,
    firstTitle,
    buttonText,
    scheduleLater,
    isLoading
}) => {
    const [activeBtn, setActiveBtn] = useState(false);
    const [bank, setBank] = useState([]);
    const [interEnquiry, setInterEnquiry] = useState('');
    const [beneficiaries, setBeneficiaries] = useState([]);
    const dispatch = useDispatch();
    const { banks } = useSelector((state) => state.banksReducer);
    const { getBeneficiaries } = useSelector(
        (state) => state.getBeneficiariesReducer
    );
    const { interBankEnquiry, errorMessageInterBankEnquiry } = useSelector(
        (state) => state.interBankEnquiryReducer
    );
    const interBankEnquiryCheck = () => {
        if (interBankEnquiry !== null) {
            setInterEnquiry(interBankEnquiry);
        }
    };
    useEffect(() => {
        interBankEnquiryCheck();
    }, [interBankEnquiry]);
    useEffect(() => {
        dispatch(loadbank('ENG'));
        dispatch(getBeneficiariesData());
    }, []);
    useEffect(() => {
        if (banks !== null) {
            setBank(banks);
        }
    }, [banks]);
    useEffect(() => {
        if (getBeneficiaries !== null) {
            setBeneficiaries(getBeneficiaries);
        }
    }, [getBeneficiaries]);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    return (
        <div>
            <h2 className={styles.firstTitle}>{firstTitle}</h2>
            <div className={styles.beneficiary}>
                <div className={styles.beneficiaryHeader}>
                    <h2>Beneficiaries</h2>
                    <p>View all</p>
                </div>
                <div className={styles.beneficiaryBody}>
                    {!beneficiaries.beneficiaries?.length ? (
                        <h2>You do not have any Beneficiaries at the Moment</h2>
                    ) : (
                        beneficiaries.beneficiaries?.map(
                            (beneficiaries, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={styles.beneficiarySingle}
                                    >
                                        <BeneficiaryAvatarSvg />
                                        <p className={styles.name}>
                                            {beneficiaries.beneficiaryName}
                                        </p>
                                        <p className={styles.benebank}>
                                            {beneficiaries.bankName}
                                        </p>
                                    </div>
                                );
                            }
                        )
                    )}
                </div>
            </div>
            <form onSubmit={handleSubmit(othersaction)}>
                <div className={styles.source}>
                    <h2>
                        Source <span>- Marvelous N******</span>
                    </h2>
                    <SourceSvg />
                </div>
                <div className={styles.narration}>
                    <label> Account Number</label>
                    <input
                        {...register('accountNumber', {
                            required: 'Please enter  Acount Number',
                            pattern: {
                                value: /^[0-9 ]/i,
                                message: 'Account Number must be a number'
                            },
                            minLength: {
                                value: 10,
                                message: 'Min length is 10'
                            },
                            maxLength: {
                                value: 10,
                                message: 'Max length is 10'
                            }
                        })}
                        onInput={(e) => {
                            if (e.target.value.length === 10) {
                                const details = {
                                    accountNumber: e.target.value
                                };
                                dispatch(postInterBankEnquiry(details));
                                console.log();
                            }
                        }}
                        type="number"
                        placeholder="Enter account number here"
                    />
                    <p className={styles.error}>
                        {errors?.accountNumber?.message}
                    </p>
                </div>
                {interEnquiry ? (
                    <div className={styles.narration}>
                        <label> Account Name</label>
                        <input
                            {...register('accountName')}
                            type="text"
                            value={interEnquiry.accountName}
                        />
                        <p className={styles.error}>
                            {errors?.accountNumber?.message}
                        </p>
                    </div>
                ) : null}

                <div className={styles.narration}>
                    <label>Choose Bank</label>
                    <select
                        {...register('bankName', {
                            required: 'Choose a bank'
                        })}
                        name="bankName"
                    >
                        <option value="">Select Bank</option>
                        <option value="Ecobank">Ecobank</option>
                        {bank?.map((bank, index) => {
                            return (
                                <option value={bank.institutionId} key={index}>
                                    {bank.institutionName}
                                </option>
                            );
                        })}
                    </select>
                    {errors.bankName && (
                        <p className={styles.error}>
                            {errors?.bankName?.message}
                        </p>
                    )}
                </div>
                <div className={styles.narration}>
                    <label>Enter Amount</label>
                    <input
                        {...register('amount', {
                            required: 'Please enter Amount',
                            pattern: {
                                value: /^[0-9]/i,
                                message: 'Amount can only be number '
                            }
                        })}
                        type="number"
                        placeholder="5,000,000,000.00"
                        onChange={(e) => {
                            if (e?.target.value.length === 0) {
                                setActiveBtn(false);
                            } else if (e?.target.value.length > 0) {
                                setActiveBtn(true);
                            }
                        }}
                    />
                    <p className={styles.error}>{errors?.amount?.message}</p>
                </div>
                <div className={styles.narration}>
                    <label>
                        Transfer Narration <span>(optional)</span>
                    </label>
                    <input
                        {...register('narration', {
                            pattern: {
                                value: /^[A-Za-z ]+$/i,
                                message: 'Only Alphabelts allowed'
                            }
                        })}
                        type="text"
                        placeholder="Enter Narration"
                        name="narration"
                    />
                    <p className={styles.error}>{errors?.narration?.message}</p>
                </div>
                {/* <div className={styles.repeat}>
                    <input type="checkbox" />
                    <p>Do you want to set this as a repeat transaction?</p>
                </div> */}
                <div className={styles.saveBene}>
                    <label className={styles.beneCheck}>
                        <input
                            type="checkbox"
                            name="beneficiary"
                            {...register('beneficiary')}
                        />
                        <span>
                            <i></i>
                        </span>
                    </label>
                    <p>Save Beneficiary</p>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <ButtonComp
                        disabled={activeBtn}
                        active={activeBtn ? 'active' : 'inactive'}
                        text={buttonText}
                        type="submit"
                    />
                )}
                <p className={styles.schedule}>
                    Not paying now?{' '}
                    <span onClick={scheduleLater}>Schedule for Later</span>
                </p>
            </form>
        </div>
    );
};

export default SingleTransfer;
