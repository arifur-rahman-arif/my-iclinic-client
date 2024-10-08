import Tooltip from '@/components/Tooltip/Tooltip';
import { Context } from '@/page-sections/SuitabilityCheck/Context';
import { prependSign } from '@/utils/miscellaneous';
import Image from 'next/image';
import { useContext } from 'react';

interface PointCounterProps {
    eye: 'leftEye' | 'rightEye';
    node: number;
}

/**
 * Sphere point counter
 *
 * @param {"leftEye" | "rightEye"} eye
 * @param {number} node
 * @returns {JSX.Element}
 * @constructor
 */
const PointCounter = ({ eye, node }: PointCounterProps): JSX.Element => {
    const ctx = useContext(Context);

    /**
     * Handles the click event for incrementing or decrementing the eye prescription.
     *
     * @param {('increment' | 'decrement')} type - The type of action to perform ('increment' or 'decrement').
     */
    const handleClick = (type: 'increment' | 'decrement') => {
        if (type === 'increment') {
            ctx.setEyePrescription((prevState) => {
                const newValue = (prevState.sphere[eye] ?? 0) + 0.25;

                if (newValue <= 15) {
                    const currentState = {
                        ...prevState,
                        sphere: {
                            ...prevState.sphere,
                            [eye]: newValue
                        }
                    };

                    ctx.isSuitableForICL(currentState, node);

                    return currentState;
                }

                return prevState;
            });
        } else if (type === 'decrement') {
            ctx.setEyePrescription((prevState) => {
                const newValue = (prevState.sphere[eye] ?? 0) - 0.25;

                if (newValue >= -15) {
                    const currentState = {
                        ...prevState,
                        sphere: {
                            ...prevState.sphere,
                            [eye]: newValue
                        }
                    };

                    ctx.isSuitableForICL(currentState, node);

                    return currentState;
                }

                return prevState;
            });
        }
    };

    /**
     * Handles the click event for the reset button.
     * Resets the eye prescription for the specified eye (left or right) by setting its sphere value to null.
     *
     * @function handleResetClick
     * @returns {void}
     */
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

        ctx.setRoutes((prevRoutes) => {
            prevRoutes[node].yesNode = 8;
            return prevRoutes;
        });
    };

    return (
        <div className="flex items-center justify-center gap-4">
            <div className="flex w-[15rem] items-center justify-between gap-7">
                <button
                    aria-label="Decrease"
                    className="grid h-12 w-12 cursor-pointer place-items-center rounded-[0.3rem] border border-[#0099FF] bg-[#0099FF] font-mulishExtraBold transition-all duration-500 hover:opacity-70"
                    onClick={() => handleClick('decrement')}
                >
                    <Image unoptimized src="/images/icons/icon-minus-white.svg" alt="Dncrease" width={13} height={13} />
                </button>

                <span className="font-mulishBold text-[2rem] leading-[2.4rem] text-white">
                    {eye === 'leftEye'
                        ? ctx.eyePrescription.sphere.leftEye === null
                            ? '----'
                            : prependSign(ctx.eyePrescription.sphere.leftEye)
                        : ctx.eyePrescription.sphere.rightEye === null
                        ? '----'
                        : prependSign(ctx.eyePrescription.sphere.rightEye)}
                </span>

                <button
                    aria-label="Increase"
                    className="grid h-12 w-12 cursor-pointer place-items-center rounded-[0.3rem] border border-[#0099FF] bg-[#0099FF] font-mulishExtraBold transition-all duration-500 hover:opacity-70"
                    onClick={() => handleClick('increment')}
                >
                    <Image unoptimized src="/images/icons/plus-icon.svg" alt="Increase" width={14} height={14} />
                </button>
            </div>

            <Tooltip
                text={
                    <span className="line-clamp-1 whitespace-nowrap px-6 py-2 font-mulishBold text-[1.4rem] text-white">
                        Reset sphere
                    </span>
                }
                className="!rounded-[0.5rem] !border-[#0099FF] !bg-[#0099FF]"
                arrowClassName="border-b-white"
            >
                <button
                    aria-label="Reset"
                    className="group/reset grid h-12 w-12 cursor-pointer place-items-center rounded-[0.3rem] border border-[#0099FF] bg-[#0099FF] font-mulishExtraBold transition-all duration-500 hover:opacity-70"
                    onClick={handleResetClick}
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        className="h-8 w-8"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"
                        ></path>
                    </svg>
                </button>
            </Tooltip>
        </div>
    );
};

interface SphereProps {
    node: number;
}

/**
 * Sphere component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Sphere = ({ node }: SphereProps): JSX.Element => {
    return (
        <div className="grid content-start gap-12 gap-x-12 md:grid-cols-[auto_1fr] md:gap-6 md:gap-x-24">
            <span className="self-end font-latoBold text-[2.4rem] uppercase leading-[3.2rem] text-white">Sphere</span>

            <div className="grid gap-12 sm:grid-flow-col md:gap-24">
                <div className="grid place-items-center gap-16">
                    <div className="relative grid -translate-x-8 grid-cols-[auto_auto] items-center justify-start gap-x-2 gap-y-4">
                        <Image src="/images/icons/icon-left-eye-small.svg" alt="" width={16} height={17} />
                        <span className="font-latoBold text-[2rem] leading-[2.8rem] text-white">O.S</span>
                        <span className="col-span-full text-[1.6rem] text-white">Left eye</span>
                    </div>

                    <PointCounter eye="leftEye" node={node} />
                </div>

                <div className="grid place-items-center gap-16">
                    <div className="relative grid -translate-x-8 grid-cols-[auto_auto] items-center justify-start gap-x-2 gap-y-4">
                        <span className="font-latoBold text-[2rem] leading-[2.8rem] text-white">O.D</span>
                        <Image src="/images/icons/icon-right-eye-small.svg" alt="" width={16} height={17} />
                        <span className="col-span-full text-[1.6rem] text-white">Right eye</span>
                    </div>

                    <PointCounter eye="rightEye" node={node} />
                </div>
            </div>

            <p className="col-span-full text-left text-[1.6rem] text-white">
                Main power of your eye correction is described ass SPH (sephere) expressed as a + or - power. The higher
                the number the stronger the correction.
            </p>
        </div>
    );
};

export default Sphere;
