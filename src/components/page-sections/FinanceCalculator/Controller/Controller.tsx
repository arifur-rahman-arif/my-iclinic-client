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
    valueLabelFormat
}: ControllerInterface): JSX.Element => {
    return (
        <div className="row-start-2 mt-16 grid grid-cols-[auto_1fr_auto] items-center justify-start gap-8 self-end md:row-start-auto md:mt-0">
            <span className="font-mulishBold text-[1.6rem]">
                {minValue}
                {appendValueText}
            </span>
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
                sx={{
                    height: 8,
                    '& .MuiSlider-track': {
                        border: 'none',
                        backgroundColor: 'var(--color-dark-blue)'
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
                            backgroundColor: 'var(--color-dark-blue)'
                        }
                    },
                    '& .MuiSlider-valueLabel': {
                        borderRadius: '5px',
                        padding: '8px 20px',
                        backgroundColor: 'var(--color-yellow)'
                    },
                    '& .MuiSlider-valueLabelLabel': {
                        fontSize: '1.6rem',
                        lineHeight: '1.6rem',
                        fontFamily: 'var(--mulish-bold)'
                    }
                }}
            />
            <span className="font-mulishBold text-[1.6rem]">
                {maxValue}
                {appendValueText}
            </span>
        </div>
    );
};

export default Controller;
