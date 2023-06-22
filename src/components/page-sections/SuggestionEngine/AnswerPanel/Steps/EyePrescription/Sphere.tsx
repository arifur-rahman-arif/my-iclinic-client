// import Tooltip from '@/components/Tooltip/Tooltip';
import Tooltip from '@/components/Tooltip/Tooltip';
import { Context } from '@/page-sections/SuggestionEngine/Context';
import Image from 'next/image';
import { useContext } from 'react';

interface PointCounterProps {
    eye: 'leftEye' | 'rightEye';
}

const PointCounter = ({ eye }: PointCounterProps): JSX.Element => {
    const ctx = useContext(Context);
    
    const handleClick = (type: 'increment' | 'decrement') => {
        if (type === 'increment') {
            ctx.setEyePrescription((prevState) => {
                const newValue = (prevState.sphere[eye] ?? 0) + .25;
                
                if (newValue <= 15) {
                    return {
                        ...prevState,
                        sphere: {
                            ...prevState.sphere,
                            [eye]: newValue
                        }
                    };
                }
                
                return prevState;
            });
        } else if (type === 'decrement') {
            ctx.setEyePrescription((prevState) => {
                const newValue = (prevState.sphere[eye] ?? 0) - .25;
                
                if (newValue >= -15) {
                    return {
                        ...prevState,
                        sphere: {
                            ...prevState.sphere,
                            [eye]: newValue
                        }
                    };
                }
                
                return prevState;
            });
        }
    };
    
    const handleResetClick = () => {
        ctx.setEyePrescription((prevState) => {
            return {
                ...prevState,
                sphere: {
                    ...prevState.sphere,
                    [eye]: null
                }
            };
        });
    };
    
    return (
        <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-between gap-7 w-[15rem]">
                <button
                    aria-label="Decrease"
                    className="cursor-pointer border-2 border-heading2 bg-heading2 rounded-[0.3rem] grid place-items-center h-12 w-12 font-mulishExtraBold transition-all duration-500 hover:opacity-70"
                    onClick={() => handleClick('decrement')}
                >
                    <Image unoptimized src="/images/icons/icon-minus-white.svg" alt="Dncrease" width={13} height={13}/>
                </button>
                
                <span className="text-white font-mulishBold text-[2rem] leading-[2.4rem]">
                {eye === 'leftEye' ? ctx.eyePrescription.sphere.leftEye === null ? '----' : ctx.eyePrescription.sphere.leftEye : ctx.eyePrescription.sphere.rightEye === null ? '----' : ctx.eyePrescription.sphere.rightEye}
            </span>
                
                <button
                    aria-label="Increase"
                    className="cursor-pointer border-2 border-heading2 bg-heading2 rounded-[0.3rem] grid place-items-center h-12 w-12 font-mulishExtraBold transition-all duration-500 hover:opacity-70"
                    onClick={() => handleClick('increment')}
                >
                    <Image unoptimized src="/images/icons/plus-icon.svg" alt="Increase" width={14} height={14}/>
                </button>
            </div>
            <Tooltip
                text={<span
                    className="line-clamp-1 whitespace-nowrap text-white text-[1.4rem] py-2 px-6 font-mulishBold">Reset sphere</span>}
                className="!bg-heading2 !rounded-[1rem]"
                arrowClassName="border-b-white"
            >
                <button
                    aria-label="Reset"
                    className="cursor-pointer border-2 border-brand bg-brand rounded-[0.3rem] grid place-items-center h-12 w-12 font-mulishExtraBold transition-all duration-500 hover:opacity-70"
                    onClick={handleResetClick}
                >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em"
                         className="w-8 h-8"
                         width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="#fff" strokeWidth="2"
                              d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"></path>
                    </svg>
                </button>
            </Tooltip>
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
                        <span className="text-[2.4rem] leading-[3.2rem] font-latoBold text-white">O.S</span>
                        <span className="text-white text-[1.6rem] col-span-full">Left eye</span>
                    </div>
                    
                    <PointCounter eye="leftEye"/>
                </div>
                
                <div className="grid gap-16 place-items-center">
                    <div className="grid grid-cols-[auto_auto] gap-x-2 gap-y-4 justify-start items-center">
                        <span className="text-[2.4rem] leading-[3.2rem] font-latoBold text-white">O.D</span>
                        <Image src="/images/icons/icon-right-eye-small.svg" alt="" width={16} height={17}/>
                        <span className="text-white text-[1.6rem] col-span-full">Right eye</span>
                    </div>
                    
                    <PointCounter eye="rightEye"/>
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
