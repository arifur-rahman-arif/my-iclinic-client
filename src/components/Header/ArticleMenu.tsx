import { ArticleAccordion } from '@/components/Accordion/ArticlesSubmenuAccordion/AccordionItem';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import MenuCta from '@/components/Header/MenuCta';
import SubMenuBlogs from '@/components/Header/SubMenus/SubMenuBlogs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaAngleDown } from 'react-icons/fa';

interface ArticleMenuProps {
    articles: ArticleAccordion[];
}

/**
 * Article submenu
 *
 * @param {ArticleAccordion[]} articles
 * @returns {JSX.Element}
 * @constructor
 */
const ArticleMenu = ({ articles }: ArticleMenuProps): JSX.Element => {
    const router = useRouter();

    const isMenuActive = router.pathname === '/articles';

    return (
        <span className="group/menu-item parent-menu flex items-center justify-center gap-2">
            <Link
                href="/articles"
                className={`relative cursor-pointer font-mulishMedium text-[1.6rem] capitalize leading-8 transition-all duration-500 group-hover/menu-item:text-[#9B9FA1] ${
                    isMenuActive && 'text-[#9B9FA1]'
                }`}
                onClick={() => {
                    const parentMenus: NodeListOf<HTMLElement> = document.querySelectorAll('.parent-menu');

                    parentMenus.forEach((element: HTMLElement | null) => {
                        if (element) {
                            element.style.pointerEvents = 'none';

                            setTimeout(() => {
                                element.style.pointerEvents = 'auto';
                            }, 800);
                        }
                    });
                }}
            >
                Articles
                {isMenuActive && (
                    <span className="absolute left-0 top-full h-1 w-full translate-y-4 rounded-full bg-[#9B9FA1]"></span>
                )}
            </Link>

            <FaAngleDown className="h-[1.2rem] w-[1.2rem] -rotate-90 fill-[#CDCFD0] transition-all duration-500 group-hover/menu-item:rotate-0 group-hover/menu-item:fill-[#9B9FA1]" />

            <div className="mega-submenu absolute left-0 top-full z-[99] grid max-h-0 w-screen grid-rows-[1fr_auto] overflow-y-auto overflow-x-hidden bg-white transition-all duration-1000 group-hover/menu-item:max-h-[calc(100vh_-_19rem)] group-hover/menu-item:drop-shadow-md">
                <Container className="relative">
                    <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] xl:gap-40 xl:py-20">
                        {/* Blogs */}

                        {articles ? (
                            articles.map((article, index) => (
                                <SubMenuBlogs
                                    key={index}
                                    title={`Latest ${article.title} articles`}
                                    posts={article.articles}
                                    blogContainerClassName="!grid-cols-1"
                                />
                            ))
                        ) : (
                            <ComponentLoader />
                        )}
                    </div>
                </Container>
                <MenuCta />
            </div>
        </span>
    );
};

export default ArticleMenu;
