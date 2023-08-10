import { LinkText } from '@/components/Link';
import { getNameAbbreviations, trimText } from '@/utils/miscellaneous';
import Image from 'next/image';
import { HorizontalSliderInterface } from './HorizontalSlider';

interface SlideInterface extends HorizontalSliderInterface {}

/**
 * Individual slide of the horizontal slider
 *
 * @param {SlideInterface} { name, title, description, reviewLink }
 * @returns {*}  {JSX.Element}
 */
const Slide = ({ name, title, description, reviewLink, star = 5, avatarUrl }: SlideInterface): JSX.Element => {
    return (
        <div className="h-full w-full max-w-fit p-8 md:p-0">
            <div className="grid grid-cols-1 gap-4 rounded-primary p-8 shadow-shadow1 md:p-0 md:shadow-none">
                {star ? (
                    <>
                        {star && star == 5 && (
                            <Image
                                src="/images/icons/icon-trustpilot-stars.svg"
                                alt=""
                                width={103}
                                height={19}
                                quality={70}
                                className="ml-4 h-[1.9rem] w-[10.3rem]"
                            />
                        )}
                        {star && star == 4 && (
                            <Image
                                src="/images/icons/icon-trustpilot-4-stars.svg"
                                alt=""
                                width={103}
                                height={19}
                                quality={70}
                                className="ml-4 h-[1.9rem] w-[10.3rem]"
                            />
                        )}
                        {star && star == 3 && (
                            <Image
                                src="/images/icons/icon-trustpilot-3-stars.svg"
                                alt=""
                                width={103}
                                height={19}
                                quality={70}
                                className="ml-4 h-[1.9rem] w-[10.3rem]"
                            />
                        )}
                        {star && star == 2 && (
                            <Image
                                src="/images/icons/icon-trustpilot-2-stars.svg"
                                alt=""
                                width={103}
                                height={19}
                                quality={70}
                                className="ml-4 h-[1.9rem] w-[10.3rem]"
                            />
                        )}
                        {star && star == 1 && (
                            <Image
                                src="/images/icons/icon-trustpilot-1-stars.svg"
                                alt=""
                                width={103}
                                height={19}
                                quality={70}
                                className="ml-4 h-[1.9rem] w-[10.3rem]"
                            />
                        )}
                    </>
                ) : (
                    <Image
                        src="/images/icons/icon-trustpilot-stars.svg"
                        alt=""
                        width={103}
                        height={19}
                        quality={70}
                        className="ml-4 h-[1.9rem] w-[10.3rem]"
                    />
                )}

                <div className="flex items-center justify-start gap-4">
                    {avatarUrl ? (
                        <Image
                            src={avatarUrl}
                            alt=""
                            className="h-[4.3rem] w-[4.3rem] overflow-hidden rounded-full"
                            width={45}
                            height={45}
                            quality={70}
                        />
                    ) : (
                        <span className="grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-brandLight font-latoBold tracking-wide">
                            {getNameAbbreviations(name)}
                        </span>
                    )}

                    <span className="font-latoBold text-[1.8rem] leading-[2.4rem]">{name}</span>
                </div>

                <span className="block font-latoBold leading-[2.4rem] line-clamp-1 sm:text-[2rem]">{title}</span>

                <p>
                    {trimText(description, 90)}&nbsp;&nbsp;
                    <LinkText
                        href={reviewLink || '#'}
                        indicatorColor="bg-blue"
                        className="font-mulishBold !text-[1.4rem] font-extrabold text-blue"
                    >
                        Read More
                    </LinkText>
                </p>
            </div>
        </div>
    );
};

export default Slide;
