import { getTheMonthName } from '@/utils/miscellaneous';

interface CostingCalenderVariableInterface {
    month: string;
    year: number;
}

interface CostCalenderInterface {
    installmentTime: number;
    monthlyPayment: number;
}

/**
 * The costing calender component
 *
 * @param {number} installmentTime
 * @param {number} monthlyPayment
 * @returns {JSX.Element}
 * @constructor
 */
const CostCalender = ({ installmentTime, monthlyPayment }: CostCalenderInterface): JSX.Element => {
    // Get current date
    const currentDate = new Date();
    // Adding 1 month extra to the current date
    currentDate.setMonth(currentDate.getMonth() + 1);
    // Initialize an empty array to store the months
    const costingCalender: CostingCalenderVariableInterface[] = [];

    // Iterate over the next selected months
    for (let i = 0; i < installmentTime; i++) {
        // Get the month index (0-11) of the current date + i months
        const monthIndex = (currentDate.getMonth() + i) % 12;

        // Calculate the year for the next month
        const year = currentDate.getFullYear() + Math.floor((currentDate.getMonth() + i) / 12);

        // Create a new date object for the next month/year
        const newDate = new Date(year, monthIndex, 1);

        // Add the month & year to the array
        costingCalender.push({
            month: getTheMonthName(monthIndex, true),
            year: newDate.getFullYear()
        });
    }

    return (
        <div className="grid gap-12">
            <div className="max-h-[25rem] overflow-y-auto" id="cost-calculator">
                <table className="w-full max-w-[97%] pr-12">
                    <thead className="sticky top-0 bg-white before:absolute before:bottom-0 before:left-0 before:block before:h-[0.1rem] before:w-full before:bg-heading before:content-['']">
                        <tr className="">
                            <th className="w-[calc(100%_/_3)] pb-2 text-center">
                                <strong className="text-[1.4rem] leading-8">Year</strong>
                            </th>
                            <th className="w-[calc(100%_/_3)] pb-2 text-center">
                                <strong className="text-[1.4rem] leading-8">Month</strong>
                            </th>
                            <th className="w-[calc(100%_/_3)] pb-2 text-center">
                                <strong className="text-[1.4rem] leading-8">Amount</strong>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {costingCalender.map((costDateTime, index) => (
                            <tr key={index}>
                                <td className="py-2 text-center">
                                    <strong className="font-mulishMedium text-[1.4rem] leading-8">
                                        {costDateTime.year}
                                    </strong>
                                </td>
                                <td className="py-2 text-center">
                                    <strong className="font-mulishMedium text-[1.4rem] leading-8">
                                        {costDateTime.month}
                                    </strong>
                                </td>
                                <td className="py-2 text-center">
                                    <strong className="font-mulishMedium text-[1.4rem] leading-8">
                                        £{monthlyPayment}
                                    </strong>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CostCalender;
