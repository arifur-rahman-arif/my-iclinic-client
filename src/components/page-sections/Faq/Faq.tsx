import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';
import { FaqListInterface } from '@/components/page-sections/Faq/faqList';
import { Section } from '@/components/Section';
import { stripInitialTags } from '@/utils/miscellaneous';
import { ReactNode, useState } from 'react';
import FaqSearch from './FaqSearch';

interface FaqInterface {
    faqs: FaqListInterface[];
    titleLight: string;
    titleBold: string;
    description: ReactNode;
}

/**
 * Faq component for the website
 * @param {FaqListInterface[]} faqs
 * @param {string} titleLight
 * @param {string} titleBold
 * @param {string} description
 * @returns {JSX.Element}
 * @constructor
 */
const Faq = ({ faqs, titleLight, titleBold, description }: FaqInterface): JSX.Element => {
    const [faqList, setFaqList] = useState<FaqListInterface[]>(faqs);

    /**
     *  Filter the faq based on user input
     * @param {string} filterText
     * @returns void
     */
    const filterFaq = (filterText: string): void => {
        if (!filterText || filterText === '') return setFaqList([...faqs]);

        // Regex pattern to match the title
        const regex = new RegExp(filterText, 'gi');
        // Filter the matched faq list
        const filteredFaqList: FaqListInterface[] = faqs.filter((faq) => {
            const strippedTitle = faq.title.replaceAll(/\,|\.|\‘|\’|\-|\?/gi, '');
            return strippedTitle.match(regex) || faq?.description?.match(regex);
        });

        setFaqList([...filteredFaqList]);
    };

    return (
        <Section id="faq">
            <Container className="grid grid-cols-1 gap-16">
                <div className="grid justify-items-center">
                    <h2 className="max-w-[40rem] text-center normal-case leading-[3.6rem] md:text-[3.2rem] xl:text-[3.2rem] xl:leading-[3.6rem]">
                        {titleLight} {titleBold}
                    </h2>
                    <p className="mt-16 text-center font-mulishLight text-[1.8rem] leading-[3.2rem] sm:text-[2rem] sm:leading-[2.8rem] md:mt-24">
                        {typeof description === 'string' ? stripInitialTags(description) : description}
                    </p>

                    <FaqSearch filterFaq={filterFaq} />
                </div>
                {faqList.length > 0 ? (
                    <Accordion accordionList={faqList} />
                ) : (
                    <span className="justify-self-center bg-brandLight px-12 py-6 font-mulishBold text-secondary shadow-shadow1">
                        No FAQ found!
                    </span>
                )}
            </Container>
        </Section>
    );
};

export default Faq;
