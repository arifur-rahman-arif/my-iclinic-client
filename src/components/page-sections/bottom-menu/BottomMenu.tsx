import Image from 'next/image';
import Link from 'next/link';
import IconCalender from '/public/images/icons/icon-calendar-outline.svg';
import IconTelephoneOutline from '/public/images/icons/icon-telephone-outline.svg';
import IconChat from '/public/images/icons/icon-chat-outline-blue-bg.svg';
import IconLetter from '/public/images/icons/icon-letter-aa.svg';
import IconMapOutline from '/public/images/icons/icon-map-outline.svg';

/**
 * Bottom menu of the website for mobile devices
 *
 * @returns {*}  {JSX.Element}
 */
const BottomMenu = (): JSX.Element => {
    return (
        <div className="fixed bottom-0 left-0 z-10 h-32 w-full overflow-hidden bg-white py-12 px-20 shadow-shadow1 sm:hidden">
            <ul className="flex h-full w-full items-center justify-between gap-10">
                <li>
                    <Link href="#">
                        <Image src={IconCalender} alt="" quality={20} />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image src={IconTelephoneOutline} alt="" quality={20} />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image src={IconChat} alt="" quality={20} />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image src={IconLetter} alt="" quality={20} />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image src={IconMapOutline} alt="" quality={20} />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default BottomMenu;
