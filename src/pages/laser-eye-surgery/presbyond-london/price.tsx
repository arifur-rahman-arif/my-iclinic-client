import { FoldSection, FullWidthImageSection, Masthead, SideImageSection } from '@/components/page-sections';

import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/link';
import Page from '@/components/Page';
import ShortSightedImageLarge from '@/sectionImages/short-sighted-vision-large.png';
import ShortSightedImage from '@/sectionImages/short-sighted-vision.png';
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
 * Url: /laser-eye-surgery/presbyond-london-price
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

            <SideImageSection
                h2Heading="Vision correction treatment"
                h3LightHeading="Getting rid of your reading glasses with"
                h3BoldHeading="our Presbyond Laser Treatment"
                altText="Woman with reading glasses has a headache from watching her laptop screen. She is
                long sighted, suffering from presbyopia."
                descriptions={[
                    `Always wanted to know what your vision could be like without the need for reading
                    glasses?`,
                    `If you suffer from presbyopia (also known as long sightedness, farsightedness,
                        hypermetropia and hyperopia), our Presbyond laser surgery can fix your refractive error
                        for an easier, clearer way of life.`
                ]}
                sectionImage={{
                    url: '/images/section-images/presbyond-laser-treatment.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/presbyond-laser-treatment-desktop.png',
                    width: 688,
                    height: 642
                }}
            />

            <FullWidthImageSection
                h3Title="Permanently correct"
                boldHeading="your short-sighted vision with our all-inclusive cost."
                altText="Man suffers from long-sightedness. He squints at his phone, holding his prescription
                glasses to see a text message."
                image={ShortSightedImage}
                desktopImage={ShortSightedImageLarge}
            />

            <SideImageSection
                h2Heading="Transparent Price"
                h3LightHeading="Clearer vision with an
                all inclusive,"
                h3BoldHeading="Transparent cost"
                descriptions={[
                    `Having to wear glasses and contact lenses is a big financial burden overtime. We never subject the safety of people’s eye health to a cheap deal like glasses and contact lenses do and we also understand you don’t want to pay more than what’s fair.`,
                    `Our advanced Presbyond treatment with our London specialists is an all inclusive cost with a dedicated team for your aftercare!`
                ]}
                sectionImage={{
                    url: '/images/section-images/transparent-price.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/transparent-price-desktop.png',
                    width: 689,
                    height: 558
                }}
                altText="Happy couple on a hike in the mountains after correcting their long-sighted vision."
                textColumnExtras={
                    <div className="grid gap-6">
                        <h2 className="normal-case">
                            £2,400 per Eye
                            <br /> With 10 Months Interest-Free Finance available!
                        </h2>
                        <p>
                            The best laser eye surgery price in London, saving an average of £1,000 for your treatment
                            when you come to My-iClinic.
                        </p>
                        <p>
                            Want to know more about our{' '}
                            <LinkText
                                href="#"
                                className="font-mulishBold font-extrabold text-blue"
                                indicatorColor="bg-blue"
                            >
                                Finace Options?
                            </LinkText>
                        </p>

                        <ul className="ml-12 grid gap-6">
                            <li className="flex items-start justify-start gap-4">
                                <Image
                                    src="/images/icons/icon-blue-and-outline-circle.svg"
                                    alt=""
                                    width={35}
                                    height={23}
                                    className="h-[2.4rem] w-[2.4rem]"
                                />
                                <p className="font-mulishBold">
                                    One dedicated presbyond specialist
                                    <br />
                                    for your treatment
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
                                <p className="font-mulishBold">Most affordable price in London</p>
                            </li>
                        </ul>
                    </div>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>
        </Page>
    );
}
