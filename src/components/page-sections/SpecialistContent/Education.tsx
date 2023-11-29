import styles from '@/page-sections/SuitabilityCheck/AnswerPanel/styles/PanelReveal.module.scss';
import HTMLReactParser from 'html-react-parser';

interface EducationProps {
    education: string;
}

/**
 * Education section
 *
 * @param {string} education
 * @returns {JSX.Element}
 * @constructor
 */
const Education = ({ education }: EducationProps): JSX.Element => {
    return <div className={`${styles.styles} grid md:px-12`}>{HTMLReactParser(education || '')}</div>;
};

export default Education;
