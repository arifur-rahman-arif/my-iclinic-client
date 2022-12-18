import Image from 'next/image';
import { LinkText } from '@/components/link';

/**
 * Footer header links component
 *
 * @returns {*}  {JSX.Element}
 */
const FooterHeaderLinks = (): JSX.Element => {
    return (
        <div className="mt-16 grid grid-cols-1 items-start gap-6 sm:max-w-[95%] sm:grid-cols-2 md:mt-24">
            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-calendar-outline-darker.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <LinkText href="#" defaultClassName="font-mulishBold text-[1.6rem] leading-[2.4rem] relative block">
                    Book A Consultation
                </LinkText>
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

            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-telephone-outline.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <span className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem]">
                    (+44) 0208 445 8877
                </span>
            </div>

            <div className="hidden items-center justify-start gap-4 md:flex">
                <Image
                    src="/images/icons/icon-eye-outlined-blue.svg"
                    alt=""
                    quality={70}
                    width={24}
                    height={24}
                    className="h-[2.4rem] w-[2.4rem]"
                />
                <LinkText
                    href="#"
                    defaultClassName="font-mulishBold text-[1.6rem] leading-[2.4rem] relative block text-blue"
                    indicatorColor="bg-blue"
                >
                    Map View
                </LinkText>
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
        </div>
    );
};

export default FooterHeaderLinks;
