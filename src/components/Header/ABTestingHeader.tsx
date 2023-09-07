import Tooltip from '@/components/Tooltip/Tooltip';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Navbar of icl page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ABTestingHeader = (): JSX.Element => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <header className="top-0 left-0 z-[99] grid w-full place-items-center md:fixed md:translate-y-8">
            <nav className="grid w-full grid-flow-col gap-12 justify-self-center bg-white px-10 py-8 md:w-auto md:gap-28 md:rounded-[1rem] md:px-12 md:shadow-md">
                <Link href="/" className="self-start">
                    <Image
                        src="/images/logos/logo-iclinic-desktop.png"
                        alt="My-iClinic"
                        width={184}
                        height={48}
                        quality={100}
                        className="max-h-[3.6rem] max-w-[12.7rem] object-contain xl:max-h-full xl:max-w-full"
                    />
                </Link>

                <ul className="grid grid-flow-col place-items-center gap-12 justify-self-end">
                    <li>
                        <Tooltip
                            text={
                                <div className="px-6 py-3">
                                    <span className="whitespace-nowrap font-mulishBold text-[1.8rem] leading-[2.4rem] text-heading">
                                        960 High Rd, London N12 9RY
                                    </span>
                                </div>
                            }
                            className="z-[100] -ml-40 md:hidden"
                            showTooltip={showTooltip}
                            arrowClassName="ml-[20rem]"
                        >
                            <button
                                className="grid grid-flow-col place-items-center gap-4"
                                title="Location"
                                onClick={() => setShowTooltip(!showTooltip)}
                            >
                                <Image src="/images/icons/icon-map-outline.svg" alt="Location" width={24} height={24} />
                                <span className="hidden font-mulishBold text-[1.8rem] leading-[2.4rem] text-heading md:block">
                                    960 High Rd, London N12 9RY
                                </span>
                            </button>
                        </Tooltip>
                    </li>
                    <li>
                        <Link
                            className="grid grid-flow-col place-items-center gap-4"
                            href="tel:+44 20 8445 8877"
                            title="Phone"
                        >
                            <Image
                                src="/images/icons/icon-telephone-outline.svg"
                                alt="Location"
                                width={24}
                                height={24}
                            />
                            <span className="hidden font-mulishBold leading-[2.4rem] text-heading md:block">
                                +44 20 8445 8877
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default ABTestingHeader;
