import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import Page from '@/components/Page';

/**
 * 404 page of the website
 *
 * @returns {*}  {JSX.Element}
 */
const Page404: NextPage = (): JSX.Element => {
    return (
        <Page title="404">
            <div className="grid h-screen w-full place-items-center content-center bg-brandLight">
                <div>
                    <Image src="/images/section-images/404.png" alt="404" width={723} height={427} quality={70} />
                </div>
                <div className="mt-12 flex flex-col items-start justify-start gap-6">
                    <h3 className="font-latoBold normal-case">Something is missing!</h3>
                    <p className="max-w-[30.6rem]">The page you are looking for doesn't exist in our website.</p>
                    <Link href="/" className="mt-24 grid grid-flow-col place-items-center gap-6">
                        <Image
                            alt=""
                            width={24}
                            height={24}
                            src="/images/icons/icon-arrow-tail-left.svg"
                            quality={70}
                        />
                        <span className="font-mulishBold capitalize">Go back</span>
                    </Link>
                </div>
            </div>
        </Page>
    );
};

// @ts-ignore
Page404.layout = 'noNavigationLayout';
export default Page404;
