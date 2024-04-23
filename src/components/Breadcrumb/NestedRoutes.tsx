import { generateBreadcrumbs } from '@/utils/miscellaneous';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { Fragment } from 'react';

interface NestedRoutesProps {
    router: NextRouter;
    pathClassName?: string;
    linkClassName?: string;
    activeLinkClass?: string;
}

/**
 * Nested routes for the breadcrumb
 *
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
const NestedRoutes = ({ router, pathClassName, linkClassName, activeLinkClass }: NestedRoutesProps): JSX.Element => {
    const excludeUrls = [
        '/eye-treatments',
        '/vision-correction',
        '/pricing-and-financing',
        '/articles/page',
        '/articles/category'
    ];
    const paths = generateBreadcrumbs(router);

    return (
        <>
            {paths.map((path, index) => (
                <Fragment key={index}>
                    {!excludeUrls.includes(path.url) && (
                        <div className="flex min-w-max items-center justify-start gap-2" key={index}>
                            <svg
                                className="-translate-x-1 translate-y-[0.1rem]"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13 17L18 12L13 7"
                                    stroke="#9B9FA1"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={pathClassName}
                                />
                                <path
                                    d="M6 17L11 12L6 7"
                                    stroke="#9B9FA1"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={pathClassName}
                                />
                            </svg>

                            <Link href={!excludeUrls.includes(path.url) ? path.url : '/'} className="no-underline">
                                <span
                                    className={`whitespace-nowrap font-mulishBold text-[1.2rem] uppercase leading-[1.6rem] md:text-[1.5rem] ${
                                        index == paths.length - 1
                                            ? activeLinkClass || 'text-heading2'
                                            : linkClassName || 'text-[#697072]'
                                    }`}
                                >
                                    {path.url.includes('/articles/page') ? `Page ${path.name}` : path.name}
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
