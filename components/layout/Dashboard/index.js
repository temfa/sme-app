// import React, { useEffect, useState } from 'react';
// import { Navbar, Sidebar } from '../../index';
// import styles from './styles.module.css';
// import styled from 'styled-components';

// const DashLayout = ({ children, overlay }) => {
//     const [height, setHeight] = useState('');
//     useEffect(() => {
//         setHeight(document.documentElement.scrollHeight);
//     }, []);

//     // //console.log(height);
//

//     const mainOverlay = {
//         height: height,
//         backgroundColor: '#f5f6fa',
//         padding: '36px 32px 46px 32px',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         opacity: 0.8,
//         zIndex: '5'
//     };
//     return (
//         <div className={styles.dash}>
//             <Sidebar />
//             <DashCont>
//                 <div style={overlay ? mainOverlay : null}></div>
//                 <Navbar />
//                 {children}
//             </DashCont>
//         </div>
//     );
// };

// export default DashLayout;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import withAuth from '../../HOC/withAuth';
import { Navbar, Sidebar } from '../../index';
import styles from './styles.module.css';
import Idle from 'react-idle';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import withAuth from '../../HOC/withAuth';
import { loadUserProfile } from '../../../redux/actions/userProfileAction';
import { getProfileImgAction } from '../../../redux/actions/getProfileImageAction';
const DashLayout = ({
    children,
    page,
    text,
    action,
    preview,
    previewSingle,
    productAction
}) => {
    const [sideActive, setSideActive] = useState(false);
    const [profileImg, setProfileImg] = useState('');
    const [userProfileData, setUserProfileData] = useState([]);
    const dispatch = useDispatch();
    const { userProfile } = useSelector((state) => state.userProfileReducer);
    const { getProfileImg } = useSelector(
        (state) => state.getProfileImgReducer
    );
    useEffect(() => {
        dispatch(loadUserProfile());
        dispatch(getProfileImgAction());
    }, []);
    useEffect(() => {
        if (userProfile !== null) {
            setUserProfileData(userProfile);
        }
    }, [userProfile]);
    useEffect(() => {
        if (getProfileImg !== null) {
            setProfileImg(getProfileImg);
        }
    }, [getProfileImg]);
    const router = useRouter();
    return (
        <>
            {router.pathname.includes('Admin') ? (
                <div className={styles.dash}>
                    <div
                        className={
                            sideActive ? styles.sidebar : styles.sidebarActive
                        }
                    >
                        <Sidebar
                            showSubnav={() => {
                                setSideActive(false);
                            }}
                        />
                    </div>
                    {/* <Idle
                        timeout={300000}
                        onChange={({ idle }) => {
                            if (idle) {
                                preloadCornify();
                            }
                        }}
                    /> */}

                    {!sideActive ? (
                        <div className={styles.dashCont}>
                            {page === 'Create Storefront' ? null : (
                                <Navbar
                                    page={page}
                                    text={text}
                                    action={action}
                                    preview={preview}
                                    previewSingle={previewSingle}
                                    productAction={productAction}
                                    sideAction={() => {
                                        setSideActive(true);
                                    }}
                                    profileImg={profileImg}
                                    userProfile={userProfileData}
                                />
                            )}
                            {children}
                        </div>
                    ) : null}
                </div>
            ) : (
                <> {children}</>
            )}
        </>
    );
};

export default DashLayout;
// export default DashLayout;
