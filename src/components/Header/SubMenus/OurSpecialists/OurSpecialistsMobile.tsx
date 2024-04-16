// import { consultantCardList } from '@/components/Card';
import SubMenuLink from '@/components/Header/SubMenus/SubMenuLink';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { ConsultantItem } from './OurSpecialists';
import useSWR from 'swr';
import ComponentLoader from '@/components/ComponentLoader';

interface SubmenuType {
    active?: boolean;
    name: string;
    menus?: Array<{
        name: string;
        url: string;
        slug: string;
        metaDescription: string;
    }>;
}

interface OurSpecialistsProps {
    router: NextRouter;
    setOpenMobileMenu?: Dispatch<SetStateAction<boolean>> | undefined;
}

/**
 * Our specialists submenu
 *
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
const OurSpecialistsMobile = ({ router, setOpenMobileMenu }: OurSpecialistsProps): JSX.Element => {
    const [submenus, setSubmenus] = useState<SubmenuType[]>([
        {
            active: true,
            name: 'Our specialists'
        }
    ]);

    // {
    //     name: 'Our eye diagnostics & technology',
    //         url: '/our-specialists/our-eye-diagnostics-technology'
    // }

    /**
     * Handles a click event on an item in a list of submenus, toggling the active state of the clicked item
     * and deactivating all other items in the list.
     *
     * @param {number} index - The index of the clicked submenu item.
     */
    const handleClick = (index: number) => {
        setSubmenus((prevState) => {
            return prevState.map((treatment, i) => {
                if (index === i) {
                    // Toggle the active property for the clicked item
                    return {
                        ...treatment,
                        active: !treatment.active
                    };
                } else {
                    // Deactivate other items in the list
                    return {
                        ...treatment,
                        active: false
                    };
                }
            });
        });
    };

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
                            menu.active && 'max-h-[120rem]'
                        }`}
                    >
                        {isLoading || error ? (
                            <ComponentLoader />
                        ) : (
                            <>
                                {key === 0 ? (
                                    <div className="mt-12 grid gap-8">
                                        {data?.length
                                            ? data.map((consultant: any, key: number) => (
                                                  <ConsultantItem
                                                      key={key}
                                                      image={consultant.imageUrl || ''}
                                                      name={consultant.title.rendered || ''}
                                                      degree={consultant.acf?.specialist_data?.degree || ''}
                                                      title={consultant.acf?.specialist_data?.title || ''}
                                                      url={`/our-specialists/${consultant.slug}`}
                                                      setOpenMobileMenu={setOpenMobileMenu}
                                                      isActive={
                                                          `/our-specialists/${router.query?.slug}` === consultant.url
                                                      }
                                                      className="translate-y-0 opacity-100"
                                                      imgWidth={70}
                                                      imgHeight={70}
                                                      imgClassName="h-28 w-28"
                                                  />
                                              ))
                                            : null}
                                    </div>
                                ) : (
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
                                )}
                            </>
                        )}
                    </div>
                </div>
            ))}

            {extraLinks.map((item, key) => (
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

export default OurSpecialistsMobile;
