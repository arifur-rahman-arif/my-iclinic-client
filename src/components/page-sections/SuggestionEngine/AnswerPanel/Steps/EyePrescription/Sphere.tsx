import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Image from 'next/image';
import { useState } from 'react';

const PointCounter = (): JSX.Element => {
    const [number, setNumber] = useState<number | null>(null);
    
    const handleClick = (type: 'increment' | 'decrement') => {
        if (type === 'increment') {
            if (number === null) {
                setNumber(1);
            } else if (number < 15) {
                setNumber(number + 1);
            }
        } else if (type === 'decrement') {
            if (number === null) {
                setNumber(-1);
            } else if (number > -15) {
                setNumber(number - 1);
            }
        }
    };
    
    return (
        <div className="flex items-center justify-between gap-7 w-[12rem]">
            <button
                aria-label="Increae"
                className="cursor-pointer rounded-primary border-2 border-heading2 bg-heading2 rounded-[0.3rem] grid place-items-center h-12 w-12 font-mulishExtraBold transition-all duration-500 hover:opacity-70"
                onClick={() => handleClick('decrement')}
            >
                <Image unoptimized src="/images/icons/icon-minus-white.svg" alt="Dncrease" width={13} height={13}/>
            </button>
            
            <span className="text-white font-mulishBold text-[2rem] leading-[2.4rem]">
                {number === null ? '---' : number}
            </span>
            
            <button
                aria-label="Decrease"
                className="cursor-pointer rounded-primary border-2 border-heading2 bg-heading2 rounded-[0.3rem] grid place-items-center h-12 w-12 font-mulishExtraBold transition-all duration-500 hover:opacity-70"
                onClick={() => handleClick('increment')}
            >
                <Image unoptimized src="/images/icons/plus-icon.svg" alt="Increase" width={14} height={14}/>
            </button>
        </div>
    );
};


const Sphere = (): JSX.Element => {
    return (
        <div className="grid content-start gap-6 grid-cols-[auto_1fr] gap-x-12 md:gap-x-24">
            <span className="text-[2.4rem] leading-[3.2rem] text-white font-latoBold self-end uppercase">Sphere</span>
            <div className="grid sm:grid-flow-col gap-12 md:gap-24">
                
                <div className="grid gap-16 place-items-center">
                    <div className="grid grid-cols-[auto_auto] gap-x-2 gap-y-4 justify-start items-center">
                        <Image src="/images/icons/icon-left-eye-small.svg" alt="" width={16} height={17}/>
                        <span className="text-[2.4rem] leading-[3.2rem] font-latoBold text-white">O.D</span>
                        <span className="text-white text-[1.6rem] col-span-full">Left eye</span>
                    </div>
                    
                    <PointCounter/>
                </div>
                
                <div className="grid gap-16 place-items-center">
                    <div className="grid grid-cols-[auto_auto] gap-x-2 gap-y-4 justify-start items-center">
                        <span className="text-[2.4rem] leading-[3.2rem] font-latoBold text-white">O.S</span>
                        <Image src="/images/icons/icon-right-eye-small.svg" alt="" width={16} height={17}/>
                        <span className="text-white text-[1.6rem] col-span-full">Right eye</span>
                    </div>
                    
                    <PointCounter/>
                </div>
            
            </div>
            
            <p className="text-left text-white text-[1.6rem] col-span-full">
                Main power of your eye correction is described ass SPH (sephere) expressed as a + or - power. The higher
                the number the stronger the correction.
            </p>
        </div>
    );
};

export default Sphere;
