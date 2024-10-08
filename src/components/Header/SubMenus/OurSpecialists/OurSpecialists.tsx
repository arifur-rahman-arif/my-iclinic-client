// import { consultantCardList } from '@/components/Card';
import { ConsultantCardInterface } from '@/components/Card/ConsultantCard';
import MenuCta from '@/components/Header/MenuCta';
// import { SubMenuLink } from '@/components/Header/SubMenus/EyeTreatments/EyeTreatments';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { NextRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';
import styles from '../EyeTreatments/Style.module.scss';
import useSWR from 'swr';
import ComponentLoader from '@/components/ComponentLoader';

interface SubmenuType {
    active?: boolean;
    name: string;
    prev?: boolean;
}

interface InnerMenuList {
    active?: boolean;
    menus?: Array<{
        name: string;
        url: string;
        slug: string;
        metaDescription: string;
    }>;
}

interface OurSpecialistsProps {
    router: NextRouter;
}

/**
 * Our specialists submenu
 *
 * @param {NavMenuType[]} submenu
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
const OurSpecialists = ({ router }: OurSpecialistsProps): JSX.Element => {
    const [submenus, setSubmenus] = useState<SubmenuType[]>([
        {
            active: true,
            name: 'Our specialists'
        }
    ]);

    const [innerSubmenus, setInnerSubmenus] = useState<InnerMenuList[]>([
        {
            active: true
        },
        {
            menus: [
                {
                    name: 'Our eye diagnostics & technology',
                    url: '/our-specialists/our-eye-diagnostics-technology',
                    slug: 'our-specialists/our-eye-diagnostics-technology',
                    metaDescription: 'My-iClinic diagnostics center for vision testing & optometry practice.'
                }
            ]
        }
    ]);

    const extraLinks = [
        {
            name: 'Meet the team',
            url: '/our-specialists'
        },
        {
            name: 'Our eye diagnostics & technology',
            url: '/our-specialists/our-eye-diagnostics-technology'
        }
    ];

    /**
     * Handles a click event on an item, updating the state of both inner submenus and main submenus.
     *
     * @param {number} index - The index of the clicked item.
     */
    const handleClick = (index: number) => {
        setInnerSubmenus((prevState) => {
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

    /**
     * Sends data to a specified URL using a POST request.
     *
     * @param {string} url - The URL to send the data to.
     * @param {object} payload - The payload object containing the data to be sent.
     * @param {any} payload.arg - The argument to be included in the payload.
     *
     * @returns {Promise<any>} - A promise that resolves to the JSON response from the server.
     */
    const getData = async (url: string): Promise<any> => {
        try {
            const res = await fetch(url);
            const jsonData = await res.json();

            // Fetching image URLs for each post
            const postsWithImages = await Promise.all(
                jsonData.map(async (post: any) => {
                    const imageUrlRes = await fetch(`${process.env.NEXT_PUBLIC_REST_URL}/media/${post.featured_media}`);
                    const imageUrlJson = await imageUrlRes.json();

                    return { ...post, imageUrl: imageUrlJson.guid.rendered }; // Adding imageUrl to the post object
                })
            );

            return postsWithImages;
        } catch (err) {
            throw err;
        }
    };

    // SWR mutation hook to handle form data submission
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_REST_URL}/specialist?_fields=slug,title,featured_media,acf`,
        getData
    );

    return (
        <div className="absolute left-0 top-full z-10 grid max-h-0 min-w-[var(--container-width)] -translate-x-[calc(60%_-_0.5rem)] overflow-y-auto overflow-x-hidden rounded-bl-radius2 rounded-br-radius2 bg-[#003E79] transition-all duration-1000 group-hover/menu-item:max-h-[calc(100vh_-_17rem)]">
            <div className="grid w-full grid-cols-[40rem_1fr] content-start">
                <div className="grid min-h-[64rem] content-start bg-[#003363] py-12">
                    {submenus.map((menu, key) => (
                        <div
                            key={key}
                            className={`submenu-link group/submenu-link relative cursor-pointer px-10 py-12`}
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
                                            ? 'top-0 h-full translate-x-12 rounded-bl-[6rem] rounded-tl-[6rem] bg-[#003E79]'
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
                                        <path d="M40 30H0.5C28.1 30 38.3333 10 40 0V30Z" fill="#003E79" />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="30"
                                        viewBox="0 0 40 30"
                                        fill="none"
                                        className="absolute right-0 top-full"
                                    >
                                        <path d="M40 0H0.5C28.1 0 38.3333 20 40 30V0Z" fill="#003E79" />
                                    </svg>
                                </>
                            )}
                        </div>
                    ))}

                    <SoloLink soloLinks={extraLinks} router={router} />
                </div>

                <div className={`${styles.styles} grid grid-rows-[1fr_auto]`}>
                    {isLoading || error ? (
                        <ComponentLoader />
                    ) : (
                        <>
                            {innerSubmenus.map((treatment, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={`grid grid-cols-2 content-start justify-center gap-x-24 gap-y-16 p-24 ${
                                            treatment.active ? 'active' : 'hidden'
                                        }`}
                                    >
                                        {data?.length
                                            ? data.map((consultant: any, key: number) => (
                                                  <ConsultantItem
                                                      key={key}
                                                      image={consultant.imageUrl.replace('http', 'https') || ''}
                                                      name={consultant.title.rendered || ''}
                                                      degree={consultant.acf?.specialist_data?.degree || ''}
                                                      title={consultant.acf?.specialist_data?.title || ''}
                                                      url={`/our-specialists/${consultant.slug}`}
                                                      className="mega-menu-link"
                                                      isActive={
                                                          `/our-specialists/${router.query?.slug}` ===
                                                          `/our-specialists/${consultant.slug}`
                                                      }
                                                  />
                                              ))
                                            : null}
                                    </div>
                                );
                            })}
                        </>
                    )}

                    <MenuCta className="grid-cols-2" centerText />
                </div>
            </div>
        </div>
    );
};

interface ConsultantItemProps extends ConsultantCardInterface {
    setOpenMobileMenu?: Dispatch<SetStateAction<boolean>> | undefined;
    isActive: boolean;
    className?: string;
    imgWidth?: number;
    imgHeight?: number;
    imgClassName?: string;
}

/**
 * ConsultantItem is a React component representing a consultant's profile card with image, name, degree, and title.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.image - The URL of the consultant's image.
 * @param {string} props.name - The name of the consultant.
 * @param {string} props.degree - The degree or qualification of the consultant.
 * @param {string} props.title - The title or role of the consultant.
 * @param {string} props.url - The URL to navigate to when the consultant's card is clicked.
 * @param {function} props.setOpenMobileMenu - A function to control the mobile menu state.
 * @param {boolean} props.isActive - A flag indicating whether the consultant is currently active or selected.
 * @param {string} props.className - Additional CSS classes for styling the consultant card.
 * @param {number} props.imgWidth - The width of the consultant's image (optional, default is 112).
 * @param {number} props.imgHeight - The height of the consultant's image (optional, default is 112).
 * @param {string} props.imgClassName - Additional CSS classes for styling the consultant's image.
 * @returns {JSX.Element} A React JSX element representing the consultant's profile card.
 */
export const ConsultantItem = ({
    image,
    name,
    degree,
    title,
    url,
    setOpenMobileMenu,
    isActive,
    className,
    imgWidth,
    imgHeight,
    imgClassName,
    imageClass
}: ConsultantItemProps): JSX.Element => {
    return (
        <Link
            href={url || '#'}
            title={name}
            className={twMerge('translate-y-8 opacity-0', className)}
            onClick={() => {
                const parentMenus: NodeListOf<HTMLElement> = document.querySelectorAll('.parent-menu');

                parentMenus.forEach((element: HTMLElement | null) => {
                    if (element) {
                        element.style.pointerEvents = 'none';

                        setTimeout(() => {
                            element.style.pointerEvents = 'auto';
                        }, 3000);
                    }
                });

                setOpenMobileMenu && setOpenMobileMenu(false);
            }}
        >
            <div
                className={`grid grid-cols-[auto_1fr] items-center gap-4 transition-all duration-500 hover:opacity-60 ${
                    isActive && 'opacity-60'
                }`}
            >
                <Image
                    src={image}
                    alt={name}
                    width={imgWidth || 112}
                    height={imgHeight || 112}
                    quality={100}
                    className={twMerge(
                        'h-[11.2rem] w-[11.2rem] rounded-full object-cover',
                        `${imgClassName} ${imageClass}`
                    )}
                />

                <div className="grid content-start gap-4">
                    <span className="font-mulishBold text-white">{name}</span>
                    <span className="-mt-3 font-mulishBold text-[1.4rem] uppercase leading-8 text-[#00BFFF]">
                        {title}
                    </span>
                    <span className="line-clamp-1 text-white xl:line-clamp-2">{degree}</span>
                </div>
            </div>
        </Link>
    );
};

export default OurSpecialists;

export interface SoloLinkProps {
    soloLinks: Array<{
        name: string;
        url: string;
    }>;
    router: NextRouter;
    linkClass?: string;
}

/**
 * Solo links inside a mega menu without having any submenu
 *
 * @param {Array<{name: string, url: string}>} soloLinks
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
export const SoloLink = ({ soloLinks, router, linkClass }: SoloLinkProps): JSX.Element => {
    return (
        <div className="grid px-10 pt-8">
            {soloLinks.map((item, key) => (
                <Link
                    key={key}
                    href={item.url}
                    className={twMerge('submenu-link group/submenu-link relative cursor-pointer py-4', linkClass)}
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
                    <div
                        className={`relative z-[2] flex items-center justify-start gap-4  transition-all duration-500 ${
                            router.pathname === item.url && 'opacity-60'
                        }`}
                    >
                        <span
                            className={`h-[1.6rem] w-[1.6rem] rounded-full border-solid border-white bg-[#0052A0] transition-all duration-500 group-hover/submenu-link:border-8 ${
                                router.pathname === item.url ? 'border-8' : 'border-[0.3rem]'
                            }`}
                        ></span>
                        <span className="font-mulishBold text-white">{item.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};
