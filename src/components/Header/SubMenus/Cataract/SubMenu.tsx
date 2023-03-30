import ComponentLoader from '@/components/ComponentLoader';
import { NavMenuType } from '@/components/Header/navMenuList';
import SubMenuBlogs from '@/components/Header/SubMenus/SubMenuBlogs';
import { NextRouter } from 'next/router';
import SubMenuList from '../SubMenuList';

interface CataractProps {
    submenu: NavMenuType[];
    router: NextRouter;
    subMenuTitle: string;
    blogsTitle: string;
    posts?: any;
}

/**
 * Submenu component
 *
 * @param {NavMenuType[]} submenu
 * @param {NextRouter} router
 * @param {string} subMenuTitle
 * @param {string} blogsTitle
 * @param {any} posts
 * @returns {JSX.Element}
 * @constructor
 */
const SubMenu = ({ submenu, router, subMenuTitle, blogsTitle, posts }: CataractProps): JSX.Element => {
    return (
        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-[auto_1fr] xl:gap-40 xl:py-20">
            <SubMenuList submenu={submenu} router={router} subMenuTitle={subMenuTitle} />

            {/* Blogs */}
            {Array.isArray(posts) ? (
                posts.length ? (
                    <SubMenuBlogs title={blogsTitle} posts={posts} />
                ) : null
            ) : (
                <div className="hidden md:block">
                    <ComponentLoader />
                </div>
            )}
        </div>
    );
};
export default SubMenu;
