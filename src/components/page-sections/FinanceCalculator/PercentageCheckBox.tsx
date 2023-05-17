import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import styles from './styles/PercentageCheckBox.module.scss';

interface PercentageCheckBoxProps {
    upfrontPercentage: number;
    setUpfrontPercentage: Dispatch<SetStateAction<number>>;
    minUpfront: number;
    maxUpfront: number;
    name: string;
}

/**
 * Percentage range checkbox component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const PercentageCheckBox = ({
    upfrontPercentage,
    setUpfrontPercentage,
    minUpfront,
    maxUpfront,
    name
}: PercentageCheckBoxProps) => {
    /**
     * Calculates an array of evenly distributed percentage values between a minimum and maximum percentage.
     * @param min - The minimum percentage value.
     * @param max - The maximum percentage value.
     * @returns An array of 6 percentage values evenly distributed between the minimum and maximum.
     */
    const getPercentageRange = (min: number, max: number): number[] => {
        const range = max - min;
        const step = range / 5;
        const percentages = [];

        for (let i = 0; i <= 5; i++) {
            const percentage = min + step * i;
            percentages.push(percentage);
        }

        return percentages;
    };

    const slug = name
        .trim() // Remove leading and trailing space
        .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Convert spaces to dashes
        .toLowerCase(); // Convert to lowercase

    return (
        <div>
            <p className="mt-6 font-mulishBold text-[2rem] leading-[2.8rem] text-[#35444B]">
                How much would you like to pay up-front
            </p>

            <div className="grid grid-cols-2 gap-10 xs:grid-cols-3 xs:gap-12 md:gap-x-24 md:gap-y-12">
                {getPercentageRange(minUpfront, maxUpfront)?.map((percentage, index) => (
                    <div key={index} className={styles.styles}>
                        <label htmlFor={`${slug}-${index}`} className="grid grid-flow-col place-items-center gap-4">
                            <input
                                aria-label={slug}
                                type="radio"
                                id={`${slug}-${index}`}
                                value={percentage}
                                name={`${slug}-percentage`}
                                checked={percentage === upfrontPercentage}
                                onChange={(e) => {
                                    setUpfrontPercentage(Number(e.target.value));
                                }}
                            />
                            <span className="checkbox">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 14 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.3334 1L5.00002 8.33333L1.66669 5"
                                        stroke="#FAF9F6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span className="font-mulishBold text-[2rem] leading-[2.8rem]">{percentage}%</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PercentageCheckBox;
