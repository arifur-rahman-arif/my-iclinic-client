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
import { useEffect } from 'react';

/**
 * Bottom menu of the website for mobile devices
 *
 * @returns {*}  {JSX.Element}
 */
const BottomMenu = (): JSX.Element => {
    const { handleZoomToggle } = useFontZoom();

    useEffect(() => {
        // @ts-ignore
        if (window?.fcWidget) {
            // @ts-ignore
            window.fcWidget.on('widget:closed', function (resp) {
                const freshChatIcon = document.getElementById('fc_frame');

                if (freshChatIcon) freshChatIcon.style.opacity = '0';
            });
        }
    }, []);

    return (
        <div className="fixed bottom-0 left-0 z-10 h-32 w-full overflow-hidden bg-white py-12 px-20 shadow-shadow1 sm:hidden">
            <ul className="flex h-full w-full items-center justify-between gap-10">
                <li className="cursor-pointer">
                    <BookConsultation>
                        <Image src={IconCalender} alt="" />
                    </BookConsultation>
                </li>
                <li>
                    <Link href="tel:(+44) 0208 445 8877" aria-label="Call">
                        <Image src={IconTelephoneOutline} alt="" quality={100} />
                    </Link>
                </li>
                <li className="grid place-items-center">
                    <button aria-label="Live chat" onClick={openFreshdeskChat}>
                        <Image src={IconChat} alt="" quality={100} />
                    </button>
                </li>
                <li onClick={() => handleZoomToggle()} className="grid place-items-center">
                    <button>
                        <Image src={IconLetter} alt="" quality={100} />
                    </button>
                </li>
                <li>
                    <Link
                        href="https://www.google.com/maps/place/960+High+Rd,+London+N12+8FA,+UK/@51.6220441,-0.1783466,17z/data=!3m1!4b1!4m5!3m4!1s0x487619c2ce086057:0xb2604f94b7bbeecd!8m2!3d51.6220441!4d-0.1761579"
                        target="_blank"
                        aria-label="Location"
                    >
                        <Image src={IconMapOutline} alt="" quality={100} />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default BottomMenu;
