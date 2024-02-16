import { NavMenuType } from '@/components/Header/navMenuList';
import SubMenu from '@/components/Header/SubMenus/SubMenu';
import { useRouter } from 'next/router';
import { FaAngleDown } from 'react-icons/fa';

/**
 * About us submenu component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AboutUs = (): JSX.Element => {
    const router = useRouter();

    const isMenuActive = router.pathname === '/about-us';

    const aboutUsSubmenus: NavMenuType[] = [
        {
            name: 'About our Clinic',
            url: '/about-us',
            slug: 'about-us',
            metaDescription: 'We are passionate team of skilled ophthalmologists, optometrists,'
        },
        {
            name: 'Complaint',
            url: '/complaint',
            slug: 'complaint',
            metaDescription:
                "Our complaints procedure outlines the steps you need to take. We're here to help you resolve any issues you may have."
        },
        {
            name: 'Translation Service',
            url: '/translation-service',
            slug: 'translation-service',
            metaDescription: 'Understand your care journey with us by our trusted translator partner'
        },
        {
            name: 'Charity',
            url: '/charity',
            slug: 'charity',
            metaDescription: 'Discover ways to make a meaningful impact through our charity initiatives.'
        }
    ];

    return (
        <span className="group/menu-item parent-menu relative flex h-full items-center justify-center gap-2 px-6">
            <span
                className={`relative cursor-pointer text-[1.6rem] font-bold leading-8 text-white transition-all duration-500 group-hover/menu-item:text-[#9B9FA1] ${
                    isMenuActive && 'text-[#9B9FA1]'
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
                }}
            >
                About us
            </span>

            <FaAngleDown className="h-[1.6rem] w-[1.6rem] translate-y-[0.1rem] -rotate-90 fill-[#CDCFD0] transition-all duration-500 group-hover/menu-item:rotate-0 group-hover/menu-item:fill-[#9B9FA1]" />

            <SubMenu router={router} submenu={aboutUsSubmenus} className="group-hover/menu-item:max-h-[55rem]" />
        </span>
    );
};

export default AboutUs;
