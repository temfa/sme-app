import React from 'react';
import { ButtonComp } from '../../../components';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Login = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        router.push('../../Onboarding/ProfileSetup');
    };

    console.log(watch('email')); // watch input value by passing the name of it

    return (
        <div className={styles.sectionCove}>
            <section className={styles.sectionI}>
                <div>
                    <h2 className={styles.bvn}>
                        ellevate your Business to the the
                        <span> next level!</span>
                    </h2>
                    <svg
                        width="2"
                        height="227"
                        viewBox="0 0 2 227"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 0V387"
                            stroke="white"
                            strokeDasharray="8 8"
                        />
                    </svg>
                </div>
            </section>
            <section className={styles.sectionII}>
                <div>
                    <div className={styles.welc}>
                        <h2>Welcome Back!</h2>
                        <p>
                            Marvelous Solutions, kindly enter your details to
                            Login.
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.form}
                    >
                        <div>
                            <label>Email Address </label>
                            {errors.email?.message}
                            <br />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Name"
                                className={styles.emailInput}
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        // eslint-disable-next-line
                                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Invalid email address'
                                    }
                                })}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <br />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                className={styles.passwordInput}
                                required
                                {...register('password', {
                                    required: 'Password is required'
                                })}
                            />
                            {/* <svg
                                className={styles.visible}
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.1805 8.44922L11.093 7.36172C11.2055 6.77422 11.0367 6.22422 10.5867 5.71172C10.1367 5.19922 9.55547 4.99922 8.84297 5.11172L7.75547 4.02422C7.96797 3.92422 8.18347 3.84922 8.40197 3.79922C8.62097 3.74922 8.85547 3.72422 9.10547 3.72422C10.043 3.72422 10.84 4.05222 11.4965 4.70822C12.1525 5.36472 12.4805 6.16172 12.4805 7.09922C12.4805 7.34922 12.4555 7.58372 12.4055 7.80272C12.3555 8.02122 12.2805 8.23672 12.1805 8.44922ZM14.5805 10.8117L13.493 9.76172C13.968 9.39922 14.39 9.00222 14.759 8.57072C15.1275 8.13972 15.443 7.64922 15.7055 7.09922C15.0805 5.83672 14.1835 4.83347 13.0145 4.08947C11.846 3.34597 10.543 2.97422 9.10547 2.97422C8.74297 2.97422 8.38672 2.99922 8.03672 3.04922C7.68672 3.09922 7.34297 3.17422 7.00547 3.27422L5.84297 2.11172C6.35547 1.89922 6.88047 1.73972 7.41797 1.63322C7.95547 1.52722 8.51797 1.47422 9.10547 1.47422C10.993 1.47422 12.6742 1.99597 14.1492 3.03947C15.6242 4.08347 16.693 5.43672 17.3555 7.09922C17.068 7.83672 16.69 8.52122 16.2215 9.15272C15.7525 9.78372 15.2055 10.3367 14.5805 10.8117ZM14.9555 15.4242L11.8055 12.3117C11.368 12.4492 10.9275 12.5525 10.484 12.6215C10.04 12.69 9.58047 12.7242 9.10547 12.7242C7.21797 12.7242 5.53672 12.2025 4.06172 11.159C2.58672 10.115 1.51797 8.76172 0.855469 7.09922C1.11797 6.43672 1.44922 5.82097 1.84922 5.25197C2.24922 4.68347 2.70547 4.17422 3.21797 3.72422L1.15547 1.62422L2.20547 0.574219L16.0055 14.3742L14.9555 15.4242ZM4.26797 4.77422C3.90547 5.09922 3.57422 5.45547 3.27422 5.84297C2.97422 6.23047 2.71797 6.64922 2.50547 7.09922C3.13047 8.36172 4.02722 9.36472 5.19572 10.1082C6.36472 10.8522 7.66797 11.2242 9.10547 11.2242C9.35547 11.2242 9.59922 11.2087 9.83672 11.1777C10.0742 11.1462 10.318 11.1117 10.568 11.0742L9.89297 10.3617C9.75547 10.3992 9.62422 10.4272 9.49922 10.4457C9.37422 10.4647 9.24297 10.4742 9.10547 10.4742C8.16797 10.4742 7.37097 10.1462 6.71447 9.49022C6.05847 8.83372 5.73047 8.03672 5.73047 7.09922C5.73047 6.96172 5.73972 6.83047 5.75822 6.70547C5.77722 6.58047 5.80547 6.44922 5.84297 6.31172L4.26797 4.77422Z"
                                    fill="#7A7978"
                                />
                            </svg> */}
                        </div>
                        <ButtonComp text="Login" type="submit" />
                    </form>
                    <div>
                        <p className={styles.accout}>
                            Do you Have An Accout?
                            <span>
                                <Link href="../Auth/SignUp"> Sign up</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;