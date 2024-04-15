import Image from 'next/image';
import IconCheck from '@/icons/icon-dotted-arrow.svg';
import { H3Variant3 } from '@/components/Headings';

export interface CardInterface {
    image: {
        url: string;
        width?: number;
        height?: number;
    };
    title: string;
    description: string[];
    list: string[];
    index?: number;
}

/**
 * Card component
 *
 * @param {CardInterface} { image }
 * @returns {*}  {JSX.Element}
 */
const Card = ({ image, title, description, list, index }: CardInterface): JSX.Element => {
    return (
        <div
            className={`grid max-w-[59rem] grid-rows-[auto_1fr] overflow-hidden rounded-[1rem] border border-solid border-[#EAECF0] bg-white`}
            style={{
                boxShadow: '0px 1px 2px 0px rgba(0, 21, 41, 0.04), 0px 1px 3px 0px rgba(0, 21, 41, 0.06)'
            }}
        >
            <Image
                className={`max-h-[23.5rem] w-full object-cover`}
                src={image.url}
                width={543}
                height={235}
                alt={''}
            />

            <div className={`flex flex-col rounded-br-primary rounded-bl-primary px-12 py-16 md:px-20`}>
                <H3Variant3>{title}</H3Variant3>

                <span className="mt-4 h-[1.4rem] w-[6.7rem] rounded-primary bg-[#FF7F00]"></span>

                <div className="mt-6 grid content-start gap-4">
                    {description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}
                </div>

                <ul className="mt-[1.5rem] flex w-full flex-col items-start justify-start gap-[1.5rem] py-12 px-0">
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
