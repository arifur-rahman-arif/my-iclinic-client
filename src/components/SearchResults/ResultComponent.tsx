import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import { Highlight } from 'react-instantsearch-dom';
import styles from './Style.module.scss';

interface ResultComponentProps {
    hit: any;
}

/**
 * Result component
 *
 * @param {any} hit
 * @returns {JSX.Element}
 * @constructor
 */
const ResultComponent = ({ hit }: ResultComponentProps) => {
    const highlightedResults = hit._highlightResult;

    const url = hit?.section;

    if (highlightedResults) {
        return (
            <div
                className={`mt-12 grid grid-cols-[auto_1fr_auto] content-start gap-4 gap-y-12 rounded-primary p-8 shadow-lg md:p-12 ${styles.styles}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" className="mt-2">
                    <g stroke="#9B9FA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2V3ZM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V3Z" />
                    </g>
                </svg>
                <div className="grid gap-6">
                    <div className="search-result-title line-clamp-1">
                        <Highlight attribute="title" hit={hit} />
                    </div>
                    <div className="line-clamp-4">
                        <Highlight attribute="content" hit={hit} />
                    </div>
                </div>
                <div className="col-span-full grid items-start md:col-span-1">
                    <Button2
                        type="anchor"
                        link={url}
                        text="Read more"
                        className="ml-8 !py-3 !px-5 text-[1.4rem] sm:justify-self-end"
                    />
                </div>
            </div>
        );
    } else {
        return <ComponentLoader />;
    }
};

export default ResultComponent;
