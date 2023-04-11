import Image from 'next/image';
import { BiRightArrowAlt } from 'react-icons/bi';
import Button from '@/components/Buttons/Button';

/**
 * Form submission confirmation component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ThankYou = (): JSX.Element => {
    return (
        <div className="grid place-items-center gap-12">
            <Image src="/images/icons/icon-check-green-bg.svg" alt="" width={100} height={80} />
            <span className="font-latoBold text-[3rem] leading-[3.2rem] md:text-[3.6rem] md:leading-[3.6rem]">
                Thank you
            </span>

            <p className="w-full max-w-[49rem] text-center font-mulishBold">
                We have received your message and will respond promptly. Please check your email for the confirmation.
            </p>

            <Button
                type="anchor"
                link="/"
                text="Back to home page"
                className="group/button justify-self-center !border-heading2 !bg-heading2 !font-mulishBold !text-[1.6rem] !leading-[2.4rem] text-white hover:!bg-transparent hover:text-heading2 md:mt-12"
                icon={
                    <BiRightArrowAlt className="h-9 w-9 translate-y-[0.1rem] fill-white transition-all duration-500 group-hover/button:fill-heading2" />
                }
                iconPosition="right"
            />
        </div>
    );
};

export default ThankYou;
