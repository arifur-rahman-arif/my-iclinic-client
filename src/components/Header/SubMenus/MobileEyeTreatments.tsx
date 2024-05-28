import SubMenuLink from '@/components/Header/SubMenus/SubMenuLink';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

interface SubmenuType {
    active?: boolean;
    name: string;
    menus: Array<{
        name: string;
        url: string;
        slug: string;
        metaDescription: string;
    }>;
}

interface MobileEyeTreatmentsProps {
    router: NextRouter;
    submenus?: SubmenuType[];
    setOpenMobileMenu?: Dispatch<SetStateAction<boolean>> | undefined;
    soloLinks?: Array<{
        name: string;
        url: string;
    }>;
}

/**
 * MobileEyeTreatments is a React component that displays a mobile-friendly list of eye treatment options
 * with collapsible submenus.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.router - The router object used for navigation.
 * @param {Array} props.submenus - An array of submenu data containing treatment options.
 * @param {function} props.setOpenMobileMenu - A function to control the mobile menu state.
 * @returns {JSX.Element} A React JSX element representing the mobile eye treatments component.
 */
const MobileEyeTreatments = ({
    router,
    submenus: propSubmenus,
    setOpenMobileMenu,
    soloLinks
}: MobileEyeTreatmentsProps): JSX.Element => {
    const [submenus, setSubmenus] = useState<SubmenuType[]>(
        propSubmenus || [
            {
                active: true,
                name: 'Eye conditions',
                menus: [
                    {
                        name: 'Astigmatism',
                        url: '/astigmatism-treatment',
                        slug: 'astigmatism-treatment',
                        metaDescription: 'Astigmatism Resolved, Sight Improved'
                    },
                    {
                        name: 'Flashes & Floaters',
                        url: '/flashes-floaters',
                        slug: 'flashes-floaters',
                        metaDescription: 'Flashes, Floaters, Clearer Vision'
                    },
                    {
                        name: 'Conjunctivitis',
                        url: '/conjuctivitis-treatment-london',
                        slug: 'conjuctivitis-treatment-london',
                        metaDescription: 'Redness Vanished, Eyes Relieved'
                    },
                    {
                        name: 'Dry eyes',
                        url: '/dry-eyes-treatment-london',
                        slug: 'dry-eyes-treatment-london',
                        metaDescription: 'Eyes Hydrated, Dryness Gone'
                    },
                    {
                        name: 'Double Vision',
                        url: '/double-vision-treatment-london',
                        slug: 'double-vision-treatment-london',
                        metaDescription: 'Single Focus, Clear Vision'
                    },
                    {
                        name: 'Lazy eyes',
                        url: '/lazy-eyes-treatement',
                        slug: 'lazy-eyes-treatement',
                        metaDescription: 'Empowering Lazy Eyes'
                    }
                ]
            },
            {
                name: 'Corneal diseases & treatments',
                menus: [
                    {
                        name: 'Corneal Treatments',
                        url: '/corneal-treatments',
                        slug: 'corneal-treatments',
                        metaDescription: 'Healthy Cornea, Better Vision'
                    },
                    {
                        name: 'Keratoconus',
                        url: '/keratoconus',
                        slug: 'keratoconus',
                        metaDescription: 'Keratoconus Managed, Eyes Rejoice'
                    },
                    {
                        name: 'Blepharitis',
                        url: '/blepharitis-treatment',
                        slug: 'blepharitis-treatment',
                        metaDescription: 'Healthy Lids - Happy Lids'
                    }
                ]
            },
            {
                name: "Children's Eyes",
                menus: [
                    {
                        name: 'Myopia Control',
                        url: '/myopia',
                        slug: 'myopia',
                        metaDescription: 'Myopia Managed, Brighter Future'
                    },
                    {
                        name: 'Paediatric eye care',
                        url: '/paediatric-eye-care',
                        slug: 'paediatric-eye-care',
                        metaDescription: 'Little Eyes, Big Care'
                    }
                ]
            }
        ]
    );

    /**
     * Handles a click event on a submenu item, toggling its active state and deactivating other submenus.
     *
     * @param {number} index - The index of the clicked submenu item.
     */
    const handleClick = (index: number) => {
        setSubmenus((prevState) => {
            return prevState.map((treatment, i) => {
                if (index === i) {
                    // Toggle the active property for the clicked submenu
                    return {
                        ...treatment,
                        active: !treatment.active
                    };
                } else {
                    // Deactivate other submenu items
                    return {
                        ...treatment,
                        active: false
                    };
                }
            });
        });
    };

    return (
        <div className="grid">
            {submenus.map((menu, key) => (
                <div key={key} className="relative cursor-pointer px-6 py-6">
                    <div
                        className="relative z-[2] flex items-center justify-start gap-4  transition-all duration-500"
                        onClick={() => {
                            handleClick(key);
                        }}
                    >
                        <span
                            className={`h-[1.4rem] w-[1.4rem] rounded-full border-[0.3rem] border-solid border-white bg-[#0052A0] transition-all duration-500 ${
                                menu.active && 'bg-white'
                            }`}
                        ></span>
                        <strong className="text-[1.6rem] text-white">{menu.name}</strong>
                        <FaAngleRight
                            className={`h-6 w-6 -translate-x-2 translate-y-[0.1rem] fill-white transition-all duration-1000 ${
                                menu.active ? 'rotate-90' : 'rotate-0'
                            }`}
                        />
                    </div>

                    <div
                        className={`grid max-h-0 gap-4 overflow-hidden transition-all duration-1000 ${
                            menu.active && 'max-h-[100rem]'
                        }`}
                    >
                        <div className="mt-6 grid">
                            {menu.menus?.map((menu, i) => (
                                <SubMenuLink
                                    {...menu}
                                    isActive={router.pathname === menu.url}
                                    key={i}
                                    className="pr-0 first:pt-10 last:pb-10"
                                    setOpenMobileMenu={setOpenMobileMenu}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {soloLinks?.map((item, key) => (
                <Link
                    href={item.url}
                    key={key}
                    className="relative cursor-pointer px-6 py-6"
                    onClick={() => {
                        setOpenMobileMenu && setOpenMobileMenu(false);
                    }}
                >
                    <div className="relative z-[2] flex items-center justify-start gap-4  transition-all duration-500">
                        <span
                            className={`h-[1.4rem] w-[1.4rem] rounded-full border-[0.3rem] border-solid border-white bg-[#0052A0] transition-all duration-500 ${
                                router.pathname === item.url && 'bg-white'
                            }`}
                        ></span>
                        <strong className="text-[1.6rem] text-white">{item.name}</strong>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MobileEyeTreatments;
