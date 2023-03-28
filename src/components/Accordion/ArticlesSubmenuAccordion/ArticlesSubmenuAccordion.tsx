import ComponentLoader from '@/components/ComponentLoader';
import { useState } from 'react';
import AccordionItem, { ArticleAccordion } from './AccordionItem';

interface ArticlesSubmenuAccordionProps {
    articlesData: ArticleAccordion[];
}

/**
 * Articles submenu accordion
 *
 * @param {ArticleAccordion[]} articlesData
 * @returns {JSX.Element}
 * @constructor
 */
const ArticlesSubmenuAccordion = ({ articlesData }: ArticlesSubmenuAccordionProps): JSX.Element => {
    const [articles, setArticles] = useState<ArticleAccordion[]>(articlesData);

    /**
     * Toggle the accordion item
     * @param {number} index
     */
    const toggleAccordionItem = (index: number) => {
        setArticles((previousArticles) => {
            return previousArticles.map((article, i) => {
                if (index === i) {
                    // Open the clicked article
                    return { ...article, open: !article.open };
                }
                return { ...article, open: false };
            });
        });
    };

    return (
        <>
            {articles ? (
                articles.map((article, index) => (
                    <AccordionItem
                        key={index}
                        accordionItems={article}
                        index={index}
                        toggleAccordionItem={toggleAccordionItem}
                    />
                ))
            ) : (
                <ComponentLoader />
            )}
        </>
    );
};

export default ArticlesSubmenuAccordion;
