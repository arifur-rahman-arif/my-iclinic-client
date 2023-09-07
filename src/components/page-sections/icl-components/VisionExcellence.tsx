import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import { useRef } from 'react';
import styles from './styles/VisionExcellence.module.scss';

const list = [
    {
        number: '99.4%',
        description: 'Of people surveyed would choose to have ICL again',
        lineColor: 'bg-[#FF7F00]'
    },
    {
        number: '2,000,000+',
        description: (
            <>
                ICL procedures <br /> worldwide
            </>
        ),
        lineColor: 'bg-[#00BFFF]'
    },
    {
        number: '20+',
        description: 'Years of premium ICL performance',
        lineColor: 'bg-[#FFA500]'
    }
];

/**
 * Vision excellence component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const VisionExcellence = (): JSX.Element => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: sectionRef, triggerPosition: -50 });

    return (
        <Section id="vision-excellence">
            <Container className="grid justify-items-center gap-16 md:gap-24" ref={sectionRef}>
                <div className="grid gap-2">
                    <h2 className="font-latoBold text-[3rem] normal-case leading-[3.6rem] md:text-center md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                        Implementable Collamer lenses{' '}
                        <span className="font-latoBold text-[3rem] normal-case leading-[3.6rem] text-[#FF5C00] md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                            (ICL)
                        </span>
                    </h2>
                    <h2 className="max-w-[76.6rem] font-latoBold text-[3rem] lowercase leading-[3.6rem] md:text-center md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                        The Proven Choice for Lasting Vision Excellence
                    </h2>
                </div>

                <div
                    className={`${
                        onEnter && styles.styles
                    } grid w-full grid-cols-[repeat(auto-fit,_minmax(28.4rem,_1fr))] content-start gap-12 md:gap-24 xl:max-w-[99.7rem]`}
                >
                    {list.map((item, index) => (
                        <div key={index} className={`grid w-full justify-items-center gap-6`}>
                            <span className="font-latoBold text-[2.8rem] leading-[3.2rem] text-heading md:text-[3.6rem] md:leading-[4rem]">
                                {item.number}
                            </span>
                            <span className={`h-4 w-[20.5rem] rounded-full ${item.lineColor} animation-line`}></span>
                            <p className="text-center font-latoBold text-[2rem] leading-[2.8rem] text-heading md:text-[2.4rem] md:leading-[3.2rem]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default VisionExcellence;
