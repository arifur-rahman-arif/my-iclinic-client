import Link from 'next/link';

interface LinkListPropsInterface {
    type: string;
    name: string;
    url: string;
    icon?: JSX.Element;
    activeIcon?: JSX.Element;
    linkActive: boolean;
    stickyNavActive: boolean;
    closeMenu: () => void;
}

/**
 * Link list component
 *
 * @param {LinkListPropsInterface} {
 *     type,
 *     name,
 *     url,
 *     icon: Icon,
 *     linkActive,
 *     activeIcon: ActiveIcon,
 *     closeMenu,
 *     stickyNavActive
 * }
 * @returns {*}
 */
const LinkList = ({
    type,
    name,
    url,
    icon: Icon,
    linkActive,
    activeIcon: ActiveIcon,
    closeMenu,
    stickyNavActive
}: LinkListPropsInterface): any => {
    let linkClassNames =
        'inline-block w-full text-[1.6rem] font-medium leading-8 hover:text-primary text-secondary lg:text-white';

    if (linkActive) {
        linkClassNames = 'inline-block w-full text-[1.6rem] font-medium leading-8 hover:text-primary text-primary';
    }

    if (stickyNavActive) {
        linkClassNames = `inline-block w-full text-[1.6rem] font-medium leading-8 hover:text-primary ${
            linkActive ? 'text-primary' : 'text-secondary'
        }`;
    }

    return (
        <>
            {type === 'icon' && (
                <li className="grid w-full cursor-pointer place-items-center md:w-auto" onClick={closeMenu}>
                    <Link href={url} className="mx-auto grid w-full place-items-center md:-translate-y-1">
                        {linkActive ? ActiveIcon : Icon}
                    </Link>
                </li>
            )}

            {type === 'text' && (
                <li
                    className={`w-full cursor-pointer whitespace-nowrap text-center underline-offset-8 transition-all hover:underline md:w-auto ${
                        linkActive && 'underline decoration-primary'
                    }`}
                    onClick={closeMenu}
                >
                    <Link href={url} className={linkClassNames}>
                        {name}
                    </Link>
                </li>
            )}

            {type === 'button' && (
                <li onClick={closeMenu}>
                    <Link href={url}>
                        <button
                            type="button"
                            className={`text-secondar cursor-pointer rounded-[1.5rem] border-2 border-primary bg-primary py-[1.8rem] px-[2.4rem] text-[1.6rem] font-bold uppercase leading-8 transition-all hover:bg-transparent hover:text-primary`}
                        >
                            Calendar
                        </button>
                    </Link>
                </li>
            )}
        </>
    );
};

export default LinkList;
