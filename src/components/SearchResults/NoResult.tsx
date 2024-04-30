import { algoliaIndexName, algoliaSearchClient } from '@/components/Header/Search';
import styles from '@/components/Header/Search/Style.module.scss';
import SearchNotFound from '@/section-images/searchnotfound.webp';
import Image from 'next/image';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { Dispatch, FormEvent, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import { AiOutlineClear } from 'react-icons/ai';

interface NoResultProps {
    router: NextRouter;
}

const searchIndex = algoliaSearchClient.initIndex(algoliaIndexName);

/**
 * No result component
 *
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
const NoResult = ({ router }: NoResultProps): JSX.Element => {
    const query = router.query?.query;

    const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState<any>([]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current?.focus();
        }
    }, []);

    useEffect(() => {
        if (!searchText) return;

        searchIndex.search(searchText).then((result) => {
            setSearchResult(result.hits);
        });
    }, [searchText]);

    /**
     * Handle sumbmit function
     *
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        router.push(`/search?query=${searchText}`);
        setSearchText('');
    };

    const fixedSearchOptions = [
        'Cataract',
        'YAG',
        'ReLEx',
        'Myopia',
        'Presbyond',
        'LASIK',
        'LASEK',
        'Glaucoma',
        'Astigmatism',
        'Dry eyes'
    ];

    return (
        <div className="relative my-24 mx-auto flex flex-col items-center px-4 text-center lg:my-12">
            {query ? (
                <div className="grid place-items-center gap-12">
                    {' '}
                    <Image src={SearchNotFound} alt="Search not found" width={274} height={76} quality={100} priority />
                    <h2 className="mt-20 font-latoExtraBold text-6xl">No Results</h2>
                    <p>Sorry we could not find what you are looking for. Please try another phrase..</p>
                </div>
            ) : null}

            <div className="mt-12 w-full max-w-[90rem]">
                <div className={`${styles.styles} relative`}>
                    <form
                        onSubmit={handleFormSubmit}
                        className="grid min-h-[6rem] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-primary bg-white px-10 py-8 shadow-md xl:min-h-[9.2rem]"
                    >
                        <Image src="/images/icons/icon-search-outline.svg" alt="" width={24} height={24} />

                        <input
                            ref={inputRef}
                            type="text"
                            className="w-full border-none outline-none"
                            placeholder="What are you looking for?"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />

                        <div className="flex items-center justify-center gap-8">
                            {searchText ? (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearchText('');
                                        setSearchResult([]);
                                    }}
                                >
                                    <AiOutlineClear className="h-9 w-9 fill-heading" />
                                </button>
                            ) : null}
                        </div>
                    </form>

                    {searchResult.length ? (
                        <div className="absolute top-full left-0 z-10 mt-3 flex max-h-[50vh] w-full flex-col space-y-10 overflow-y-auto rounded-primary bg-white p-10 shadow-xl">
                            {searchResult.map((result: any, index: number) => (
                                <Hit key={index} hit={result} setSearchText={setSearchText} />
                            ))}
                        </div>
                    ) : null}
                </div>

                <div className="mt-12 space-y-12">
                    <p className="font-latoBold text-[2.15rem]">
                        Or you may want to try one of the popular search phrases on our website{' '}
                    </p>
                    <div className="mx-auto flex max-w-[62.5rem] flex-wrap items-center justify-center gap-4">
                        {fixedSearchOptions.map((item, index: number) => (
                            <Link
                                key={index}
                                href={`/search?query=${item}`}
                                className="rounded-primary bg-[#CCD8DD] py-[1.2rem] px-10 text-black"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface HitProps {
    hit: any;
    setSearchText: Dispatch<SetStateAction<string>>;
}

/**
 * Hits of search
 *
 * @param {any} hit
 * @param {Dispatch<SetStateAction<boolean>>} setOpenSearch
 * @returns {JSX.Element}
 * @constructor
 */
const Hit = ({ hit, setSearchText }: HitProps): JSX.Element => {
    if (hit) {
        return (
            <Link
                href={`/search?query=${hit.title}`}
                className="grid grid-cols-[1fr_auto] items-start gap-12"
                onClick={() => {
                    setSearchText(hit.title);
                }}
            >
                <div className="flex items-start gap-4">
                    <Image src="/images/icons/icon-search-outline.svg" alt="" width={24} height={24} />
                    {/* <span>{item.title}</span> */}
                    <span className="line-clamp-1">{hit.title}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
                    <g stroke="#51585B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                        <path d="M17 17 7 7M7 17V7h10" />
                    </g>
                </svg>
            </Link>
        );
    } else {
        return <></>;
    }
};

export default NoResult;
