import { H4Variant1 } from '@/components/headings';
import Image from 'next/image';

interface BandImageInterface {
    title: string;
    imageURL: string;
    bandColor?: string;
}

/**
 * Band Image component
 *
 * @param {BandImageInterface} { title, imageURL }
 * @returns {*}  {JSX.Element}
 */
const BandImage = ({ title, imageURL, bandColor }: BandImageInterface): JSX.Element => {
    return (
        <div className="relative max-w-[40rem] self-start justify-self-center md:justify-self-end">
            <div className="relative z-[1] flex flex-col items-center justify-start gap-14 rounded-primary bg-white p-8 shadow-shadow1 sm:p-14">
                <div className="overflow-hidden rounded-primary">
                    <Image src={imageURL} width={332} height={244} quality={70} alt="" className="" />
                </div>

                <H4Variant1 className="text-center">{title}</H4Variant1>
            </div>
            <div
                className={`absolute top-2/4 left-2/4 -z-[10] h-[calc(100%_+_6.8rem)] w-[17.4rem] -translate-x-2/4 -translate-y-2/4 rounded-primary sm:p-14 ${
                    bandColor ? bandColor : 'bg-yellow'
                }`}
            ></div>
        </div>
    );
};

export default BandImage;
