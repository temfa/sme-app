import React, { useState, useEffect } from 'react';
import ButtonComp from '../Button';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import { loadCountryAsync } from '../../../redux/reducers/countries/country.thunks';
import { loadbankAsync } from '../../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const ForeignTransfer = ({ action, firstTitle, buttonText }) => {
    const [countrys, setCountry] = useState([]);
    const [bank, setBank] = useState([]);
    const dispatch = useDispatch();
    const { countries } = useSelector((state) => state.countryReducer);
    const { banks } = useSelector((state) => state.banksReducer);

    useEffect(() => {
        dispatch(loadCountryAsync());
        if (countries !== null) {
            setCountry(countries);
        }
    }, [countries]);
    useEffect(() => {
        dispatch(loadbankAsync('ENG'));
        if (banks !== null) {
            setBank(banks);
        }
    }, [banks]);
    const [activeBtn, setActiveBtn] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    console.log(bank);
    return (
        <div>
            <form onSubmit={handleSubmit(action)}>
                <h2>{firstTitle}</h2>
                <div className={styles.destinationCountry}>
                    <div>
                        <label>Destination Country</label>
                        <select
                            {...register('destinationCountry', {
                                required: 'Destination Country is Required'
                            })}
                            name="destinationCountry"
                        >
                            <option value="">Destination Country</option>
                            {countrys?.map((item) => {
                                return (
                                    <option value={item.name} key={item.id}>
                                        {item.name}
                                    </option>
                                );
                            })}
                        </select>
                        <p className={styles.error}>
                            {errors?.destinationCountry?.message}
                        </p>
                    </div>
                    <div>
                        <label>Transfer Type</label>
                        <select
                            {...register('transferType', {
                                required: 'Transfer Type is required'
                            })}
                            name="transferType"
                        >
                            <option value="">others </option>
                            <option value="Bank Transfer">
                                Bank Transfer{' '}
                            </option>
                        </select>
                        <p className={styles.error}>
                            {errors?.transferType?.message}
                        </p>
                    </div>
                </div>
                <div className={styles.accountDetails}>
                    <label>Enter Destinaton Account Details</label>
                    <div className={styles.accountDetailsBody}>
                        <label>Beneficiaries</label>
                        <input
                            {...register('beneficiaries', {
                                required: 'Beneficiary is required',
                                pattern: {
                                    value: /^[A-Za-z ]+$/i,
                                    message: 'Only Alphabelts allowed'
                                }
                            })}
                            name="beneficiaries"
                            type="text"
                            placeholder="Enter Beneficiary"
                        />
                        <p className={styles.error}>
                            {errors?.beneficiaries?.message}
                        </p>
                        <div className={styles.accountDetailSingle}>
                            <div className={styles.accountDetailSingleInput}>
                                <label> Account Number</label>
                                <input
                                    {...register('accountNumber', {
                                        required: 'Account Nmber is required',
                                        pattern: {
                                            value: /^[0-9]/i,
                                            message:
                                                'Account Number can only be number '
                                        }
                                    })}
                                    name="accountNumber"
                                    type="text"
                                    placeholder="Enter account number here"
                                />
                                <p className={styles.error}>
                                    {errors?.accountNumber?.message}
                                </p>
                            </div>
                            <div className={styles.accountDetailSingleSelect}>
                                <label>Bank</label>
                                <select
                                    {...register('bankName', {
                                        required: 'Bank Name is required'
                                    })}
                                    name="bankName"
                                >
                                    <option value="">Select Bank</option>
                                    {bank?.map((bank, index) => {
                                        return (
                                            <option
                                                value={bank.institutionName}
                                                key={index}
                                            >
                                                {bank.institutionName}
                                            </option>
                                        );
                                    })}
                                </select>
                                <p className={styles.error}>
                                    {errors?.bankName?.message}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.EnterAmount}>
                    <div>
                        <label>Enter Amount</label>
                        <input
                            {...register('amount', {
                                required: 'Amount is required',
                                pattern: {
                                    value: /^[0-9]/i,
                                    message: 'Amount can only be number '
                                }
                            })}
                            name="amount"
                            type="text"
                            placeholder="5,000,000,000.00"
                        />
                        <p className={styles.error}>
                            {errors?.amount?.message}
                        </p>
                    </div>
                    <div>
                        <label>Account to Debit</label>
                        <select
                            {...register('accountDebit', {
                                required: 'Account to Debit is required'
                            })}
                            name="accountDebit"
                        >
                            <option value="">Marvelous Solutions</option>
                            <option value="Akinfe Temitope">
                                Akinfe Temitope
                            </option>
                        </select>
                        <p className={styles.error}>
                            {errors?.accountDebit?.message}
                        </p>
                    </div>
                </div>
                <div className={styles.narration}>
                    <label>Transfer Narration</label>
                    <input
                        {...register('narration', {
                            required: 'Please enter your Narration',
                            pattern: {
                                value: /^[A-Za-z ]+$/i,
                                message: 'Only Alphabelts allowed'
                            }
                        })}
                        name="narration"
                        type="text"
                        placeholder="5,000,000,000.00"
                        onChange={(e) => {
                            if (e?.target.value.length === 0) {
                                setActiveBtn(false);
                            } else if (e?.target.value.length > 0) {
                                setActiveBtn(true);
                            }
                        }}
                    />
                </div>
                <div className={styles.repeat}>
                    <input type="checkbox" />
                    <p>Do you want to set this as a repeat transaction?</p>
                </div>
                <ButtonComp
                    disabled={activeBtn}
                    active={activeBtn ? 'active' : 'inactive'}
                    text={buttonText}
                    type="submit"
                />
                <p className={styles.schedule}>
                    Not paying now?<span>Schedule for Later</span>
                </p>
            </form>
        </div>
    );
};

export default ForeignTransfer;
