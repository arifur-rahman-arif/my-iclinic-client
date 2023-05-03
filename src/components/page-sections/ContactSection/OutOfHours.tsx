import LinkStyle from '@/components/Link/LinkStyle';
import Image from 'next/image';

/**
 * Out of hours page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const OutOfHours = () => {
    return (
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
    );
};

export default OutOfHours;
