import { Container } from '@/components/Container';
import Link from 'next/link';
import FooterBottomLinks from './FooterBottomLinks';
import Image from 'next/image';
import { LinkText } from '@/components/Link';
import React from 'react';
import footerList from './footerList';

interface FooterBodyProps {
    excludeFooterLinks?: boolean;
}

/**
 * Footer body component
 *
 * @returns {*}  {JSX.Element}
 */
const FooterBody = ({ excludeFooterLinks }: FooterBodyProps): JSX.Element => {
    return (
        <Container className={`grid gap-32 ${excludeFooterLinks ? 'py-20 md:pb-0' : 'pt-12 md:pt-28 '}`}>
            {!excludeFooterLinks ? (
                <div className="grid grid-cols-1 items-start gap-12  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[auto_auto_auto_auto]">
                    {footerList.map((list, index) => (
                        <div key={index} className="grid grid-cols-1 place-content-start gap-12">
                            <h4 className="normal-case text-white">{list.listHeading}</h4>
                            <ul className="flex flex-col items-start justify-start gap-4">
                                {list.listLinks.map((link, index) => (
                                    <li key={index}>
                                        <LinkText
                                            href={link.url || '#'}
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
            ) : null}

            <div className="grid place-items-center">
                <div className="grid place-items-center">
                    <Link href="https://www.cqc.org.uk/provider/1-392154192" target="_blank" className="cursor-pointer">
                        <Image
                            alt="Quality approved Clinic"
                            width={135}
                            height={42}
                            src="/images/logos/logo-iclinic-footer.png"
                            unoptimized={true}
                        />
                    </Link>
                </div>

                <FooterBottomLinks />

                <p className="mt-6 max-w-[62rem] text-center text-[1.4rem] leading-8 text-white">
                    My-iClinic Limited is authorised and regulated by the Financial Conduct Authority FRN 835591. We act
                    as a credit broker not a lender and offer finance from one lender.
                </p>

                <span className="mt-4 text-center font-mulishLight text-[1.3rem] leading-[1.6rem] text-white">
                    Copyrights © My-Clinic {new Date().getFullYear()} | All Rights Reserved | Company Reg Number:
                    07151426
                </span>
            </div>
        </Container>
    );
};

export default FooterBody;
