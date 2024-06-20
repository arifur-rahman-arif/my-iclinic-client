import { useOnclickOutside } from '@/hooks';
import algoliasearch from 'algoliasearch';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as process from 'process';
import { Dispatch, FormEvent, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import styles from './Style.module.scss';

export const algoliaIndexName = process.env.NEXT_PUBLIC_ALGOLIA_DB || 'My-iClinic';
export const algoliaSearchClient = algoliasearch('LFKQJW9O2S', '4d65dd07f4c9f08c94b96c8d8a877415');
const searchIndex = algoliaSearchClient.initIndex(algoliaIndexName);

interface SearchProps {
    openSearch: boolean;
    setOpenSearch: Dispatch<SetStateAction<boolean>>;
}

/**
 * Search component
 *
 * @param {boolean} openSearch
 * @param {Dispatch<SetStateAction<boolean>>} setOpenSearch
 * @returns {JSX.Element}
 * @constructor
 */
const Search = ({ openSearch, setOpenSearch }: SearchProps): JSX.Element => {
    const outsideRef = useOnclickOutside(() => setOpenSearch(false));
    const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState<any>([]);
    const router = useRouter();

    useEffect(() => {
        if (inputRef.current && openSearch) {
            inputRef.current?.focus();
        }
    }, [openSearch]);

    useEffect(() => {
        if (!searchText) return;

        searchIndex.search(searchText).then((result) => {
            setSearchResult(result.hits);
        });
    }, [searchText]);

    /**
     * Handle form submit
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setOpenSearch(false);
        router.push(`/search?query=${encodeURIComponent(searchText)}`);
        setSearchText('');
    };

    return (
        <div
            className={`${styles.styles} ${twMerge(
                openSearch ? 'opacity-1 pointer-events-auto z-[100]' : 'pointer-events-none z-[98] opacity-0',
                'fixed left-1/2 top-4 w-full !max-w-[90.8rem] -translate-x-1/2 transition-all duration-500'
            )}`}
            ref={outsideRef}
        >
            <form
                onSubmit={handleFormSubmit}
                className="grid min-h-[6rem] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-primary bg-white px-10 py-8 shadow-xl lg:w-auto xl:min-h-[9.2rem]"
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
                    <button type="button" onClick={() => setOpenSearch(false)}>
                        <RxCross1 className="h-8 w-8 fill-heading" />
                    </button>
                </div>
            </form>

            {searchResult.length ? (
                <div className="mt-3 flex max-h-[70vh] w-full flex-col space-y-10 overflow-y-auto rounded-primary bg-white p-10 shadow-xl lg:w-[90.5rem]">
                    {searchResult.map((result: any, index: number) => (
                        <Hit key={index} hit={result} setOpenSearch={setOpenSearch} setSearchText={setSearchText} />
                    ))}
                </div>
            ) : null}
        </div>
    );
};

interface HitProps {
    hit: any;
    setOpenSearch: Dispatch<SetStateAction<boolean>>;
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
const Hit = ({ hit, setOpenSearch, setSearchText }: HitProps): JSX.Element => {
    if (hit) {
        return (
            <Link
                href={`/search?query=${encodeURIComponent(hit.title)}`}
                className="grid grid-cols-[1fr_auto] items-start gap-12"
                onClick={() => {
                    setOpenSearch(false);
                    setSearchText(hit.title);
                }}
            >
                <div className="flex items-start gap-4">
                    <Image src="/images/icons/icon-search-outline.svg" alt="" width={24} height={24} />
                    <span className="line-clamp-1" dangerouslySetInnerHTML={{ __html: hit?.title || '' }}></span>
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

export default Search;
