import { Container } from '@/components/Container';
import IconArrow from '@/icons/icon-double-arrow.svg';
import { generateBreadcrumbs } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import IconHome from './IconHome';

/**
 * Breadcrumb component
 *
 * @returns {*}  {JSX.Element}
 */
const BreadCrumb = (): JSX.Element => {
    const router = useRouter();
    const paths = generateBreadcrumbs(router);
    const excludeUrls = ['/eye-treatments', '/vision-correction', '/pricing-and-financing', '/laser-eye-surgery'];

    return (
        <>
            <div className="mt-12 w-full md:h-[0.1rem] xl:mt-10"></div>

            <Container className="flex flex-wrap items-center justify-start gap-4">
                {router.pathname === '/' ? (
                    <Link href="/" aria-label="Home" className="flex items-center justify-start gap-6">
                        <IconHome active={true} />
                        <span
                            className={`translate-y-[0.1rem] cursor-pointer whitespace-nowrap font-mulishBold text-[1.5rem] capitalize leading-[1.6rem] text-brand`}
                        >
                            Home
                        </span>
                    </Link>
                ) : (
                    <Link href="/" aria-label="Home">
                        <IconHome active={false} />
                    </Link>
                )}

                {paths.map((path, index) => (
                    <div className="flex items-center justify-start gap-2" key={index}>
                        <Image src={IconArrow} alt="" className="translate-y-[0.1rem]" />
                        <Link href={!excludeUrls.includes(path.url) ? path.url : '/'}>
                            <span
                                className={`cursor-pointer whitespace-nowrap font-mulishBold text-[1.5rem] capitalize leading-[1.6rem] ${
                                    index == paths.length - 1 ? 'text-brand' : 'text-[#697072]'
                                }`}
                            >
                                {path.name}
                            </span>
                        </Link>
                    </div>
                ))}
            </Container>
        </>
    );
};

export default BreadCrumb;
