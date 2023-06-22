import { Context } from '@/page-sections/SuggestionEngine/Context';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import useOnclickOutside from 'src/hooks/useOnClickOutside/useOnclickOutside';

type Eye = 'leftEye' | 'rightEye'

interface SelectorProps {
    eye: Eye;
    onSelect: (value: number, eye: Eye) => void;
    options: number[];
    leftValue: number | null;
    rightValue: number | null;
}

const Selector = ({ eye, onSelect, options, leftValue, rightValue }: SelectorProps): JSX.Element => {
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
        <div className="relative w-[21.2rem]" ref={outsideRef}
        >
            <div
                className={`transition-all absolute w-full duration-500 overflow-hidden border bg-heading2 rounded-[1rem] p-4 border-solid border-white hover:z-10 ${zIndex && 'z-10'} ${open ? 'max-h-[25rem]' : 'max-h-[4.7rem]'}`}>
                <button
                    aria-label={`CYL ${eye === 'leftEye' ? 'Left eye' : 'Right eye'}`}
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-center gap-4 w-full">
                    <div className="grid grid-cols-[auto_auto] gap-x-2 justify-start items-center">
                        {eye === 'leftEye' ?
                            <>
                                <Image src="/images/icons/icon-left-eye-small.svg" alt="" width={14} height={17}/>
                                <span className="text-white text-[1.6rem] font-mulishBold">O.S</span>
                            </> :
                            <>
                                <span className="text-white text-[1.6rem] font-mulishBold">O.D</span>
                                <Image src="/images/icons/icon-right-eye-small.svg" alt="" width={14} height={17}/>
                            </>}
                    </div>
                    
                    <span className="text-white text-[1.6rem]">
                        {eye === 'leftEye' ? leftValue === null ? 'Left eye' : leftValue : rightValue === null ? 'Right eye' : rightValue}
                    </span>
                    <FaAngleDown
                        className={`fill-[#9B9FA1] w-[2.4rem] h-[2.4rem] ml-4 transition-all duration-500 ${open && 'rotate-180'}`}/>
                </button>
                
                <div className="mt-8 pb-12 w-full overflow-y-auto h-[calc(25rem_-_4.7rem)]">
                    <div className="grid gap-6 place-items-center">
                        {options.map((number, i) => (
                            <button key={i}
                                    onClick={() => {
                                        onSelect(number, eye);
                                        setOpen(false);
                                    }}
                                    className="text-[1.8rem] w-full font-bold leading-[2.8rem] text-[#E6E7E8]">
                                {number}
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

const Select = ({ label, ...rest }: SelectProps): JSX.Element => {
    return (
        <div className="grid gap-8 md:gap-16 sm:grid-cols-[1fr_auto_auto]">
            <span className="text-white text-[2.4rem] leading-[3.2rem] uppercase font-latoBold mt-7">{label}</span>
            <Selector {...rest} eye="leftEye"/>
            <Selector {...rest} eye="rightEye"/>
        </div>
    );
};

export default Select;
