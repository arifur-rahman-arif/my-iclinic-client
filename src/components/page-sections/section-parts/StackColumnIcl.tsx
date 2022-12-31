import Image from 'next/image';
import IconPiggyBank from '@/icons/icon-piggy-bank-black.svg';
import IconClock from '@/icons/icon-clock-outline-blue-tick.svg';
import IconEye from '@/icons/icon-eye-blue-ball.svg';
import IconTree from '@/icons/icon-plam-tree.svg';

/**
 * Stack column for the side image section
 *
 * @returns {*}  {JSX.Element}
 */
const StackColumn = (): JSX.Element => {
    return (
        <div className="grid gap-12 self-center">
            {/* Grid item 1 */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-y-6 gap-x-4">
                <Image src={IconPiggyBank} alt="" quality={50} className="h-16 w-16" />
                <h3 className="font-latoBold text-[2rem] leading-[2.4rem]">Saving Money</h3>
                <div className="col-span-2 grid gap-6">
                    <p>One custom lens means one all- time purchase.</p>
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
                    </p>
                </div>
            </div>
            {/* Grid item 2 */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-y-6 gap-x-4">
                <Image src={IconClock} alt="" quality={50} className="h-16 w-16" />
                <h3 className="font-latoBold text-[2rem] leading-[2.4rem]">Saving Time</h3>
                <div className="col-span-2 grid gap-6">
                    <p>
                        Where are my contacts?
                        <br />
                        Wake up in the morning with your sight ready before you are!
                    </p>
                </div>
            </div>
            {/* Grid item 3 */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-y-6 gap-x-4">
                <Image src={IconEye} alt="" quality={50} className="h-16 w-16" />
                <h3 className="font-latoBold text-[2rem] leading-[2.4rem]">Saving Vision</h3>
                <div className="col-span-2 grid gap-6">
                    <p>No risk of infections, dry eyes or blindness</p>
                    <p>Your eye health is safely cared for.</p>
                </div>
            </div>
            {/* Grid item 4 */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-y-6 gap-x-4">
                <Image src={IconTree} alt="" quality={50} className="h-16 w-16" />
                <h3 className="font-latoBold text-[2rem] leading-[2.4rem]">Saving Our Planet</h3>
                <div className="col-span-2 grid gap-6">
                    <p>Sustainable contact lenses for a sustainable future.</p>
                </div>
            </div>
        </div>
    );
};

export default StackColumn;
