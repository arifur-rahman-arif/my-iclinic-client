import { Accordion } from '@/components/accordion';
import { Container } from '@/components/container';
import { FaqListInterface } from '@/components/page-sections/faq/faqList';
import { Section } from '@/components/section';
import { useState } from 'react';
import FaqSearch from './FaqSearch';

interface FaqInterface {
    faqs: FaqListInterface[];
    titleLight: string;
    titleBold: string;
    description: string;
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
        const filteredFaqList: FaqListInterface[] = faqs.filter(
            (faq) => faq.title.match(regex) || faq.description.match(regex)
        );

        setFaqList([...filteredFaqList]);
    };

    return (
        <Section>
            <Container className="grid grid-cols-1 gap-16">
                <div>
                    <h3 className="text-center leading-[3.6rem] md:text-[3.2rem] xl:text-[3.2rem] xl:leading-[3.6rem]">
                        {titleLight}
                        <br />
                        <strong className="font-latoBold md:text-[3.2rem] xl:text-[3.2rem]">{titleBold}</strong>
                    </h3>
                    <p className="mt-16 text-center text-[2rem] md:mt-24">{description}</p>

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
