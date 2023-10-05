import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './Style.module.scss';

interface TabsInterface {
    name: string;
    active: boolean;
}

interface SitemapSectionProps {
    articles: GeneralBlogInterface[];
    pages: Array<{
        name: string;
        url: string;
    }>;
}

/**
 * Contact section of contact page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const SitemapSection = ({ articles, pages }: SitemapSectionProps): JSX.Element => {
    const [tabs, setTabs] = useState<TabsInterface[]>([
        {
            name: 'Articles',
            active: true
        },
        {
            name: 'Pages',
            active: false
        }
    ]);

    const convertedArticles = articles.map((article) => ({
        name: article.title,
        url: `/articles/${article.slug}`
    }));

    return (
        <div className="grid gap-12">
            <TabHeadings tabs={tabs} setTabs={setTabs} />

            <div className="w-full">
                <div className={`${tabs[0].active ? `block ${styles.styles}` : 'hidden'}`}>
                    <SiteMapLink list={convertedArticles} />
                </div>

                <div className={`${tabs[1].active ? `block ${styles.styles}` : 'hidden'}`}>
                    <SiteMapLink list={pages} />
                </div>
            </div>
        </div>
    );
};

export default SitemapSection;

interface TabHeadingsI {
    tabs: TabsInterface[];
    setTabs: Dispatch<SetStateAction<TabsInterface[]>>;
}

/**
 * Tab headings
 *
 * @returns {JSX.Element}
 * @constructor
 */
const TabHeadings = ({ tabs, setTabs }: TabHeadingsI): JSX.Element => {
    /**
     * Toggle the parent submenus
     * @param {number} index
     */
    const activateTab = ({ index }: { index: number }) => {
        setTabs((prevTabs) => {
            return prevTabs.map((tab, i) => {
                if (index === i) {
                    // Open the clicked tab
                    return { ...tab, active: true };
                }
                // Close other tabs
                return { ...tab, active: false };
            });
        });
    };

    return (
        <div className="flex items-center justify-items-center gap-12 md:gap-24">
            {tabs
                ? tabs.map((tab, index) => (
                      <button
                          key={index}
                          className={`grid gap-4 font-latoBold text-[1.8rem] leading-[2.8rem] transition-all duration-500 md:text-[2.4rem] md:leading-[3.2rem] ${
                              tab.active ? 'text-[#0518214D]' : 'text-heading'
                          }`}
                          onClick={() => {
                              activateTab({ index });
                          }}
                      >
                          {tab.name}
                          <span
                              className={`h-1 w-full rounded-full transition-all duration-500 ${
                                  tab.active ? 'scale-x-100 bg-[#0518214D]' : 'scale-x-0 bg-heading'
                              }`}
                          ></span>
                      </button>
                  ))
                : null}
        </div>
    );
};

interface SiteMapLinkProps {
    list: Array<{
        name: string;
        url: string;
    }>;
}

/**
 * Sitemap links
 *
 * @param {Array<{name: string, url: string}>} list
 * @returns {JSX.Element}
 * @constructor
 */
const SiteMapLink = ({ list }: SiteMapLinkProps) => {
    return (
        <div className="grid content-start justify-items-start gap-8">
            {list.length
                ? list.map((item, index) => (
                      <Link
                          href={item.url || '#'}
                          className="group/category sitemap-link flex items-center justify-start gap-3"
                          key={index}
                      >
                          <span className="h-[1.2rem] w-[1.2rem] rounded-full border-2 border-[#384043] transition-all duration-500 group-hover/category:bg-brand group-hover/category:opacity-50"></span>
                          <span className="font-mulishBold text-[1.6rem] capitalize leading-[2.2rem] transition-all duration-500 group-hover/category:text-brand group-hover/category:opacity-50">
                              {item.name}
                          </span>
                      </Link>
                  ))
                : null}
        </div>
    );
};
