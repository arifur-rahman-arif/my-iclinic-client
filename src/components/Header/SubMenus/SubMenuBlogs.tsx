import ComponentLoader from '@/components/ComponentLoader';
import { InnerAppContext, MobileNavbarContext } from '@/components/Header/MobileNavbar/MobileNavbar';
import HTMLReactParser from 'html-react-parser';
import Link from 'next/link';
import { useContext } from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface SubMenuBlogProps {
    title: string;
    blogContainerClassName?: string;
    posts: any;
    className?: string;
}

/**
 * Submenu blogs
 * @param {string} title
 * @param {string | undefined} blogContainerClassName
 * @param {any} posts
 * @param {string} className
 * @returns {JSX.Element}
 * @constructor
 */
const SubMenuBlogs = ({ title, blogContainerClassName, posts, className }: SubMenuBlogProps): JSX.Element => {
    // Context will be provided only for mobile menu
    const context = useContext(MobileNavbarContext);
    let innerAppCtx: InnerAppContext | undefined;
    if (context !== undefined) {
        innerAppCtx = context;
    }

    return (
        <div className={`hidden content-start gap-12 md:grid ${className}`}>
            <div className="grid gap-6">
                <span className="font-mulishBold text-[1.6rem] uppercase leading-8 text-heading2 line-clamp-1">
                    {HTMLReactParser(title)}
                </span>
                <div className="h-[0.1rem] w-full bg-heading2 opacity-[0.20]"></div>
            </div>

            {/* Blogs */}
            <div className={`grid grid-cols-2 gap-y-12 gap-x-24 ${blogContainerClassName}`}>
                {posts ? (
                    posts.map((item: any, i: number) => (
                        <Link
                            key={i}
                            href={`/articles/${item.slug}`}
                            className="group/blog-item grid cursor-pointer justify-items-start gap-4"
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
                    ))
                ) : (
                    <ComponentLoader />
                )}
            </div>
        </div>
    );
};

export default SubMenuBlogs;
