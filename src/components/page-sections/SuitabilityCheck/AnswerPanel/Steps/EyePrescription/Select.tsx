import { prependSign } from '@/utils/miscellaneous';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import useOnclickOutside from 'src/hooks/useOnClickOutside/useOnclickOutside';

type Eye = 'leftEye' | 'rightEye';

interface SelectorProps {
    eye: Eye;
    onSelect: (value: number, eye: Eye) => void;
    options: number[];
    leftValue: number | null;
    rightValue: number | null;
    showSign?: boolean;
}

/**
 * Component
 *
 * @param {"leftEye" | "rightEye"} eye
 * @param {Function} onSelect
 * @param {number[]} options
 * @param {number | null} leftValue
 * @param {number | null} rightValue
 * @returns {JSX.Element}
 * @constructor
 */
const Selector = ({ eye, onSelect, options, leftValue, rightValue, showSign }: SelectorProps): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const [zIndex, setZIndex] = useState<boolean>(false);

    const outsideRef = useOnclickOutside(() => setOpen(false));

    useEffect(() => {
        setZIndex(true);

        if (open) return;

        setTimeout(() => {
            setZIndex(false);
        }, 500);
    }, [open]);

    return (
        <div className="relative min-h-[4.7rem] w-[21.2rem]" ref={outsideRef}>
            <div
                className={`absolute w-full overflow-hidden rounded-[1rem] border border-solid border-white bg-heading2 p-4 transition-all duration-500 hover:z-10 ${
                    zIndex && 'z-10'
                } ${open ? 'max-h-[25rem]' : 'max-h-[4.7rem]'}`}
            >
                <button
                    aria-label={`CYL ${eye === 'leftEye' ? 'Left eye' : 'Right eye'}`}
                    onClick={() => setOpen(!open)}
                    className="flex w-full items-center justify-center gap-4"
                >
                    <div className="grid grid-cols-[auto_auto] items-center justify-start gap-x-2">
                        {eye === 'leftEye' ? (
                            <>
                                <Image src="/images/icons/icon-left-eye-small.svg" alt="" width={14} height={17} />
                                <span className="font-mulishBold text-[1.6rem] text-white">O.S</span>
                            </>
                        ) : (
                            <>
                                <span className="font-mulishBold text-[1.6rem] text-white">O.D</span>
                                <Image src="/images/icons/icon-right-eye-small.svg" alt="" width={14} height={17} />
                            </>
                        )}
                    </div>

                    <span className="text-[1.6rem] text-white">
                        {eye === 'leftEye' ?
                            leftValue === null ?
                                'Left eye' :
                                showSign ?
                                    prependSign(leftValue) :
                                    leftValue :
                            rightValue === null ?
                                'Right eye' :
                                showSign ?
                                    prependSign(rightValue) :
                                    rightValue}
                    </span>
                    <FaAngleDown
                        className={`ml-4 h-[2.4rem] w-[2.4rem] fill-[#9B9FA1] transition-all duration-500 ${
                            open && 'rotate-180'
                        }`}
                    />
                </button>

                <div className="mt-8 h-[calc(25rem_-_4.7rem)] w-full overflow-y-auto pb-12">
                    <div className="grid place-items-center gap-6">
                        {options.map((number, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    onSelect(number, eye);
                                    setOpen(false);
                                }}
                                className="w-full text-[1.8rem] font-bold leading-[2.8rem] text-[#E6E7E8]"
                            >
                                {showSign ? prependSign(number) : number}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface SelectProps extends Omit<SelectorProps, 'eye'> {
    label: string;
}

/**
 * Prescription select component
 *
 * @param {string} label
 * @param {Omit<SelectProps, "label">} rest
 * @returns {JSX.Element}
 * @constructor
 */
const Select = ({ label, ...rest }: SelectProps): JSX.Element => {
    return (
        <div className="grid gap-8 sm:grid-cols-[1fr_auto_auto] md:gap-16">
            <span className="mt-7 font-latoBold text-[2.4rem] uppercase leading-[3.2rem] text-white">{label}</span>
            <Selector {...rest} eye="leftEye" />
            <Selector {...rest} eye="rightEye" />
        </div>
    );
};

export default Select;
