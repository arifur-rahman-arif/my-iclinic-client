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
        <div>
            <div className={`${styles.styles} md:pr-12`}>{content && HTMLReactParser(content)}</div>

            <div className="md:pr-12">{includeCta && <CtaSection3 />}</div>
        </div>
    );
};

export default BodyContent;
