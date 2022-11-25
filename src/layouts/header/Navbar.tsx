import HomeIcon from '@/icons/icon-home-white-outline.svg';
import IconHomeYellow from '@/icons/icon-home-yellow-outline.svg';
import { useRouter } from 'next/router';
import LinkList from 'src/layouts/header/LinkList';

interface PropInterface {
    hamburgerActive: boolean;
    stickyNavActive: boolean;
    closeMenu: () => void;
}

const navList = [
    {
        type: 'icon',
        url: '/',
        icon: <HomeIcon className="fill-secondary" />,
        activeIcon: <IconHomeYellow />
    },
    {
        type: 'text',
        name: 'Who we are',
        url: '/about-us'
    },
    {
        type: 'text',
        name: 'Pricing',
        url: '/swimming-lesson-cost'
    },
    {
        type: 'text',
        name: 'Contact us',
        url: '/contact-swimming-instructor'
    },
    {
        type: 'button',
        name: 'Calendar',
        url: '/swimming-lesson-cost'
    }
];

/**
 * Navbar component
 *
 * @param {PropInterface} { hamburgerActive }
 * @returns {JSX.Element}
 */
const Navbar = ({ hamburgerActive, stickyNavActive, closeMenu }: PropInterface): JSX.Element => {
    const router = useRouter();

    return (
        <nav className={`absolute top-[9rem] left-0 z-50 h-full w-full md:relative md:top-0 md:block`}>
            <div
                className={`relative max-h-0 w-full overflow-hidden transition-all duration-500 md:h-full md:max-h-full ${
                    (hamburgerActive && 'max-h-[100rem] pb-8 md:pb-0') || ''
                }`}
            >
                <ul className="flex h-full w-full flex-col items-center justify-center gap-12 bg-white py-16 shadow-lg md:flex-row md:justify-end md:bg-transparent md:py-0 md:shadow-none">
                    {navList.map((link, index) => (
                        <LinkList
                            key={index}
                            icon={link.icon}
                            activeIcon={link.activeIcon}
                            type={link.type}
                            name={link.name || ''}
                            url={link.url}
                            linkActive={router.pathname === link.url}
                            stickyNavActive={stickyNavActive}
                            closeMenu={closeMenu}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
