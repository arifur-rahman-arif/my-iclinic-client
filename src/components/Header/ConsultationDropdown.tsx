import { BookConsultation } from '@/page-sections/index';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

interface ConsultationDropdownProps {
    setOpenSearch: Dispatch<SetStateAction<boolean>>;
}

/**
 * Consultation dropdown
 *
 * @param {Dispatch<SetStateAction<boolean>>} setOpenSearch
 * @returns {JSX.Element}
 * @constructor
 */
const ConsultationDropdown = ({ setOpenSearch }: ConsultationDropdownProps): JSX.Element => {
    return (
        <div className="ml-auto flex items-center space-x-6">
            {/* Search Icon */}
            <button type="button" onClick={() => setOpenSearch(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path
                        d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z"
                        stroke="#061014"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21.5004 21.0004L17.1504 16.6504"
                        stroke="#061014"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {/* Phone call */}
            <Link
                href="tel:0208 445 8877"
                className="group/phone grid h-[5rem] w-[5rem] cursor-pointer place-items-center rounded-full border-2 border-transparent bg-[#063147] transition-all duration-500 hover:border-heading2 hover:bg-transparent"
            >
                <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_10615_53300)">
                        <path
                            d="M24.0331 18.8334C24.6843 18.9605 25.2827 19.2789 25.7518 19.748C26.221 20.2172 26.5394 20.8156 26.6665 21.4667M24.0331 16.1667C25.386 16.317 26.6475 16.9229 27.6106 17.8848C28.5737 18.8466 29.1811 20.1074 29.3331 21.4601M28.6665 26.7801V28.7801C28.6672 28.9657 28.6292 29.1495 28.5548 29.3196C28.4804 29.4898 28.3713 29.6425 28.2345 29.768C28.0977 29.8935 27.9362 29.9891 27.7603 30.0486C27.5844 30.108 27.398 30.1301 27.2131 30.1134C25.1617 29.8905 23.1911 29.1895 21.4598 28.0667C19.849 27.0432 18.4834 25.6775 17.4598 24.0667C16.3331 22.3276 15.632 20.3474 15.4131 18.2867C15.3965 18.1024 15.4184 17.9166 15.4775 17.7412C15.5365 17.5657 15.6315 17.4045 15.7563 17.2678C15.8811 17.1311 16.033 17.0219 16.2023 16.9471C16.3716 16.8723 16.5547 16.8336 16.7398 16.8334H18.7398C19.0633 16.8302 19.377 16.9448 19.6223 17.1558C19.8676 17.3667 20.0278 17.6597 20.0731 17.9801C20.1575 18.6201 20.3141 19.2486 20.5398 19.8534C20.6295 20.092 20.6489 20.3514 20.5957 20.6007C20.5426 20.85 20.419 21.0788 20.2398 21.2601L19.3931 22.1067C20.3422 23.7758 21.7241 25.1577 23.3931 26.1067L24.2398 25.2601C24.4211 25.0808 24.6499 24.9573 24.8992 24.9041C25.1485 24.851 25.4078 24.8704 25.6465 24.9601C26.2513 25.1858 26.8797 25.3423 27.5198 25.4267C27.8436 25.4724 28.1394 25.6356 28.3508 25.8851C28.5622 26.1346 28.6746 26.4531 28.6665 26.7801Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-all duration-500 group-hover/phone:stroke-heading2"
                        />
                    </g>
                    <clipPath id="clip0_10615_53300">
                        <rect width="16" height="16" fill="white" transform="translate(14 15.5)" />
                    </clipPath>
                </svg>
            </Link>

            {/* Bookings */}
            <div className="group relative">
                <button
                    type="button"
                    className="group/consultation grid cursor-pointer grid-flow-col place-items-center gap-5 rounded-primary border-2 border-[#063147] bg-heading2 px-8 py-6 text-white group-hover:border-transparent group-hover:bg-transparent group-hover:text-heading2"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white group-hover:text-heading2"
                        />
                        <path
                            d="M13.334 1.66699V5.00033"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white group-hover:text-heading2"
                        />
                        <path
                            d="M6.66602 1.66699V5.00033"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white group-hover:text-heading2"
                        />
                        <path
                            d="M2.5 8.33301H17.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white group-hover:text-heading2"
                        />
                    </svg>
                </button>

                <div className="pointer-events-none absolute top-full right-0 flex h-80 w-[35rem] flex-col justify-center space-y-10 rounded-primary bg-white px-24 opacity-0 shadow-md transition-all duration-500 group-hover:pointer-events-auto group-hover:opacity-100">
                    <BookConsultation buttonClassName="flex space-x-4 text-left">
                        <button type="button">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black"
                                />
                                <path
                                    d="M13.334 1.66699V5.00033"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black"
                                />
                                <path
                                    d="M6.66602 1.66699V5.00033"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black"
                                />
                                <path
                                    d="M2.5 8.33301H17.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black"
                                />
                            </svg>
                            <span className="relative cursor-pointer font-mulishBold text-[1.6rem] capitalize leading-8 text-heading transition-all duration-500 group-hover/menu-item:text-[#9B9FA1]">
                                Book a free consultation
                            </span>
                        </button>
                    </BookConsultation>
                    <hr />
                    <BookConsultation
                        buttonClassName="flex space-x-4 text-left"
                        modalElement={
                            <>
                                <iframe
                                    src="https://calendly.com/myiclinic/free_visioncorrection_consultation"
                                    width={600}
                                    height={700}
                                    className="w-full md:min-h-[70rem]"
                                ></iframe>
                            </>
                        }
                        maxWidth="70rem"
                    >
                        <button>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black"
                                />
                                <path
                                    d="M13.334 1.66699V5.00033"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black"
                                />
                                <path
                                    d="M6.66602 1.66699V5.00033"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black"
                                />
                                <path
                                    d="M2.5 8.33301H17.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black"
                                />
                            </svg>
                            <span className="relative cursor-pointer font-mulishBold text-[1.6rem] capitalize leading-8 text-heading transition-all duration-500 group-hover/menu-item:text-[#9B9FA1]">
                                Book a free laser screening
                            </span>
                        </button>
                    </BookConsultation>
                </div>
            </div>
        </div>
    );
};

export default ConsultationDropdown;
