import IconMapOutline from '/public/images/icons/icon-ai-navigation.svg';
import IconChat from '@/icons/icon-bubble-typing-chat.svg';
import IconTelephoneOutline from '@/icons/icon-telephone-down.svg';
import IconWhatsApp from '@/icons/icon-whatsapp-blue.svg';
import { useOnclickOutside } from '@/hooks';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';

import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { Button2 } from '@/components/Buttons';

/**
 * Bottom menu of the website for mobile devices
 *
 * @returns {*}  {JSX.Element}
 */
const BottomMenu = (): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    useEffect(() => {
        // @ts-ignore
        if (window?.fcWidget) {
            // @ts-ignore
            window.fcWidget.on('widget:closed', function (resp) {
                const freshChatIcon = document.getElementById('fc_frame');

                if (freshChatIcon) freshChatIcon.style.opacity = '0';
            });
        }
    });

    // // Close the navigation submenus if users clicks outside the navigation menu
    const ref = useOnclickOutside(() => {
        setShowDropDown(false);
    });

    return (
        <div
            className={`fixed bottom-0 left-0 z-10 h-32 w-full bg-white px-8 py-12 sm:px-12 xl:hidden ${
                !showDropDown && 'shadow-shadow1'
            }`}
            style={{
                boxShadow: '0px -4px 4px 0px rgba(0, 0, 0, 0.10)'
            }}
        >
            <ul className="flex h-full w-full items-center justify-between gap-8 sm:justify-center sm:gap-12 md:gap-20">
                <li className="grid place-items-center gap-2">
                    <Link
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=447850395332&text&type=phone_number&app_absent=0"
                        title="Live chat"
                    >
                        <Image src={IconWhatsApp} alt="w-10 h-10" />
                    </Link>
                </li>

                <li className="grid place-items-center">
                    <button title="Live chat" onClick={openFreshdeskChat}>
                        <Image src={IconChat} alt="" />
                    </button>
                </li>

                <li>
                    <Link href="tel:(+44) 0208 445 8877" aria-label="Call" className="grid place-items-center gap-2">
                        <Image src={IconTelephoneOutline} alt="" />
                    </Link>
                </li>

                <li className={`relative cursor-pointer`} ref={ref}>
                    <button
                        className={`grid place-items-center gap-2 transition-all duration-500`}
                        onClick={() => setShowDropDown(!showDropDown)}
                        title="Consultation"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-[2.4rem] w-[2.4rem]"
                        >
                            <path
                                d="M3.39588 4.16479C2.98785 4.16479 2.59654 4.32689 2.30803 4.6154C2.01951 4.90392 1.85742 5.29523 1.85742 5.70326V20.3186C1.85742 20.7266 2.01951 21.118 2.30803 21.4065C2.59654 21.6949 2.98785 21.8571 3.39588 21.8571H20.319C20.727 21.8571 21.1183 21.6949 21.4068 21.4065C21.6953 21.118 21.8574 20.7266 21.8574 20.3186V5.70326C21.8574 5.29523 21.6953 4.90392 21.4068 4.6154C21.1183 4.32689 20.727 4.16479 20.319 4.16479H17.242"
                                stroke="#003E79"
                                strokeWidth={showDropDown ? 2 : 1.5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.47266 1.85718V6.47256"
                                stroke="#003E79"
                                strokeWidth={showDropDown ? 2 : 1.5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17.2422 1.85718V6.47256"
                                stroke="#003E79"
                                strokeWidth={showDropDown ? 2 : 1.5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.47266 4.16479H14.165"
                                stroke="#003E79"
                                strokeWidth={showDropDown ? 2 : 1.5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.6082 8.10571C10.1833 8.10571 9.83894 8.45011 9.83894 8.87494V11.0385H7.67548C7.25065 11.0385 6.90625 11.3829 6.90625 11.8077V14.3077C6.90625 14.7325 7.25065 15.0769 7.67548 15.0769H9.83894V17.2403C9.83894 17.6652 10.1833 18.0095 10.6082 18.0095H13.1082C13.533 18.0095 13.8774 17.6652 13.8774 17.2403V15.0769H16.0409C16.4657 15.0769 16.8102 14.7325 16.8102 14.3077V11.8077C16.8102 11.3829 16.4657 11.0385 16.0409 11.0385H13.8774V8.87494C13.8774 8.45011 13.533 8.10571 13.1082 8.10571H10.6082Z"
                                stroke="#003E79"
                                strokeWidth={showDropDown ? 2 : 1.5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <span
                        className={`pointer-events-none absolute left-1/2 top-0 h-[0.3rem] w-[4.7rem] -translate-x-1/2 -translate-y-[calc(100%_+_2.8rem)] bg-[#003E79] transition-all duration-500 ${
                            showDropDown ? 'opacity-100' : 'opacity-0'
                        }`}
                    />

                    <div
                        className={`fixed bottom-0 left-1/2 grid w-full max-w-[34.6rem] -translate-x-1/2 overflow-hidden rounded-tl-radius2 rounded-tr-radius2 bg-[#003E79] transition-all duration-500 ${
                            showDropDown
                                ? 'pointer-events-auto -translate-y-36 opacity-100'
                                : 'pointer-events-none translate-y-full opacity-0'
                        }`}
                    >
                        <span className="bg-[#FFD400] py-6 text-center font-mulishBold text-[1.4rem] uppercase leading-[2.8rem] text-heading">
                            0% Finance avaliable
                        </span>

                        <div className="grid gap-6 overflow-hidden px-12 py-20">
                            <BookConsultation buttonClassName="bg-[#0099FF] w-full border-[#0099FF] hover:text-[#0099FF] uppercase text-white font-mulishBold flex gap-6 items-center justify-center">
                                <Button2
                                    text="Book a consultation"
                                    type="button"
                                    iconPosition="right"
                                    icon={
                                        <span className="grid h-[3.2rem] w-[3.2rem] place-items-center rounded-full bg-white">
                                            <HiOutlineArrowSmRight className="h-10 w-10 stroke-[#0099FF]" />
                                        </span>
                                    }
                                />
                            </BookConsultation>

                            <div onClick={() => setShowDropDown(false)}>
                                <Button2
                                    text="FREE suitability check"
                                    type="anchor"
                                    link="/suitability-check"
                                    iconPosition="right"
                                    className="sitemap-link w-full place-content-center bg-[#0052A0] "
                                    icon={
                                        <span className="grid h-[3.2rem] w-[3.2rem] place-items-center rounded-full bg-white">
                                            <HiOutlineArrowSmRight className="h-10 w-10 stroke-[#0099FF]" />
                                        </span>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <Link
                        href="https://www.google.com/maps/place/960+High+Rd,+London+N12+8FA,+UK/@51.6220441,-0.1783466,17z/data=!3m1!4b1!4m5!3m4!1s0x487619c2ce086057:0xb2604f94b7bbeecd!8m2!3d51.6220441!4d-0.1761579"
                        aria-label="Location"
                        rel=""
                        className="grid place-items-center gap-2"
                    >
                        <Image
                            src={IconMapOutline}
                            alt=""
                            width={30}
                            height={30}
                            quality={100}
                            className="h-[2.4rem] w-[2.4rem]"
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default BottomMenu;
