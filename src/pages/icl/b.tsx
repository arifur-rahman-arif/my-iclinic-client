import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { iclFaqList } from '@/components/page-sections/Faq/faqList';
import { getPageData, getTreatments } from '@/lib';
import { TreatmentInterface } from '@/page-sections/FinanceCalculator/Context';
import Activities from '@/page-sections/icl-components/Activities';
import ChatWithUs from '@/page-sections/icl-components/ChatWithUs';
import IclKnowing from '@/page-sections/icl-components/IclKnowing';
import LifeAfterIcl from '@/page-sections/icl-components/LifeAfterIcl';
import LifeLongVision from '@/page-sections/icl-components/LifeLongVision';
import MeetFreddy from '@/page-sections/icl-components/MeetFreddy';
import NewFoundClarity from '@/page-sections/icl-components/NewFoundClarity';
import PatientReviews from '@/page-sections/icl-components/PatientReviews';
import PatientVideoReviews from '@/page-sections/icl-components/PatientVideoReviews';
import RediscoverTheWorld from '@/page-sections/icl-components/RediscoverTheWorld';
import SaveMoney from '@/page-sections/icl-components/SaveMoney';
import SpeakToSpecialist from '@/page-sections/icl-components/SpeakToSpecialist';
import StepList from '@/page-sections/icl-components/StepList';
import SuitabilitySection from '@/page-sections/icl-components/SuitabilitySection';
import VisionExcellence from '@/page-sections/icl-components/VisionExcellence';
import YourVisionVideoSection from '@/page-sections/icl-components/YourVisionVideoSection';
import ABTestMasthead from '@/page-sections/Masthead/ABTestMasthead';
import { FinanceTreatmentPageContents, IclContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import CompanyLogos2 from 'src/components/page-sections/CompanyLogos/CompanyLogos2';

const Faq = dynamic(() => import('@/components/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});

const FinanceCalculatorSection = dynamic(() => import('@/page-sections/icl-components/FinanceCalculatorSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends IclContentInterface, PageDataInterface<IclContentInterface> {}

interface IclAProps {
    iclTreatments: TreatmentInterface[];
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Url: /icl
 *
 * @export
 * @returns {JSX.Element}
 */
const IclB = ({ seo, yoastJson, data, iclTreatments }: IclAProps): JSX.Element => {
    return (
        <Page
            title="ICL Surgery Specialists in London - My-iClinic"
            description="Free yourself from glasses with Implantable Contact Lenses, an innovative alternative to laser eye surgery. Interest-free finance available!"
        >
            <ABTestMasthead image="/images/masthead/masthead-icl-b-bg.webp" speakToSpecialistClass="bg-[#00BFFF]" />

            <Activities />

            <MeetFreddy />

            <LifeLongVision />

            <PatientReviews />

            <NewFoundClarity />

            <StepList
                topIcon={<Image src="/images/icons/icon-step-1.svg" width={89} height={90} alt="" />}
                heading="Feeling the pinch from your glasses on your nose or ears? Or maybe Tired of the dry, itchy sensation from hours of contact lens wear!"
                image1={{
                    src: '/images/section-images/lens-step-image-1.webp',
                    width: 223,
                    height: 334
                }}
                image2={{
                    src: '/images/section-images/lens-step-image-2.webp',
                    width: 619,
                    height: 334
                }}
                subHeading="Comfort is paramount, and at IClinic, we get it."
                description="With ICL treatment, you can bid farewell to the constant pressure points and embrace a comfortable, glasses-free life."
            />

            <StepList
                topIcon={<Image src="/images/icons/icon-step-2.svg" width={89} height={90} alt="" />}
                headingMaxWidth="max-w-[100.1rem]"
                heading="Ever walked outdoors on a chilly day and been blinded by foggy lenses? Or fed up with the daily ritual of poking and prodding your eyes with contact lenses?"
                image1={{
                    src: '/images/section-images/contact-lense-image-1.webp',
                    width: 223,
                    height: 334
                }}
                image2={{
                    src: '/images/section-images/contact-lense-image-2.webp',
                    width: 619,
                    height: 334
                }}
                subHeading="We feel your frustration."
                description="With our ICL treatment, you can transition between environments seamlessly, without the fog. Enjoy clarity in every setting!"
            />

            <StepList
                topIcon={<Image src="/images/icons/icon-step-3.svg" width={89} height={90} alt="" />}
                heading="Do you sometimes wish to flaunt your natural look without glasses being the centerpiece?"
                image1={{
                    src: '/images/section-images/icl-step-list-image.webp',
                    width: 619,
                    height: 474
                }}
                subHeading="Step into the limelight with confidence!"
                description='"ICL treatment lets you embrace your true self, without the glasses. Rediscover and celebrate YOU!"'
            />

            <LazyComponent>
                <FinanceCalculatorSection iclTreatments={iclTreatments} />
            </LazyComponent>

            <SpeakToSpecialist sectionClassName="bg-[#003E79]" />

            <LifeAfterIcl />

            <VisionExcellence />

            <SaveMoney />

            <SuitabilitySection questionPickerBg="bg-[#005DAF]" answerPanelBg="bg-[#003E79]" />

            <RediscoverTheWorld image2="/images/section-images/icl-after-process-b.webp" />

            <YourVisionVideoSection
                sectionClassName="bg-[#003E79]"
                buttonClassName="!border-[#00BFFF] !bg-[#00BFFF] hover:text-[#00BFFF]"
                svgClassName="group-hover/chat-button:stroke-[#00BFFF]"
            />

            <PatientVideoReviews />

            <IclKnowing />

            <ChatWithUs />

            <CompanyLogos2 />

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || iclFaqList}
                    titleLight="Implantable contact lenses"
                    titleBold="Frequently asked questions"
                    description="Have a question? We are here to help."
                />
            </LazyComponent>
        </Page>
    );
};

/**
 * Fetch the data from WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps() {
    try {
        const data: WpPageResponseInterface<FinanceTreatmentPageContents> = await getPageData({
            slug: 'financing-your-treatment'
        });
        const treatments = await getTreatments();

        let iclTreatments = treatments.filter((treatment) => treatment.group_name === 'ICL Surgery');

        /**
         * Updates the `iclTreatments` array by mapping each treatment object and setting the 'active' property based on the index.
         *
         * @param {Array<Object>} iclTreatments - The array of cataract treatment objects to be updated.
         * @returns {Array<Object>} - The updated array of cataract treatment objects.
         */
        iclTreatments = iclTreatments.map((treatment, index) => ({
            ...treatment,
            active: index === 0
        }));

        return {
            props: {
                iclTreatments,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf
                }
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}

// @ts-ignore
IclB.layout = 'iclLayout';
export default IclB;
