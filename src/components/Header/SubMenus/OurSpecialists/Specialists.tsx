import { consultantCardList } from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';

interface SpecialistsProps {
}

/**
 * Component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Specialists = ({}: SpecialistsProps): JSX.Element => {
    return (
        <div className="grid content-start gap-12">
            <div className="grid gap-6">
                <span className="font-mulishBold text-[1.6rem] uppercase leading-8 text-heading2">our specialists</span>
                <div className="h-[0.1rem] w-full bg-heading2 opacity-[0.20]"></div>
            </div>

            {/* Blogs */}
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] gap-y-12 gap-x-24">
                {consultantCardList.slice(0, 6).map((item, index) => (
                    <Link href={item.url} key={index} className="grid gap-4">
                        <div className="flex items-center justify-start gap-3">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={60}
                                height={60}
                                quality={100}
                                unoptimized={true}
                                className="h-24 w-24 overflow-hidden rounded-full object-cover"
                            />
                            <span className="font-mulishBold text-[1.6rem] leading-8">{item.name}</span>
                        </div>
                        <div className="grid justify-items-start gap-2">
                            <span
                                className="rounded-[0.5rem] bg-[#D9E2E5] py-[0.1rem] px-[0.8rem] font-latoExtraBold text-[1.2rem] uppercase leading-[1.2rem]">
                                {item.title}
                            </span>
                            <span className="text-[1.4rem] leading-8 text-[#51585B] line-clamp-2">{item.degree}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Specialists;
