import Slider from '@mui/material/Slider';
import { Dispatch, ReactNode, SetStateAction } from 'react';

interface ControllerInterface {
    title: string;
    appendValueText: ReactNode;
    minValue: number;
    maxValue: number;
    defaultValue: number;
    value: number;
    valueLabelFormat?: string;
    onValueChange: Dispatch<SetStateAction<number>>;
    id?: string;
}

/**
 * Finance calculator controller.
 *
 * @param {string} title - The title of the finance calculator.
 * @param {string} appendValueText
 * @param {number} minValue - The minimum value allowed for the finance calculator.
 * @param {number} maxValue - The maximum value allowed for the finance calculator.
 * @param {number} defaultValue - The default value of the finance calculator.
 * @param {number} value
 * @param {Dispatch<SetStateAction<number>>} onValueChange - A function to be called when the value of the finance calculator changes.
 *   - `value` parameter: A function or a number representing the new value of the finance calculator.
 * @param {string} valueLabelFormat
 * @returns {JSX.Element} - A JSX element representing the finance calculator.
 * @constructor
 */
const Controller = ({
    title,
    appendValueText,
    minValue,
    maxValue,
    defaultValue,
    value,
    onValueChange,
    valueLabelFormat,
    id
}: ControllerInterface): JSX.Element => {
    return (
        <div className="grid grid-cols-2 items-center md:grid-cols-[auto_1fr_auto] md:gap-8">
            {id === 'upfront-payment' ? (
                <>
                    <div className="grid place-items-center justify-self-start">
                        <span className="font-mulishExtraBold text-[3.2rem] leading-[3.2rem]">
                            {minValue}
                            {appendValueText}
                        </span>
                        <span className="font-mulishExtraBold text-[1.4rem] uppercase leading-[1.6rem] text-[#657076]">
                            upfront
                        </span>
                    </div>

                    <div className="grid place-items-center justify-self-end">
                        <span className="font-mulishExtraBold text-[3.2rem] leading-[3.2rem]">
                            {maxValue}
                            {appendValueText}
                        </span>
                        <span className="font-mulishExtraBold text-[1.4rem] uppercase leading-[1.6rem] text-[#657076]">
                            upfront
                        </span>
                    </div>
                </>
            ) : (
                <>
                    <div className="grid place-items-center justify-self-start">
                        <span className="font-mulishExtraBold text-[3.2rem] leading-[3.2rem]">{minValue}</span>
                        <span className="font-mulishExtraBold text-[1.4rem] uppercase leading-[1.6rem] text-[#657076]">
                            month
                        </span>
                    </div>

                    <div className="grid place-items-center justify-self-end">
                        <span className="font-mulishExtraBold text-[3.2rem] leading-[3.2rem]">{maxValue}</span>
                        <span className="font-mulishExtraBold text-[1.4rem] uppercase leading-[1.6rem] text-[#657076]">
                            month
                        </span>
                    </div>
                </>
            )}

            <Slider
                defaultValue={defaultValue}
                value={value}
                valueLabelFormat={valueLabelFormat}
                aria-label={title}
                valueLabelDisplay="on"
                max={maxValue}
                min={minValue}
                onChange={(e: any) => {
                    const currentValue = e.target.value;
                    onValueChange(currentValue);
                }}
                className="col-span-full md:col-span-1 md:col-start-2 md:row-start-1"
                sx={{
                    height: 8,
                    '& .MuiSlider-track': {
                        border: 'none',
                        backgroundColor: '#063147'
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: 'var(--color-brand)'
                    },
                    '& .MuiSlider-thumb': {
                        height: 24,
                        width: 24,
                        backgroundColor: 'var(--color-yellow)',
                        '&:before': {
                            // Content: ' ',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#fff'
                        }
                    },
                    '& .MuiSlider-valueLabel': {
                        borderRadius: '5px',
                        padding: '8px 20px',
                        backgroundColor: '#063147'
                    },
                    '& .MuiSlider-valueLabelLabel': {
                        fontSize: '1.6rem',
                        lineHeight: '2.4rem',
                        fontFamily: 'var(--mulish-bold)',
                        color: '#fff'
                    }
                }}
            />
        </div>
    );
};

export default Controller;
