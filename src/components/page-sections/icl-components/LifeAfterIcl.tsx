import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';

/**
 * Life after ICL section
 *
 * @returns {JSX.Element}
 * @constructor
 */
const LifeAfterIcl = (): JSX.Element => {
    return (
        <Section id="life-after-icl">
            <Container className="grid gap-12 md:grid-cols-2 md:gap-24">
                <div className="grid max-w-[52.7rem] content-start gap-6 self-center">
                    <h2 className="font-latoBold text-[3rem] normal-case leading-[3.6rem] md:justify-self-center md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                        What is your daily life like after ICL
                    </h2>
                    <strong className="font-mulishBold text-[2rem] capitalize leading-[2.8rem] text-heading">
                        Experience a transformed daily life after undergoing ICL (Implantable Collamer Lenses)
                        treatment.
                    </strong>
                    <p className="max-w-[47rem] text-[1.8rem]">
                        Say goodbye to the hassle of glasses and the discomfort of traditional contact lenses. Imagine
                        waking up to crisp clear vision each morning without the need for corrective eyewear.
                    </p>
                    <p className="max-w-[47rem] text-[1.8rem]">
                        Whether you're engaging in sports, pursuing hobbies, or simply enjoying everyday activities, ICL
                        provides the freedom and confidence to live life without visual limitations.
                    </p>
                    <strong className="max-w-[47rem] font-mulishBold text-[2rem] capitalize leading-[2.8rem] text-heading">
                        Reclaim your natural vision and embrace a new level of convenience and clarity.
                    </strong>
                </div>

                <Image
                    className="self-center justify-self-center rounded-primary md:justify-self-end"
                    src="/images/section-images/daily-life-after-icl.webp"
                    alt="What is your daily life like after ICL"
                    width={581}
                    height={562}
                />
            </Container>
        </Section>
    );
};

export default LifeAfterIcl;
