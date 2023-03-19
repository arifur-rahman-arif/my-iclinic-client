import { NavMenuType } from '@/components/Header/navMenuList';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { ReactNode } from 'react';

export interface NavLinkInterface {
    menu: NavMenuType;
    router: NextRouter;
}

/**
 * Navigation link component
 *
 * @param {number} index
 * @param {NavMenuType} menu
 * @param {boolean} isMenuActive
 * @param {boolean | undefined} closeMobileMenu
 * @returns {JSX.Element}
 * @constructor
 */
const NavLink = ({ menu, router }: NavLinkInterface): JSX.Element => {
    // Const [lastY, setLastY] = useState<number>(0);

    // /**
    //  * Move the menu to vertical way when user cursor moves over the submenu
    //  *
    //  * @param {React.MouseEvent<HTMLDivElement>} event
    //  */
    // const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    //     event.preventDefault();
    //     const { current } = submenuRef;
    //
    //     if (!current) return;
    //
    //     const { clientY } = event;
    //     const deltaY = (clientY - lastY) / 1.5;
    //
    //     setLastY(clientY);
    //
    //     current.scrollTop += deltaY;
    // };

    return (
        <li className="group/menu-item relative block grid h-full place-items-center">
            {/* Parent menus */}
            <ParentMenuItem router={router} menu={menu} />

            {/* Submenus */}
            {menu.submenu?.length && (
                <div
                    className={`pointer-events-none absolute top-0 left-0 top-full opacity-0 transition-all duration-500 group-hover/menu-item:pointer-events-auto group-hover/menu-item:opacity-100 ${
                        menu.megaMenu && 'w-[calc(var(--container-width))] -translate-x-[26.5rem]'
                    }`}
                >
                    {/* If it's a mega menu change the structure to a grid or else flex */}
                    <div
                        className={`${
                            menu.megaMenu ?
                                'grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] justify-items-start gap-12 !pb-16' :
                                'flex flex-col gap-6'
                        } items-start justify-start rounded-bl-primary rounded-br-primary bg-white px-8 py-8 shadow-md`}
                    >
                        {menu.submenu.map((item, index) => (
                            <span key={index} className="block flex w-full items-center justify-center gap-1">
                                {!item.submenu ? (
                                    <SubMenuLink {...item} router={router} />
                                ) : (
                                    <div className="w-full">
                                        <span key={index} className="font-mulishBold text-[1.8rem] leading-8">
                                            {item.name}
                                        </span>
                                        <div className="mt-4 flex w-full flex-col items-start justify-start gap-6">
                                            {item.submenu?.map((item, index) => (
                                                <SubMenuLink {...item} key={index} router={router} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </li>
    );
};

export default NavLink;

/**
 * Parent menu item component
 *
 * @param {NavMenuType} menu
 * @param {boolean} isMenuActive
 * @returns {JSX.Element}
 * @constructor
 */
const ParentMenuItem = ({ menu, router }: { menu: NavMenuType; router: NextRouter }) => {
    const isMenuActive = router.pathname === menu.url;

    return (
        <span className="flex items-center justify-center gap-1">
            <span
                className={`cursor-pointer font-mulishMedium text-[1.6rem] capitalize leading-8 transition-all duration-500 group-hover/menu-item:text-brand ${
                    isMenuActive && 'text-brand'
                }`}
            >
                {menu.name}
            </span>

            {menu.submenu && (
                <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[1.2rem] w-[1.2rem] translate-y-[0.1rem] transition-all duration-500 hover:text-brand group-hover/menu-item:-rotate-90"
                >
                    <path
                        d="M1 1L7 7L13 1"
                        stroke="#222D30"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-all duration-500 group-hover/menu-item:!stroke-brand ${
                            isMenuActive && '!stroke-brand'
                        }`}
                    />
                </svg>
            )}
        </span>
    );
};

/**
 * Submenu link component
 *
 * @param {string} linkText
 * @param {string} url
 * @returns {JSX.Element}
 * @constructor
 */
const SubMenuLink = ({ name, url, router }: { name: ReactNode; url: string; router: NextRouter }): JSX.Element => {
    const isMenuActive = router.pathname === url;

    return (
        <Link
            href={url}
            className={`block w-full whitespace-nowrap font-mulishMedium text-[1.6rem] capitalize leading-8 transition-all duration-500 hover:text-brand ${
                isMenuActive && 'text-brand'
            }`}
        >
            {name}
        </Link>
    );
};
