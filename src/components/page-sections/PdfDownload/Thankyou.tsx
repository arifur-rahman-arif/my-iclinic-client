import * as animationData from '@/lottie/check.lottie.json';
import Lottie from 'react-lottie';

import { Button } from 'src/components/Buttons';

interface ThankyouProps {
    downloadFile?: string;
}

/**
 * Thank you component
 *
 * @returns {*}  {JSX.Element}
 */
const Thankyou = ({ downloadFile }: ThankyouProps): JSX.Element => {
    return (
        <div className="mx-auto grid w-full max-w-[45rem] grid-cols-1 place-items-center content-start px-8 py-12 md:py-28">
            <Lottie
                options={{
                    animationData: animationData,
                    autoplay: true,
                    loop: false
                }}
                speed={1}
                title="Thank you"
                style={{ width: '6rem', height: '6rem', background: 'transparent' }}
            />

            <span className="mt-14 font-latoBold text-[2.4rem] normal-case leading-[2.8rem] md:text-[2.8rem] md:leading-[3.2rem]">
                Your download completed
            </span>
            <p className="mt-12 max-w-[31.4rem] text-center">Please check your download folder or your email.</p>

            {downloadFile && (
                <a href={downloadFile} download>
                    <Button
                        type="button"
                        text="Download Again"
                        iconPosition="left"
                        className="group/download mt-24 justify-self-center"
                        icon={
                            <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_2401_5839)">
                                    <path
                                        d="M8.10181 17L12.1018 21L16.1018 17"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/download:stroke-heading2"
                                    />
                                    <path
                                        d="M12.1018 12V21"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/download:stroke-heading2"
                                    />
                                    <path
                                        d="M20.9817 18.0899C21.8511 17.4786 22.5031 16.6061 22.843 15.5991C23.1829 14.5921 23.1931 13.503 22.8721 12.4898C22.5511 11.4766 21.9156 10.592 21.0578 9.96449C20.2 9.33697 19.1646 8.9991 18.1017 8.99993H16.8417C16.541 7.82781 15.9782 6.73918 15.1959 5.81601C14.4135 4.89285 13.4319 4.15919 12.3249 3.67029C11.218 3.18138 10.0146 2.94996 8.80527 2.99345C7.59595 3.03694 6.41225 3.3542 5.34329 3.92136C4.27433 4.48851 3.34796 5.29078 2.63393 6.26776C1.91989 7.24474 1.43679 8.37098 1.221 9.56168C1.00521 10.7524 1.06235 11.9765 1.38812 13.142C1.71389 14.3074 2.2998 15.3837 3.10174 16.2899"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/download:stroke-heading2"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2401_5839">
                                        <rect width="24" height="24" fill="white" transform="translate(0.101807)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        }
                    />
                </a>
            )}
        </div>
    );
};

export default Thankyou;
