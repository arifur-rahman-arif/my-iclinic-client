import IconConsultation from '/public/images/icons/icon-appointment.svg';
import IconMapOutline from '/public/images/icons/icon-ai-navigation.svg';
import IconChat from '@/icons/icon-bubble-typing-chat.svg';
import IconTelephoneOutline from '@/icons/icon-telephone-down.svg';
import { useOnclickOutside } from '@/hooks';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';

import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { VscTriangleUp } from 'react-icons/vsc';

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
        >
            <ul className="flex h-full w-full items-center justify-between gap-10 sm:justify-center sm:gap-12 md:gap-20">
                <li className="grid place-items-center gap-2">
                    <Link
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=447850395332&text&type=phone_number&app_absent=0"
                        title="Live chat"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            className="h-9 w-9"
                        >
                            <path
                                d="M9.16332 1.66663C5.07845 1.6679 1.66565 5.0851 1.66566 9.1666C1.66567 10.6381 2.10362 12.0916 2.92102 13.3205L1.66333 16.6666L5.87486 15.905C6.90365 16.4078 8.03335 16.6598 9.16332 16.6605C13.2517 16.6633 16.6677 13.2506 16.6677 9.1666C16.6677 5.08724 13.2505 1.66421 9.16332 1.66663Z"
                                stroke="#4A759F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.57658 12.47C10.5913 13.1214 11.6492 12.647 12.386 12.0975C12.8949 11.7179 12.878 10.9858 12.4433 10.5231L11.5862 9.61066C11.2611 9.93578 10.6275 10.0967 10.1873 9.96272C9.24112 9.67475 8.844 9.1817 8.52217 8.68038C8.15256 8.10458 8.56996 7.24464 8.89508 6.91953L7.93974 6.04737C7.53698 5.67969 6.92523 5.61765 6.57382 6.03468C5.87852 6.85977 5.44611 8.11243 5.95821 8.91005C6.87753 10.3419 8.14465 11.5508 9.57658 12.47Z"
                                stroke="#4A759F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                    {/* <span className="font-mulishBold text-[1.4rem] leading-[1.4rem] text-[#293C4E]">Chat</span> */}
                </li>

                <li className="grid place-items-center">
                    <button title="Live chat" onClick={openFreshdeskChat}>
                        <Image src={IconChat} alt="" className="h-9 w-9" />
                    </button>
                </li>

                <li>
                    <Link href="tel:(+44) 0208 445 8877" aria-label="Call" className="grid place-items-center gap-2">
                        <Image src={IconTelephoneOutline} alt="" />
                    </Link>
                </li>

                <li className={`relative cursor-pointer`} ref={ref}>
                    <button
                        className={`grid place-items-center gap-2 transition-all duration-500 ${
                            showDropDown && 'opacity-50'
                        }`}
                        onClick={() => setShowDropDown(!showDropDown)}
                        title="Consultation"
                    >
                        <Image src={IconConsultation} alt="" className="h-9 w-9" />
                    </button>

                    <VscTriangleUp
                        className={`pointer-events-none absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 -translate-y-[calc(100%_+_0.5rem)] fill-brand transition-all duration-500 ${
                            showDropDown ? 'opacity-100' : 'opacity-0'
                        }`}
                    />

                    <div
                        className={`absolute left-0 top-0 grid min-w-[30rem] -translate-x-[calc(100%_-_8rem)] gap-12 rounded-radius2 bg-white p-12 drop-shadow-lg transition-all duration-500 xs:min-w-[32rem] ${
                            showDropDown
                                ? 'pointer-events-auto -translate-y-[calc(100%_+_2.5rem)] opacity-100'
                                : 'pointer-events-none -translate-y-full opacity-0'
                        }`}
                        onClick={() => setShowDropDown(false)}
                    >
                        <BookConsultation buttonClassName="flex items-center justify-start gap-3">
                            <button type="button">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                        stroke="#051821"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-black"
                                    />
                                    <path
                                        d="M13.334 1.66699V5.00033"
                                        stroke="#051821"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-black"
                                    />
                                    <path
                                        d="M6.66602 1.66699V5.00033"
                                        stroke="#051821"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-black"
                                    />
                                    <path
                                        d="M2.5 8.33301H17.5"
                                        stroke="#051821"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-black"
                                    />
                                </svg>
                                <span className="relative cursor-pointer font-mulishBold text-[1.6rem] capitalize leading-8 text-heading transition-all duration-500 group-hover/menu-item:text-[#9B9FA1]">
                                    Request a callback
                                </span>
                            </button>
                        </BookConsultation>
                        {/* <BookConsultation
                            buttonClassName="flex items-center justify-start gap-3"
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

                        {/* <Link */}
                        {/*     className="flex items-center justify-start gap-3" */}
                        {/*     href="https://connect.pabau.com/bookings.php?compid=11842" */}
                        {/*     target="_blank" */}
                        {/*     title="Book a free laser screening" */}
                        {/* > */}
                        {/*     <Image */}
                        {/*         src="/images/icons/icon-booking-outline.svg" */}
                        {/*         alt="Laser screening" */}
                        {/*         width={24} */}
                        {/*         height={24} */}
                        {/*     /> */}
                        {/*     <span className="relative cursor-pointer text-left font-mulishBold text-[1.6rem] capitalize leading-8 text-heading transition-all duration-500 group-hover/menu-item:text-[#9B9FA1]"> */}
                        {/*         Book a free laser screening */}
                        {/*     </span> */}
                        {/* </Link> */}

                        <div className="flex items-center justify-start gap-3">
                            <Image
                                src="/images/icons/icon-suitablity.svg"
                                alt="Suitablity check"
                                width={25}
                                height={25}
                            />
                            <Link
                                href="/suitability-check"
                                aria-label="Suitability Check"
                                className="capitalize !text-heading"
                            >
                                Free suitability check
                            </Link>
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
                        <Image src={IconMapOutline} alt="" width={30} height={30} quality={100} className="h-9 w-9" />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default BottomMenu;
