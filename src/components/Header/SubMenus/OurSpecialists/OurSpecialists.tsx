import { NavMenuType } from '@/components/Header/navMenuList';
import Specialists from './Specialists';
import SubMenuList from '@/components/Header/SubMenus/SubMenuList';
import { NextRouter } from 'next/router';

interface OurSpecialistsProps {
    submenu: NavMenuType[];
    router: NextRouter;
}

/**
 * Our specialists submenu
 *
 * @param {NavMenuType[]} submenu
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
const OurSpecialists = ({ submenu, router }: OurSpecialistsProps): JSX.Element => {
    return (
        <div className="grid grid-cols-1 gap-12 py-12 xl:grid-cols-[auto_1fr] xl:gap-40 xl:py-20">
            <SubMenuList submenu={submenu} router={router} subMenuTitle="Cataract" />

            {/* Blogs */}
            <Specialists />
        </div>
    );
};

export default OurSpecialists;
