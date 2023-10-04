import MenuCta from '@/components/Header/MenuCta';
import { NavMenuType } from '@/components/Header/navMenuList';
import SubMenuLink from '@/components/Header/SubMenus/SubMenuLink';
import { NextRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';

interface CataractProps {
    submenu: NavMenuType[];
    router: NextRouter;
    className?: string;
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
const SubMenu = ({ submenu, router, className }: CataractProps): JSX.Element => {
    return (
        <div
            className={twMerge(
                'absolute top-full left-0 z-10 grid max-h-0 min-w-[40rem] overflow-hidden rounded-bl-radius2 rounded-br-radius2 bg-[#003E79] transition-all duration-1000 group-hover/menu-item:max-h-[70rem]',
                className
            )}
        >
            {submenu?.map((menu, i) => (
                <SubMenuLink {...menu} isActive={router.pathname === menu.url} key={i} />
            ))}

            <MenuCta />
        </div>
    );
};
export default SubMenu;
