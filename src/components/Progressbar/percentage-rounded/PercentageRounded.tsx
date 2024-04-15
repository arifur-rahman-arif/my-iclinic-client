import { useOnScreen } from '@/hooks';
import { useEffect, useRef, useState } from 'react';
import styles from './styles/PercentageRounded.module.scss';

import CircularProgress from '@mui/material/CircularProgress';

interface PercentageRoundedInterface {
    percentage: number;
}

/**
 * Percentage rounded component
 *
 * @returns {*}  {JSX.Element}
 */
const PercentageRounded = ({ percentage = 0 }: PercentageRoundedInterface): JSX.Element => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: divRef });
    const [percentageValue, setPercentageValue] = useState<number>(5);

    useEffect(() => {
        if (!onEnter) return;

        const timer = setInterval(() => {
            setPercentageValue((prevProgress) => {
                if (prevProgress >= percentage) {
                    clearInterval(timer);
                    return percentage;
                }

                return prevProgress + 5;
            });
        }, 150);
    }, [onEnter]);

    return (
        <div ref={divRef} className={styles.styles}>
            <div className="relative flex">
                <CircularProgress variant="determinate" value={percentageValue} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mulishExtraBold text-[1.6rem] leading-[1.6rem] text-heading opacity-90">
                        {percentageValue}%
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PercentageRounded;
