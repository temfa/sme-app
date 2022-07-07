import React from 'react';

const SettingsSvg = ({ fillColor }) => {
    return (
        <>
            {fillColor ? (
                <svg
                    width="22"
                    height="25"
                    viewBox="0 0 22 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.1677 9.74414C12.7685 9.74414 14.0658 11.0645 14.0658 12.6938C14.0658 14.323 12.7685 15.6434 11.1677 15.6434C9.56688 15.6434 8.26953 14.323 8.26953 12.6938C8.26953 11.0645 9.56688 9.74414 11.1677 9.74414Z"
                        stroke="#407A00"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.6311 7.08211C19.8387 5.67543 18.0845 5.19411 16.7134 6.00641C15.5208 6.7115 14.0304 5.82927 14.0304 4.41793C14.0304 2.79448 12.7457 1.47754 11.162 1.47754C9.57834 1.47754 8.29366 2.79448 8.29366 4.41793C8.29366 5.82927 6.80321 6.7115 5.61175 6.00641C4.23954 5.19411 2.48533 5.67543 1.69292 7.08211C0.901649 8.48878 1.37118 10.287 2.7434 11.0982C3.93485 11.8044 3.93485 13.5677 2.7434 14.274C1.37118 15.0863 0.901649 16.8846 1.69292 18.2901C2.48533 19.6968 4.23954 20.1781 5.61062 19.3669H5.61175C6.80321 18.6607 8.29366 19.5429 8.29366 20.9543C8.29366 22.5777 9.57834 23.8946 11.162 23.8946C12.7457 23.8946 14.0304 22.5777 14.0304 20.9543C14.0304 19.5429 15.5208 18.6607 16.7134 19.3669C18.0845 20.1781 19.8387 19.6968 20.6311 18.2901C21.4235 16.8846 20.9528 15.0863 19.5818 14.274H19.5806C18.3892 13.5677 18.3892 11.8044 19.5818 11.0982C20.9528 10.287 21.4235 8.48878 20.6311 7.08211Z"
                        stroke="#407A00"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : (
                <svg
                    width="22"
                    height="25"
                    viewBox="0 0 22 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.1677 9.74414C12.7685 9.74414 14.0658 11.0645 14.0658 12.6938C14.0658 14.323 12.7685 15.6434 11.1677 15.6434C9.56688 15.6434 8.26953 14.323 8.26953 12.6938C8.26953 11.0645 9.56688 9.74414 11.1677 9.74414Z"
                        stroke="#CCCCCC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.6311 7.08211C19.8387 5.67543 18.0845 5.19411 16.7134 6.00641C15.5208 6.7115 14.0304 5.82927 14.0304 4.41793C14.0304 2.79448 12.7457 1.47754 11.162 1.47754C9.57834 1.47754 8.29366 2.79448 8.29366 4.41793C8.29366 5.82927 6.80321 6.7115 5.61175 6.00641C4.23954 5.19411 2.48533 5.67543 1.69292 7.08211C0.901649 8.48878 1.37118 10.287 2.7434 11.0982C3.93485 11.8044 3.93485 13.5677 2.7434 14.274C1.37118 15.0863 0.901649 16.8846 1.69292 18.2901C2.48533 19.6968 4.23954 20.1781 5.61062 19.3669H5.61175C6.80321 18.6607 8.29366 19.5429 8.29366 20.9543C8.29366 22.5777 9.57834 23.8946 11.162 23.8946C12.7457 23.8946 14.0304 22.5777 14.0304 20.9543C14.0304 19.5429 15.5208 18.6607 16.7134 19.3669C18.0845 20.1781 19.8387 19.6968 20.6311 18.2901C21.4235 16.8846 20.9528 15.0863 19.5818 14.274H19.5806C18.3892 13.5677 18.3892 11.8044 19.5818 11.0982C20.9528 10.287 21.4235 8.48878 20.6311 7.08211Z"
                        stroke="#CCCCCC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </>
    );
};

export default SettingsSvg;
