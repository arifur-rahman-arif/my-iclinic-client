import { BookConsultation } from '@/page-sections/index';
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
                <span className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem]">Chat with us</span>
            </div>
        </div>
    );
};

export default Cta3;
