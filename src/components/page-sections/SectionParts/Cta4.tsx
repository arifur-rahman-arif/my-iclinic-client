import { Button2 } from '@/components/Buttons';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';

/**
 * Cta section part
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Cta4 = (): JSX.Element => {
    return (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <Button2
                type="phone"
                text="0208 445 8877"
                iconPosition="left"
                className="group/chat-button"
                icon={
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_7348_23262)">
                            <path
                                d="M12.5417 4.16671C13.3556 4.32551 14.1036 4.72359 14.69 5.30999C15.2764 5.89639 15.6745 6.64443 15.8333 7.45837M12.5417 0.833374C14.2327 1.02124 15.8096 1.77852 17.0135 2.98088C18.2174 4.18324 18.9767 5.75922 19.1667 7.45004M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1113 17.2006 18.1856C16.9808 18.26 16.7478 18.2876 16.5167 18.2667C13.9523 17.9881 11.4892 17.1118 9.32499 15.7084C7.31151 14.4289 5.60443 12.7219 4.32499 10.7084C2.91663 8.53438 2.04019 6.0592 1.76665 3.48337C1.74583 3.25293 1.77321 3.02067 1.84707 2.80139C1.92092 2.58211 2.03963 2.38061 2.19562 2.20972C2.35162 2.03883 2.54149 1.9023 2.75314 1.80881C2.9648 1.71532 3.1936 1.66693 3.42499 1.66671H5.92499C6.32941 1.66273 6.72148 1.80594 7.02812 2.06965C7.33476 2.33336 7.53505 2.69958 7.59165 3.10004C7.69717 3.9001 7.89286 4.68565 8.17499 5.44171C8.28711 5.73998 8.31137 6.06414 8.24491 6.37577C8.17844 6.68741 8.02404 6.97347 7.79998 7.20004L6.74165 8.25837C7.92795 10.3447 9.65536 12.0721 11.7417 13.2584L12.8 12.2C13.0266 11.976 13.3126 11.8216 13.6243 11.7551C13.9359 11.6887 14.26 11.7129 14.5583 11.825C15.3144 12.1072 16.0999 12.3029 16.9 12.4084C17.3048 12.4655 17.6745 12.6694 17.9388 12.9813C18.203 13.2932 18.3435 13.6914 18.3333 14.1Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-500 group-hover/chat-button:stroke-heading2"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_7348_23262">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                }
            />

            <div className="flex items-center justify-start gap-4">
                <Image
                    src="/images/icons/icon-chat.svg"
                    alt=""
                    quality={70}
                    width={20}
                    height={20}
                    className="h-8 w-8"
                />
                <button
                    className="relative block cursor-pointer font-mulishBold text-[1.6rem] leading-[2.4rem]"
                    onClick={openFreshdeskChat}
                >
                    Chat with us
                </button>
            </div>
        </div>
    );
};

export default Cta4;
