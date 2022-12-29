import { Container } from '@/components/container';
import { Section } from '@/components/section';
import IconEyeBall from '@/icons/icon-eye-ball-outline.svg';
import LadyWithWallet from '@/section-images/lady-with-wallet.png';
import Image from 'next/image';

/**
 * Full width image section 2
 *
 * @returns {*}  {JSX.Element}
 */
const FullWidthImageSection2 = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:gap-24 md:py-24">
                <div className="grid gap-12">
                    <Image src={IconEyeBall} alt="" />
                    <h3 className="w-full normal-case md:max-w-[55rem]">
                        <strong className="normal-case">The cost of Presbyond surgery couldn’t be easier!</strong>
                    </h3>

                    <p className="font-latoLight text-[2.8rem] leading-[3.2rem]">
                        Our London laser specialists save you an average of £1,000 for your treatment and aftercare
                        appointments compared to other eye clinics.
                    </p>
                </div>
                <div className="row-start-1 justify-self-center md:row-auto">
                    <Image
                        src={LadyWithWallet}
                        quality={70}
                        alt="Woman holding her ipad and her prescription glasses for long sightedness."
                    />
                </div>
            </Container>
        </Section>
    );
};

export default FullWidthImageSection2;
