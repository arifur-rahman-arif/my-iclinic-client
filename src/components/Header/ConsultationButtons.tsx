import Tooltip from '@/components/Tooltip/Tooltip';
import { useOnclickOutside } from '@/hooks';
// import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { BookConsultation } from '@/page-sections/index';
import { FaAngleDown } from 'react-icons/fa';

// import { BsPeople } from 'react-icons/bs';

interface ConsultationButtonsProps {
    freeScreeningTextClassName?: string;
    consultationTextClassName?: string;
    className?: string;
}

/**
 * Consultation dropdown
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ConsultationButtons = ({
                                 freeScreeningTextClassName,
                                 consultationTextClassName,
                                 className
                             }: ConsultationButtonsProps): JSX.Element => {
    const [showTooltip, setShowTooltip] = useState(false);
    const outsideRef = useOnclickOutside(() => setShowTooltip(false));

    return (
        <div
            ref={outsideRef}
            className={twMerge(
                'relative z-[2] flex h-full items-center justify-center gap-12 bg-[#005DAF] px-8 pl-12',
                className
            )}
        >
            {/* <BookConsultation
                buttonClassName="flex items-center justify-center gap-4"
                modalElement={
                    <>
                        <iframe
                            src=""
                            width={600}
                            height={700}
                            className="w-full md:min-h-[70rem]"
                        ></iframe>
                    </>
                }
                maxWidth="70rem"
            >
            </BookConsultation> */}
            {/*
            <Link
                href="https://connect.pabau.com/bookings.php?compid=11842"
                target="_blank"
                title="Book free consultation"
                className="flex items-center justify-center gap-4"
            >
                <Image src="/images/icons/icon-eye-scan.svg" alt="" width={40} height={40} />
                <span
                    className={twMerge(
                        'font-mulishBold text-[1.8rem] leading-[2.8rem] text-white',
                        freeScreeningTextClassName
                    )}
                >
                    Free screening
                </span>
            </Link> */}

            <Tooltip
                showTooltip={showTooltip}
                type="clickable"
                className="min-w-[23rem]"
                arrowClassName="border-b-white"
                text={
                    <>
                        <div className="grid justify-items-start gap-8 px-10 py-8">
                            <Link
                                href="https://partner.pabau.com/online-bookings/my-iclinic?groupCategory=0&serviceType=0&category=130874"
                                target="_blank"
                                title="Free screening"
                                className="flex items-center justify-center gap-3 transition-all duration-500 hover:opacity-60"
                            >
                                <span
                                    className="h-6 w-6 block border-secondary border-solid border-[0.3rem] rounded-full"></span>
                                {/* <Image src="/images/icons/icon-eye-scan.svg" alt="" width={40} height={40} /> */}
                                <span className={twMerge('font-mulishBold', freeScreeningTextClassName)}>
                                    Free screening
                                </span>
                            </Link>

                            <Link
                                className="flex items-center justify-center gap-3 transition-all duration-500 hover:opacity-60"
                                target="_blank"
                                title="Private consultation"
                                href="https://partner.pabau.com/online-bookings/my-iclinic?groupCategory=0&serviceType=0&category=125172"
                            >
                                 <span
                                     className="h-6 w-6 block border-secondary border-solid border-[0.3rem] rounded-full"></span>
                                {/* <Image src="/images/icons/icon-consultation.svg" alt="" width={40} height={40} /> */}
                                <span className={twMerge('font-mulishBold', consultationTextClassName)}>
                                    Private consultation
                                </span>
                            </Link>
                        </div>
                    </>
                }
            >
                <button
                    onClick={() => setShowTooltip(!showTooltip)}
                    className="flex cursor-pointer items-center justify-center gap-4 font-mulishBold text-white"
                >
                    {/* <svg width="28" height="28" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g
                            id="user-multiple-circle--close-geometric-human-multiple-person-up-user-circle"
                            clip-path="url(#clip0_13169_869)"
                        >
                            <g id="user-multiple-circle--close-geometric-human-multiple-person-up-user-circle_2">
                                <path
                                    id="Subtract"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M29 15.5C29 7.21574 22.5081 0.5 14.5 0.5C6.49187 0.5 -7.62939e-06 7.21574 -7.62939e-06 15.5C-7.62939e-06 18.4001 0.795566 21.1079 2.17325 23.4026C2.24615 23.5241 2.32072 23.6444 2.39684 23.7635C2.39678 23.7635 2.3969 23.7635 2.39684 23.7635C4.99174 27.8227 9.44351 30.5 14.5 30.5C22.5081 30.5 29 23.7843 29 15.5ZM14.5 27.2857C15.6391 27.2857 16.7391 27.1128 17.7769 26.7909C16.8797 22.5828 14.1355 19.1161 9.46754 19.1161C7.50809 19.1161 5.81849 19.8141 4.40045 20.9592C6.30381 24.7196 10.1122 27.2857 14.5 27.2857ZM19.8725 25.8956C21.9613 24.7381 23.6605 22.9265 24.7146 20.7255C24.6181 20.6635 24.5201 20.6035 24.4207 20.5458C23.2609 19.8718 21.9532 19.5179 20.6229 19.5179C19.4051 19.5179 18.206 19.8146 17.1221 20.3819C17.2204 20.4939 17.3165 20.6082 17.4104 20.7246C18.6178 22.2219 19.4187 24.02 19.8725 25.8956ZM9.79599 7.44924C12.3645 7.44924 14.4467 9.60324 14.4467 12.2603C14.4467 14.9174 12.3645 17.0714 9.79599 17.0714C7.22748 17.0714 5.14526 14.9174 5.14526 12.2603C5.14526 9.60324 7.22748 7.44924 9.79599 7.44924ZM24.4387 13.657C24.4387 11.4556 22.7136 9.67111 20.5857 9.67111C18.4578 9.67111 16.7327 11.4556 16.7327 13.657C16.7327 15.8583 18.4578 17.6428 20.5857 17.6428C22.7136 17.6428 24.4387 15.8583 24.4387 13.657Z"
                                    fill="#fff"
                                />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_13169_869">
                                <rect width="29" height="30" fill="white" transform="translate(-7.62939e-06 0.5)" />
                            </clipPath>
                        </defs>
                    </svg> */}
                    {/* <span className="rounded-full bg-[#0052a0] w-16 h-16 grid place-items-center"> */}
                    {/*     <BsPeople fill="white" className="h-7 w-7" /> */}
                    {/* </span> */}
                    Book an appointment
                    <FaAngleDown
                        className={`-ml-2 h-[1.6rem] w-[1.6rem] translate-y-[0.1rem]  fill-white transition-all duration-500 ${
                            showTooltip ? 'rotate-0' : '-rotate-90'
                        } `}
                    />
                </button>
            </Tooltip>

            <BookConsultation buttonClassName="flex items-center justify-center gap-4">
                <button>
                    {/* <Image src="/images/icons/icon-consultation.svg" alt="" width={40} height={40} /> */}
                    <span className={twMerge('font-mulishBold text-white', consultationTextClassName)}>
                        Speak with an advisor
                    </span>
                </button>
            </BookConsultation>
        </div>
    );
};

export default ConsultationButtons;
