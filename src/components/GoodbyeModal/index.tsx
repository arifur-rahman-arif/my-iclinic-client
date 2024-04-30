import { Button } from '@/components/Buttons';
import { useOnclickOutside } from '@/hooks';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './Style.module.scss';

let modalShowCount: boolean;
/**
 * Leaving modal
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GoodbyeModal = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);
    const outsideRef = useOnclickOutside(() => setShowModal(false));

    //    /**
    //     * Set the cookie
    //     *
    //     * @param {string} name
    //     * @param {string} value
    //     * @param {number} days
    //     */
    //    const setCookie = (name: string, value: string, days: number) => {
    //        const expires = new Date();
    //        expires.setDate(expires.getDate() + days);
    //        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    //    };

    //    // eslint-disable-next-line no-unused-vars
    //    /**
    //     * Get the cookie value
    //     *
    //     * @param {string} name
    //     * @returns {null | string}
    //     */
    //    const getCookie = (name: string) => {
    //        const cookieName = `${name}=`;
    //        const cookies = document.cookie.split(';');
    //        for (const cookie of cookies) {
    //            if (cookie.trim().startsWith(cookieName)) {
    //                return cookie.trim().substring(cookieName.length);
    //            }
    //        }
    //        return null;
    //    };

    /**
     * Handle the mouse leave
     * @param {MouseEvent} e
     */
    const handleMouseLeave = (e: MouseEvent) => {
        //        if (e.clientY <= 0 && !getCookie('exitIntentShown')) {
        if (e.clientY <= 0 && !modalShowCount) {
            modalShowCount = true;
            setShowModal(true);
            //            setCookie('exitIntentShown', 'true', 5);
        }
    };

    /**
     * Handle the kew down event
     * @param {any} e
     */
    const handleKeyDown = (e: any) => {
        if (e.keyCode === 27) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mouseout', handleMouseLeave);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mouseout', handleMouseLeave);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div
            className={`${
                showModal ? styles.show : ''
            } pointer-events-none fixed top-0 left-0 z-[999] grid h-full w-full place-content-center md:py-12`}
        >
            <div className="overlay absolute top-0 left-0 h-full w-full bg-white opacity-0"></div>

            <div
                ref={outsideRef}
                className={`modal relative grid translate-y-12 place-items-center gap-12 overflow-hidden overflow-y-auto rounded-primary bg-white p-12 opacity-0 shadow-shadow2 md:gap-16 md:p-24`}
            >
                <AiOutlineCloseCircle
                    onClick={() => {
                        setShowModal(false);
                    }}
                    className="absolute top-0 right-0 h-10 w-10 translate-y-8 -translate-x-8 cursor-pointer fill-heading transition-all duration-300 hover:scale-110"
                />
                <span className="font-latoLight text-[3.6rem] leading-[3.6rem] text-heading md:text-[4.8rem] md:leading-[4.8rem]">
                    Whoa there, speedy!
                </span>

                <div className="grid place-items-center content-start gap-12">
                    <Image
                        src="/images/section-images/leaving-modal-image.webp"
                        alt=""
                        width={304}
                        height={254}
                        className="max-w-[25rem]"
                    />
                    <span className="font-latoLight text-[3rem] leading-[3rem] text-heading md:text-[3.6rem] md:leading-[3.6rem]">
                        Thinking it over?
                    </span>

                    <span className="font-latoBold text-[2rem] leading-[2.4rem] text-heading md:text-[2.4rem] md:leading-[2.8rem]">
                        Imagine life in HD
                    </span>

                    <strong className="-mt-6 text-center font-mulishBold text-[1.6rem] leading-[2.4rem] text-heading md:text-[1.8rem] md:leading-[2.4rem]">
                        Don't pass on your chance for pristine views.
                    </strong>

                    <strong className="max-w-[47.2rem] text-center font-mulishBold text-[1.6rem] leading-[2.4rem] text-heading md:text-[1.8rem] md:leading-[2.4rem]">
                        No strings attached. We've got some titbits to share, then mull it over on your time! 😉
                    </strong>

                    <strong className="max-w-[47.2rem] text-center font-latoBold text-[1.8rem] leading-[2.4rem] text-heading md:text-[2rem] md:leading-[2.4rem]">
                        Let`s talk before you exit!
                    </strong>

                    <div className="-mt-6 grid place-items-center gap-6">
                        <Button
                            type="anchor"
                            text="0208 455 8877"
                            link="tel:0208 455 8877"
                            className="group/button border-[#003E79] bg-[#003E79] text-white hover:text-[#003E79] focus:border-[#003E79]"
                            icon={
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="phone-forwarded" clipPath="url(#clip0_12360_23746)">
                                        <path
                                            id="Vector"
                                            d="M19.5 1.75488L23.5 5.75488L19.5 9.75488"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-300 group-hover/button:!stroke-[#003E79]"
                                        />
                                        <path
                                            id="Vector_2"
                                            d="M15.5 5.75488H23.5"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-300 group-hover/button:!stroke-[#003E79]"
                                        />
                                        <path
                                            id="Vector_3"
                                            d="M22.5004 17.675V20.675C22.5016 20.9535 22.4445 21.2291 22.3329 21.4843C22.2214 21.7395 22.0577 21.9686 21.8525 22.1568C21.6473 22.3451 21.405 22.4885 21.1412 22.5777C20.8773 22.6669 20.5978 22.7 20.3204 22.675C17.2433 22.3406 14.2874 21.2891 11.6904 19.605C9.27425 18.0696 7.22576 16.0212 5.69042 13.605C4.0004 10.9962 2.94866 8.02597 2.62042 4.93498C2.59543 4.65845 2.6283 4.37974 2.71692 4.1166C2.80555 3.85347 2.94799 3.61167 3.13519 3.4066C3.32238 3.20153 3.55023 3.03769 3.80421 2.9255C4.0582 2.81331 4.33276 2.75524 4.61042 2.75498H7.61042C8.09573 2.7502 8.56621 2.92206 8.93418 3.23851C9.30215 3.55497 9.5425 3.99443 9.61042 4.47498C9.73704 5.43505 9.97187 6.37771 10.3104 7.28498C10.445 7.6429 10.4741 8.03189 10.3943 8.40586C10.3146 8.77983 10.1293 9.12309 9.86042 9.39498L8.59042 10.665C10.014 13.1685 12.0869 15.2414 14.5904 16.665L15.8604 15.395C16.1323 15.1261 16.4756 14.9408 16.8495 14.8611C17.2235 14.7813 17.6125 14.8104 17.9704 14.945C18.8777 15.2835 19.8204 15.5184 20.7804 15.645C21.2662 15.7135 21.7098 15.9582 22.027 16.3325C22.3441 16.7068 22.5126 17.1846 22.5004 17.675Z"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-300 group-hover/button:!stroke-[#003E79]"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12360_23746">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                transform="translate(0.5 0.754883)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            }
                            iconPosition="left"
                        />
                        <Button
                            type="button"
                            text="Live chat"
                            className="group/button w-full justify-center border-[#003E79] bg-[#003E79] normal-case text-white hover:text-[#003E79] focus:border-[#003E79]"
                            icon={
                                <svg
                                    width="26"
                                    height="27"
                                    viewBox="0 0 26 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="chat_4547631 1">
                                        <path
                                            id="Vector"
                                            d="M3.90185 18.226L3.9019 18.2261C3.98101 18.3469 4.02202 18.4888 4.0193 18.6334L3.90185 18.226ZM3.90185 18.226C2.87636 16.6612 2.33424 14.841 2.33424 12.9616C2.33424 7.65689 6.65031 3.34082 11.955 3.34082C15.929 3.34082 19.3907 5.7386 20.8465 9.27306M3.90185 18.226L20.8465 9.27306M20.8465 9.27306C19.5298 8.48504 17.9906 8.03138 16.3477 8.03138C11.5018 8.03138 7.55983 11.9734 7.55983 16.8193C7.55983 18.8675 8.26456 20.7541 9.4434 22.2496C8.46994 21.9868 7.54005 21.5713 6.6904 21.0147C6.47306 20.8723 6.19583 20.8582 5.96529 20.9779C4.79089 21.5876 4.0611 21.8922 3.09279 22.0209C3.81623 20.9379 3.99564 19.9028 4.0193 18.6335L20.8465 9.27306ZM25.199 24.7769L25.199 24.7768C25.307 24.5057 25.2403 24.196 25.0302 23.9934L25.0302 23.9934C24.5339 23.5148 24.2461 23.1143 24.075 22.7136C23.9121 22.332 23.8474 21.933 23.8266 21.4349C24.6837 20.0491 25.1355 18.4582 25.1355 16.8193C25.1355 14.5296 24.2547 12.4419 22.8154 10.8767C22.3454 8.41716 21.0396 6.1738 19.1213 4.53978C17.1253 2.83951 14.5803 1.90332 11.955 1.90332C9.0017 1.90332 6.22391 3.05391 4.13561 5.1422C2.04732 7.23049 0.896735 10.0083 0.896735 12.9616C0.896735 15.0445 1.47668 17.0658 2.57631 18.8217C2.55201 19.5043 2.46951 20.0529 2.24835 20.578C2.01915 21.1222 1.63268 21.6607 0.969868 22.2999H0.969869C0.759706 22.5025 0.693029 22.8121 0.801047 23.0833L0.80106 23.0833C0.909157 23.3546 1.17051 23.5334 1.46243 23.536H1.4625C2.53179 23.5451 3.33242 23.4775 4.08533 23.2936C4.80099 23.1189 5.4623 22.8419 6.2601 22.4416C7.78313 23.3579 9.50858 23.893 11.2868 23.9996C12.7185 25.0116 14.465 25.6072 16.3476 25.6072C17.9218 25.6072 19.452 25.1902 20.7988 24.3974C21.4056 24.6983 21.9182 24.9084 22.4749 25.0417C23.0689 25.184 23.7009 25.2361 24.5374 25.2295L24.5376 25.2295C24.8295 25.2269 25.0909 25.048 25.199 24.7769ZM22.5005 20.8413L22.5004 20.8414L22.633 21.244L22.383 21.2487C22.383 21.2487 22.383 21.2487 22.383 21.2487C22.3997 22.147 22.5139 22.9055 22.9459 23.675C22.3667 23.555 21.8542 23.3296 21.095 22.9354C20.8643 22.8155 20.587 22.8297 20.3698 22.972L20.5068 23.1812L20.3698 22.972C19.1739 23.7555 17.7834 24.1697 16.3476 24.1697C12.2949 24.1697 8.99728 20.8721 8.99728 16.8193C8.99728 12.7665 12.2949 9.46888 16.3476 9.46888C20.4005 9.46888 23.698 12.7665 23.698 16.8193C23.698 18.2553 23.2839 19.6458 22.5005 20.8413ZM16.4049 18.0068C17.0607 18.0068 17.5924 17.4751 17.5924 16.8193C17.5924 16.1635 17.0607 15.6318 16.4049 15.6318C15.7491 15.6318 15.2174 16.1635 15.2174 16.8193C15.2174 17.4751 15.7491 18.0068 16.4049 18.0068ZM12.362 15.6318C11.7061 15.6318 11.1745 16.1635 11.1745 16.8193C11.1745 17.4751 11.7061 18.0068 12.362 18.0068C13.0178 18.0068 13.5495 17.4751 13.5495 16.8193C13.5495 16.1635 13.0178 15.6318 12.362 15.6318ZM20.4479 15.6318C19.7921 15.6318 19.2604 16.1635 19.2604 16.8193C19.2604 17.4751 19.7921 18.0068 20.4479 18.0068C21.1037 18.0068 21.6354 17.4751 21.6354 16.8193C21.6354 16.1635 21.1037 15.6318 20.4479 15.6318Z"
                                            strokeWidth="0.5"
                                            className="fill-white stroke-white transition-all duration-300 group-hover/button:!fill-[#003E79] group-hover/button:!stroke-[#003E79]"
                                        />
                                    </g>
                                </svg>
                            }
                            iconPosition="left"
                            onClick={() => {
                                setShowModal(false);
                                openFreshdeskChat();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoodbyeModal;
