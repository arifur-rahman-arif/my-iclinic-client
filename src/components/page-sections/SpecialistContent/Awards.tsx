import styles from '@/page-sections/SuitabilityCheck/AnswerPanel/styles/PanelReveal.module.scss';
import HTMLReactParser from 'html-react-parser';

interface AwardsProps {
    awards: string;
}

/**
 * Awards section
 *
 * @param {string} awards
 * @returns {JSX.Element}
 * @constructor
 */
const Awards = ({ awards }: AwardsProps): JSX.Element => {
    return <div className={`${styles.styles} md:px-12`}>{HTMLReactParser(awards || '')}</div>;
};

export default Awards;
