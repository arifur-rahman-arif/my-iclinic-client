import { getTheDayName, getTheMonthName } from '@/utils/miscellaneous';
import Image from 'next/image';

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
        <div className="grid grid-cols-1 place-items-center content-start gap-8" id="request-callback-confirmation">
            <Image src="/images/section-images/check-circle.png" alt="" width={47} height={47} />

            <div className="flex w-full flex-col items-center justify-start gap-2">
                <span
                    className="font-mulishBold text-[2rem] leading-[2.8rem] text-heading"
                    id="request-callback-thank-you"
                >
                    Thank You
                </span>
                <p className="font-mulishMedium text-[1.6rem] leading-[2.4rem] text-[#35444B]">
                    We have received your call-back request.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 place-items-center content-start gap-4">
                <Image src="/images/section-images/phone-call.png" alt="" width={52} height={52} />
                <span className="font-mulishBold text-[1.4rem] leading-8 text-heading">We will call you on</span>
                <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-heading">
                    {getTheDayName(date.getDay())} / {date.getDate()} {getTheMonthName(date.getMonth())} /{' '}
                    {date.getFullYear()}
                </span>
            </div>
        </div>
    );
};

export default Done;
