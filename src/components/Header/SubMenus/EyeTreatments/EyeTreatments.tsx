import { NavMenuType } from '@/components/Header/navMenuList';
import SubMenuLink from '@/components/Header/SubMenus/SubMenuLink';
import { NextRouter } from 'next/router';

interface EyeTreatmentsProps {
    submenu: NavMenuType[];
    router: NextRouter;
}

/**
 * Eye treatments submenu
 *
 * @param {NavMenuType[]} submenu
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
const EyeTreatments = ({ submenu, router }: EyeTreatmentsProps): JSX.Element => {
    return (
        <div
            className="grid gap-y-12 gap-x-40 py-12 xl:py-20"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))' }}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <div className="grid content-start gap-12 xl:gap-16">
                {submenu.slice(0, 3).map((menu, index) => (
                    <div className="grid content-start gap-8" key={index}>
                        <div className="grid content-start gap-6">
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-8 text-heading2">
                                {menu.name}
                            </span>
                            <div className="h-[0.1rem] w-full bg-heading2 opacity-[0.20]"></div>
                        </div>

                        <div className="grid content-start gap-4">
                            {menu.submenu?.map((menu, index) => (
                                <SubMenuLink key={index} {...menu} isActive={router.pathname === menu.url} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid content-start gap-12 xl:gap-16">
                {submenu.slice(3, 5).map((menu, index) => (
                    <div className="grid content-start gap-8" key={index}>
                        <div className="grid content-start gap-6">
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-8 text-heading2">
                                {menu.name}
                            </span>
                            <div className="h-[0.1rem] w-full bg-heading2 opacity-[0.20]"></div>
                        </div>

                        <div className="grid content-start gap-4">
                            {menu.submenu?.map((menu, index) => (
                                <SubMenuLink key={index} {...menu} isActive={router.pathname === menu.url} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid content-start gap-12 xl:gap-16">
                {submenu.slice(5, 6).map((menu, index) => (
                    <div className="grid content-start gap-8" key={index}>
                        <div className="grid content-start gap-6">
                            <span className="font-mulishBold text-[1.6rem] uppercase leading-8 text-heading2">
                                {menu.name}
                            </span>
                            <div className="h-[0.1rem] w-full bg-heading2 opacity-[0.20]"></div>
                        </div>

                        <div className="grid content-start gap-4">
                            {menu.submenu?.map((menu, index) => (
                                <SubMenuLink key={index} {...menu} isActive={router.pathname === menu.url} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* {submenu.map((menu, index) => ( */}
            {/*     <div className="grid content-start gap-12" key={index}> */}
            {/*         <div className="grid content-start gap-6"> */}
            {/*             <span className="font-mulishBold text-[1.6rem] uppercase leading-8 text-heading2"> */}
            {/*                 {menu.name} */}
            {/*             </span> */}
            {/*             <div className="h-[0.1rem] w-full bg-heading2 opacity-[0.20]"></div> */}
            {/*         </div> */}

            {/*         <div className="grid content-start gap-4"> */}
            {/*             {menu.submenu?.map((menu, index) => ( */}
            {/*                 <SubMenuLink key={index} {...menu} isActive={router.pathname === menu.url} /> */}
            {/*             ))} */}
            {/*         </div> */}
            {/*     </div> */}
            {/* ))} */}
        </div>
    );
};

export default EyeTreatments;
