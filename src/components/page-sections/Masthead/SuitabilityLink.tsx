import { Button2 } from '@/components/Buttons';
import { twMerge } from 'tailwind-merge';

interface SuitabilityLinkProps {
    text?: string;
    textClassName?: string;
}

/**
 * SuitabilityLink component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const SuitabilityLink = ({ text, textClassName }: SuitabilityLinkProps): JSX.Element => {
    return (
        <>
            <p
                className={twMerge(
                    'max-w-[34.4rem] self-end font-latoBold text-[2rem] normal-case leading-[2.8rem] text-heading',
                    textClassName
                )}
            >
                {text || 'Would you like to know if you are suitable for a laser eye surgery?'}
            </p>

            <Button2
                type="anchor"
                text="Suitability check"
                link="/suitability-check"
                className="group/suitability sitemap-link !grid place-items-center self-end justify-self-start normal-case !text-white hover:!text-heading"
                iconPosition="left"
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 11L12 14L22 4"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-all duration-500 group-hover/suitability:stroke-heading"
                        />
                        <path
                            d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-all duration-500 group-hover/suitability:stroke-heading"
                        />
                    </svg>
                }
            />
        </>
    );
};

export default SuitabilityLink;
