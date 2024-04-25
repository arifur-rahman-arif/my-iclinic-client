import About from '@/page-sections/SpecialistContent/About';
import Awards from '@/page-sections/SpecialistContent/Awards';
import Education from '@/page-sections/SpecialistContent/Education';
import Media from '@/page-sections/SpecialistContent/Media';
import Specialties, { SpecialistData } from '@/page-sections/SpecialistContent/Specialties';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import styles from './Style.module.scss';

interface TabsI {
    label: string;
    slug: string;
    active?: boolean;
}

interface SpecialistContentProps {
    specialist: {
        name: string;
        image: string;
        degree: string;
        title: string;
        yoast_head: string;
        yoast_head_json: string;
        specialties: SpecialistData[];
        education: string;
        awards: string;
        media: {
            content: string;
            fellowships_and_memberships: string[];
        };
        about: string;
    };
    slug: string;
}

/**
 * Specialties content component
 *
 * @param {{name: string, image: string, degree: string, title: string, yoast_head: string, yoast_head_json: string, specialties: SpecialistData[], education: string, awards: string, media: {content: string, fellowships_and_memberships: string[]}, about: string}} specialist
 * @param {string} slug
 * @returns {JSX.Element}
 * @constructor
 */
const SpecialistContent = ({ specialist, slug }: SpecialistContentProps) => {
    const router = useRouter();

    let defaultTabs: TabsI[] = [
        {
            label: 'Specialties',
            slug: 'specialties',
            active: true
        },
        {
            label: 'Education',
            slug: 'education'
        },
        {
            label: 'Research',
            slug: 'awards'
        },
        {
            label: 'Affiliations',
            slug: 'in-the-media'
        },
        {
            label: 'About',
            slug: 'about'
        }
    ];

    if (!specialist.specialties) {
        defaultTabs = defaultTabs.filter((tab) => tab.slug !== 'specialties');
    }
    if (!specialist.education) {
        defaultTabs = defaultTabs.filter((tab) => tab.slug !== 'education');
    }
    if (!specialist.awards) {
        defaultTabs = defaultTabs.filter((tab) => tab.slug !== 'awards');
    }
    if (!specialist.about) {
        defaultTabs = defaultTabs.filter((tab) => tab.slug !== 'about');
    }

    if (!specialist.media.content && !specialist.media.fellowships_and_memberships?.length) {
        defaultTabs = defaultTabs.filter((tab) => tab.slug !== 'in-the-media');
    }

    if (defaultTabs[0]) {
        defaultTabs[0].active = true;
    }

    const [tabs, setTabs] = useState<TabsI[]>(defaultTabs);

    const url = router.pathname.replaceAll('[slug]', slug);

    useEffect(() => {
        // Your conditions to modify the tabs
        let modifiedTabs = [...defaultTabs];

        if (!specialist.specialties) {
            modifiedTabs = modifiedTabs.filter((tab) => tab.slug !== 'specialties');
        }
        if (!specialist.education) {
            modifiedTabs = modifiedTabs.filter((tab) => tab.slug !== 'education');
        }
        if (!specialist.awards) {
            modifiedTabs = modifiedTabs.filter((tab) => tab.slug !== 'awards');
        }
        if (!specialist.media.content && !specialist.media.fellowships_and_memberships?.length) {
            modifiedTabs = modifiedTabs.filter((tab) => tab.slug !== 'in-the-media');
        }
        if (!specialist.about) {
            modifiedTabs = modifiedTabs.filter((tab) => tab.slug !== 'about');
        }

        if (modifiedTabs.length > 0) {
            modifiedTabs[0].active = true;
        }

        setTabs(modifiedTabs);
    }, [router.asPath, specialist]); // Run the effect when route changes or specialist data changes

    /**
     * Handle the click of th tabs
     * @param {number} index
     */
    const handleTabClick = (index: number) => {
        setTabs((prevState) => {
            return prevState.map((state, i) => ({
                ...state,
                active: index === i
            }));
        });

        // Update the URL with the new slug
        window.history.pushState({}, '', `${url}/?slug=${tabs[index].slug}`);
    };

    useEffect(() => {
        const url = new URL(window.location.href);

        const query = url.searchParams.get('slug');

        if (query) {
            const tabIndex = tabs.findIndex((tab) => tab.slug === query);

            if (tabIndex !== -1) {
                setTabs((prevState) =>
                    prevState.map((tab, index) => ({
                        ...tab,
                        active: index === tabIndex
                    }))
                );
            }
        }
    }, []);

    const filterRef = useRef<HTMLDivElement | null>(null);
    // const [lastX, setLastX] = useState<number>(0);
    const [isLeftDisabled, setIsLeftDisabled] = useState<boolean>(true);
    const [isRightDisabled, setIsRightDisabled] = useState<boolean>(false);

    /**
     * Move the menu to horizontal way when user cursor moves over the submenu
     *
     * @param {number} deltaX
     */
    const handleMouseMove = (deltaX: number) => {
        const { current } = filterRef;

        if (!current) return;

        const scrollLeft = current.scrollLeft + deltaX;

        setIsLeftDisabled(scrollLeft <= 0);
        setIsRightDisabled(scrollLeft >= current.scrollWidth - current.clientWidth);

        current.scrollLeft = scrollLeft;
    };

    /**
     * Move the filter container to the right
     */
    const handleMoveRight = () => {
        const { current } = filterRef;

        if (!current) return;

        const deltaX = current.offsetWidth / 3;

        handleMouseMove(deltaX);
    };

    /**
     * Move the filter container to the left
     */
    const handleMoveLeft = () => {
        const { current } = filterRef;

        if (!current) return;

        const deltaX = -current.offsetWidth / 3;

        handleMouseMove(deltaX);
    };

    const activeTab = tabs.find((tab) => tab.active);

    return (
        <div className="grid w-full content-start gap-12 overflow-hidden rounded-radius2 border border-solid border-[#EAECF0] md:gap-24">
            <div className="grid gap-4">
                <div
                    className="grid place-items-center overflow-x-auto bg-brand pb-2 transition-all duration-500 sm:pb-0 md:place-items-start md:overflow-visible"
                    ref={filterRef}
                    id="specialist-page"
                >
                    <div className="flex items-center justify-start gap-4 md:px-8">
                        {tabs?.map((tab, index) => (
                            <button
                                key={index}
                                title={tab.label}
                                onClick={() => handleTabClick(index)}
                                className={`${
                                    tab.active
                                        ? 'underline decoration-white decoration-4 underline-offset-[1rem] opacity-60'
                                        : 'text-[#9B9FA1] hover:opacity-60'
                                }  whitespace-nowrap px-8 py-4 font-mulishBold text-white transition-all duration-500 md:px-10 md:py-6`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-8 justify-self-end sm:hidden">
                    <button
                        className={`group/arrow rounded-full p-2 transition-all duration-500 hover:scale-125 hover:bg-heading2 sm:p-4 ${
                            isLeftDisabled && 'cursor-not-allowed opacity-30 hover:!bg-red-300'
                        }`}
                        onClick={handleMoveLeft}
                        disabled={isLeftDisabled}
                    >
                        <BiLeftArrowAlt
                            className={`h-10 w-10 fill-heading ${!isLeftDisabled && 'group-hover/arrow:fill-white'}`}
                        />
                    </button>

                    <button
                        className={`group/arrow rounded-full p-2 transition-all duration-500 hover:scale-125 hover:bg-heading2 sm:p-4 ${
                            isRightDisabled && 'cursor-not-allowed opacity-30 hover:!bg-red-300'
                        }`}
                        onClick={handleMoveRight}
                        disabled={isRightDisabled}
                    >
                        <BiRightArrowAlt
                            className={`h-10 w-10 fill-heading ${!isRightDisabled && 'group-hover/arrow:fill-white'}`}
                        />
                    </button>
                </div>
            </div>

            {tabs ? (
                <div className={`${styles.styles} px-8 pb-12`}>
                    {activeTab?.slug === 'specialties' ? <Specialties specialties={specialist.specialties} /> : null}
                    {activeTab?.slug === 'education' ? <Education education={specialist.education} /> : null}
                    {activeTab?.slug === 'awards' ? <Awards awards={specialist.awards} /> : null}
                    {activeTab?.slug === 'in-the-media' ? (
                        <Media content={specialist.media.content} list={specialist.media.fellowships_and_memberships} />
                    ) : null}

                    {activeTab?.slug === 'about' ? <About content={specialist.about} /> : null}
                </div>
            ) : null}
        </div>
    );
};

export default SpecialistContent;
