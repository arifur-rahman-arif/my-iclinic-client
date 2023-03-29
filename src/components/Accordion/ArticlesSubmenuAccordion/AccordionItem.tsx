import { InnerAppContext, MobileNavbarContext } from '@/components/Header/MobileNavbar/MobileNavbar';
import HTMLReactParser from 'html-react-parser';
import Link from 'next/link';
import { useContext } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export interface ArticleInterface {
    slug: string;
    title: {
        rendered: string;
    };
}

export interface ArticleAccordion {
    title: string;
    articles: ArticleInterface[];
    open: boolean;
}

interface AccordionItemProps {
    accordionItems: ArticleAccordion;
    index: number;
    toggleAccordionItem: (index: number) => void;
}

// eslint-disable-next-line valid-jsdoc
/**
 * Submenu accordion article
 *
 * @param {ArticleAccordion} accordionItems
 * @param {number} index
 * @param {(index: number) => void} toggleAccordionItem
 * @returns {JSX.Element}
 * @constructor
 */
const AccordionItem = ({ accordionItems, index, toggleAccordionItem }: AccordionItemProps): JSX.Element => {
    const innerAppCtx: InnerAppContext | null = useContext(MobileNavbarContext);

    return (
        <div className={`grid content-start transition-all duration-500`}>
            <button
                className="bg-[#E4EBED] p-6 text-left font-mulishBold text-[1.6rem] uppercase leading-8 text-heading2 line-clamp-1"
                onClick={() => {
                    toggleAccordionItem(index);
                }}
            >
                Latest {HTMLReactParser(accordionItems.title)} articles
            </button>

            {/* Blogs */}
            <div
                className={`overflow-hidden transition-all duration-700 ${
                    accordionItems.open ? 'max-h-[200rem] ' : 'max-h-0 '
                }`}
            >
                <div className={`grid grid-cols-1 gap-y-12 pt-12`}>
                    {accordionItems?.articles?.map((item: any, i: number) => (
                        <Link
                            key={i}
                            href={`/articles/${item.slug}`}
                            className="group/blog-item grid cursor-pointer justify-items-start gap-4"
                            onClick={() => {
                                innerAppCtx?.setOpenMobileMenu(false);
                            }}
                        >
                            <span className="font-mulishBold text-[1.6rem] leading-8 text-[#384043] transition-all duration-500 line-clamp-2 group-hover/blog-item:text-[#697072]">
                                {HTMLReactParser(item?.title?.rendered || '')}
                            </span>
                            <span className="flex items-center justify-center gap-3 font-mulishBold text-[1.2rem] uppercase leading-[1.8rem] text-[#697072]">
                                Read More
                                <FiArrowRight className="h-[1.4rem] w-[1.4rem] translate-y-[0.1rem] stroke-[#697072] transition-all duration-500 group-hover/blog-item:translate-x-2" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
