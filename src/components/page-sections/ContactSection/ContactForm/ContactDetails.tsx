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
        <div className="grid content-start gap-12 rounded-primary bg-brand p-12 md:gap-24 lg:p-24">
            {/* Grid item #1 */}
            <div className="grid content-start gap-6">
                <div className="flex items-center justify-start gap-6">
                    <Image
                        src="/images/icons/icon-clock-white.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="translate-y-[0.1rem]"
                    />
                    <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-white">
                        Monday-Friday 9am- 5:30pm
                    </span>
                </div>

                <div className="flex items-center justify-start gap-6">
                    <Image
                        src="/images/icons/icon-map-pin.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="translate-y-[0.1rem]"
                    />
                    <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-white">
                        960 High Rd, London N12 9RY
                    </span>
                </div>

                <div className="flex items-center justify-start gap-6">
                    <Image
                        src="/images/icons/icon-mail-white.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="translate-y-[0.1rem]"
                    />
                    <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-white">
                        reception@my-iclinic.co.uk
                    </span>
                </div>

                <div className="flex items-center justify-start gap-6">
                    <Image
                        src="/images/icons/icon-phone-white.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="translate-y-[0.1rem]"
                    />
                    <Link
                        href="tel:0208 445 8877"
                        className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-white"
                    >
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
                    className="flex items-center justify-center gap-4 font-latoBold text-[2rem] leading-[2.8rem] text-white"
                    onClick={openFreshdeskChat}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Chat with us
                </button>
            </div>
        </div>
    );
};

export default ContactDetails;
