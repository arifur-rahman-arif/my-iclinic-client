import { useOnScreen } from '@/hooks';
import { ReactNode, useRef } from 'react';
import styles from './styles/TextSlideUp.module.scss';

interface TextSlideUpInterface {
    children: ReactNode;
    className?: string;
}

/**
 * Animation wrapper for Slide up animations
 *
 * @param {TextSlideUpInterface} { children }
 * @returns {*}  {JSX.Element}
 */
const TextSlideUp = ({ children, className }: TextSlideUpInterface): JSX.Element => {
    const animationElement = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: animationElement });

    return (
        <div className={`${styles.style} ${onEnter ? styles.active : ''} ${className || ''}`} ref={animationElement}>
            {children}
        </div>
    );
};

export default TextSlideUp;
