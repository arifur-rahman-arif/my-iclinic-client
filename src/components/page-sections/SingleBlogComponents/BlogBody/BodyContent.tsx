import CtaSection3 from '@/page-sections/CtaSection/CtaSection3';
import HTMLReactParser from 'html-react-parser';
import styles from './styles/BlogBody.module.scss';

import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';
import '@wordpress/block-library/build-style/editor.css';

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
    return (
        <div>
            <div className={`${styles.styles} grid content-start gap-12 md:pr-12`}>
                {content && HTMLReactParser(content)}
            </div>

            <div className="md:pr-12">{includeCta && <CtaSection3 />}</div>
        </div>
    );
};

export default BodyContent;
