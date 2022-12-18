import { Container } from '@/components/container';
import FooterBottomLinks from './FooterBottomLinks';
import Image from 'next/image';
import { LinkText } from '@/components/link';
import React from 'react';
import footerList from './footerList';

/**
 * Footer body component
 *
 * @returns {*}  {JSX.Element}
 */
const FooterBody = (): JSX.Element => {
    return (
        <Container className="pt-12 md:pt-24">
            <div className="grid grid-cols-1 items-start gap-12  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {footerList.map((list, index) => (
                    <div key={index} className="grid grid-cols-1 place-content-start gap-12">
                        <h4 className="normal-case">{list.listHeading}</h4>
                        <ul className="flex flex-col items-start justify-start gap-8">
                            {list.listLinks.map((link, index) => (
                                <li key={index}>
                                    <LinkText href={link.url}>{link.text}</LinkText>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-32 grid place-items-center">
                <div className="grid place-items-center">
                    <Image
                        alt="Quality approved Clinic"
                        width={158}
                        height={49}
                        src="/images/logos/logo-iclinic-footer.png"
                        quality={30}
                    />
                    <h4 className="normal-case">Quality approved Clinic</h4>
                </div>

                <FooterBottomLinks />

                <div className={`mt-6 w-full max-w-[45.3rem] overflow-hidden`}>
                    <Image
                        src="/images/icons/icon-pin-long.svg"
                        quality={30}
                        alt=""
                        width={453}
                        height={2}
                        className="md:h-auto md:w-auto"
                    />
                </div>

                <span className="mt-6 text-[1.4rem] leading-[1.8rem]">
                    Copy Right © My-Clinic {new Date().getFullYear()} | All Right Reserved
                </span>
            </div>
        </Container>
    );
};

export default FooterBody;
