import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import dynamic from 'next/dynamic';
import { twMerge } from 'tailwind-merge';
import styles from './styles/SuitabilityCheck.module.scss';

const Engine = dynamic(() => import('@/page-sections/SuitabilityCheck'), {
    loading: () => <ComponentLoader />,
    ssr: false
});

const Provider = dynamic(() => import('@/page-sections/SuitabilityCheck/Context'), {
    loading: () => <ComponentLoader />,
    ssr: false
});

interface SuitabilitySectionProps {
    questionPickerBg?: string;
    answerPanelBg?: string;
    sectionBg?: string;
}

/**
 * Suitability section
 *
 * @returns {JSX.Element}
 * @constructor
 */
const SuitabilitySection = ({ questionPickerBg, answerPanelBg, sectionBg }: SuitabilitySectionProps): JSX.Element => {
    return (
        <Section id="suitability-check" className="relative">
            <div
                className={twMerge(
                    'absolute top-0 left-0 z-[-1] hidden h-full w-1/2 bg-[#0588E8] xl:block',
                    questionPickerBg
                )}
            ></div>
            <div
                className={twMerge(
                    'absolute top-0 right-0 z-[-1] hidden h-full w-1/2 bg-[#0099FF] xl:block',
                    answerPanelBg
                )}
            ></div>

            <div className={styles.styles}>
                <LazyComponent>
                    <Provider>
                        <Engine
                            questionPickerBg={questionPickerBg || 'bg-[#0588E8]'}
                            answerPanelBg={answerPanelBg || 'bg-[#0099FF]'}
                            questionPickerTopElement={
                                <div className="grid max-w-[40.7rem] gap-6">
                                    <h2 className="font-latoBold text-[3rem] capitalize leading-[3.6rem] text-white md:justify-self-center md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                                        Discover Your Vision Profile
                                    </h2>

                                    <p className="text-[1.8rem] text-white">
                                        Are you ready to experience life without glasses or contacts?
                                    </p>

                                    <p className="text-[1.8rem] text-white">
                                        Take our quick quiz to uncover your personalized vision profile and learn how
                                        implantable contact lenses can enhance your lifestyle.
                                    </p>
                                </div>
                            }
                        />
                    </Provider>
                </LazyComponent>
            </div>
        </Section>
    );
};

export default SuitabilitySection;
