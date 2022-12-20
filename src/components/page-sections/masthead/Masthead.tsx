import { Container } from '@/components/container';
import { Section } from '@/components/section';
import Banner from './Banner';
import Image from 'next/image';

/**
 * Masthead component for the website
 *
 * @returns {*}  {JSX.Element}
 */
const Masthead = (): JSX.Element => {
    return (
        <Section defaultClassName="mt-24 w-full xl:h-[11.4rem] relative min-h-[56.9rem] md:min-h-[63rem]">
            <div className="absolute right-0 left-auto -z-[1] h-2/4 w-full max-w-[123.1rem] md:h-full">
                <Image
                    src="/images/masthead/masthead-presbyond.webp"
                    alt="Presbyopic woman reading a book with her glasses on."
                    fill
                    className="object-cover object-[75%_top]"
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                />
            </div>

            <Container className="relative grid h-full min-h-[56.9rem] translate-y-[15%] grid-cols-1 items-center justify-start md:min-h-[63rem] md:translate-y-0">
                <Banner />
            </Container>
        </Section>
    );
};

export default Masthead;
