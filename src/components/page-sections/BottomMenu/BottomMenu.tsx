import IconCalender from '/public/images/icons/icon-calendar-outline-darker.svg';
import IconLetter from '/public/images/icons/icon-letter-aa.svg';
import IconMapOutline from '/public/images/icons/icon-map-outline.svg';
import IconTelephoneOutline from '/public/images/icons/icon-telephone-outline.svg';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Bottom menu of the website for mobile devices
 *
 * @returns {*}  {JSX.Element}
 */
const BottomMenu = (): JSX.Element => {
    const [isZoomed, setIsZoomed] = useState(false);

    /**
     * Increase the zoom level of the website
     */
    const handleClick = () => {
        setIsZoomed(!isZoomed);
        const body = document.querySelector('body');
        if (!body) return;

        if (isZoomed) {
            body.style.transform = 'scale(1)';
        } else {
            body.style.transform = 'scale(1.1)'; // Or any scale factor you prefer
        }
    };

    // Const openFreshdeskChat = () => {
    //     console.log(window.fcWidget);
    //     console.log(window.fcWidget.show());
    //     window.fcWidget.open();
    //
    //     if (window.fcWidget) {
    //         window.fcWidget.open();
    //     }
    // };

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
                {/* <li className="grid place-items-center"> */}
                {/*     <button aria-label="Live chat"> */}
                {/*         <Image src={IconChat} alt="" quality={100} /> */}
                {/*     </button> */}
                {/* </li> */}
                <li onClick={handleClick} className="grid place-items-center">
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
