import IconPercentage from '@/icons/icon-0-percentage.svg';
import IconPercentageDark from '@/icons/icon-0-percentage-dark.svg';
import IconHand from '@/icons/icon-person-hand-holding-love.svg';
import IconHandDark from '@/icons/icon-person-hand-holding-love-dark.svg';
import IconPerson from '@/icons/icon-person-with-eye.svg';
import IconPersonDark from '@/icons/icon-person-with-eye-dark.svg';

import { UspSectionInterface } from './UspSection';

export const presbyondUspList: UspSectionInterface[] = [
    {
        image: IconPercentage,
        title: (
            <>
                0% interest-free
                <br /> finance available (up to 24 months)
            </>
        )
    },
    {
        image: IconPerson,
        title: (
            <>
                The UK’s top
                <br /> ophthalmologists{' '}
                <span className="whitespace-nowrap text-center font-mulishBold text-[1.8rem] leading-[2.2rem]">
                    & surgeons
                </span>
            </>
        )
    },
    {
        image: IconHand,
        title: (
            <>
                Dedicated
                <br /> aftercare from our team
            </>
        )
    }
];

export const homeUspList: UspSectionInterface[] = [
    {
        image: IconPercentageDark,
        title: (
            <>
                0% interest-free
                <br /> finance available (up to 24 months)
            </>
        )
    },
    {
        image: IconPersonDark,
        title: (
            <>
                The UK’s top
                <br /> ophthalmologists{' '}
                <span className="whitespace-nowrap text-center font-mulishBold text-[1.8rem] leading-[2.2rem]">
                    & surgeons
                </span>
            </>
        )
    },
    {
        image: IconHandDark,
        title: (
            <>
                Dedicated
                <br /> aftercare from our team
            </>
        )
    }
];
