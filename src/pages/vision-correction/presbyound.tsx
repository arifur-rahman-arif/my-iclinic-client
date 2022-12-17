import { DrawLine, Masthead, SideImageSection, StackedSection } from '@/components/page-sections';

import { Button } from '@/components/button';
import { Container, ContainerFluid } from '@/components/container';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/link';
import Page from '@/components/Page';
import { presbyoundFaqList } from '@/components/page-sections/faq/faqList';
import { FeaturedPatient, presbyoundSliders } from '@/components/page-sections/featured-patient';
import { LeftRightSection, LeftRightSectionChildrenInterface } from '@/components/page-sections/left-right';
import { presbyoundStackList } from '@/components/page-sections/stacked-section';
import { Section } from '@/components/section';
import { normalSlideList } from '@/components/slider/card-slider/normal-card-slide/normalSlideList';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import gsap from 'gsap';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const PdfDownload = dynamic(() => import('@/components/page-sections/pdf-download/PdfDownload'));
const CompanyLogos = dynamic(() => import('@/components/page-sections/company-logos/CompanyLogos'));
const Faq = dynamic(() => import('@/components/page-sections/faq/Faq'));
const NormalSlide = dynamic(() => import('@/components/slider/card-slider/normal-card-slide/NormalSlide'));
const CallbackSection = dynamic(() => import('@/components/page-sections/request-callback/CallbackSection'));

const leftRightList: Array<LeftRightSectionChildrenInterface> = [
    {
        mobileImage: (
            <Image
                src="/images/section-images/presbyound-consultation.png"
                width={390}
                height={390}
                quality={20}
                className="md:hidden"
                alt="Presbyound Consultation"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/presbyound-consultation-desktop.png"
                width={685}
                height={587}
                quality={20}
                className="hidden md:block"
                alt="Presbyound Consultation"
            />
        ),
        title: `Presbyound Consultation`,
        descriptions: [
            `When you arrive for your Presbyound consultation with us, our friendly technicians will carry out some detailed assessments on your eyes.`,
            `These assessments will measure your eyes, your prescription and check the overall health for any other eye conditions you may have.`,
            `Our laser specialist will then be able to assess your suitability for presbyound and they will talk you through the treatment and how Presbyound will best work for you and your lifestyle.`,
            `We understand that laser treatment is a life-changing decision which is why our Presbyound consultation is completely FREE without any obligation to commit to treatment!`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/presbyound-surgery.png"
                width={390}
                height={390}
                quality={20}
                className="md:hidden"
                alt="Presbyound surgery"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/presbyound-surgery-desktop.png"
                width={677}
                height={558}
                quality={20}
                className="hidden md:block"
                alt="Presbyound surgery"
            />
        ),
        title: `Presbyound surgery`,
        descriptions: [
            `Our presbyound laser treatment uses a unique blended vision technique which extends the eyes ability to see from near through to intermediate and distant sight.`,
            `On the day of treatment, our friendly nurse team will greet you and talk you through the preparations for the treatment and will answer any questions you may have before meeting your specialist again.`,
            `They will carefully take care of administering anesthetic eye drops into your eyes so that the laser treatment will be completely painless.`,
            `Your specialist will greet you in the treatment room and they will give clear, easy instruction as the laser reshapes your eye. The procedure itself takes up to 20 minutes per eye without any pain or discomfort. Once the treatment is finished, our nurse will talk you through any questions you may have and will show you the aftercare eye drops you will be required to use at home.`
        ]
    },
    {
        mobileImage: (
            <Image
                src="/images/section-images/presbyound-aftercare.png"
                width={390}
                height={390}
                quality={20}
                className="md:hidden"
                alt="Presbyound aftercare"
            />
        ),
        desktopImage: (
            <Image
                src="/images/section-images/presbyound-aftercare-desktop.png"
                width={685}
                height={587}
                quality={20}
                className="hidden md:block"
                alt="Presbyound aftercare"
            />
        ),
        title: `Presbyound aftercare`,
        descriptions: [
            `Presbyound only requires an initial 1 week recovery period with little activity.`,
            `In the initial days of your recovery period there may be a gritty sensation and you may experience some sensitivity to light.`,
            `Any symptoms experienced after your treatment will reside as your eyes fully heal and process your new refraction.`,
            `In your aftercare appointment with your laser specialist, they will check the progress of your vision and keep you informed about how long you should keep using your eye drops.`
        ]
    }
];

/**
 * Home/Landing page component for the App
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Presbyound(): JSX.Element {
    useEffect(() => {
        setInterval(() => {
            ScrollTrigger.refresh();
        }, 700);
    }, []);

    return (
        <Page title="Presbyound" description="Correct your vision and say Goodbye to reading glasses">
            <Masthead />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <SideImageSection
                h2Heading="Vision correction treatment"
                h3LightHeading="Getting rid of your reading glasses with"
                h3BoldHeading="our Presbyound Laser Treatment"
                descriptions={[
                    `Always wanted to know what your vision could be like without the need for reading
                    glasses?`,
                    `If you suffer from presbyopia (also known as long sightedness, farsightedness,
                        hypermetropia and hyperopia), our Presbyound laser surgery can fix your refractive error
                        for an easier, clearer way of life.`
                ]}
                sectionImage={{
                    url: '/images/section-images/presbyound-laser-treatment.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/presbyound-laser-treatment-desktop.png',
                    width: 688,
                    height: 642
                }}
            />

            <Section className="bg-brandLight">
                <Container className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:gap-24 md:py-24">
                    <div className="grid">
                        <h3 className="w-full max-w-[50rem] normal-case">
                            London’s best laser treatment for achieving clear vision at all distances
                        </h3>
                    </div>
                    <div className="row-start-1 justify-self-center md:row-auto md:justify-self-auto">
                        <Image
                            src="/images/section-images/best-laser-treatment.png"
                            width={370}
                            height={352}
                            quality={20}
                            className="md:hidden"
                            alt="London’s best laser treatment for achieving clear vision at all distances"
                        />
                        <Image
                            src="/images/section-images/best-laser-treatment-desktop.png"
                            width={688}
                            height={607}
                            quality={20}
                            className="hidden md:block"
                            alt="Getting rid of your reading glasses with our Presbyound Laser Treatment"
                        />
                    </div>
                </Container>
            </Section>

            <LeftRightSection childrenList={leftRightList} />

            <SideImageSection
                normalLightHeading="What to expect after your Presbyound Treatment with our London specialists."
                descriptions={[
                    `Saving vision, time, money and the planet! Having Presbyound is a brilliant achievement for your vision, your time, your long-term savings and the sustainability of our planet. We want all of our patients to be well-informed about their recovery process after Presbyound surgery!`,
                    `Our team takes your aftercare very seriously, which is why our laser specialist will have follow up assessments and appointments with you throughout the year after your treatment date.`
                ]}
                sectionImage={{
                    url: '/images/section-images/presbyound-treatment.png',
                    width: 366,
                    height: 361
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/presbyound-treatment-desktop.png',
                    width: 677,
                    height: 558
                }}
            />

            <FeaturedPatient
                h2Title="Presbyound Patient"
                h3Title="Life after Presbyound laser eye surgery"
                bandImageDescription={[
                    `My experience was amazing. The whole team is very kind and exceedingly professional.`,
                    'The after care is exceptional and I would highly recommend them.'
                ]}
                bandImageTitle="Sharon Needleman"
                bandImageURL="/images/section-images/mr-lukicov.png"
                reviewDescription={[
                    `Being able to see again without glasses is the best feeling and the best money I have ever spent!!!`
                ]}
                reviewTitle="Thank you My-iClinic"
                sliders={presbyoundSliders}
            />

            <SideImageSection
                h2Heading="Transparent Price"
                h3LightHeading="Clearer vision with an
                all inclusive,"
                h3BoldHeading="Transparent cost"
                descriptions={[
                    `Having to wear glasses and contact lenses is a big financial burden overtime. We never subject the safety of people’s eye health to a cheap deal like glasses and contact lenses do and we also understand you don’t want to pay more than what’s fair.`,
                    `Our advanced Presbyound treatment with our London specialists is an all inclusive cost with a dedicated team for your aftercare!`
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
                    </div>
                }
            />

            <StackedSection
                stackList={presbyoundStackList}
                h3LightHeading="Why do our patients choose our"
                h3BoldHeading="Presbyound laser surgery?"
                descriptions={[`The answer is simple – they want to escape limitations and take charge of their life.`]}
            />

            <SideImageSection
                h3LightHeading="Want to be free from your glasses after"
                h3BoldHeading="having Cataract Treatment?"
                descriptions={[
                    `Saying goodbye to glasses after cataract surgery is now possible with Presbyond laser treatment! 
                    We can book a private presbyond consultation from 3 to 6 months after your cataract surgery.`
                ]}
                sectionImage={{
                    url: '/images/section-images/cataract-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/cataract-treatment-desktop.png',
                    width: 633,
                    height: 500
                }}
                positionReversed={true}
            />

            {/* Full banner section */}
            <Section>
                <ContainerFluid className="z-[2] px-0">
                    <div
                        style={{ background: 'linear-gradient(180deg, #30CAD3 0%, rgba(204, 231, 254, 0) 100%)' }}
                        className="w-full"
                    >
                        <div className="relative w-full md:hidden">
                            <Image
                                src="/images/section-images/presbyound-banner-bg.png"
                                alt="Want to be free from reading glasses?"
                                width={415}
                                height={319}
                                quality={20}
                                className="absolute right-0 top-0 h-auto w-auto"
                            />
                            {/* Hidden image to take the actual space for absolute positioned element */}
                            <Image
                                src="/images/section-images/presbyound-banner-bg.png"
                                alt="Want to be free from reading glasses?"
                                width={415}
                                height={319}
                                quality={1}
                                className="invisible h-auto w-auto"
                            />
                        </div>
                        <Container className="relative grid grid-cols-1 items-center py-12 md:min-h-[57.5rem] md:grid-cols-[auto_1fr] md:py-0">
                            {/* Banner */}
                            <div className="relative z-10 grid max-w-[33.8rem] grid-cols-1 content-start gap-x-6 justify-self-center rounded-primary md:max-w-[56rem] md:grid-cols-[auto_1fr] md:gap-y-24 md:justify-self-start md:bg-brandLight md:py-24 md:px-12 md:shadow-shadow2">
                                <h2 className="font-latoLight text-[3.2rem] font-light normal-case leading-[3.6rem] text-heading md:col-span-2 md:text-[4.8rem] md:leading-[4.8rem]">
                                    Want to be free from reading glasses?
                                </h2>
                                <Button
                                    type="anchor"
                                    text="Book a consultation"
                                    iconPosition="left"
                                    className="mt-24 justify-self-center md:mt-0 md:justify-self-start"
                                    icon={
                                        <Image
                                            src="/images/icons/icon-calendar-outline-darker.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                            quality={2}
                                            className="h-8 w-8"
                                        />
                                    }
                                />
                                <Button
                                    type="anchor"
                                    text="0208 445 8877"
                                    iconPosition="left"
                                    className="mt-6 place-content-center justify-self-center md:mt-0 md:min-w-[23.3rem] md:justify-self-start md:text-[2rem] md:leading-[2.4rem]"
                                    icon={
                                        <Image
                                            src="/images/icons/icon-phone-dark.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                            quality={2}
                                            className="h-8 w-8"
                                        />
                                    }
                                />
                            </div>
                        </Container>
                        <div className="absolute top-0 left-0 z-[1] h-full w-full bg-[100%_100%] bg-no-repeat md:bg-[url('/images/section-images/presbyound-banner-bg-desktop.webp')] lg:bg-[auto_100%] lg:bg-[right_center]"></div>
                    </div>
                </ContainerFluid>
            </Section>

            <Section>
                <ContainerFluid className="md:h-[51rem]">
                    <Image
                        src="/images/section-images/mountain-image-3.png"
                        alt=""
                        width={388}
                        height={101}
                        quality={20}
                        className="mx-auto md:hidden md:h-auto md:w-auto"
                    />
                    <Image
                        src="/images/section-images/mountain-image-desktop.png"
                        alt=""
                        fill
                        quality={70}
                        className="mx-auto hidden md:block md:h-auto md:w-auto"
                    />
                </ContainerFluid>
            </Section>

            <DrawLine
                image={{
                    url: '/images/section-images/draw-line-2-mobile.svg',
                    width: 63,
                    height: 62
                }}
                desktopImage={{
                    url: '/images/section-images/draw-line.svg',
                    width: 232,
                    height: 234
                }}
            />

            <SideImageSection
                sectionClass="!mt-0"
                h2Heading="plastic free life"
                h3LightHeading="Presbyond is the key to living"
                h3BoldHeading="a sustainable, plastic free life!"
                descriptions={[
                    `The most sustainable, green lifestyle to have is when you have a plastic free eye-style, 
                    free of plastic waste from your glasses and contact lenses!`
                ]}
                sectionImage={{
                    url: '/images/section-images/plastic-free-life.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/plastic-free-life-desktop.png',
                    width: 685,
                    height: 587
                }}
                positionReversed={true}
                textColumnExtras={
                    <div className="grid gap-6">
                        <span className="max-w-[36.7rem] font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                            Hard to swallow facts about wearing Glasses and Contact lenses:
                        </span>
                        <ul className="ml-6 grid gap-6">
                            <li className="flex items-center justify-start gap-4">
                                <Image
                                    src="/images/icons/icon-meh.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="h-[2.4rem] w-[2.4rem]"
                                />
                                <p>Almost 800 million plastic contact lenses are used by 4 million people each year.</p>
                            </li>
                            <li className="flex items-center justify-start gap-4">
                                <Image
                                    src="/images/icons/icon-meh.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="h-[2.4rem] w-[2.4rem]"
                                />
                                <p>100,000 tons of plastic are wasted from glasses.</p>
                            </li>
                        </ul>
                        <span className="max-w-[36.7rem] font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                            Saving more than just expenses, time and compromise, but saving the planet!
                        </span>
                    </div>
                }
            />

            <DrawLine
                image={{
                    url: '/images/section-images/draw-line-2-mobile.svg',
                    width: 63,
                    height: 62
                }}
                desktopImage={{
                    url: '/images/section-images/draw-line-2.svg',
                    width: 232,
                    height: 234
                }}
            />

            <Section className="!mt-4">
                <Container>
                    <Image
                        src="/images/section-images/mountain-image-2.png"
                        alt=""
                        width={638}
                        height={137}
                        quality={20}
                        className="mx-auto md:h-auto md:w-auto"
                    />
                </Container>
            </Section>

            <DrawLine
                image={{
                    url: '/images/section-images/draw-line-2-mobile.svg',
                    width: 63,
                    height: 62
                }}
                desktopImage={{
                    url: '/images/section-images/draw-line-3-desktop.svg',
                    width: 232,
                    height: 234
                }}
            />

            <SideImageSection
                h2Heading="gift of a tree"
                sectionClass="!mt-0"
                h3LightHeading="Saving the planet"
                h3BoldHeading="One eye at a time!"
                descriptions={[
                    `Here at My-iClinic we give all of our laser patients a very special gift to go with your brand-new eyes, 
                    a tree! When undergoing laser eye surgery, you may not realize but you are already making a positive difference to the environment.`,
                    `For every 10 years of contact lens wear the amount of plastic that ends up in the ocean is roughly the same as your own body weight.`
                ]}
                sectionImage={{
                    url: '/images/section-images/gift-of-a-tree.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/gift-of-a-tree-desktop.png',
                    width: 554,
                    height: 496
                }}
                textColumnExtras={
                    <div className="grid gap-6">
                        <span className="max-w-[44.5rem]  font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                            We want to take our impact on the environment a step further and this is where the gift of a
                            tree comes in!
                        </span>
                    </div>
                }
            />

            <DrawLine
                image={{
                    url: '/images/section-images/draw-line-2-mobile.svg',
                    width: 63,
                    height: 62
                }}
                desktopImage={{
                    url: '/images/section-images/draw-line-4-desktop.svg',
                    width: 232,
                    height: 234
                }}
            />

            <Section className="!mt-0">
                <Container>
                    <Image
                        src="/images/section-images/mountain-image-3.png"
                        alt=""
                        width={388}
                        height={101}
                        quality={20}
                        className="mx-auto md:hidden md:h-auto md:w-auto"
                    />
                    <Image
                        src="/images/section-images/mountain-image-3-desktop.png"
                        alt=""
                        width={1157}
                        height={470}
                        quality={20}
                        className="mx-auto hidden md:block md:h-auto md:w-auto"
                    />
                </Container>
            </Section>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload />
            </LazyComponent>

            <Section>
                <ContainerFluid className="px-0">
                    <NormalSlide sliderList={normalSlideList} />
                </ContainerFluid>
            </Section>

            <Faq
                faqs={presbyoundFaqList}
                titleLight="Presbyound Frequently"
                titleBold="Asked Questions"
                description="Have a question? We’r here to help."
            />
        </Page>
    );
}
