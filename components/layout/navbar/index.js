import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import NotificationsSvg from '../../ReusableComponents/NotificationSvg';
import ArrowBackSvg from '../../ReusableComponents/ArrowBackSvg';
import SearchSvg from '../../ReusableComponents/ReusableSvgComponents/SearchSvg';
import SearchButtonSvg from '../../ReusableComponents/ReusableSvgComponents/SearchButtonSvg';
import CartSvg from '../../ReusableComponents/ReusableSvgComponents/CartSvg';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = ({
    page,
    text,
    action,
    preview,
    previewSingle,
    productAction,
    sideAction,
    userProfile,
    profileImg
}) => {
    const router = useRouter();
    // const [userProfile, setUserProfile] = useState();
    // const [userProfileData, setUserProfileData] = useState();
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         setUserProfile(window.localStorage.getItem('user'));
    //     }
    // }, []);
    // useEffect(() => {
    //     if (userProfile !== undefined) {
    //         setUserProfileData(JSON.parse(userProfile));
    //     }
    // }, [userProfile]);
    //  //console.log(userProfileData);
    return (
        <nav className={styles.navigation}>
            {preview === true ? (
                <>
                    <div className={styles.imageName}>
                        {previewSingle === true ? (
                            <h2 className={styles.name}>
                                <span>
                                    <ArrowBackSvg
                                        color="#102572"
                                        action={action}
                                    />
                                </span>{' '}
                                Back to Products
                            </h2>
                        ) : (
                            <>
                                <h2 className={styles.previewName}>{text}</h2>
                                <p className={styles.company}>
                                    Welcome to my Storefront
                                </p>
                            </>
                        )}
                    </div>
                    <div className={styles.productSearchCont}>
                        <div className={styles.productSearchWrapper}>
                            <SearchSvg color="#CCCCCC" />
                            <input type="text" placeholder="Search Products" />
                        </div>
                        <button>
                            <SearchButtonSvg />
                        </button>
                    </div>
                    {previewSingle === true ? (
                        <div className={styles.cartCont}>
                            <div>
                                <CartSvg />
                            </div>
                            <img
                                src="./Assets/Images/productOwner.png"
                                alt=""
                            />
                        </div>
                    ) : (
                        <div className={styles.productAction}>
                            <button className={styles.share}>Share</button>
                            <button
                                className={styles.close}
                                onClick={productAction}
                            >
                                Close
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <FaBars onClick={sideAction} className={styles.bars} />
                    <div className={styles.imageName}>
                        {router.pathname === '/Admin/Dashboard' ? (
                            <div className={styles.userName}>
                                <h3 className={styles.name}>
                                    Welcome,
                                    {userProfile
                                        ? userProfile.preferredName
                                        : null}{' '}
                                    👍🏼
                                </h3>
                                {/* <p className={styles.company}>
                                    Marvelous Solutions
                                </p> */}
                            </div>
                        ) : page === 'Storefront' ? (
                            <>
                                <h2 className={styles.name}>{page}</h2>
                                <p>
                                    Create, Enable/Disable your storefront for
                                    your Ellevate account.
                                </p>
                            </>
                        ) : page === 'text' ? (
                            <h2 className={styles.name}>
                                <span>
                                    <ArrowBackSvg
                                        color="#102572"
                                        action={action}
                                    />
                                </span>
                                {text}
                            </h2>
                        ) : router.pathname == '/Admin/Payment' ? (
                            <h2 className={styles.name}>Payment</h2>
                        ) : router.pathname == '/Admin/Security' ? (
                            <h2 className={styles.name}>Security</h2>
                        ) : router.pathname == '/Admin/Reports' ? (
                            <h2 className={styles.name}>Transaction Reports</h2>
                        ) : router.pathname == '/Admin/Collections' ? (
                            <h2 className={styles.name}>Collections</h2>
                        ) : router.pathname == '/Admin/BankStatement' ? (
                            <h2 className={styles.name}>Bank Statement</h2>
                        ) : null}
                    </div>

                    <div className={styles.rightNav}>
                        {page === 'Payments' ? null : (
                            <form>
                                <div className={styles.navSearchWrapper}>
                                    <SearchSvg color="#CCCCCC" />
                                    <input
                                        type="text"
                                        placeholder="Search Products"
                                    />
                                </div>
                            </form>
                        )}
                        <div className={styles.notificationBar}>
                            <div className={styles.notification}>
                                <NotificationsSvg />
                            </div>
                            <Link href="/Admin/Profile">
                                <div>
                                    {profileImg ? (
                                        <img
                                            src={`data:image/png;base64,${profileImg.image}`}
                                            width="50"
                                            height="50"
                                        />
                                    ) : null}
                                </div>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
