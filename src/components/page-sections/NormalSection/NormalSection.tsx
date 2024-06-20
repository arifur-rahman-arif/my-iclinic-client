import { Container } from '@/components/Container';
import { H4Variant1 } from '@/components/Headings';
import BulletList from '@/components/page-sections/SectionParts/BulletList';
import { Section } from '@/components/Section';

interface NormalSectionInterface {
    heading?: string;
    description?: string;
    bannerText?: string;
    list?: JSX.Element[];
}

/**
 * Normal section component
 *
 * @returns {*}  {JSX.Element}
 */
const NormalSection = ({ heading, description, bannerText, list }: NormalSectionInterface): JSX.Element => {
    return (
        <Section id="normal-section">
            <Container className="grid max-w-[92.4rem] grid-cols-1 items-center justify-items-center gap-12 md:grid-cols-2 md:gap-32">
                <div>
                    <h2 className="w-full normal-case md:max-w-[41.5rem]">
                        <strong className="normal-case">
                            {heading || 'What is included in my private consultation?'}
                        </strong>
                    </h2>
                    <p className="mt-12 md:max-w-[27.4rem]">
                        <strong>{description || 'A private consultation with our ophthalmologist is an'}</strong>
                    </p>
                    <span className="mt-6 block font-latoBold text-[2rem] uppercase leading-[2.8rem]">
                        {bannerText || 'All-inclusive cost of £200'}
                    </span>
                </div>
                <div className="grid gap-6">
                    <H4Variant1>This includes:</H4Variant1>
                    <BulletList
                        list={
                            (list?.length && list) || [
                                'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessments and eye scans)',
                                'A medical diagnosis of your eye condition with treatment planning',
                                'A referral for surgical treatment and/or a signed prescription (if required).',
                                'A dedicated eye care team to support you throughout your eye care journey.'
                            ]
                        }
                        className="!ml-0"
                    />
                </div>
            </Container>
        </Section>
    );
};

export default NormalSection;
