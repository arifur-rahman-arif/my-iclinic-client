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
            <strong>Cost break down</strong>
            <div className="overflow-y-auto max-h-[25rem]" id="cost-calculator">
                <table className="w-full pr-12 max-w-[97%]">
                    <thead className="sticky top-0 bg-brandLight relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[0.1rem] before:block before:bg-heading">
                        <tr className="">
                            <th className="text-left w-[calc(100%_/_3)] pb-2 text-center">
                                <strong className="text-[1.4rem] leading-8">Year</strong>
                            </th>
                            <th className="text-left w-[calc(100%_/_3)] pb-2 text-center">
                                <strong className="text-[1.4rem] leading-8">Month</strong>
                            </th>
                            <th className="text-left w-[calc(100%_/_3)] pb-2 text-center">
                                <strong className="text-[1.4rem] leading-8">Amount</strong>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {costingCalender.map((costDateTime, index) => (
                            <tr key={index}>
                                <td className="py-2 text-center">
                                    <strong className="text-[1.4rem] font-mulishMedium leading-8">
                                        {costDateTime.year}
                                    </strong>
                                </td>
                                <td className="py-2 text-center">
                                    <strong className="text-[1.4rem] font-mulishMedium leading-8">
                                        {costDateTime.month}
                                    </strong>
                                </td>
                                <td className="py-2 text-center">
                                    <strong className="text-[1.4rem] font-mulishMedium leading-8">
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
