import React from 'react';
import DounutComp from '../Chart/Dougnut';
import styles from './styles.module.css';

const Levelup = () => {
    return (
        <div className={styles.cove}>
            <div className={styles.left}>
                <DounutComp />
                <p className={styles.perc}>70%</p>
            </div>
            <div className={styles.level}>
                <p className={styles.Levelup}>LEVEL UP CHAMP</p>
                <p className={styles.YourBus}>
                    Your business account is not fully up. Complete account
                    upgrade to access unlimited benefits.
                </p>
            </div>
        </div>
    );
};

export default Levelup;