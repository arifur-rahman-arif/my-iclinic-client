import {
    FoldSection,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    SideImageSection
} from '@/components/page-sections';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import IconCalender from '@/icons/icon-calender-15.svg';
import IconEyeballFocusing from '@/icons/icon-eye-ball-focusing.svg';
import IconEyePlus from '@/icons/icon-eye-plus.svg';
import IconEyeTesting from '@/icons/icon-eye-testing.svg';
import IconHandHoldingLove from '@/icons/icon-hand-holding-love.svg';
import IconPersonInFrame from '@/icons/icon-person-in-frame.svg';
import ShortSightedImageLarge from '@/section-images/short-sighted-vision-large.png';
import ShortSightedImage from '@/section-images/short-sighted-vision.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const CallbackSection = dynamic(() => import('@/components/page-sections/request-callback/CallbackSection'));

/**
 * Home/Landing page component for the App
 *
 * Url: /laser-eye-surgery/presbyond-london/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function PresbyondPricing(): JSX.Element {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);

    return (
        <Page
            title="Presbyond Laser eye surgery In London"
            description="Presbyond laser eye surgery is a vision correction treatment to fix presbyopia (long-sightedness). Learn about the treatments available and how we can help."
        >
            <Masthead
                mastheadImage="/images/masthead/masthead-presbyond-pricing.png"
                altText="Woman reading the cost of Presbyond Treatment in London."
                h1Title={
                    <h1 id="masthead-title" className="flex flex-wrap items-center justify-start gap-2">
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Presbyond</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">laser</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">eye</span>
                        <br />
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">surgery</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">cost</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">in</span>
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">London</span>
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            Save
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            an
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            average
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            of
                        </span>
                        <span className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}>
                            {' '}
                            £1,000
                        </span>
                    </h2>
                }
            />

            <FoldSection />

            <FullWidthImageSection2 />

            <FullWidthImageSection
                h3Title="Permanently correct"
                boldHeading="your short-sighted vision with our all-inclusive cost."
                altText="Woman with presbyond blended vision, without needing reading glasses."
                image={ShortSightedImage}
                desktopImage={ShortSightedImageLarge}
                containerClass="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32 pb-24 md:pb-0"
                overlayAnimation
            />

            <SideImageSection
                h2Heading="Presbyond consultation"
                h3LightHeading="What’s included in my"
                h3BoldHeading="private consultation and treatment?"
                sectionImage={{
                    url: '/images/section-images/private-consultation.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/private-consultation-desktop.png',
                    width: 616,
                    height: 549
                }}
                altText="Woman with presbyond blended vision, without needing reading glasses."
                positionReversed
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            <Image src={IconEyeTesting} alt="" className="h-16 w-16" />
                            <p className="">
                                <strong>A FREE</strong> suitability laser check with our laser specialist (a
                                comprehensive assessment of your suitability and how presbyond will suit your
                                lifestyle).
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <Image src={IconPersonInFrame} alt="" className="h-16 w-16" />
                            <p className="">
                                A comprehensive consultation with your dedicated laser specialist (inclusive of all eye
                                assessment and eye scans).
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <Image src={IconEyeballFocusing} alt="" className="h-16 w-16" />
                            <p className="">
                                Your Presbyond treatment performed in our private laser suite with your dedicated
                                specialist and our friendly team.
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <Image src={IconEyePlus} alt="" className="h-16 w-16" />
                            <p className="">
                                Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive
                                of eye assessments and eye scans)
                            </p>
                        </li>
                    </ul>
                }
            />

            <SideImageSection
                h2Heading="Presbyond finance"
                h3LightHeading="Want to pay for your"
                h3BoldHeading="treatment each month?"
                altText="Man in his work-shop without presbyopia or long-sighted vision."
                descriptions={[
                    `We understand having Presbyond to correct your vision is a great investment in your
                     eye health and lifestyle. We offer 12 months interest- free finance to help make that investment become a reality!`
                ]}
                sectionImage={{
                    url: '/images/section-images/presbyond-finance.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/presbyond-finance-large.png',
                    width: 574,
                    height: 560
                }}
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[43rem]">
                        <li className="flex items-start justify-start gap-6">
                            <Image src={IconHandHoldingLove} alt="" className="h-16 w-16" />
                            <h5 className="normal-case">You are eligible for our 12 months interest-free finance</h5>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            <Image src={IconCalender} alt="" className="h-16 w-16" />
                            <h5 className="normal-case">Calculate your monthly spend for your laser treatment</h5>
                        </li>
                    </ul>
                }
                midExtras={<h4 className="normal-case">Finance available for Presbyond</h4>}
            />

            <div className="md:mt-48"></div>
            <LazyComponent>
                <CallbackSection />
            </LazyComponent>
        </Page>
    );
}
