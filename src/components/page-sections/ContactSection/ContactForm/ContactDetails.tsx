import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Contact information component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ContactDetails = (): JSX.Element => {
    return (
        <div className="grid content-start gap-12 md:gap-24">
            {/* Grid item #1 */}
            <div className="grid content-start gap-6">
                <div className="flex items-center justify-start gap-6">
                    <Image
                        src="/images/icons/icon-clock-outline-dark.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="translate-y-[0.1rem]"
                    />
                    <span className="font-latoBold text-[2rem] leading-[2.8rem]">Monday-Friday 9am- 5:30pm</span>
                </div>

                <div className="flex items-center justify-start gap-6">
                    <Image
                        src="/images/icons/icon-map-pin.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="translate-y-[0.1rem]"
                    />
                    <span className="font-latoBold text-[2rem] leading-[2.8rem]">960 High Rd, London N12 9RY</span>
                </div>

                <div className="flex items-center justify-start gap-6">
                    <Image
                        src="/images/icons/icon-mail-outline-dark.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="translate-y-[0.1rem]"
                    />
                    <span className="font-latoBold text-[2rem] leading-[2.8rem]">reception@my-iclinic.co.uk</span>
                </div>

                <div className="flex items-center justify-start gap-6">
                    <Image
                        src="/images/icons/icon-telephone-outline.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="translate-y-[0.1rem]"
                    />
                    <Link href="tel:0208 445 8877" className="font-latoBold text-[2rem] leading-[2.8rem]">
                        0208 445 8877
                    </Link>
                </div>
            </div>

            {/* Grid item #2 */}
            <div className="grid place-items-center gap-12 md:gap-16">
                <span className="font-latoExtraBold text-[4.8rem] leading-[4.8rem] text-[#9B9FA1] md:text-[8.4rem] md:leading-[4.8rem]">
                    or
                </span>

                <button
                    className="flex items-center justify-center gap-4 font-latoBold text-[2rem] leading-[2.8rem] text-heading2"
                    onClick={openFreshdeskChat}
                >
                    <Image src="/images/icons/icon-chat.svg" alt="" width={20} height={20} />
                    Chat with us
                </button>
            </div>
        </div>
    );
};

export default ContactDetails;
