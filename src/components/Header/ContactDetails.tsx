import Image from 'next/image';

/**
 * Contact details of navigation
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ContactDetails = (): JSX.Element => {
    return (
        <div className="contact-details hidden items-center justify-start gap-24 xl:flex xl:justify-self-end">
            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-telephone-outline.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <a href="tel:0208 445 8877">
                    <span className="relative block cursor-pointer font-mulishBold text-[1.6rem] leading-[2.4rem]">
                        (+44) 0208 445 8877
                    </span>
                </a>
            </div>

            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-mail-outline-dark.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <span className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem]">
                    reception@my-iclinic.co.uk
                </span>
            </div>

            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-map-outline.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <span className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem]">
                    960 High Rd, London N12 9RY
                </span>
            </div>
        </div>
    );
};

export default ContactDetails;
