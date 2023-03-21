import { BookConsultation } from '@/page-sections/index';
import { openFreshdeskChat } from '@/utils/miscellaneous';
import Image from 'next/image';

/**
 * CTA component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Cta3 = (): JSX.Element => {
    return (
        <div className="flex flex-wrap items-center justify-start gap-12">
            <BookConsultation />

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

export default Cta3;
