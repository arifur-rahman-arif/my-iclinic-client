import { Container } from '@/components/Container';
import MenuCta from '@/components/Header/MenuCta';
import { NavMenuType } from '@/components/Header/navMenuList';
import SubMenuLink from '@/components/Header/SubMenus/SubMenuLink';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaAngleDown } from 'react-icons/fa';

/**
 * About us submenu component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AboutUs = () => {
    const router = useRouter();

    const isMenuActive = router.pathname === '/about-us';

    const aboutUsSubmenus: NavMenuType[] = [
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
            metaDescription: 'Understand your care journey with us'
        }
    ];

    return (
        <span className="group/menu-item parent-menu flex items-center justify-center gap-2">
            <Link
                href="/about-us"
                className={`relative cursor-pointer font-mulishMedium text-[1.6rem] capitalize leading-8 transition-all duration-500 group-hover/menu-item:text-[#9B9FA1] ${
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
                {isMenuActive && (
                    <span className="absolute left-0 top-full h-1 w-full translate-y-4 rounded-full bg-[#9B9FA1]"></span>
                )}
            </Link>

            <FaAngleDown className="h-[1.2rem] w-[1.2rem] -rotate-90 fill-[#CDCFD0] transition-all duration-500 group-hover/menu-item:rotate-0 group-hover/menu-item:fill-[#9B9FA1]" />

            <div className="mega-submenu absolute left-0 top-full z-[99] grid max-h-0 w-screen grid-rows-[1fr_auto] overflow-y-auto overflow-x-hidden bg-white transition-all duration-1000 group-hover/menu-item:max-h-[calc(100vh_-_19rem)] group-hover/menu-item:drop-shadow-md xl:top-0 xl:translate-y-[11rem]">
                <Container className="grid grid-cols-1 gap-12 py-12 xl:gap-40 xl:py-20">
                    <div className="grid grid-cols-[auto_1fr] content-start gap-4 gap-x-12">
                        {aboutUsSubmenus?.map((menu, i) => (
                            <SubMenuLink {...menu} isActive={router.pathname === menu.url} key={i} />
                        ))}
                    </div>
                </Container>
                <MenuCta />
            </div>
        </span>
    );
};

export default AboutUs;
