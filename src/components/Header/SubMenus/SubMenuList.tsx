import { NavMenuType } from '@/components/Header/navMenuList';
import SubMenuLink from '@/components/Header/SubMenus/SubMenuLink';
import { NextRouter } from 'next/router';
import { ReactNode } from 'react';

interface SubMenuListProps {
    submenu: NavMenuType[];
    router: NextRouter;
    subMenuTitle: ReactNode;
}

/**
 * Submenu list
 *
 * @param {NavMenuType[]} submenu
 * @param {NextRouter} router
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} subMenuTitle
 * @returns {JSX.Element}
 * @constructor
 */
const SubMenuList = ({ submenu, router, subMenuTitle }: SubMenuListProps): JSX.Element => {
    return (
        <div
            className="grid content-start gap-12"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <div className="grid content-start gap-6">
                <span className="font-mulishBold text-[1.6rem] uppercase leading-8 text-heading2">{subMenuTitle}</span>
                <div className="h-[0.1rem] w-full bg-heading2 opacity-[0.20]"></div>
            </div>

            <div className="grid content-start gap-4">
                {submenu?.map((menu, i) => (
                    <SubMenuLink {...menu} isActive={router.pathname === menu.url} key={i} />
                ))}
            </div>
        </div>
    );
};

export default SubMenuList;
