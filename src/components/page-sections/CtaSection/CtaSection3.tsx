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
        <div className="mt-6 md:mt-[4.5rem] bg-[#004574] rounded-primary relative overflow-hidden grid grid-cols-1 md:md:grid-cols-[1fr_6rem_auto] lg:grid-cols-[auto_6rem_1fr]">
            <Image
                src="/images/section-images/blog-cta-consultation.png"
                alt=""
                width={387}
                height={352}
                className="object-cover -translate-x-1 w-full md:col-start-1 md:col-span-2 h-full md:row-start-1 md:min-w-[35rem] lg:min-w-[38.8rem]"
            />

            <div className="grid gap-12 md:gap-24 p-12 md:p-24 md:col-start-2 md:col-span-2 md:row-start-1 relative z-[1] place-items-center md:place-items-center">
                <H2Variant1 className="normal-case !text-white max-w-[36.9rem]">
                    Find out more by Speaking to our team
                </H2Variant1>

                <div className="md:ml-12 max-w-[46.8rem] mt-12 md:mt-[4.5rem] grid gap-12">
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
