import CtaForm from './CtaForm';
import styles from './styles/PanelReveal.module.scss';

interface CtaScreenProps {
    description?: string;
    node: number;
}

/**
 * CtaScreen component renders a Call-to-Action screen with an option to chat with an expert.
 *
 * @param {Object} props - The component props.
 * @param {string} props.description - The optional description text to display on the screen.
 *
 * @returns {JSX.Element} - The rendered CtaScreen component.
 */
const CtaScreen = ({ description, node }: CtaScreenProps) => {
    return (
        <div
            className={`${styles.styles} grid h-full w-full place-items-center px-8 py-12 sm:px-12 md:px-24 md:py-24 xl:px-40`}
        >
            <div className="grid h-full place-items-start content-center gap-12 md:gap-24">
                <span className="max-w-[40rem] font-latoBold text-white md:text-[3.6rem] md:leading-[4rem]">
                    Chat to an expert now to see how we can help
                </span>

                {description && <p className="text-white">{description}</p>}

                <CtaForm node={node} />
            </div>
        </div>
    );
};

export default CtaScreen;
