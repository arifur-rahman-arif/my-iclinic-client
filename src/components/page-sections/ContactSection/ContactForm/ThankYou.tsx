import Button from '@/components/Buttons/Button';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

const LottieComponent = dynamic(() => import('./LottieComponent'));

/**
 * Form submission confirmation component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ThankYou = (): JSX.Element => {
    const [componentRendered, setComponentRendered] = useState<boolean>(false);

    useEffect(() => {
        setComponentRendered(true);
    }, []);

    return (
        <div className="grid place-items-center justify-self-center">
            {componentRendered && <LottieComponent />}

            <span className="font-latoBold text-[3rem] leading-[3.2rem] md:text-[3.6rem] md:leading-[3.2rem]">
                Thank you
            </span>

            <p className="mt-12 w-full max-w-[45.8rem] text-center font-mulishBold text-[1.6rem] leading-[3.2rem]">
                We have received your message and will respond promptly. Please check your email for the confirmation.
            </p>

            <Button
                type="anchor"
                link="/"
                text="Back to home page"
                className="group/button justify-self-center !border-brand !bg-brand !font-mulishBold !text-[1.6rem] !leading-[2.4rem] text-white hover:!bg-transparent hover:text-brand md:mt-24"
                icon={
                    <BiRightArrowAlt className="h-9 w-9 translate-y-[0.1rem] fill-white transition-all duration-500 group-hover/button:fill-heading2" />
                }
                iconPosition="right"
            />
        </div>
    );
};

export default ThankYou;
