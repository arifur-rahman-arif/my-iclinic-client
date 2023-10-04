import { BookConsultation } from '@/page-sections/index';
import Image from 'next/image';
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
            <BookConsultation
                buttonClassName="flex items-center justify-center gap-4"
                modalElement={
                    <>
                        <iframe
                            src="https://calendly.com/myiclinic/free_visioncorrection_consultation"
                            width={600}
                            height={700}
                            className="w-full md:min-h-[70rem]"
                        ></iframe>
                    </>
                }
                maxWidth="70rem"
            >
                <button>
                    <Image src="/images/icons/icon-eye-scan.svg" alt="" width={40} height={40} />
                    <span
                        className={twMerge(
                            'font-mulishBold text-[1.8rem] leading-[2.8rem] text-white',
                            freeScreeningTextClassName
                        )}
                    >
                        Free screening
                    </span>
                </button>
            </BookConsultation>

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
