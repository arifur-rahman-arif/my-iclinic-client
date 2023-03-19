import { Container } from '@/components/Container';
import { H2Variant1 } from '@/components/Headings';
import { Section } from '@/components/Section';
import { BulletList } from '@/page-sections/index';
import Image from 'next/image';
import { FC } from 'react';
import IconArrow from '@/icons/icon-arrow-right.svg';

/**
 * Glaucoma section component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GlaucomaSection: FC = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-32">
                {/* Grid item 1 */}
                <div className="grid gap-12 md:max-w-[46.7rem]">
                    <H2Variant1>Glaucoma Conditions</H2Variant1>

                    <strong>There are two main types of Glaucoma:</strong>
                    <BulletList
                        className="!ml-12 md:max-w-[32.3rem]"
                        list={['Open angle glaucoma', 'Closed angle glaucoma']}
                        listItemClassName="md:text-[1.7rem] font-mulishMedium"
                        bulletPoint={
                            <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                        }
                    />

                    <p>
                        These glaucoma conditions differ in how they present and how they are managed to help remission
                        your symptoms and prevent the potential risk of blindness.
                    </p>

                    <div className="grid gap-6">
                        <div className="grid gap-6">
                            <span className="font-mulishBold text-[2.4rem] leading-[3.2rem]">
                                Acute open angle glaucoma
                            </span>
                            <p>
                                Acute open angle glaucoma is commonly presented in patients as a gradual change in
                                vision impairment.
                            </p>
                            <p>
                                Open angle glaucoma requires monitoring and treatment to reduce high pressure in the
                                eye.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <span className="font-mulishBold text-[2.4rem] leading-[3.2rem]">
                                Closed angle glaucoma <span>(narrow angle glaucoma) </span>
                            </span>
                            <p>is commonly presented as a sudden change in vision impairment.</p>
                            <p>
                                Closed angle glaucoma requires immediate surgery to reduce high pressure in the eye and
                                prevent damage to the optic nerve which can cause vision loss.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Grid item 2 */}
                <div className="row-start-1 grid place-items-center md:row-start-auto">
                    <Image src="/images/section-images/glaucoma-conditions.png" alt="" width={562} height={576} />
                </div>
            </Container>
        </Section>
    );
};

export default GlaucomaSection;
