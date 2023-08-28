import { Container } from '@/components/Container';
import { BookConsultation } from '@/page-sections/index';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface MenuCtaProps {
    setOpenMobileMenu?: Dispatch<SetStateAction<boolean>>;
}

/**
 * The navigation dropdown cta component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const MenuCta = ({ setOpenMobileMenu }: MenuCtaProps): JSX.Element => {
    return (
        <div className="h-[6.7rem] w-full bg-[#003C5526]">
            <Container className="flex h-full items-center justify-center gap-6 !px-4 sm:justify-start sm:gap-12 xl:!px-0">
                <button
                    className="flex -translate-y-2 cursor-pointer items-center justify-start gap-2 transition-all duration-500 hover:opacity-40 sm:gap-4"
                    onClick={() => {
                        setOpenMobileMenu && setOpenMobileMenu(false);
                        openFreshdeskChat();
                    }}
                >
                    <Image
                        src="/images/icons/icon-chat-dark.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="h-[2.4rem] w-[2.4rem]"
                    />
                    <span className="font-latoExtraBold text-[1.4rem] leading-8 line-clamp-1">Chat with us</span>
                </button>
                <span className="h-10 w-[0.1rem] bg-[#9B9FA1]"></span>
                <BookConsultation
                    modalElement={
                        <>
                            <iframe
                                src="https://calendly.com/myiclinic/free-laser-consultation"
                                width={600}
                                height={700}
                                className="w-full md:min-h-[70rem]"
                            ></iframe>
                        </>
                    }
                    maxWidth="70rem"
                    buttonClassName="flex h-full cursor-pointer items-start justify-start gap-2 sm:gap-4 transition-all duration-500 hover:opacity-40"
                >
                    <button>
                        <Image
                            src="/images/icons/icon-calendar-outline-darker.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="h-[2.4rem] w-[2.4rem] translate-y-2"
                        />
                        <span className="text-left font-latoExtraBold text-[1.4rem] leading-8 line-clamp-2">
                            Book a free consultation
                            <br /> for vision correction
                        </span>
                    </button>
                </BookConsultation>
            </Container>
        </div>
    );
};

export default MenuCta;
