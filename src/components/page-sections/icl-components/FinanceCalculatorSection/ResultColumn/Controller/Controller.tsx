import Slider from '@mui/material/Slider';

interface ControllerInterface {
    title: string;
    minValue: number;
    maxValue: number;
    defaultValue: number;
    value: number;
    valueLabelFormat?: string;
    onValueChange: (e: any) => void;
    marks?:
        | Array<{
              value: number;
          }>
        | false;
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
 * @param {Function} onValueChange - A function to be called when the value of the finance calculator changes.
 *   - `value` parameter: A function or a number representing the new value of the finance calculator.
 * @param {string} valueLabelFormat
 * @returns {JSX.Element} - A JSX element representing the finance calculator.
 * @constructor
 */
const Controller = ({
    title,
    minValue,
    maxValue,
    defaultValue,
    value,
    onValueChange,
    valueLabelFormat,
    marks
}: ControllerInterface): JSX.Element => {
    return (
        <div className="grid w-full max-w-[40rem] grid-cols-[auto_1fr_auto] items-end gap-4 justify-self-center xs:gap-12">
            <div className="grid translate-y-2 place-items-center gap-2 justify-self-start md:translate-y-0">
                <span className="font-latoBold text-[3rem] leading-[3.6rem] text-heading">{minValue}</span>
                <span className="font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-heading">month</span>
            </div>

            <Slider
                defaultValue={defaultValue}
                value={value}
                valueLabelFormat={valueLabelFormat}
                aria-label={title}
                valueLabelDisplay="on"
                max={maxValue}
                min={minValue}
                onChange={onValueChange}
                className="-translate-y-1 !p-0 lg:-translate-y-2"
                marks={marks}
                step={null}
                sx={{
                    height: 8,
                    '& .MuiSlider-track': {
                        border: 'none',
                        backgroundColor: 'var(--color-heading)'
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
                        padding: '8px 15px',
                        backgroundColor: 'var(--color-heading2)'
                    },
                    '& .MuiSlider-valueLabelLabel': {
                        fontSize: '1.6rem',
                        lineHeight: '2.4rem',
                        fontFamily: 'var(--lato-bold)',
                        color: '#fff'
                    },
                    '& .MuiSlider-mark': {
                        height: '8px',
                        width: '8px',
                        borderRadius: '100%',
                        marginLeft: '-5px'
                    },
                    '& .MuiSlider-markActive': {
                        backgroundColor: '#fff'
                    }
                }}
            />

            <div className="grid translate-y-2 place-items-center gap-2 justify-self-end md:translate-y-0">
                <span className="font-latoBold text-[3rem] leading-[3.6rem] text-heading">{maxValue}</span>
                <span className="font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-heading">month</span>
            </div>
        </div>
    );
};

export default Controller;
