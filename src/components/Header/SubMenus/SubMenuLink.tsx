import { NavMenuType } from '@/components/Header/navMenuList';
import Link from 'next/link';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

interface SubMenuLinkProps extends NavMenuType {
    url: string;
    name: ReactNode;
    isActive: boolean;
    metaDescription?: string;
    className?: string;
    setOpenMobileMenu?: Dispatch<SetStateAction<boolean>> | undefined;
}

/**
 * Submenu LInk
 *
 * @param {string} url
 * @param {string} name
 * @param {boolean} isActive
 * @param {string | undefined} metaDescription
 * @param {string | undefined} className
 * @param {Dispatch<SetStateAction<boolean>> | undefined} setOpenMobileMenu
 * @returns {JSX.Element}
 * @constructor
 */
const SubMenuLink = ({
    url,
    name,
    isActive,
    metaDescription,
    className,
    setOpenMobileMenu
}: SubMenuLinkProps): JSX.Element => {
    return (
        <Link
            href={url}
            title={name as string}
            className={twMerge('group/submenu-link relative px-10 py-10 first:pt-12 last:pb-12', className)}
            prefetch={false}
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

                setOpenMobileMenu && setOpenMobileMenu(false);
            }}
        >
            <span
                className={twMerge(
                    'absolute bottom-0 left-0 h-[0.2rem] w-full bg-[#005DAF] transition-all duration-1000 group-hover/submenu-link:h-full',
                    isActive && 'h-full'
                )}
            ></span>

            <span className="relative z-[2] grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                <span
                    className={twMerge(
                        'h-[1.4rem] w-[1.4rem] translate-y-[0.5rem] rounded-full border-[0.3rem] border-solid border-white bg-[#0052A0] transition-all duration-500 group-hover/submenu-link:bg-white xl:h-[1.6rem] xl:w-[1.6rem] xl:translate-y-1',
                        isActive && 'bg-white'
                    )}
                ></span>
                <span className="font-mulishBold text-white">{name}</span>
                <span className="col-start-2 line-clamp-1 block font-mulishMedium text-[1.4rem] leading-8 text-[#D1E8FE]">
                    {metaDescription ||
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"}
                </span>
            </span>
        </Link>
    );
};

export default SubMenuLink;
