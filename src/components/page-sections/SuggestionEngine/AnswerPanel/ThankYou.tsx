import { AiOutlineCheck } from 'react-icons/ai';
import styles from './styles/PanelReveal.module.scss';

/**
 * Thank you component
 * @returns {JSX.Element}
 * @constructor
 */
const ThankYou = (): JSX.Element => {
    return (
        <div
            className={`${styles.styles} grid h-full w-full place-items-center px-12 md:px-24 xl:px-40 py-12 md:py-24`}>
            <div className="grid h-full place-items-start content-center gap-12 md:gap-24">
                <AiOutlineCheck className="fill-[#0186B0] w-[4.5rem] h-[3.1rem]" />
            </div>
        </div>
    );
};

export default ThankYou;
