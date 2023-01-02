import {
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/components/page-sections';

import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { CtaSection } from '@/components/page-sections/cta-section';
import { lasikPriceList } from '@/components/page-sections/fold-section/priceList';
import IconCalender from '@/icons/icon-calender-15.svg';
import IconEyeballFocusing from '@/icons/icon-eye-ball-focusing.svg';
import IconEyePlus from '@/icons/icon-eye-plus.svg';
import IconEyeTesting from '@/icons/icon-eye-testing.svg';
import IconHandHoldingLove from '@/icons/icon-hand-holding-love.svg';
import IconPersonInFrame from '@/icons/icon-person-in-frame.svg';
import InclusiveCostImage from '@/section-images/lasik-inclusive-cost-image.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import Image from 'next/image';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const CallbackSection = dynamic(() => import('@/page-sections/request-callback/CallbackSection'));

/**
 * Home/Landing page component for the App
 *
 * * Url: /laser-eye-surgery/lasik-london/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function LasikPricing(): JSX.Element {
    const mastheadH2Heading = 'Save you an average of £1,000';

    return (
        <Page title="Implantable Contact Lens cost London" description="">
            <Masthead
                mastheadImage="/images/masthead/masthead-lasik-pricing.png"
                altText="Woman reading the cost of Presbyond Treatment in London."
                h1Title={
                    <h1 className="">
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">LASIK</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Laser</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">Eye</span>
                        <br />
                        <span className="h1-inner-span inline-block opacity-0 blur-sm">cost</span>{' '}
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
                priceTextExtra={
                    <span className="font-mulishBold text-[1.8rem] normal-case leading-[2.4rem] text-heading2">
                        With 10 Months
                        <br />
                        <span className="font-mulishBold uppercase text-brand">Interest Free Finance</span> available!
                    </span>
                }
            />

            <PriceSection priceList={lasikPriceList} />

            <FullWidthImageSection2
                title="The cost of of LASIK Laser eye surgery couldn’t be easier!"
                description="Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics."
            />

            <CtaSection />

            <FullWidthImageSection
                h3Title="Permanently correct"
                boldHeading="your vision with our all-inclusive cost."
                altText=""
                image={InclusiveCostImage}
                desktopImage={InclusiveCostImage}
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:pb-0"
                overlayAnimation
                textColumnOverlay
                sectionClass="bg-brandLight relative"
            />

            <SideImageSection
                h2Heading="LASIK consultation"
                h3LightHeading="What’s included in my"
                h3BoldHeading="private consultation and treatment?"
                sectionImage={{
                    url: '/images/section-images/private-consultation-lasik.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/private-consultation-lasik-large.png',
                    width: 616,
                    height: 549
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            <Image src={IconEyeTesting} alt="" className="h-16 w-16" />
                            <p className="">
                                <strong>A FREE</strong> suitability laser check with our laser specialist (a
                                comprehensive assessment of your suitability and how LASIK laser eye surgery will suit
                                your lifestyle).
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
                                Your LASIK surgery was performed in our private laser suite with your dedicated
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
                h2Heading="LASIK finance"
                h3LightHeading="Thinking about splitting"
                h3BoldHeading="your treatment cost?"
                midExtras={<h4 className="normal-case">Finance available for LASIK laser eye surgery</h4>}
                altText=""
                descriptions={[
                    `We understand having LASIK to correct your vision is a great investment in your eye health and lifestyle. We offer 12 months interest- free finance to help make that investment become a reality!`
                ]}
                sectionImage={{
                    url: '/images/section-images/lasik-finance.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/lasik-finance-large.png',
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
                            <h5 className="normal-case">Calculate your monthly spend for your ICL treatment</h5>
                        </li>
                    </ul>
                }
            />

            <div className="md:mt-48"></div>
            <LazyComponent>
                <CallbackSection />
            </LazyComponent>
            <div className="md:mt-48"></div>
        </Page>
    );
}
