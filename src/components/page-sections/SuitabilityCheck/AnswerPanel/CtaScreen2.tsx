// import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { Context } from '@/page-sections/SuitabilityCheck/Context';
import HTMLReactParser from 'html-react-parser';
import Link from 'next/link';
import { useContext } from 'react';
import CtaForm from './CtaForm';
import styles from './styles/PanelReveal.module.scss';

interface CtaScreen2 {
    heading: string;
    includeSuitabilityButtons?: boolean;
    node: number;
}

/**
 * Component for displaying CTA Screen 2.
 *
 * @component
 * @param {string} heading - The heading to be displayed.
 * @param {boolean} includeSuitabilityButtons - Flag to include suitability buttons. Default is true.
 * @returns {JSX.Element} The rendered CTA Screen 2 component.
 */
const CtaScreen2 = ({ heading, includeSuitabilityButtons = false, node }: CtaScreen2): JSX.Element => {
    const ctx = useContext(Context);
    const selectedOption = ctx.options?.filter((option) => option.active);

    return (
        <div
            className={`${styles.styles} grid h-full w-full place-items-center px-8 py-12 sm:px-12 md:px-24 md:py-24 xl:px-40`}
        >
            <div className="grid h-full place-items-center content-center gap-12 md:gap-24">
                {selectedOption?.length ? (
                    <div className="grid grid-cols-[1fr_auto] gap-x-12 gap-y-6 justify-self-start">
                        <span className="font-mulishBold text-[1.8rem] uppercase leading-[2.4rem] text-white md:text-[2.4rem] md:leading-[3.2rem]">
                            You have selected:
                        </span>
                        <button
                            className="col-start-2 row-span-2 mt-4 cursor-pointer self-start font-mulishBold text-[1.4rem] uppercase leading-8 text-[#0099FF] underline-offset-4 hover:underline"
                            onClick={() => {
                                ctx.setCompletedStep((ctx.completedStep -= 1));
                                ctx.navigateToStep(8);
                            }}
                        >
                            Change
                        </button>
                        <div className="grid content-start gap-6">
                            {selectedOption.map((selected, i) => (
                                <div key={i} className="flex items-start justify-start gap-2">
                                    <span className="font-medium text-white">{i + 1}.</span>
                                    <span className="!font-medium text-white" key={i}>
                                        {selected.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}

                <p className="max-w-[59.3rem] font-mulishMedium text-[1.6rem] leading-[2.8rem] text-white">
                    {HTMLReactParser(heading)}
                </p>

                <CtaForm node={node} />

                {includeSuitabilityButtons ? (
                    <div className={`flex flex-wrap items-center justify-center gap-6`}>
                        {/* Modal */}
                        {/* <BookConsultation
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
                            buttonClassName=""
                        >
                        </BookConsultation> */}

                        <Link
                            target="_blank"
                            title="Book a suitability check"
                            href="https://connect.pabau.com/bookings.php?compid=11842"
                            className="group/consultation grid cursor-pointer grid-flow-col place-items-center gap-5 rounded-primary border border-heading2 bg-heading2 px-8 py-6 transition-all duration-500 hover:!border-white hover:bg-transparent"
                            aria-label="Book a free screening test"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/consultation:stroke-white"
                                />
                                <path
                                    d="M13.334 1.66699V5.00033"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/consultation:stroke-white"
                                />
                                <path
                                    d="M6.66602 1.66699V5.00033"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/consultation:stroke-white"
                                />
                                <path
                                    d="M2.5 8.33301H17.5"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/consultation:stroke-white"
                                />
                            </svg>

                            <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500">
                                Book a suitability check
                            </span>
                        </Link>

                        {/* Phone number */}
                        <Link
                            href="tel:0208 445 8877"
                            className={
                                'group/phone grid cursor-pointer grid-flow-col place-items-center gap-5 rounded-primary border border-white px-8 py-6 transition-all duration-500 hover:border-heading2 hover:bg-heading2'
                            }
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.0499 5C16.0267 5.19057 16.9243 5.66826 17.628 6.37194C18.3317 7.07561 18.8094 7.97326 18.9999 8.95M15.0499 1C17.0792 1.22544 18.9715 2.13417 20.4162 3.57701C21.8608 5.01984 22.7719 6.91101 22.9999 8.94M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4742 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3147 6.72527 15.2662 5.18993 12.85C3.49991 10.2412 2.44818 7.27099 2.11993 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36162C2.30506 3.09849 2.4475 2.85669 2.6347 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05833 3.83227 2.00026 4.10993 2H7.10993C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10993 3.72C9.23656 4.68007 9.47138 5.62273 9.80993 6.53C9.94448 6.88792 9.9736 7.27691 9.89384 7.65088C9.81408 8.02485 9.6288 8.36811 9.35993 8.64L8.08993 9.91C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0555 17.4699 14.19C18.3772 14.5286 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z"
                                    stroke="#fff"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-500 group-hover/phone:stroke-white"
                                />
                            </svg>

                            <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/phone:text-white">
                                0208 445 8877
                            </span>
                        </Link>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default CtaScreen2;
