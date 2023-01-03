import Image from 'next/image';
import IconCheck from '@/icons/icon-check-grey.svg';
import { H3Variant2 } from '@/components/headings';

export interface CardInterface {
    image: {
        url: string;
        width?: number;
        height?: number;
    };
    title: string;
    description: string[];
    list: string[];
    borderColor: string;
    cardBg: string;
    index?: number;
}

/**
 * Card component
 *
 * @param {CardInterface} { image }
 * @returns {*}  {JSX.Element}
 */
const Card = ({ image, title, description, list, borderColor, cardBg, index }: CardInterface): JSX.Element => {
    let cardBorder = 'sm:rounded-br-[10rem]';
    let bodyBorder = 'sm:rounded-br-[7.5rem]';
    let imageBorder = 'rounded-tl-primary rounded-tr-primary';

    if (index === 1) {
        cardBorder = 'sm:rounded-bl-[10rem]';
        bodyBorder = 'sm:rounded-bl-[7.5rem]';
    }
    if (index === 2) {
        cardBorder = 'sm:rounded-tr-[10rem]';
        bodyBorder = 'sm:rounded-tr-0';
        imageBorder = 'rounded-tr-[7.5rem] rounded-tr-primary';
    }
    if (index === 3) {
        cardBorder = 'sm:rounded-tl-[10rem]';
        bodyBorder = 'sm:rounded-tl-0';
        imageBorder = 'rounded-tr-primary rounded-tl-[7.5rem]';
    }

    return (
        <div
            className={`grid max-w-[59rem] grid-rows-[auto_1fr] rounded-primary border-[0.2rem] border-l-[0.2rem] border-b-[0.2rem] border-t-0 border-r-0 border-solid bg-white shadow-shadow1 sm:p-[2.5rem] ${borderColor} ${cardBorder}`}
        >
            <Image
                className={`max-h-[23.5rem] object-cover ${imageBorder}`}
                src={image.url}
                width={543}
                height={235}
                alt={''}
            />

            <div
                className={`${cardBg} flex flex-col rounded-br-primary rounded-bl-primary px-12 py-16 sm:px-24 ${bodyBorder}`}
            >
                <H3Variant2>{title}</H3Variant2>

                <div className="mt-6 grid gap-6">
                    {description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}
                </div>

                <ul className="mt-[1.5rem] flex w-full flex-col items-start justify-start gap-[1.5rem] py-12 px-0 sm:pl-12">
                    {list.map((listItem, index) => (
                        <li className="flex items-start justify-start gap-4" key={index}>
                            <Image src={IconCheck} alt="" className="h-8 w-8 translate-y-2" />
                            <p>{listItem}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;
