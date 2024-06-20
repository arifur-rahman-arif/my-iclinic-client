import { AppCtx, CalculatorContext } from '@/page-sections/FinanceCalculator/Context';
import { EyeCount } from '@/page-sections/icl-components/FinanceCalculatorSection/CalculatorComponent/EyeCount';
import { ResultColumn } from '@/page-sections/icl-components/FinanceCalculatorSection/ResultColumn';
import { getElementTopPosition } from '@/utils/miscellaneous';
import Image from 'next/image';
import { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import PercentageCheckBox from './CalculatorComponent/PercentageCheckBox';
import styles from './styles/Alert.module.scss';

export interface AlertMessagesI {
    active?: boolean;
    key?: number | string;
    title: string;
    messages: string[];
}

/**
 * Finance calculation component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const FinanceCalculator = (): JSX.Element => {
    const ctx: CalculatorContext = useContext(AppCtx);
    const [showAlert, setShowAlert] = useState(false);
    const notificationRef = useRef<HTMLDivElement | null>(null);
    const [alertMessages, setAlertMessages] = useState<AlertMessagesI[]>([
        {
            active: true,
            key: 25,
            title: 'Ah, only 25% deposit?',
            messages: [
                'Ah, dipping your toes in the water and seeing things clearly!',
                "Ah, only 25% deposit? Nice! You're dipping your toe before the full plunge. Clear days are coming.",
                'Oh, 25%? Starting off light, just like those first sun rays of the morning!',
                'Choosing 25%, huh? Just a teaser before the grand reveal of perfect sight!'
            ]
        },
        {
            key: 30,
            title: "30%? Look at you! That's the spirit!",
            messages: [
                "30%? Look at you! That's the spirit, already eyeing the goal",
                'Getting the ball rolling, with 30% towards crystal-clear gazing!',
                'Oh, 25%? Starting off light, just like those first sun rays of the morning!',
                '30%, nice! Going a bit retro, but 100% forward to a clear-vision disco!'
            ]
        },
        {
            key: 35,
            title: '35%: Path to Clarity',
            messages: [
                "35%? You're finding your rhythm on this visual journey! Steady progress, clear sights ahead!",
                "Ah, 35%! That's the spirit of a trailblazer, paving the way to sharper horizons!",
                'Choosing 35% is like the build-up before the breathtaking crescendo of perfect vision!',
                'Onwards at 35%! Just like a captivating storyline, each chapter unfolds clearer sights!'
            ]
        },
        {
            key: 40,
            title: '40%: Bold Vision Step',
            messages: [
                "Bold move! You're 40% closer to a world in HD.",
                "40%? Whoa, Captain Confident! You're closer to spotting those unicorns!",
                'Choosing 40%! Building that foundation for skyscraper views!',
                "You're cranking up the volume to 40%! The sight-jam is about to drop!"
            ]
        },
        {
            key: 45,
            title: '45%: Halfway to Clarity',
            messages: [
                'Almost halfway there! A clearer tomorrow is on the horizon!',
                "45%? Rolling like a high roller! Vision's jackpot isn't far now.",
                '45%! Brewing up some eye magic with that choice!',
                "45%? It's like splitting a pizza. Half for now, the rest for those clear views"
            ]
        },
        {
            key: 50,
            title: '50%: Halfway to Stars',
            messages: [
                'Half in, all out! 50% down, 100% amazing vision to look forward to!',
                '50%? Walking that middle path straight into Visionville!',
                "Half now, half later? You're 100% ready for a sight-venture!",
                "Big spender vibes with 50%! You're halfway to seeing the stars."
            ]
        }
    ]);

    useEffect(() => {
        if (showAlert) {
            const windowSize = window.innerWidth;

            let timeoutId2: any;
            if (windowSize < 768) {
                timeoutId2 = setTimeout(() => {
                    window.scrollTo(0, getElementTopPosition(notificationRef.current as HTMLElement) - 200);
                }, 1000);
            }

            const timeoutId = setTimeout(() => {
                setShowAlert(false); // Hide the alert after the timeout
            }, 5000);

            return () => {
                clearTimeout(timeoutId);
                clearTimeout(timeoutId2);
            }; // Clear the timeout when component unmounts or when showAlert changes
        }
    }, [showAlert, alertMessages]); // Only watch showAlert and alertMessages

    return (
        <>
            {ctx.treatmentList.length
                ? ctx.treatmentList.map((treatment, index) => {
                      return (
                          <div className="no-search-index relative grid" key={index}>
                              {showAlert && (
                                  <div
                                      ref={notificationRef}
                                      className="w-full xl:absolute xl:right-0 xl:-translate-y-[calc(50%_+_2rem)]"
                                  >
                                      <Notification alertMessages={alertMessages} setShowAlert={setShowAlert} />
                                  </div>
                              )}

                              <EyeCount {...{ index }} />

                              <div className="z-[2] grid content-start rounded-bl-radius2 rounded-br-radius2 border border-[#EAECF0] bg-white lg:grid-cols-[auto_1fr] lg:gap-24">
                                  <PercentageCheckBox {...{ index, setShowAlert, setAlertMessages }} />
                                  {/* Grid item 2 */}
                                  <ResultColumn {...{ index, setShowAlert, setAlertMessages }} />
                              </div>
                          </div>
                      );
                  })
                : null}
        </>
    );
};

interface NotificationProps {
    alertMessages: AlertMessagesI[];
    setShowAlert: Dispatch<SetStateAction<boolean>>;
}

/**
 * Notification component
 *
 * @param {AlertMessagesI[]} alertMessages
 * @param {Dispatch<SetStateAction<boolean>>} setShowAlert
 * @returns {JSX.Element}
 * @constructor
 */
const Notification = ({ alertMessages, setShowAlert }: NotificationProps): JSX.Element => {
    let previousRandomIndex = -1;

    const activeMessage = alertMessages.find((message) => message.active);

    /**
     * Randomly selects a message from an array, ensuring that the same index is not chosen consecutively.
     *
     * @param {number | undefined} maxNumber
     * @returns {string} The randomly selected message.
     */
    const getRandomIndex = (maxNumber: number | undefined) => {
        if (!maxNumber) return 0;

        let randomIndex = Math.floor(Math.random() * maxNumber);

        // Ensure the new index is different from the previous one
        while (randomIndex === previousRandomIndex) {
            randomIndex = Math.floor(Math.random() * maxNumber);
        }

        previousRandomIndex = randomIndex;

        return randomIndex;
    };

    const getRandomNumber = getRandomIndex(15);

    return (
        <div
            className={`gap relative grid min-h-[22rem] w-full max-w-[66rem] overflow-hidden rounded-radius2 bg-[#FF5C00] sm:bg-transparent md:ml-auto ${styles.styles}`}
        >
            <Image
                src="/images/section-images/calculator-notification-bg.webp"
                alt=""
                fill
                className="absolute left-0 top-0 z-[-1] hidden h-full w-full sm:block"
            />
            <AiOutlineCloseCircle
                onClick={() => setShowAlert(false)}
                className="close-icon absolute right-0 top-0 h-10 w-10 -translate-x-8 translate-y-8 cursor-pointer fill-white transition-all duration-300 hover:scale-110"
            />

            <div className="grid content-start gap-6 px-10 py-12 sm:grid-cols-[auto_1fr] md:gap-8 md:px-12 md:py-16 xl:pb-24">
                <Image
                    src={`/images/icons/notification-icons/icon-${getRandomNumber ? getRandomNumber : 1}.svg`}
                    alt=""
                    width={100}
                    height={100}
                    className="h-[10rem] w-[10rem] object-contain"
                />

                <div className="grid content-start gap-6">
                    <span className="font-mulishExtraBold text-[2rem] uppercase leading-[2.4rem] text-white">
                        {activeMessage?.title}
                    </span>
                    <p className="text-[1.8rem] leading-[2.4rem] text-white md:line-clamp-2">
                        {activeMessage?.messages[getRandomIndex(activeMessage?.messages?.length)]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FinanceCalculator;
