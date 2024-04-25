import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Button2 } from '@/components/Buttons';
import Link from 'next/link';

const LottieComponent = dynamic(() => import('./LottieComponent'));

/**
 * Form submission confirmation component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ThankYou = (): JSX.Element => {
    const [componentRendered, setComponentRendered] = useState<boolean>(false);

    useEffect(() => {
        setComponentRendered(true);
    }, []);

    return (
        <div className="grid place-items-center justify-self-center">
            {componentRendered && <LottieComponent />}

            <span className="font-latoBold text-[3rem] leading-[3.2rem] md:text-[3.6rem] md:leading-[3.2rem]">
                Thank you
            </span>

            <p className="mt-6 w-full max-w-[45.8rem] text-center">
                We have received your message and will respond promptly. Please check your email for the confirmation.
            </p>

            <div className="mt-12 grid justify-items-center gap-6 md:mt-24">
                <span className="font-mulishBold text-[1.4rem] leading-8 text-heading">
                    Follow us for lates tips and offer{' '}
                </span>
                <div
                    className="
                flex flex-wrap items-start gap-4"
                >
                    {/* Twitter */}
                    <Link
                        href="https://twitter.com/MyiClinic"
                        target="_blank"
                        className="cursor-pointer transition-all duration-500 hover:scale-150"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-8 w-8"
                        >
                            <g clipPath="url(#clip0_15398_5435)">
                                <path
                                    d="M6.95023 19.1695C5.82962 19.1695 4.75937 18.9594 3.76068 18.5422C2.74597 18.1183 1.83685 17.4875 1.13129 16.718L0.00976562 15.4944L1.65054 15.7451C3.18695 15.9798 4.17221 15.8231 4.77005 15.6114C4.29062 15.3847 3.70514 15.0591 3.11188 14.6101C1.26022 13.2086 0.214233 11.2695 0.0871277 9.00269L0 7.44736L0.702362 8.16605C0.588531 7.41531 0.568695 6.45752 0.799255 5.31845L1.16516 3.51105L1.60629 4.51431C1.70868 3.73749 1.96579 2.85049 2.55051 2.00302L3.31268 0.898438L3.60245 2.20871C3.92639 3.67355 4.45251 4.89059 5.16632 5.82596C5.72571 6.55899 6.40335 7.12357 7.18033 7.50412C7.90619 7.85965 8.59085 7.98935 9.06723 8.0336C9.04373 7.84622 9.03198 7.65701 9.03198 7.46674C9.03198 4.96582 11.0667 2.93106 13.5677 2.93106C14.6086 2.93106 15.6256 3.29269 16.4311 3.94943C17.1344 4.52255 17.6515 5.298 17.9114 6.15952L20 6.81137L18.1032 8.35464V8.60657C18.1032 11.3803 17.0029 13.9774 15.0047 15.9193C13.0722 17.7977 10.4439 18.9436 7.60391 19.1461C7.38419 19.1617 7.16614 19.1695 6.95023 19.1695ZM3.34961 17.0284C4.30206 17.6051 5.68466 18.1108 7.52075 17.9799C10.0862 17.7971 12.4547 16.7676 14.1899 15.081C15.0548 14.2403 15.7306 13.2689 16.1983 12.1939C16.6866 11.0715 16.9341 9.8645 16.9341 8.60657V7.79861L17.5731 7.27875L16.929 7.07764L16.8565 6.74545C16.6956 6.00723 16.282 5.336 15.6924 4.8555C15.0949 4.36844 14.3402 4.10019 13.5677 4.10019C11.7113 4.10019 10.2011 5.61035 10.2011 7.46658C10.2011 7.8038 10.2509 8.1369 10.349 8.45627L10.5563 9.13193L9.85382 9.20898C9.79355 9.21555 8.35999 9.36172 6.72897 8.58444C5.77469 8.12958 4.94598 7.45285 4.2659 6.57288C3.70651 5.84915 3.2489 4.98718 2.89795 3.99872C2.64343 4.93088 2.71576 5.79483 2.75742 6.29288L2.8627 7.55173L1.83502 6.81732C1.82098 6.80725 1.8071 6.79703 1.79306 6.78665C1.72668 8.44482 2.2731 9.37485 2.31491 9.44321L3.02994 10.5261L1.73874 10.3354C1.68823 10.3281 1.59241 10.3084 1.45752 10.2548C1.81168 11.6101 2.60178 12.7577 3.8176 13.678C5.02167 14.5894 6.18759 14.9174 6.19919 14.9207L7.0015 15.1419L6.5213 15.8215C6.42349 15.9599 5.6395 16.9582 3.34961 17.0284Z"
                                    fill="#404A4D"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_15398_5435">
                                    <rect width="20" height="20" fill="#404A4D" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>

                    {/* Facebook */}
                    <Link
                        href="https://www.facebook.com/myiclinic"
                        target="_blank"
                        className="cursor-pointer transition-all duration-500 hover:scale-150"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-8 w-8"
                        >
                            <g clipPath="url(#clip0_15398_5437)">
                                <path
                                    d="M11.3281 19.9609H8.12531C7.59033 19.9609 7.15515 19.5258 7.15515 18.9908V11.7667H5.28656C4.75159 11.7667 4.31641 11.3313 4.31641 10.7965V7.70096C4.31641 7.16599 4.75159 6.7308 5.28656 6.7308H7.15515V5.18066C7.15515 3.64365 7.63779 2.33597 8.55072 1.39923C9.46777 0.458221 10.7494 -0.0390625 12.2569 -0.0390625L14.6996 -0.0350952C15.2336 -0.0341797 15.668 0.401001 15.668 0.935059V3.8092C15.668 4.34418 15.233 4.77936 14.6982 4.77936L13.0536 4.77997C12.552 4.77997 12.4243 4.88052 12.397 4.91135C12.352 4.96246 12.2984 5.10696 12.2984 5.50598V6.73065H14.5746C14.7459 6.73065 14.912 6.77292 15.0546 6.85257C15.3624 7.02454 15.5537 7.3497 15.5537 7.70111L15.5525 10.7967C15.5525 11.3313 15.1173 11.7665 14.5824 11.7665H12.2984V18.9908C12.2984 19.5258 11.8631 19.9609 11.3281 19.9609ZM8.32764 18.7885H11.1258V11.2418C11.1258 10.8846 11.4165 10.594 11.7735 10.594H14.38L14.3811 7.90329H11.7734C11.4163 7.90329 11.1258 7.61276 11.1258 7.25555V5.50598C11.1258 5.04791 11.1723 4.52698 11.5181 4.13544C11.9359 3.66211 12.5943 3.60748 13.0533 3.60748L14.4955 3.60687V1.13709L12.256 1.13342C9.83322 1.13342 8.32764 2.68433 8.32764 5.18066V7.25555C8.32764 7.61261 8.03711 7.90329 7.68005 7.90329H5.48889V10.594H7.68005C8.03711 10.594 8.32764 10.8846 8.32764 11.2418V18.7885Z"
                                    fill="#404A4D"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_15398_5437">
                                    <rect width="19.9609" height="20" fill="#404A4D" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>

                    {/* Tiktok */}
                    <Link
                        href="https://www.tiktok.com/@myiclinic"
                        target="_blank"
                        className="cursor-pointer transition-all duration-500 hover:scale-150"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            className="h-8 w-8"
                        >
                            <path
                                d="M19.1199 4.39324C17.0206 4.39324 15.3127 2.68527 15.3127 0.585938C15.3127 0.262344 15.0504 0 14.7268 0H11.5887C11.2651 0 11.0028 0.262344 11.0028 0.585938V13.4518C11.0028 14.686 9.99869 15.6901 8.76447 15.6901C7.53029 15.6901 6.52623 14.686 6.52623 13.4518C6.52623 12.2176 7.53029 11.2135 8.76447 11.2135C9.08807 11.2135 9.35041 10.9512 9.35041 10.6276V7.48953C9.35041 7.16594 9.08807 6.90359 8.76447 6.90359C5.15381 6.90359 2.21631 9.84113 2.21631 13.4518C2.21635 17.0625 5.15381 20 8.76451 20C12.3752 20 15.3128 17.0625 15.3128 13.4518V7.75691C16.479 8.37859 17.7765 8.70316 19.12 8.70316C19.4436 8.70316 19.7059 8.44082 19.7059 8.11723V4.97918C19.7059 4.65559 19.4435 4.39324 19.1199 4.39324ZM18.534 7.50703C17.2831 7.40301 16.0953 6.96602 15.069 6.2277C14.8905 6.09934 14.6552 6.08164 14.4595 6.18187C14.2639 6.28215 14.1408 6.48348 14.1408 6.70332V13.4518C14.1408 16.4163 11.729 18.8281 8.76447 18.8281C5.79998 18.8281 3.38818 16.4163 3.38818 13.4518C3.38818 10.6852 5.48861 8.40004 8.17853 8.10719V10.092C6.57631 10.3705 5.35436 11.7712 5.35436 13.4518C5.35436 15.3322 6.88412 16.862 8.76447 16.862C10.6449 16.862 12.1747 15.3322 12.1747 13.4518V1.17188H14.1751C14.4434 3.45 16.2559 5.26254 18.534 5.53082V7.50703H18.534Z"
                                fill="#404A4D"
                            />
                        </svg>
                    </Link>

                    {/* Instagram */}
                    <Link
                        href="https://www.instagram.com/myiclinic/"
                        className="cursor-pointer transition-all duration-500 hover:scale-150"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            className="h-8 w-8"
                        >
                            <g clipPath="url(#clip0_15398_5441)">
                                <path
                                    d="M15.1513 0H6.77063C3.56715 0 0.960938 2.60621 0.960938 5.80969V14.1903C0.960938 17.3938 3.56715 20 6.77063 20H15.1512C18.3547 20 20.9609 17.3938 20.9609 14.1904V5.80969C20.9609 2.60621 18.3547 0 15.1513 0ZM19.3984 14.1903C19.3984 16.5322 17.4932 18.4375 15.1513 18.4375H6.77063C4.42871 18.4375 2.52344 16.5322 2.52344 14.1904V5.80969C2.52344 3.46777 4.42871 1.5625 6.77063 1.5625H15.1512C17.4932 1.5625 19.3984 3.46777 19.3984 5.80969V14.1903Z"
                                    fill="#404A4D"
                                />
                                <path
                                    d="M10.9609 4.60938C7.98852 4.60938 5.57031 7.02758 5.57031 10C5.57031 12.9724 7.98852 15.3906 10.9609 15.3906C13.9334 15.3906 16.3516 12.9724 16.3516 10C16.3516 7.02758 13.9334 4.60938 10.9609 4.60938ZM10.9609 13.8281C8.85012 13.8281 7.13281 12.1108 7.13281 10C7.13281 7.88918 8.85012 6.17188 10.9609 6.17188C13.0718 6.17188 14.7891 7.88918 14.7891 10C14.7891 12.1108 13.0718 13.8281 10.9609 13.8281Z"
                                    fill="#404A4D"
                                />
                                <path
                                    d="M16.4297 5.3125C16.8612 5.3125 17.2109 4.96272 17.2109 4.53125C17.2109 4.09978 16.8612 3.75 16.4297 3.75C15.9982 3.75 15.6484 4.09978 15.6484 4.53125C15.6484 4.96272 15.9982 5.3125 16.4297 5.3125Z"
                                    fill="#404A4D"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_15398_5441">
                                    <rect width="20" height="20" fill="#404A4D" transform="translate(0.960938)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>

                    {/* Linkedin */}
                    <Link
                        href="https://www.linkedin.com/company/my-iclinicldn/?originalSubdomain=uk"
                        target="_blank"
                        className="cursor-pointer transition-all duration-500 hover:scale-150"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            className="h-8 w-8"
                        >
                            <g clipPath="url(#clip0_15398_5451)">
                                <path
                                    d="M20.957 12.5238V12.5223C20.95 10.4031 20.3598 8.80352 19.2023 7.76719C17.7273 6.44648 15.8273 6.49141 15.0789 6.57188C14.0316 6.68438 13.2953 7.07891 12.7578 7.51914V7.07031C12.7578 6.74688 12.4953 6.48438 12.1719 6.48438H7.99219C7.66875 6.48438 7.40625 6.74688 7.40625 7.07031V18.7891C7.40625 19.1125 7.66875 19.375 7.99219 19.375H12.1719C12.4953 19.375 12.7578 19.1125 12.7578 18.7891V12.0891C12.7578 11.4957 13.5348 10.9105 14.3566 10.8844C14.9191 10.8668 15.6051 11.0992 15.6875 12.3023V18.7891C15.6875 19.1125 15.95 19.375 16.2734 19.375H20.375C20.5305 19.375 20.6797 19.3133 20.7895 19.2031C20.8992 19.0934 20.9609 18.9441 20.9609 18.7887L20.957 12.5238ZM16.8594 18.2031C16.8594 18.2031 16.859 12.2586 16.8582 12.2461C16.7918 11.193 16.3613 10.6012 16.0117 10.2902C15.5641 9.89219 14.9785 9.69258 14.3199 9.71328C12.9996 9.75469 11.5859 10.7195 11.5859 12.0891V18.2031H8.57812V7.65625H11.5859V9.00625C11.5859 9.25469 11.7422 9.47578 11.9762 9.55859C12.2102 9.64141 12.4707 9.56797 12.627 9.37539C13.2703 8.58203 13.8383 7.88398 15.2039 7.73711C15.7965 7.67305 17.2965 7.63359 18.4207 8.64023C19.3203 9.4457 19.7793 10.7527 19.7852 12.5254L19.7887 18.2031H16.8594Z"
                                    fill="#404A4D"
                                />
                                <path
                                    d="M5.64844 6.48438H1.54688C1.22344 6.48438 0.960938 6.74688 0.960938 7.07031V18.7891C0.960938 19.1125 1.22344 19.375 1.54688 19.375H5.64844C5.97188 19.375 6.23438 19.1125 6.23438 18.7891V7.07031C6.23438 6.74688 5.97188 6.48438 5.64844 6.48438ZM5.0625 18.2031H2.13281V7.65625H5.0625V18.2031Z"
                                    fill="#404A4D"
                                />
                                <path
                                    d="M3.59766 0.625C2.14375 0.625 0.960938 1.67656 0.960938 2.96875C0.960938 4.26094 2.14375 5.3125 3.59766 5.3125C5.05156 5.3125 6.23438 4.26094 6.23438 2.96875C6.23438 1.67656 5.05156 0.625 3.59766 0.625ZM3.59766 4.14062C2.78984 4.14062 2.13281 3.61484 2.13281 2.96875C2.13281 2.32266 2.78984 1.79688 3.59766 1.79688C4.40547 1.79688 5.0625 2.32266 5.0625 2.96875C5.0625 3.61484 4.40547 4.14062 3.59766 4.14062Z"
                                    fill="#404A4D"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_15398_5451">
                                    <rect width="20" height="20" fill="#404A4D" transform="translate(0.960938)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>

            <Button2
                type="anchor"
                link="/"
                text="Back to home page"
                className="group/button justify-self-center !font-mulishBold !text-[1.6rem] !leading-[2.4rem] text-white hover:!bg-transparent hover:text-brand md:mt-24"
                icon={
                    <BiRightArrowAlt className="h-9 w-9 translate-y-[0.1rem] fill-white transition-all duration-500 group-hover/button:fill-heading2" />
                }
                iconPosition="right"
            />
        </div>
    );
};

export default ThankYou;
