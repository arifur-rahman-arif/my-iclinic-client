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
    onValueChange: (e: any) => void;
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
                    <div className="grid place-items-center gap-2 justify-self-start">
                        <span className="font-mulishExtraBold text-[2rem] leading-[3.2rem] text-[#F0F1F1]">
                            {minValue}
                        </span>
                        <span className="font-mulishExtraBold text-[1.6rem] uppercase leading-[1.6rem] text-[#95A7AF]">
                            month
                        </span>
                    </div>

                    <div className="grid place-items-center gap-2 justify-self-end">
                        <span className="font-mulishExtraBold text-[2rem] leading-[3.2rem] text-[#F0F1F1]">
                            {maxValue}
                        </span>
                        <span className="font-mulishExtraBold text-[1.6rem] uppercase leading-[1.6rem] text-[#95A7AF]">
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
                onChange={onValueChange}
                className="col-span-full md:col-span-1 md:col-start-2 md:row-start-1"
                sx={{
                    height: 8,
                    '& .MuiSlider-track': {
                        border: 'none',
                        backgroundColor: '#fff'
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: '#0471AB'
                    },
                    '& .MuiSlider-thumb': {
                        height: 30,
                        width: 30,
                        backgroundColor: 'var(--color-yellow)',
                        '&:before': {
                            // Content: ' ',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            backgroundColor: '#fff'
                        }
                    },
                    '& .MuiSlider-valueLabel': {
                        borderRadius: '5px',
                        padding: '8px 20px',
                        backgroundColor: 'var(--color-heading2)'
                    },
                    '& .MuiSlider-valueLabelLabel': {
                        fontSize: '1.6rem',
                        lineHeight: '2.4rem',
                        fontFamily: 'var(--lato-bold)',
                        color: '#fff'
                    }
                }}
            />
        </div>
    );
};

export default Controller;
