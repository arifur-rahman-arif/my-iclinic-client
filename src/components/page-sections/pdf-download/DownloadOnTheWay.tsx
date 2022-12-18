import { LinkText } from '@/components/link';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface DownloadOnTheWayInterface {
    showDownloadOnTheWayTemplate: boolean;
    setShowThankYouTemplate: Dispatch<SetStateAction<boolean>>;
    setShowDownloadOnTheWayTemplate: Dispatch<SetStateAction<boolean>>;
}

/**
 * Download on the way component
 *
 * @param {DownloadOnTheWayInterface} {
 *     setShowThankYouTemplate,
 *     setShowDownloadOnTheWayTemplate,
 *     showDownloadOnTheWayTemplate
 * }
 * @returns {*}
 */
const DownloadOnTheWay = ({
    setShowThankYouTemplate,
    setShowDownloadOnTheWayTemplate,
    showDownloadOnTheWayTemplate
}: DownloadOnTheWayInterface) => {
    const anchorRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        return () => {
            setTimeout(() => {
                showDownloadOnTheWayTemplate && anchorRef.current?.click();
                setShowThankYouTemplate(true);
                setShowDownloadOnTheWayTemplate(false);
            }, 2000);
        };
    }, []);

    return (
        <div className="mx-auto grid w-full max-w-[45rem] grid-cols-1 place-items-center content-start px-8 py-12 md:py-28">
            <h2 className="normal-case">Your download is on its way</h2>
            <p className="mt-12 max-w-[31.4rem] text-center">
                Thank you for submitting!
                <br />
                We have sent our information booklet to your email and your downloads folder.
            </p>
            <span className="mt-24 font-mulishBold text-[2rem] leading-[2.4rem]">
                Need some help with your download?
            </span>
            <p className="mt-6">Please call for any further help</p>
            <span className="font-mulishBold text-[2rem] leading-[2.4rem]">0208 445 8877</span>

            <p className="mt-12 text-center">
                If download is not starting{' '}
                <LinkText href="" className="!font-mulishBold text-[1.8rem] text-blue" indicatorColor="bg-blue">
                    Click here
                </LinkText>{' '}
                to download manually
            </p>
            <a href="/pdf/cataract-surgery.pdf" ref={anchorRef} download></a>
        </div>
    );
};

export default DownloadOnTheWay;
