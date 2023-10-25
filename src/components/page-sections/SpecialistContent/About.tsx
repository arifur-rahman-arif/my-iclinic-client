import HTMLReactParser from 'html-react-parser';
import animation from '../SuitabilityCheck/AnswerPanel/styles/PanelReveal.module.scss';
import styles from './About.module.scss';

interface AboutProps {
    content: string;
}

/**
 * About component
 *
 * @param {string} content
 * @returns {JSX.Element}
 * @constructor
 */
const About = ({ content }: AboutProps): JSX.Element => {
    console.log(content);
    return <div className={`${animation.styles} md:px-12 ${styles.styles}`}>{HTMLReactParser(content || '')}</div>;
};

export default About;
