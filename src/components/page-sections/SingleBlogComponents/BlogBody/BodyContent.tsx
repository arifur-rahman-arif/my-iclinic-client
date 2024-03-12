import CtaSection3 from '@/page-sections/CtaSection/CtaSection3';
import '@wordpress/block-library/build-style/editor.css';

import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';
import { useEffect, useRef } from 'react';
import styles from './styles/BlogBody.module.scss';

interface BodyContentInterface {
    content: string;
    includeCta?: boolean;
}

/**
 * Body content of a blog post
 *
 * @param {string} content
 * @param {boolean | undefined} includeCta
 * @returns {JSX.Element}
 * @constructor
 */
const BodyContent = ({ content, includeCta }: BodyContentInterface): JSX.Element => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!contentRef.current) return;

        // Select the table element
        const tables = contentRef.current.querySelectorAll('table');

        tables.forEach((table) => {
            /**
             * Set a min width for the table column
             */
            const setMinimumColumnWidth = () => {
                // Get the number of columns in the table
                const numColumns = table.querySelectorAll('th').length;
                // Calculate the width for each column
                const columnWidthPercentage = 100 / numColumns;

                // Calculate the minimum width in pixels (30rem)
                const minWidthPixels = 30 * parseFloat(getComputedStyle(document.documentElement).fontSize);

                // Calculate the final width for each column, ensuring it respects the minimum width
                const finalColumnWidthPercentage = Math.max(
                    columnWidthPercentage,
                    (minWidthPixels / table.offsetWidth) * 100
                );

                // Set the width for each th element
                const thElements = table.querySelectorAll('th');
                thElements.forEach((th) => {
                    th.style.maxWidth = `${finalColumnWidthPercentage}%`;
                    th.style.minWidth = '13rem';
                });
            };

            if (table) {
                // Create a new div element for wrapping the table
                const wrapper = document.createElement('div');
                wrapper.classList.add('table-wrapper');

                // Wrap the table with the created div
                table.parentNode?.insertBefore(wrapper, table);
                wrapper.appendChild(table);

                setMinimumColumnWidth();
            }
        });
    }, []);

    return (
        <div className={styles.styles}>
            <div
                ref={contentRef}
                className={`wp-content grid content-start gap-12 md:pr-12`}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>

            <div className="md:pr-12">{includeCta && <CtaSection3 />}</div>
        </div>
    );
};

export default BodyContent;
