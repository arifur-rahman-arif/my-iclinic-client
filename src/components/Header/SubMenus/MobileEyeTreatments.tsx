import SubMenuLink from '@/components/Header/SubMenus/SubMenuLink';
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
    setOpenMobileMenu
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
                        metaDescription: 'Astigmatism Resolved, Sight Improved.'
                    },
                    {
                        name: 'Flashes & Floaters',
                        url: '/flashes-floaters',
                        slug: 'flashes-floaters',
                        metaDescription: 'Flashes, Floaters, Clearer Vision.'
                    },
                    {
                        name: 'Conjunctivitis',
                        url: '/conjuctivitis-treatment-london',
                        slug: 'conjuctivitis-treatment-london',
                        metaDescription: 'Redness Vanished, Eyes Relieved.'
                    },
                    {
                        name: 'Dry eyes',
                        url: '/dry-eyes-treatment-london',
                        slug: 'dry-eyes-treatment-london',
                        metaDescription: 'Eyes Hydrated, Dryness Gone.'
                    },
                    {
                        name: 'Double Vision',
                        url: '/double-vision-treatment-london',
                        slug: 'double-vision-treatment-london',
                        metaDescription: 'Single Focus, Clear Vision.'
                    },
                    {
                        name: 'Lazy eyes',
                        url: '/lazy-eyes-treatement',
                        slug: 'lazy-eyes-treatement',
                        metaDescription: 'Empowering Lazy Eyes.'
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
                        metaDescription: 'Corneal eye treatments at My-iClinic'
                    },
                    {
                        name: 'Keratoconus',
                        url: '/keratoconus',
                        slug: 'keratoconus',
                        metaDescription: "Keratoconus treatment with London's leading cornea specialists"
                    },
                    {
                        name: 'Blepharitis',
                        url: '/blepharitis-treatment',
                        slug: 'blepharitis-treatment',
                        metaDescription: 'London’s best treatment for Blepharitis symptoms'
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
                        metaDescription:
                            'Our specialists can provide you with the appropriate treatment for mitigating your Myopia, no matter how severe. Find out more about our services here.'
                    },
                    {
                        name: 'Paediatric eye care',
                        url: '/paediatric-eye-care',
                        slug: 'paediatric-eye-care',
                        metaDescription:
                            'Our trusted paediatric ophthalmologists deliver the best treatment for any eye problems in children. Learn more about our paediatric eye care services.'
                    }
                ]
            },
            {
                name: 'Glaucoma care',
                menus: [
                    {
                        name: 'Glaucoma Care clinic',
                        url: '/glaucoma-treatment',
                        slug: 'glaucoma-treatment',
                        metaDescription:
                            'Glaucoma is an eye condition where the optic nerve connecting the eye to the brain becomes damaged. Find out about our glaucoma treatment here.'
                    }
                ]
            },
            {
                name: 'Eyelid surgery',
                menus: [
                    {
                        name: 'Eyelid Surgery (cosmetic & medical treatments)',
                        url: '/eyelid-surgery-london',
                        slug: 'eyelid-surgery-london',
                        metaDescription:
                            'Our trusted oculoplastic surgeons deliver the best treatment for eyelid conditions. Find out more about our treatments and how we can help you.'
                    }
                ]
            },
            {
                name: 'Macular diseases & treatments',
                menus: [
                    {
                        name: 'Macular degeneration',
                        url: '/macular-degeneration',
                        slug: 'macular-degeneration',
                        metaDescription:
                            'Our Macular Degeneration specialists are experienced in treating and providing patients with the efficient care they need. Contact us today to book an appointment.'
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
                <div key={key} className="relative cursor-pointer py-6 px-6">
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
        </div>
    );
};

export default MobileEyeTreatments;
