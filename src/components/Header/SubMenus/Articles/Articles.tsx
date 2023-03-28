import { ArticlesSubmenuAccordion } from '@/components/Accordion';
import { ArticleAccordion } from '@/components/Accordion/ArticlesSubmenuAccordion/AccordionItem';

interface ArticlesProps {
    articlesData: ArticleAccordion[];
}

/**
 * Articles submenu
 *
 * @param {ArticleAccordion[]} articlesData
 * @returns {JSX.Element}
 * @constructor
 */
const Articles = ({ articlesData }: ArticlesProps): JSX.Element => {
    return (
        <div
            className="grid grid-cols-1 gap-12 py-12 xl:gap-40 xl:py-20"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <ArticlesSubmenuAccordion articlesData={articlesData} />
        </div>
    );
};

export default Articles;
