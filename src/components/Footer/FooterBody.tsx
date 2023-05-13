import { Container } from '@/components/Container';
import FooterBottomLinks from './FooterBottomLinks';
import Image from 'next/image';
import { LinkText } from '@/components/Link';
import React from 'react';
import footerList from './footerList';

/**
 * Footer body component
 *
 * @returns {*}  {JSX.Element}
 */
const FooterBody = (): JSX.Element => {
    return (
        <Container className="pt-12 md:pt-28">
            <div className="grid grid-cols-1 items-start gap-12  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[auto_auto_auto_auto]">
                {footerList.map((list, index) => (
                    <div key={index} className="grid grid-cols-1 place-content-start gap-12">
                        <h4 className="normal-case text-white">{list.listHeading}</h4>
                        <ul className="flex flex-col items-start justify-start gap-4">
                            {list.listLinks.map((link, index) => (
                                <li key={index}>
                                    <LinkText
                                        href={link.url}
                                        className="!text-[1.6rem] !leading-[2.4rem] text-[#E9EAEB]"
                                        indicatorColor="bg-[#E9EAEB]"
                                    >
                                        {link.text}
                                    </LinkText>
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
                        width={135}
                        height={42}
                        src="/images/logos/logo-iclinic-footer.png"
                        unoptimized={true}
                    />
                    {/* <h4 className="normal-case">Quality approved Clinic</h4> */}
                </div>

                <FooterBottomLinks />

                <span className="mt-6 text-center font-mulishLight text-[1.2rem] leading-[1.6rem] text-white">
                    Copy Right © My-Clinic {new Date().getFullYear()} | All Right Reserved
                </span>
            </div>
        </Container>
    );
};

export default FooterBody;
