import { H2Variant1 } from '@/components/Headings';
import Cta2 from '@/page-sections/SectionParts/Cta2';
import Image from 'next/image';

/**
 * Cta section for blog post
 * @returns {JSX.Element}
 * @constructor
 */
const CtaSection3 = (): JSX.Element => {
    return (
        <div className="blog-cta relative mt-6 grid grid-cols-1 overflow-hidden rounded-primary bg-[#004574] md:mt-[4.5rem] md:md:grid-cols-[1fr_6rem_auto] lg:grid-cols-[auto_6rem_1fr]">
            <Image
                src="/images/section-images/blog-cta-consultation.png"
                alt=""
                width={387}
                height={352}
                className="h-full w-full -translate-x-1 object-cover md:col-span-2 md:col-start-1 md:row-start-1 md:min-w-[35rem] lg:min-w-[38.8rem]"
            />

            <div className="relative z-[1] grid place-items-center gap-12 p-12 md:col-span-2 md:col-start-2 md:row-start-1 md:place-items-center md:gap-24 md:p-24">
                <H2Variant1 className="max-w-[36.9rem] normal-case !text-white">
                    Find out more by Speaking to our team
                </H2Variant1>

                <div className="mt-12 grid max-w-[46.8rem] gap-12 md:ml-12 md:mt-[4.5rem]">
                    <Cta2
                        className="flex-col"
                        excludeSloganText
                        button1ClassName="!bg-white !border-white hover:!bg-transparent hover:text-white"
                        button2ClassName="!bg-transparent text-white !border-transparent hover:!bg-none hover:!border-white"
                        button2Icon={
                            <Image src="/images/icons/icon-phone-white-outline.svg" alt="" width={20} height={20} />
                        }
                        hoverIcon={
                            <Image src="/images/icons/icon-calendar-outline-white.svg" alt="" width={20} height={20} />
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default CtaSection3;
