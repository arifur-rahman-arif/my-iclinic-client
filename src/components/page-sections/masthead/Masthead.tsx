import { Container } from '@/components/container';
import { Section } from '@/components/section';
import Banner from './Banner';
import Image from 'next/image';

export interface MastheadInterface {
    mastheadImage: string;
    h1Title: JSX.Element;
    h2Title: JSX.Element;
    altText?: string;
}

/**
 * Masthead component for the website
 *
 * @returns {*}  {JSX.Element}
 */
const Masthead = ({ mastheadImage, h1Title, h2Title, altText }: MastheadInterface): JSX.Element => {
    return (
        <Section defaultClassName="mt-24 w-full xl:h-[11.4rem] relative min-h-[56.9rem] md:min-h-[63rem]">
            <div className="absolute right-0 left-auto -z-[1] h-2/4 w-full max-w-[123.1rem] md:h-full">
                <Image
                    src={mastheadImage}
                    alt={altText || ''}
                    fill
                    className="object-cover object-[75%_top]"
                    priority={true}
                />
            </div>

            <Container className="relative grid h-full min-h-[56.9rem] translate-y-[15%] grid-cols-1 items-center justify-start md:min-h-[63rem] md:translate-y-0">
                <Banner h1Title={h1Title} h2Title={h2Title} />
            </Container>
        </Section>
    );
};

export default Masthead;
