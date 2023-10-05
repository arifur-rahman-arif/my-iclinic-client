interface ProgressMenuProps {
    percentage: number;
}

/**
 * Progress menu of question bar
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ProgressMenu = ({ percentage }: ProgressMenuProps) => {
    const circleFullValue = 377;

    // function animatePercentageIncrease(targetPercentage, duration) {
    //     const container = document.getElementById('percentageContainer');
    //     let currentPercentage = 0;
    //     let startTime = null;
    //
    //     function updatePercentage(timestamp) {
    //         if (!startTime) startTime = timestamp;
    //         const elapsedTime = timestamp - startTime;
    //         const progress = Math.min(elapsedTime / duration, 1);
    //         const percentage = Math.round(progress * targetPercentage);
    //
    //         container.textContent = percentage + '%';
    //
    //         if (progress < 1) {
    //             requestAnimationFrame(updatePercentage);
    //         }
    //     }
    //
    //     requestAnimationFrame(updatePercentage);
    // }

    return (
        <div className="grid place-items-center gap-6">
            <span className="font-mulishBold uppercase text-white">Your progress</span>
            <div className="relative flex h-[16.2rem] w-[16.2rem] items-center justify-center overflow-hidden rounded-full bg-[#EDEEEF]">
                <div className="relative z-[2] grid h-[12.5rem] w-[12.5rem] place-items-center rounded-full bg-white">
                    <span className="font-mulishBold text-[2rem] leading-[2.4rem]">{percentage}%</span>
                </div>
                <svg className="absolute inset-0 z-[1] h-full w-full">
                    <circle
                        r={60}
                        cy={81}
                        cx={81}
                        fill="transparent"
                        stroke="#0186B0"
                        strokeWidth="60"
                        strokeDasharray={circleFullValue}
                        strokeDashoffset={circleFullValue - (percentage * circleFullValue) / 100}
                        className="transition-all duration-[1.5s]"
                    ></circle>
                </svg>
            </div>
        </div>
    );
};

export default ProgressMenu;
