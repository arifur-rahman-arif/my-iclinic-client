import {
    CtaSection,
    FullWidthImageSection,
    HalfRoundedCard,
    Masthead,
    SideImageSection
} from '@/components/page-sections';
import { FaAngleRight } from 'react-icons/fa';

import { Button } from '@/components/button';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/link';
import Page from '@/components/Page';
import { cataractFaqList } from '@/components/page-sections/faq/faqList';
import { leftRightListCataract } from '@/components/page-sections/left-right/leftRightList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import CataractCtaBannerImage from '@/section-images/cataract-cta-banner.png';
import PlaceholderImage from '@/section-images/placeholder-image.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const PdfDownload = dynamic(() => import('@/components/page-sections/pdf-download/PdfDownload'));
const CompanyLogos = dynamic(() => import('@/components/page-sections/company-logos/CompanyLogos'));
const Faq = dynamic(() => import('@/components/page-sections/faq/Faq'));
const CallbackSection = dynamic(() => import('@/components/page-sections/request-callback/CallbackSection'));
const BottomBanner = dynamic(() => import('@/components/page-sections/bottom-full-banners/BottomBanner'));
const NormalSlideSection = dynamic(() => import('@/components/page-sections/normal-slide/NormalSlideSection'));
const LeftRightSection = dynamic(() => import('@/components/page-sections/left-right/LeftRightSection'));
const SideVideoSection = dynamic(() => import('@/components/page-sections/side-image-section/SideVideoSection'));

/**
 * Lasik page component for the App
 *
 * * Url: /laser-eye-surgery/lasik-london/
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Cataract(): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const mastheadH2Heading = 'We’re here to make cataract surgery easy';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            ScrollTrigger.refresh();
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page title="Cataract" description="">
            <Masthead
                mastheadImage="/images/masthead/masthead-lasik.png"
                altText=""
                h1Title={
                    <h1 className="">
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Private</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Cataract</span> <br />
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Surgery</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">London</span>
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        {mastheadH2Heading.split(' ').map((word, index) => (
                            <span
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}
                                key={index}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                }
                priceText="£2400 per eye"
            />

            <div className="w-full md:mt-[calc(6rem_-_0.1rem)] md:h-[0.1rem]"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:mt-[calc(12rem_-_0.1rem)] md:h-[0.1rem]"></div>

            <FullWidthImageSection
                h3Title={
                    <>
                        A simple process to
                        <br /> living cataract-free
                    </>
                }
                altText=""
                image={PlaceholderImage}
                desktopImage={PlaceholderImage}
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListCataract} />
            </LazyComponent>

            <LazyComponent>
                <SideVideoSection
                    h2Heading="What our Lasik patients Say After treatment"
                    h3Heading="Hear from a patient"
                    descriptions={[
                        `When you choose My-iClinic’s 5-star rated services, you can rest assured that you’ve made the best possible choice for your eyesight.`,
                        `Our specialist optometrists carefully work with you to evaluate your eyes to offer you the best possible course of treatment – allowing you to re-discover a life of normal vision.`
                    ]}
                />
            </LazyComponent>

            <CtaSection />

            <SideImageSection
                h2Heading="Tranparent Price"
                h3LightHeading="Cataract"
                h3BoldHeading="Surgery prices"
                descriptions={[
                    `We do our best to understand your needs and aims so we can offer you the best vision correction options with a fair, transparent price!`
                ]}
                sectionImage={{
                    url: '/images/section-images/cataract-transparent-price.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/cataract-transparent-price-large.png',
                    width: 671,
                    height: 572
                }}
                altText=""
                textColumnExtras={
                    <div className="grid gap-6">
                        <h2 className="normal-case">£2,400 per Eye</h2>
                        <ul className="ml-12 mt-12 grid gap-6">
                            <li className="flex items-start justify-start gap-4">
                                <Image
                                    src="/images/icons/icon-blue-and-outline-circle.svg"
                                    alt=""
                                    width={35}
                                    height={23}
                                    className="h-[2.4rem] w-[2.4rem]"
                                />
                                <p className="font-mulishBold capitalize">
                                    One dedicated Cataract specialist for your treatment
                                </p>
                            </li>
                            <li className="flex items-start justify-start gap-4">
                                <Image
                                    src="/images/icons/icon-blue-and-outline-circle.svg"
                                    alt=""
                                    width={35}
                                    height={23}
                                    className="h-[2.4rem] w-[2.4rem]"
                                />
                                <p className="font-mulishBold capitalize">Most affordable price in London</p>
                            </li>
                        </ul>
                        <span className="mt-12 font-latoBold text-[2.8rem] leading-[3.2rem]">
                            Looking for finance options?
                        </span>
                        <p className="">We are here to make your treatment easy.</p>
                        <Button
                            type="submit"
                            text="Find out more"
                            iconPosition="right"
                            icon={<FaAngleRight className="h-6 w-6 translate-y-[0.1rem]" />}
                            className="mt-6 justify-self-center md:justify-self-start"
                        />
                    </div>
                }
            />

            <SideImageSection
                h2Heading="Vision correction treatment"
                h3LightHeading="Living life again"
                h3BoldHeading="with cataract-free vision!"
                descriptions={[
                    `Most patients are not aware of how bad their vision has become until after the cataract surgery and treatment.`,
                    `Once they see the difference in brightness, colour, imagery and detail; they are delighted to experience their lifestyle activities again with the clear vision they should have always had.`
                ]}
                sectionImage={{
                    url: '/images/section-images/vision-correction-cataract.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/vision-correction-cataract-large.png',
                    width: 640,
                    height: 610
                }}
                positionReversed={true}
            />

            <HalfRoundedCard />

            <SideImageSection
                h2Heading="better vision"
                h3LightHeading="Enjoy clear"
                h3BoldHeading="vision without glasses"
                descriptions={[
                    `Following cataract surgery, the most satisfied patients are those who do not require glasses to see clearly.`,
                    `Since your eye is refocused during the operation, our experts take the opportunity to focus it for no distance glasses, even if you have worn glasses all your life.`,
                    <>
                        Implants, like glasses, come in different strengths and we will measure your eye to find the
                        strength of the{' '}
                        <LinkText
                            href="#"
                            indicatorColor="bg-blue"
                            className="font-mulishBold font-extrabold text-blue"
                        >
                            implant most suitable for you.
                        </LinkText>
                    </>
                ]}
                sectionImage={{
                    url: '/images/section-images/better-vision-cataract.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/better-vision-cataract-large.png',
                    width: 659,
                    height: 687
                }}
                positionReversed={true}
            />

            <LazyComponent>
                <BottomBanner
                    bannerImage={CataractCtaBannerImage}
                    bannerBg="/images/section-images/cataract-banner-bg.png"
                    bannerTitle="Do you think Cataract could be the right treatment for you?"
                />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title="Get the guide to cataract treatment"
                    description="Robotic laser vision correction"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={cataractFaqList}
                    titleLight="Cataract Surgery Frequently"
                    titleBold="Asked Questions"
                    description="Have a question? We’r here to help."
                />
            </LazyComponent>
        </Page>
    );
}
