import LinkStyle from '@/components/Link/LinkStyle';
import Image from 'next/image';

/**
 * Out of hours page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const OutOfHours = () => {
    const closureDates = [
        {
            date: 'January 2',
            description: "New Year's Day observed"
        },
        {
            date: 'April 7',
            description: 'Good Friday'
        },
        {
            date: 'April 10',
            description: 'Easter Monday (regional holiday)'
        },
        {
            date: 'May 1',
            description: 'Early May Bank Holiday'
        },
        {
            date: 'May 8',
            description: 'Bank Holiday for the Coronation of King Charles III'
        },
        {
            date: 'May 29',
            description: 'Spring Bank Holiday'
        },
        {
            date: 'August 28',
            description: 'Summer Bank Holiday (regional holiday)'
        },
        {
            date: 'December 25',
            description: 'Christmas Day'
        },
        {
            date: 'December 26',
            description: 'Boxing Day'
        }
    ];

    return (
        <div className="grid gap-12 md:gap-24">
            <div className="mx-auto grid max-w-[61.9rem] justify-items-center gap-12">
                <p className="text-center font-mulishBold text-[1.6rem] leading-[2.4rem] text-[#384043]">
                    In the event of an emergency please call the clinic on{' '}
                    <LinkStyle url="tel:0208 445 8877" className="!font-mulishBold !text-[1.6rem] !leading-[2.4rem]">
                        0208 445 8877
                    </LinkStyle>{' '}
                    and leave a voicemail and a member of staff will get back to you as soon as possible.
                </p>
                <p className="max-w-[57.7rem] text-center  text-[1.6rem] leading-[2.4rem] text-[#384043]">
                    Alternatively, if you cannot speak to a member of our team, we recommend{' '}
                    <LinkStyle
                        url="https://www.moorfields.nhs.uk/"
                        className="!font-mulishBold !text-[1.6rem] !leading-[2.4rem]"
                    >
                        Moorfields Eye Hospital
                    </LinkStyle>{' '}
                    or{' '}
                    <LinkStyle
                        url="https://www.imperial.nhs.uk/our-locations/western-eye-hospital"
                        className="!font-mulishBold !text-[1.6rem] !leading-[2.4rem]"
                    >
                        Western Eye Hospital.
                    </LinkStyle>{' '}
                </p>

                <Image
                    src="/images/section-images/calender-image.png"
                    alt=""
                    width={309}
                    height={160}
                    className="mt-12 md:mt-28"
                />
            </div>
            <div className="grid gap-16">
                <span className="font-latoBold text-[3rem] leading-[3.6rem] text-heading">Dates of closure</span>

                <div className="grid grid-cols-1 gap-12 xs:flex-row sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] sm:grid-rows-[repeat(auto-fit,_minmax(6.5rem,_1fr))] lg:grid xl:grid-flow-col xl:grid-cols-[auto_auto_1fr] xl:grid-rows-3 xl:gap-x-32">
                    {closureDates.map((closureDate, index) => (
                        <div className="flex flex-col items-start justify-start gap-5" key={index}>
                            <span className="relative font-mulishBold text-[1.8rem] leading-[2.8rem] text-heading2">
                                {closureDate.date}
                                <span className="absolute bottom-0 left-0 h-[0.3rem] w-full translate-y-[0.8rem] rounded-full bg-heading"></span>
                            </span>
                            <span className="font-mulishMedium text-[1.6rem] leading-[2.4rem] text-[#384043]">
                                {closureDate.description}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OutOfHours;
