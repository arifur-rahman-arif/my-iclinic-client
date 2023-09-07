import { AppCtx } from '@/page-sections/FinanceCalculator/Context';
import { AlertMessagesI } from '@/page-sections/icl-components/FinanceCalculatorSection/FinanceCalculator';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { Controller } from './Controller';
import { MonthlyPayment } from './MonthlyPayment';

interface ResultColumnProps {
    index: number;
    setShowAlert: Dispatch<SetStateAction<boolean>>;
    setAlertMessages: Dispatch<SetStateAction<AlertMessagesI[]>>;
}

/**
 * ResultColumn component
 *
 * @param {number} index
 * @returns {JSX.Element}
 * @constructor
 */
const ResultColumn = ({ index, setShowAlert, setAlertMessages }: ResultColumnProps) => {
    const ctx = useContext(AppCtx);
    const [timeOutId, setTimeOutId] = useState<any>();

    /**
     * Handle input change event
     * @param {any} e
     */
    const handleValueChange = (e: any) => {
        const currentValue = e.target.value;
        ctx.setInstallment(index, currentValue);

        // Update the alertMessages state based on the selected percentage
        setAlertMessages((prevState) => {
            const tempState = prevState.map((messageObj) => {
                return {
                    ...messageObj,
                    active: false
                };
            });

            if (currentValue <= 1) {
                tempState.push({
                    active: true,
                    title: '1 Month: Vision Boost in a Blink!',
                    messages: [
                        'One and done! Like getting perfect vision in a blink! ',
                        'Just 1 month? Speedster alert! Racing straight to pristine vision.',
                        'Choosing a single month? Zooming like a superhero to clarity!',
                        '1 month, huh? Warp speed to perfect sight! Ready, set, SEE!'
                    ]
                });
            }

            if (currentValue > 1 && currentValue <= 5) {
                tempState.push({
                    active: true,
                    title: `${currentValue} Months: Stepping Stones to Clearer Vision`,
                    messages: [
                        'A short stint to a lifelong vision upgrade. Smart move!',
                        '2-5 months? Taking those baby steps to big, bright views!',
                        'A few months for clarity? Small sips of time to drink in a world of beauty!',
                        'Ah, a short cruise down Clear-Sight Lane! Enjoy the journey.'
                    ]
                });
            }

            if (currentValue > 5 && currentValue <= 12) {
                tempState.push({
                    active: true,
                    title: `Year-Long Vision Journey`,
                    messages: [
                        '6-12 months? A year of sweet anticipation. Like a countdown to the best vision party ever!',
                        'Choosing a leisurely stroll? Sights set on perfection all year round!',
                        'Ah, turning those calendar pages! Each one closer to HD clarity.',
                        'Savoring the voyage, each month a vision treat!'
                    ]
                });
            }

            if (currentValue > 12 && currentValue <= 18) {
                tempState.push({
                    active: true,
                    title: `Embracing the Vision Journey: Steady Progress Ahead`,
                    messages: [
                        'Great, consistency is key! Slow and steady wins the vision race.',
                        '13-18 months? Like slowly savoring your favorite TV show. Enjoy every episode!',
                        'Choosing a steady unwrap? The gift of sight, month after delightful month!',
                        'Ah, the scenic route to Eye-topia! Buckle up for a delightful ride!'
                    ]
                });
            }

            if (currentValue > 18 && currentValue <= 24) {
                tempState.push({
                    active: true,
                    title: 'Prudent Vision Planning',
                    messages: [
                        "Ah wise choice! You don't want to break your bank, just correct your vision.",
                        '19-24 months? Stretching the joy, are we? Like making a pizza last two years... but way more satisfying!',
                        'Playing the long game with vision? Score big in clarity over time!',
                        'Ah, letting your bank chill while your vision thrills! Smart move.'
                    ]
                });
            }

            return tempState;
        });

        clearTimeout(timeOutId);
        const timeoutId = setTimeout(() => {
            setShowAlert(true); // Hide the alert after the timeout
        }, 1000);

        setTimeOutId(timeoutId);
    };

    return (
        <div className="grid content-start gap-24 px-8 py-12 lg:grid-cols-[1fr_auto]">
            <div className="grid content-start gap-12 md:gap-32 xl:content-between xl:gap-40">
                <p className="justify-self-center text-center font-latoBold text-[2rem] leading-[2.4rem] text-heading md:text-[2.4rem] md:leading-[3.2rem]">
                    Monthly payment period
                </p>

                <Controller
                    title="Number of instalments"
                    minValue={ctx.treatmentList[index].minInstallment}
                    maxValue={ctx.treatmentList[index].maxInstallment}
                    value={ctx.treatmentList[index].defaultInstallment}
                    defaultValue={10}
                    onValueChange={handleValueChange}
                    valueLabelFormat={`${ctx.treatmentList[index].defaultInstallment} month`}
                />
            </div>

            <MonthlyPayment index={index} />
        </div>
    );
};

export default ResultColumn;
