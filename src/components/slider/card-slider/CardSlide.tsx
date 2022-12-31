import Image from 'next/image';

export interface CardSlideInterface {
    imageURL: string;
}

/**
 * Individual slide of the horizontal slider
 *
 * @param {SlideInterface} { name, title, description, reviewLink }
 * @returns {*}  {JSX.Element}
 */
const CardSlide = ({ imageURL }: CardSlideInterface): JSX.Element => {
    return (
        <div className="h-[31.8rem] w-[31.8rem] ">
            <Image src={imageURL} alt="" width={318} height={318} className="h-auto w-[31.8rem] rounded-primary" />
        </div>
    );
};

export default CardSlide;
