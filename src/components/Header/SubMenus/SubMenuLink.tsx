import { InnerAppContext, MobileNavbarContext } from '@/components/Header/MobileNavbar/MobileNavbar';
import { NavMenuType } from '@/components/Header/navMenuList';
import Link from 'next/link';
import { ReactNode, useContext } from 'react';

interface SubMenuLinkProps extends NavMenuType {
    url: string;
    name: ReactNode;
    isActive: boolean;
    metaDescription?: string;
}

/**
 * Submenu LInk
 *
 * @param {string} url
 * @param {string} name
 * @param {boolean} isActive
 * @param {string | undefined} metaDescription
 * @returns {JSX.Element}
 * @constructor
 */
const SubMenuLink = ({ url, name, isActive, metaDescription }: SubMenuLinkProps): JSX.Element => {
    // Context will be provided only for mobile menu
    const context = useContext(MobileNavbarContext);
    let innerAppCtx: InnerAppContext | undefined;
    if (context !== undefined) {
        innerAppCtx = context;
    }

    return (
        <Link
            href={url}
            className={`grid max-w-[38rem] cursor-pointer gap-2 border-l py-6 pr-6 transition-all duration-500 hover:border-heading2 hover:bg-[#D9E2E566] hover:pl-6 ${
                isActive ? 'border-heading2 bg-[#D9E2E566] pl-6' : 'border-l-transparent'
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

                innerAppCtx?.setOpenMobileMenu(false);
            }}
        >
            <strong className="text-[1.6rem] leading-8">{name}</strong>
            <span className="block font-mulishMedium text-[1.4rem] leading-8 text-[#51585B] line-clamp-1">
                {metaDescription ||
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"}
            </span>
        </Link>
    );
};

export default SubMenuLink;
