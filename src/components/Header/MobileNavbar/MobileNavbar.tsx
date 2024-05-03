import MenuCta from '@/components/Header/MenuCta';
import { BookConsultation } from '@/page-sections/index';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { BiLeftArrowCircle } from 'react-icons/bi';
import Context from 'src/components/Header/Context';
import NavMenu from './NavMenu';
import { Button2 } from '@/components/Buttons';

interface MobileNavbarProps {
    openMobileMenu: boolean;
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
    setOpenSearch: Dispatch<SetStateAction<boolean>>;
}

export interface InnerAppContext {
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
    navMenuData: any;
}

// Create a new inner context

/**
 * Mobile navbar component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const MobileNavbar = ({ openMobileMenu, setOpenMobileMenu, setOpenSearch }: MobileNavbarProps): JSX.Element => {
    return (
        <>
            <Context>
                <div
                    className={`fixed left-0 top-0 z-[101] grid max-h-screen w-full -translate-y-full grid-rows-[auto_1fr] gap-16 overflow-y-auto overflow-x-hidden bg-[#003E79] pt-6 shadow-shadow2 transition-all duration-500 xl:hidden ${
                        openMobileMenu && '!translate-y-0'
                    }`}
                >
                    <div className="flex items-center justify-between px-6">
                        <Link href="/" className="" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                            <Image
                                src="/images/logos/logo-iclinic-desktop.png"
                                alt="My-iClinic"
                                width={154}
                                height={36}
                                quality={100}
                                priority
                            />
                        </Link>

                        <div className="flex items-center justify-center gap-12">
                            <button
                                type="button"
                                className="xl:hidden"
                                onClick={() => {
                                    setOpenMobileMenu(!openMobileMenu);
                                    setOpenSearch(true);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                >
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

                            <IconButton
                                aria-label="Close navigation"
                                onClick={() => setOpenMobileMenu(!openMobileMenu)}
                                className="flex items-center justify-center gap-2"
                            >
                                <BiLeftArrowCircle className="fill-white text-[2.5rem]" />
                                <span className="font-mulishBold text-[1.4rem] leading-[2.4rem] text-white">Back</span>
                            </IconButton>
                        </div>
                    </div>

                    {/* <ConsultationButtons setOpenMobileMenu={setOpenMobileMenu} /> */}

                    <div className="flex items-center justify-center gap-3">
                        <BookConsultation buttonClassName="text-white uppercase flex items-center justify-center gap-4 rounded-[0.5rem] bg-[#09F] font-mulishBold text-white hover:!text-[#09F]">
                            <Button2 type="button" text="Book a consultation" />
                        </BookConsultation>
                        <Link
                            href="https://api.whatsapp.com/send/?phone=447850395332&text&type=phone_number&app_absent=0"
                            target="_blank"
                        >
                            <Image
                                src="/images/icons/icon-whatsapp-green.svg"
                                width={60}
                                height={60}
                                alt="Chat in whatsapp"
                            />
                        </Link>
                    </div>

                    <NavMenu setOpenMobileMenu={setOpenMobileMenu} />

                    <MenuCta setOpenMobileMenu={setOpenMobileMenu} centerText />
                </div>
            </Context>

            {/* The overlay */}
            <div
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
                className={`fixed left-0 top-0 z-[99] h-screen w-full bg-black transition-all duration-500 xl:hidden ${
                    openMobileMenu ? 'pointer-events-auto opacity-50' : 'pointer-events-none opacity-0'
                } `}
            ></div>
        </>
    );
};

interface ConsultationButtonsProps {
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const ConsultationButtons = ({ setOpenMobileMenu }: ConsultationButtonsProps): JSX.Element => {
    return (
        <div className="flex items-center justify-center gap-6" onClick={() => setOpenMobileMenu(false)}>
            <div onClick={() => setOpenMobileMenu(false)}>
                <Link
                    href="https://partner.pabau.com/online-bookings/my-iclinic?groupCategory=0&serviceType=0&category=130874"
                    target="_blank"
                    title="Free screening"
                    className="flex items-center justify-center gap-4 rounded-[0.5rem] bg-[#09F] px-4 py-4 font-mulishBold text-white xs:px-10"
                >
                    Free screening
                </Link>
            </div>

            <div onClick={() => setOpenMobileMenu(false)}>
                <Link
                    target="_blank"
                    title="Private consultation"
                    href="https://partner.pabau.com/online-bookings/my-iclinic?groupCategory=0&serviceType=0&category=125172"
                    className="flex items-center justify-center gap-4 rounded-[0.5rem] bg-[#09F] px-4 py-4 font-mulishBold text-white xs:px-10"
                >
                    Private consultation
                </Link>
            </div>
        </div>
    );
};

export default MobileNavbar;
