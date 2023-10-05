import IconArrow from '@/icons/icon-double-arrow.svg';
import { generateBreadcrumbs } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

interface NestedRoutesProps {
    router: NextRouter;
    textClassName?: string;
}

/**
 * Nested routes for the breadcrumb
 *
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
const NestedRoutes = ({ router, textClassName }: NestedRoutesProps): JSX.Element => {
    const excludeUrls = ['/eye-treatments', '/vision-correction', '/pricing-and-financing', '/laser-eye-surgery'];
    const paths = generateBreadcrumbs(router);

    return (
        <>
            {paths.map((path, index) => (
                <Fragment key={index}>
                    {!excludeUrls.includes(path.url) && (
                        <div className="flex min-w-max items-center justify-start gap-2" key={index}>
                            <Image src={IconArrow} alt="" className="h-8 w-8 translate-y-[0.1rem]" />

                            <Link href={!excludeUrls.includes(path.url) ? path.url : '/'} className="no-underline">
                                <span
                                    className={twMerge(
                                        `whitespace-nowrap font-mulishBold text-[1.2rem] capitalize leading-[1.6rem] md:text-[1.5rem] ${
                                            index == paths.length - 1 ? 'text-heading2' : 'text-[#697072]'
                                        }`,
                                        textClassName
                                    )}
                                >
                                    {path.name}
                                </span>
                            </Link>
                        </div>
                    )}
                </Fragment>
            ))}
        </>
    );
};

export default NestedRoutes;
