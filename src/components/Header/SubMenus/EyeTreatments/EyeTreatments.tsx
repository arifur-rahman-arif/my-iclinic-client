import MenuCta from '@/components/Header/MenuCta';
import { NavMenuType } from '@/components/Header/navMenuList';
import { SoloLink } from '@/components/Header/SubMenus/OurSpecialists/OurSpecialists';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { ReactNode, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import styles from './Style.module.scss';

interface EyeTreatmentsProps {
    router: NextRouter;
    submenus?: SubmenuType[];
    innerMenuList?: InnerMenuList[];
    className?: string;
    soloLinks?: Array<{
        name: string;
        url: string;
    }>;
}

interface SubmenuType {
    active?: boolean;
    name: string;
    prev?: boolean;
}

interface InnerMenuList {
    active?: boolean;
    menus: Array<{
        name: string;
        url: string;
        slug: string;
        metaDescription: string;
    }>;
}

/**
 * Eye treatments submenu
 *
 * @param {NavMenuType[]} submenu
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
const EyeTreatments = ({
    router,
    submenus: propSubmenus,
    innerMenuList,
    soloLinks,
    className
}: EyeTreatmentsProps): JSX.Element => {
    const [submenus, setSubmenus] = useState<SubmenuType[]>(
        propSubmenus || [
            {
                active: true,
                name: 'Eye conditions'
            },
            {
                name: 'Corneal diseases & treatments'
            },
            {
                name: 'Children\'s Eyes'
            },
            {
                name: 'Glaucoma care'
            },
            {
                name: 'Eyelid surgery'
            },
            {
                name: 'Macular diseases & treatments'
            }
        ]
    );

    const [treatments, setTreatments] = useState<InnerMenuList[]>(
        innerMenuList || [
            {
                active: true,
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
            },
            {
                menus: [
                    {
                        name: 'Glaucoma Care clinic',
                        url: '/glaucoma-treatment',
                        slug: 'glaucoma-treatment',
                        metaDescription: 'Glaucoma: Watch, Protect, Prevail'
                    }
                ]
            },
            {
                menus: [
                    {
                        name: 'Eyelid Surgery (cosmetic & medical treatments)',
                        url: '/eyelid-surgery-london',
                        slug: 'eyelid-surgery-london',
                        metaDescription: 'Lifted Confidence, Youthful Look'
                    }
                ]
            },
            {
                menus: [
                    {
                        name: 'Macular degeneration',
                        url: '/macular-degeneration',
                        slug: 'macular-degeneration',
                        metaDescription: 'Defy Degeneration, Protect Vision'
                    }
                ]
            }
        ]
    );

    /**
     * Handles a click event on a treatment item, updating the state to reflect the clicked item as active.
     *
     * @param {number} index - The index of the clicked treatment item.
     */
    const handleClick = (index: number) => {
        setTreatments((prevState) => {
            return prevState.map((treatment, i) => {
                return {
                    ...treatment,
                    active: index === i
                };
            });
        });

        setSubmenus((prevState) => {
            const tempState = prevState.map((submenu) => ({ ...submenu, active: false, prev: false }));

            if (index >= 0 && index < tempState.length) {
                tempState[index].active = true;
            }

            if (index > 0 && index < tempState.length) {
                tempState[index - 1].prev = true;
            }

            return tempState;
        });
    };

    return (
        <div
            className={twMerge(
                'absolute top-full left-0 z-10 grid max-h-0 min-w-[95rem] -translate-x-1/2 overflow-hidden overflow-y-scroll rounded-bl-radius2 rounded-br-radius2 bg-[#003E79] transition-all duration-1000 group-hover/menu-item:max-h-[calc(100vh_-_17rem)]',
                className
            )}
        >
            <div className="grid w-full grid-cols-[40rem_1fr] content-start">
                <div className="grid min-h-[64rem] content-start bg-[#003363] py-12">
                    {submenus.map((menu, key) => (
                        <div
                            key={key}
                            className={`submenu-link group/submenu-link relative cursor-pointer py-12 px-10`}
                            onClick={() => {
                                handleClick(key);
                            }}
                        >
                            <div
                                className={`relative z-[2] flex items-center justify-start gap-4  transition-all duration-500 ${
                                    menu.active && 'translate-x-20'
                                }`}
                            >
                                <span
                                    className={`h-[1.6rem] w-[1.6rem] rounded-full border-solid border-white bg-[#0052A0] transition-all duration-500 group-hover/submenu-link:border-8 ${
                                        menu.active ? 'border-8' : 'border-[0.3rem]'
                                    }`}
                                ></span>
                                <strong className="text-white">{menu.name}</strong>
                                <FaAngleRight
                                    className={`h-6 w-6 -translate-x-2 translate-y-[0.1rem] fill-white transition-all duration-1000 ${
                                        menu.active ? 'rotate-90' : 'rotate-0'
                                    }`}
                                />
                            </div>

                            {/* Line */}
                            {!menu.prev && (
                                <span
                                    className={`absolute left-0 w-full  ${
                                        menu.active
                                            ? 'top-0 h-full translate-x-12 rounded-tl-[6rem] rounded-bl-[6rem] bg-[#003E79]'
                                            : 'top-full h-[0.2rem] bg-[#005DAF]'
                                    }`}
                                ></span>
                            )}

                            {/* Rounded corners */}
                            {menu.active && (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="30"
                                        viewBox="0 0 40 30"
                                        fill="none"
                                        className="absolute right-0 top-0 -translate-y-full"
                                    >
                                        <path d="M40 30H0.5C28.1 30 38.3333 10 40 0V30Z" fill="#003E79"/>
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="30"
                                        viewBox="0 0 40 30"
                                        fill="none"
                                        className="absolute right-0 top-full"
                                    >
                                        <path d="M40 0H0.5C28.1 0 38.3333 20 40 30V0Z" fill="#003E79"/>
                                    </svg>
                                </>
                            )}
                        </div>
                    ))}

                    {soloLinks && soloLinks?.length && <SoloLink soloLinks={soloLinks} router={router}/>}
                </div>

                <div className={`${styles.styles} grid grid-rows-[1fr_auto]`}>
                    {treatments.map((treatment, i) => (
                        <div
                            key={i}
                            className={`grid content-start justify-center gap-10 px-16 py-32 ${
                                treatment.active ? 'active' : 'hidden'
                            }`}
                        >
                            {treatment.menus.map((menuItem, key) => (
                                <SubMenuLink {...menuItem} isActive={router.pathname === menuItem.url} key={key}/>
                            ))}
                        </div>
                    ))}

                    <MenuCta className="grid-cols-2" centerText/>
                </div>
            </div>
        </div>
    );
};

interface SubMenuLinkProps extends NavMenuType {
    url: string;
    name: ReactNode;
    isActive: boolean;
    metaDescription?: string;
    className?: string;
}

/**
 * Submenu LInk
 *
 * @param {string} url
 * @param {string} name
 * @param {boolean} isActive
 * @param {string | undefined} metaDescription
 * @param {string} className
 * @returns {JSX.Element}
 * @constructor
 */
export const SubMenuLink = ({ url, name, isActive, metaDescription, className }: SubMenuLinkProps): JSX.Element => {
    return (
        <Link
            href={url}
            title={name as string}
            className={twMerge('group/submenu-link mega-menu-link relative translate-y-8 px-10 opacity-0', className)}
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
            <span
                className={`relative z-[2] grid grid-cols-[auto_1fr] gap-x-4 gap-y-2  transition-all duration-500 group-hover/submenu-link:opacity-60 ${
                    isActive && 'opacity-60'
                }`}
            >
                <span
                    className={twMerge(
                        'h-[1.6rem] w-[1.6rem] translate-y-1 rounded-full border-[0.3rem] border-solid border-white bg-[#0052A0] transition-all duration-500 group-hover/submenu-link:border-8',
                        isActive && 'border-8'
                    )}
                ></span>
                <strong className="text-white">{name}</strong>
                <span className="col-start-2 block font-mulishMedium text-[#D1E8FE] line-clamp-1">
                    {metaDescription ||
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since'}
                </span>
            </span>
        </Link>
    );
};

export default EyeTreatments;
