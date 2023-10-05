import { BulletPoint } from '@/components/page-sections';
import HTMLReactParser from 'html-react-parser';
interface StackedColumnInterface {
    savingMoneytitle: string | '';
    savingmoneyContent: string | '';
    savingTimetitle: string | '';
    savingtimeContent: string | '';
    savingVisiontitle: string | '';
    savingvisionContent: string | '';
    savingPlanettitle: string | '';
    savingplanetContent: string | '';
}

/**
 * Stack column for the side image section
 *
 * @param {StackedColumnInterface} { savingMoneytitle,
    savingmoneyContent,
    savingTimetitle,
    savingtimeContent,
    savingVisiontitle,
    savingvisionContent,
    savingPlanettitle,
    savingplanetContent}
 * @returns {*}  {JSX.Element}
 */
const StackColumn = ({
    savingMoneytitle,
    savingmoneyContent,
    savingTimetitle,
    savingtimeContent,
    savingVisiontitle,
    savingvisionContent,
    savingPlanettitle,
    savingplanetContent
}: StackedColumnInterface): JSX.Element => {
    return (
        <div className="grid gap-12 self-center">
            {/* Grid item 1 */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-y-6 gap-x-4">
                <BulletPoint />
                <h3 className="font-latoBold text-[2rem] leading-[2.4rem]">{savingMoneytitle || 'Saving Money'}</h3>
                <div className="col-span-2 grid gap-6">
                    <>
                        {' '}
                        {savingmoneyContent
                            ? HTMLReactParser(savingmoneyContent)
                            : HTMLReactParser(` <p>
                        <strong>One custom lens means one all- time purchase.</strong>
                    </p>
                    <p>
                        Never waste money by repeatedly buying plastic contact lenses to throw away. One ICL procedure
                        saves the average contact lens buyer <strong>£13,200!</strong>
                    </p>
                    <p>
                        For an average prescription, wearing glasses and contact lenses every year averages around £660
                        to keep your sight, with the added guarantee of an infection risk. For twenty years of sight
                        that accumulates to a cost of <strong>£13,200,</strong> while contributing to{' '}
                        <strong>16,000 million</strong> tonnes of plastic for those twenty tears of purchase and use.
                    </p>
                    <p>
                        Implantable Contact Lenses are a great long-term investment for permanently clear vision without
                        any plastic waste!
                    </p>`)}
                    </>
                </div>
            </div>
            {/* Grid item 2 */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-y-6 gap-x-4">
                <BulletPoint />

                <h3 className="font-latoBold text-[2rem] leading-[2.4rem]">{savingTimetitle || 'Saving Time'}</h3>
                <div className="col-span-2 grid gap-6">
                    <>
                        {' '}
                        {savingtimeContent
                            ? HTMLReactParser(savingtimeContent)
                            : HTMLReactParser(`<p>
                        <strong>Where are my contacts?</strong>
                    </p>
                    <p>Wake up in the morning with your sight ready before you are!</p>`)}
                    </>
                </div>
            </div>
            {/* Grid item 3 */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-y-6 gap-x-4">
                <BulletPoint />
                <h3 className="font-latoBold text-[2rem] leading-[2.4rem]">{savingVisiontitle || 'Saving Vision'}</h3>
                <div className="col-span-2 grid gap-6">
                    <>
                        {' '}
                        {savingvisionContent
                            ? HTMLReactParser(savingvisionContent)
                            : HTMLReactParser(`<p>
                        <strong>No risk of infections, dry eyes or blindness</strong>
                    </p>
                    <p>Your eye health is safely cared for.</p>`)}
                    </>
                </div>
            </div>
            {/* Grid item 4 */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-y-6 gap-x-4">
                <BulletPoint />

                <h3 className="font-latoBold text-[2rem] leading-[2.4rem]">
                    {savingPlanettitle || 'Saving Our Planet'}
                </h3>
                <div className="col-span-2 grid gap-6">
                    <>
                        {' '}
                        {savingplanetContent
                            ? HTMLReactParser(savingplanetContent)
                            : HTMLReactParser(`<p>
                        <strong>Sustainable contact lenses for a sustainable future.</strong>
                    </p>`)}
                    </>
                </div>
            </div>
        </div>
    );
};

export default StackColumn;
