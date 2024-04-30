import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';

/**
 * Save money component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const SaveMoney = (): JSX.Element => {
    return (
        <Section id="save-money">
            <Container className="grid content-start justify-items-center gap-12 md:gap-20">
                <Image src="/images/section-images/tree-image.webp" alt="" width={245} height={245} />
                <div className="grid gap-12">
                    <h2 className="text-center font-latoBold text-[2.8rem] normal-case leading-[3.2rem] text-heading md:text-[3.6rem] md:leading-[4rem]">
                        Save money & Our planet{' '}
                    </h2>
                    <p className="max-w-[107rem] text-center font-latoLight text-[2.4rem] leading-[2.8rem] md:text-[3rem] md:leading-[3.6rem]">
                        For twenty years of sight that accumulates to a{' '}
                        <strong className="font-latoBold text-[2.4rem] leading-[2.8rem] md:text-[3rem] md:leading-[3.6rem]">
                            cost of £13,200,
                        </strong>{' '}
                        while contributing to{' '}
                        <strong className="font-latoBold text-[2.4rem] leading-[2.8rem] md:text-[3rem] md:leading-[3.6rem]">
                            16,000 million tonnes of plastic
                        </strong>{' '}
                        for those twenty tears of purchase and use.
                    </p>
                </div>
            </Container>
        </Section>
    );
};

export default SaveMoney;
