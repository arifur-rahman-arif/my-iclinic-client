import CtaSection3 from '@/page-sections/CtaSection/CtaSection3';
import '@wordpress/block-library/build-style/editor.css';

import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';
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
    return (
        <div className={styles.styles}>
            <div
                className={`wp-content grid content-start gap-12 md:pr-12`}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>

            <div className="md:pr-12">{includeCta && <CtaSection3 />}</div>
        </div>
    );
};

export default BodyContent;
