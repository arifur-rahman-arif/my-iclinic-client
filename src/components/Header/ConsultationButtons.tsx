import { BookConsultation } from '@/page-sections/index';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ConsultationButtonsProps {
    freeScreeningTextClassName?: string;
    consultationTextClassName?: string;
    className?: string;
}

/**
 * Consultation dropdown
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ConsultationButtons = ({
    freeScreeningTextClassName,
    consultationTextClassName,
    className
}: ConsultationButtonsProps): JSX.Element => {
    return (
        <div
            className={twMerge(
                'relative z-[2] flex h-full items-center justify-center gap-12 bg-[#005DAF] px-12',
                className
            )}
        >
            {/* <BookConsultation
                buttonClassName="flex items-center justify-center gap-4"
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
                href="https://connect.pabau.com/bookings.php?compid=11842"
                target="_blank"
                title="Book free consultation"
                className="flex items-center justify-center gap-4"
            >
                <Image src="/images/icons/icon-eye-scan.svg" alt="" width={40} height={40} />
                <span
                    className={twMerge(
                        'font-mulishBold text-[1.8rem] leading-[2.8rem] text-white',
                        freeScreeningTextClassName
                    )}
                >
                    Free screening
                </span>
            </Link>

            <BookConsultation buttonClassName="flex items-center justify-center gap-4">
                <button>
                    <Image src="/images/icons/icon-consultation.svg" alt="" width={40} height={40} />
                    <span
                        className={twMerge(
                            'font-mulishBold text-[1.8rem] leading-[2.8rem] text-white',
                            consultationTextClassName
                        )}
                    >
                        Consultation
                    </span>
                </button>
            </BookConsultation>
        </div>
    );
};

export default ConsultationButtons;
