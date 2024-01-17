// import { BookConsultation } from '@/page-sections/index';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

interface MenuCtaProps {
    setOpenMobileMenu?: Dispatch<SetStateAction<boolean>>;
    className?: string;
    centerText?: boolean;
}

/**
 * The navigation dropdown cta component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const MenuCta = ({ setOpenMobileMenu, className, centerText }: MenuCtaProps): JSX.Element => {
    return (
        <div className={`${className} grid`}>
            <div className="bg-[#0099FF] px-14 py-6">
                <Link
                    href="/pricing-and-financing/financing-your-treatment"
                    className={`flex items-center gap-6 font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-white ${
                        centerText ? 'justify-center' : 'justify-start'
                    }`}
                    onClick={() => {
                        const parentMenus: NodeListOf<HTMLElement> = document.querySelectorAll('.parent-menu');

                        parentMenus.forEach((element: HTMLElement | null) => {
                            if (element) {
                                element.style.pointerEvents = 'none';

                                setTimeout(() => {
                                    element.style.pointerEvents = 'auto';
                                }, 1000);
                            }
                        });

                        setOpenMobileMenu && setOpenMobileMenu(false);
                    }}
                >
                    0% Finance
                    <span className="grid h-[3.2rem] w-[3.2rem] place-items-center rounded-full bg-white">
                        <HiOutlineArrowSmRight className="h-10 w-10 stroke-[#0099FF]" />
                    </span>
                </Link>
            </div>

            <div
                className="bg-[#0052A0] px-14 py-6"
                onClick={() => {
                    setOpenMobileMenu && setOpenMobileMenu(false);
                }}
            >
                {/* <BookConsultation
                    buttonClassName={`flex w-full items-center gap-6 font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-white ${
                        centerText ? 'justify-center' : 'justify-start'
                    }`}
                    modalElement={
                        <>
                            <iframe
                                src=""
                                width={600}
                                height={700}
                                className="w-full md:min-h-[70rem]"
                            ></iframe>
                        </>
                    }
                    maxWidth="70rem"
                >
                </BookConsultation> */}
                <Link
                    target="_blank"
                    href="https://connect.pabau.com/bookings.php?compid=11842"
                    title="Free screening"
                    className={`flex w-full items-center gap-6 font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-white ${
                        centerText ? 'justify-center' : 'justify-start'
                    }`}
                >
                    Free screening
                    <span className="grid h-[3.2rem] w-[3.2rem] place-items-center rounded-full bg-white">
                        <HiOutlineArrowSmRight className="h-10 w-10 stroke-[#0099FF]" />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default MenuCta;
