import { ArticleAccordion } from '@/components/Accordion/ArticlesSubmenuAccordion/AccordionItem';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import MenuCta from '@/components/Header/MenuCta';
import { InnerAppContext, MobileNavbarContext } from '@/components/Header/MobileNavbar/MobileNavbar';
import SubMenuBlogs from '@/components/Header/SubMenus/SubMenuBlogs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

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

    // const articleList: ArticleAccordion[] = [...articles, {
    //
    // }]

    // Context will be provided only for mobile menu
    const context = useContext(MobileNavbarContext);
    let innerAppCtx: InnerAppContext | null;
    if (context !== undefined) {
        innerAppCtx = context;
    }

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

            <div className="mega-submenu absolute left-0 top-full z-[99] grid max-h-0 w-screen grid-rows-[1fr_auto] overflow-y-auto overflow-x-hidden bg-white transition-all duration-1000 group-hover/menu-item:max-h-[calc(100vh_-_19rem)] group-hover/menu-item:drop-shadow-md xl:top-0 xl:translate-y-[11rem]">
                <Container className="relative">
                    <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] xl:gap-32 xl:py-20">
                        {/* Blogs */}

                        {articles ? (
                            <>
                                {articles.slice(0, 5).map((article, index) => (
                                    <SubMenuBlogs
                                        key={index}
                                        title={`Latest ${article.title} articles`}
                                        posts={article.articles}
                                        blogContainerClassName="!grid-cols-1"
                                    />
                                ))}

                                <div className={`hidden content-start gap-12 md:grid`}>
                                    <div className="grid gap-6">
                                        <span className="font-mulishBold text-[1.6rem] uppercase leading-8 text-heading2 line-clamp-1">
                                            Full list of articles
                                        </span>
                                        <div className="h-[0.1rem] w-full bg-heading2 opacity-[0.20]"></div>
                                    </div>

                                    {/* Blogs */}
                                    <div className={`grid grid-cols-1 gap-y-12 gap-x-24`}>
                                        <Link
                                            href={`/articles`}
                                            className="group/blog-item grid cursor-pointer justify-items-start gap-12"
                                            onClick={() => {
                                                const parentMenus: NodeListOf<HTMLElement> =
                                                    document.querySelectorAll('.parent-menu');

                                                parentMenus.forEach((element: HTMLElement | null) => {
                                                    if (element) {
                                                        element.style.pointerEvents = 'none';

                                                        setTimeout(() => {
                                                            element.style.pointerEvents = 'auto';
                                                        }, 800);
                                                    }
                                                });

                                                innerAppCtx?.setOpenMobileMenu(false);
                                            }}
                                        >
                                            <span className="max-w-[25rem] font-mulishBold text-[1.6rem] leading-8 text-[#384043] transition-all duration-500 line-clamp-2 group-hover/blog-item:text-[#697072]">
                                                Checkout our articles page for more relative articles
                                            </span>
                                            <span className="flex items-center justify-center gap-3 rounded-[1rem] bg-heading2 py-3 px-5 font-mulishBold text-[1.2rem] uppercase leading-[1.8rem] text-white text-[#697072]">
                                                Go to article page
                                                <FiArrowRight className="h-[1.5rem] w-[1.5rem] stroke-white transition-all duration-500 group-hover/blog-item:translate-x-2" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                {/* <Link */}
                                {/*     href={`/articles`} */}
                                {/*     className="group/blog-item grid cursor-pointer justify-items-start gap-4" */}
                                {/*     onClick={() => { */}
                                {/*         const parentMenus: NodeListOf<HTMLElement> = */}
                                {/*             document.querySelectorAll('.parent-menu'); */}

                                {/*         parentMenus.forEach((element: HTMLElement | null) => { */}
                                {/*             if (element) { */}
                                {/*                 element.style.pointerEvents = 'none'; */}

                                {/*                 setTimeout(() => { */}
                                {/*                     element.style.pointerEvents = 'auto'; */}
                                {/*                 }, 800); */}
                                {/*             } */}
                                {/*         }); */}

                                {/*         innerAppCtx?.setOpenMobileMenu(false); */}
                                {/*     }} */}
                                {/* > */}
                                {/*     <span className="font-mulishBold text-[1.6rem] leading-8 text-[#384043] transition-all duration-500 line-clamp-2 group-hover/blog-item:text-[#697072]"> */}
                                {/*         Full list of articles */}
                                {/*     </span> */}
                                {/*     <span className="flex items-center justify-center gap-3 font-mulishBold text-[1.2rem] uppercase leading-[1.8rem] text-[#697072]"> */}
                                {/*         Read More */}
                                {/*         <FiArrowRight className="h-[1.4rem] w-[1.4rem] translate-y-[0.1rem] stroke-[#697072] transition-all duration-500 group-hover/blog-item:translate-x-2" /> */}
                                {/*     </span> */}
                                {/* </Link> */}
                            </>
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
