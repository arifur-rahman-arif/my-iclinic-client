import { getTheDayName, getTheMonthName } from '@/utils/miscellaneous';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const LottieComponent = dynamic(() => import('./LottieComponent'));

interface DoneInterface {
    date: Date;
    stepperIndex?: number;
    formSubmitted: boolean;
}

/**
 * Thank you step for request-callback submission
 *
 * @param {DoneInterface} { date, formSubmitted }
 * @returns {*}  {JSX.Element}
 */
const Done = ({ date, formSubmitted }: DoneInterface): JSX.Element => {
    return (
        <div className="grid grid-cols-1 gap-8">
            {formSubmitted && <LottieComponent />}

            <div className="flex w-full flex-col items-center justify-start gap-4">
                <h3 className="sm:leading-16 font-latoBold sm:text-[4rem]">Thank You</h3>
                <p className="text-center">Your booking was successful</p>
                <p className="text-center">We just sent you a confirmation email</p>
                <Image
                    src="/images/avaters/people-jumping.svg"
                    quality={30}
                    alt=""
                    width={152}
                    height={130}
                    className="mt-4 h-[13rem] w-[15.2rem]"
                />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4">
                <h4 className="normal-case">Your Booking:</h4>
                <div className="flex flex-wrap gap-4">
                    <span>{date.getFullYear()}</span>
                    <span>
                        {getTheDayName(date.getDay())} {getTheMonthName(date.getMonth())} {date.getDate()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Done;
