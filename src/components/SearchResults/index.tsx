import { algoliaIndexName, algoliaSearchClient } from '@/components/Header/Search';
import { H3Variant1 } from '@/components/Headings';
import NoResult from '@/components/SearchResults/NoResult';
import { NextRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Configure, Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';
import ResultComponent from './ResultComponent';

interface SearchResultsProps {
    router: NextRouter;
}

const searchIndex = algoliaSearchClient.initIndex(algoliaIndexName);

/**
 * Search result page
 *
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
const SearchResults = ({ router }: SearchResultsProps): JSX.Element => {
    const query = router.query?.query;
    const [showNoResultWithinQuery, setShowNoResultWithinQuery] = useState(false);

    useEffect(() => {
        searchIndex.search(query?.toString() || '').then((result) => {
            if (result.hits.length > 0) {
                setShowNoResultWithinQuery(false);
            } else {
                setShowNoResultWithinQuery(true);
            }
        });
    }, [query]);

    return (
        <>
            <InstantSearch searchClient={algoliaSearchClient} indexName={algoliaIndexName} searchState={router.query}>
                <Configure hitsPerPage={8} />

                {query ? (
                    <H3Variant1 className="mb-16 font-latoBold md:mb-32">
                        Search result for:{' '}
                        <span className="font-latoBold text-[2.4rem] normal-case italic leading-[3.2rem] md:text-[3.6rem] md:leading-[4rem]">
                            {query || ''}
                        </span>
                    </H3Variant1>
                ) : null}

                <div className="hidden">
                    <SearchBox className="searchbox w-full border-none outline-none" />
                </div>

                {query ? (
                    <>
                        {showNoResultWithinQuery ? (
                            <NoResult router={router} />
                        ) : (
                            <div className="mt-12">
                                <Hits hitComponent={(props) => <ResultComponent {...props} />} />
                            </div>
                        )}
                    </>
                ) : (
                    <NoResult router={router} />
                )}
            </InstantSearch>
        </>
    );
};

export default SearchResults;
