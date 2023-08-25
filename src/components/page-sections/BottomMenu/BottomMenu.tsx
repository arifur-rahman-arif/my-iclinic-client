import IconCalender from '/public/images/icons/icon-calendar-outline-darker.svg';
import IconLetter from '/public/images/icons/icon-letter-aa.svg';
import IconMapOutline from '/public/images/icons/icon-map-outline.svg';
import IconTelephoneOutline from '/public/images/icons/icon-telephone-outline.svg';
import { useFontZoom } from '@/hooks';
import IconChat from '@/icons/icon-chat-outline-blue-bg.svg';
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
    const { handleZoomToggle } = useFontZoom();
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

    return (
        <div className="fixed bottom-0 left-0 z-10 h-32 w-full bg-white py-12 px-20 shadow-shadow1 xl:hidden">
            <ul className="flex h-full w-full items-center justify-between gap-10 sm:justify-center sm:gap-12 md:gap-20">
                <li className="relative cursor-pointer">
                    <button className="block" onClick={() => setShowDropDown(!showDropDown)}>
                        <Image src={IconCalender} alt="" />
                    </button>

                    <VscTriangleUp
                        className={`pointer-events-none absolute top-0 left-0 h-10 w-10 -translate-y-[calc(100%_+_2rem)] fill-brand transition-all duration-500 ${
                            showDropDown ? 'opacity-100' : 'opacity-0'
                        }`}
                    />

                    <div
                        className={`absolute top-0 left-0 grid min-w-[32rem] -translate-x-12 gap-12 rounded-primary bg-white p-12 drop-shadow-lg transition-all duration-500 ${
                            showDropDown ?
                                'pointer-events-auto -translate-y-[calc(100%_+_4rem)] opacity-100' :
                                'pointer-events-none -translate-y-full opacity-0'
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
                        <BookConsultation
                            buttonClassName="flex items-center justify-start gap-3"
                            modalElement={
                                <>
                                    <iframe
                                        src="https://calendly.com/myiclinic/free-laser-consultation"
                                        width={600}
                                        height={700}
                                        className="w-full md:min-h-[70rem]"
                                    ></iframe>
                                </>
                            }
                            maxWidth="70rem"
                        >
                            <button>
                                <Image
                                    src="/images/icons/icon-booking-outline.svg"
                                    alt="Laser screening"
                                    width={24}
                                    height={24}
                                />
                                <span className="relative cursor-pointer font-mulishBold text-[1.6rem] capitalize leading-8 text-heading transition-all duration-500 group-hover/menu-item:text-[#9B9FA1]">
                                    Book a free laser screening
                                </span>
                            </button>
                        </BookConsultation>

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
                    <Link href="tel:(+44) 0208 445 8877" aria-label="Call">
                        <Image src={IconTelephoneOutline} alt="" quality={100} />
                    </Link>
                </li>
                <li className="grid place-items-center">
                    <button aria-label="Live chat">
                        <Image src={IconChat} alt="" quality={100} onClick={openFreshdeskChat} />
                    </button>
                </li>
                <li onClick={() => handleZoomToggle()} className="grid place-items-center">
                    <button aria-label="Font Resizer">
                        <Image src={IconLetter} alt="" quality={100} />
                    </button>
                </li>
                <li>
                    <Link
                        href="https://www.google.com/maps/place/960+High+Rd,+London+N12+8FA,+UK/@51.6220441,-0.1783466,17z/data=!3m1!4b1!4m5!3m4!1s0x487619c2ce086057:0xb2604f94b7bbeecd!8m2!3d51.6220441!4d-0.1761579"
                        aria-label="Location"
                        rel=""
                    >
                        <Image src={IconMapOutline} alt="" quality={100} />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default BottomMenu;
