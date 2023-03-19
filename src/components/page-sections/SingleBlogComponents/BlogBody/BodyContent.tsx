import CtaSection3 from '@/page-sections/CtaSection/CtaSection3';
import HTMLReactParser from 'html-react-parser';
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
        <div className={`${styles.styles} grid content-start gap-6 md:pr-12`}>
            {content && HTMLReactParser(content)}

            {includeCta && <CtaSection3 />}
        </div>
    );
};

export default BodyContent;
