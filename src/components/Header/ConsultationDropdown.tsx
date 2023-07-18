import PhoneCall from '@/components/Header/PhoneCall';
import { BookConsultation } from '@/page-sections/index';
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
            <PhoneCall />

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
