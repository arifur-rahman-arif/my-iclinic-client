import { Container } from '@/components/Container';
import AboutUs from '@/components/Header/AboutUs';
import Tooltip from '@/components/Tooltip/Tooltip';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import ConsultationButtons from './ConsultationButtons';

interface TopBarProps {
    setOpenSearch: Dispatch<SetStateAction<boolean>>;
}

/**
 * Top bar of navigation
 *
 * @param {any} articles
 * @param {Dispatch<SetStateAction<boolean>>} setOpenSearch
 * @returns {JSX.Element}
 * @constructor
 */
const TopBar = ({ setOpenSearch }: TopBarProps): JSX.Element => {
    const [showTooltip, setShowTooltip] = useState(false);
    const router = useRouter();

    return (
        <div className="relative hidden bg-[#003E79] xl:block">
            <span className="absolute right-0 top-0 z-[1] h-full w-full max-w-[33%] bg-[#005DAF]"></span>

            <Container className="grid gap-12 xl:grid-cols-[auto_1fr_auto]">
                <ul className="flex items-center justify-center gap-8 pt-[1.9rem] pb-[2.3rem]">
                    <li>
                        <Tooltip
                            text={
                                <div className="px-6 py-3">
                                    <span className="whitespace-nowrap font-mulishBold text-[1.8rem] leading-[2.4rem] text-heading">
                                        960 High Rd, London N12 9RY
                                    </span>
                                </div>
                            }
                            className="z-[100] -ml-40 md:hidden"
                            showTooltip={showTooltip}
                            arrowClassName="ml-[20rem]"
                        >
                            <button
                                className="grid grid-flow-col place-items-center gap-4"
                                title="Location"
                                onClick={() => setShowTooltip(!showTooltip)}
                            >
                                <Image src="/images/icons/icon-map-pin.svg" alt="Location" width={18} height={18} />
                                <span className="hidden font-mulishBold leading-[2.4rem] text-white md:block">
                                    London N12 9RY
                                </span>
                            </button>
                        </Tooltip>
                    </li>
                    <li>
                        <Link
                            className="grid grid-flow-col place-items-center gap-4"
                            href="tel:+44 208 445 8877"
                            title="Phone"
                        >
                            <Image src="/images/icons/icon-phone-white.svg" alt="Location" width={18} height={18} />
                            <span className="hidden font-mulishBold leading-[2.4rem] text-white md:block">
                                +44 0208 445 8877
                            </span>
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center justify-center">
                    <Link
                        href="/articles"
                        title="Contact us"
                        className={`relative grid h-full cursor-pointer place-items-center px-6 font-mulishBold text-[1.6rem] leading-8 transition-all duration-500 hover:text-[#9B9FA1] ${
                            router.pathname === '/articles' ? 'text-[#9B9FA1]' : 'text-white'
                        }`}
                    >
                        Articles
                        {/* {router.pathname === '/contact-us' && ( */}
                        {/*     <span */}
                        {/*         className="absolute left-0 top-full h-1 w-full translate-y-4 rounded-full bg-[#9B9FA1]"></span> */}
                        {/* )} */}
                    </Link>

                    <AboutUs />

                    <Link
                        href="/contact-us"
                        title="Contact us"
                        className={`relative grid h-full cursor-pointer place-items-center px-6 font-mulishBold text-[1.6rem] leading-8 transition-all duration-500 hover:text-[#9B9FA1] ${
                            router.pathname === '/contact-us' ? 'text-[#9B9FA1]' : 'text-white'
                        }`}
                    >
                        Contact us
                        {/* {router.pathname === '/contact-us' && ( */}
                        {/*     <span */}
                        {/*         className="absolute left-0 top-full h-1 w-full translate-y-4 rounded-full bg-[#9B9FA1]"></span> */}
                        {/* )} */}
                    </Link>

                    <button type="button" onClick={() => setOpenSearch(true)} className="px-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 24" fill="none">
                            <path
                                d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z"
                                stroke="#fff"
                                strokeOpacity="0.9"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21.5004 21.0004L17.1504 16.6504"
                                stroke="#fff"
                                strokeOpacity="0.9"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <ConsultationButtons />
            </Container>
        </div>
    );
};

export default TopBar;
