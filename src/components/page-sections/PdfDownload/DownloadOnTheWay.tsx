import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import H3Variant3 from 'src/components/Headings/H3Variant3';

interface DownloadOnTheWayInterface {
    showDownloadOnTheWayTemplate: boolean;
    setShowThankYouTemplate: Dispatch<SetStateAction<boolean>>;
    setShowDownloadOnTheWayTemplate: Dispatch<SetStateAction<boolean>>;
    downloadFile?: string;
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
    showDownloadOnTheWayTemplate,
    downloadFile
}: DownloadOnTheWayInterface) => {
    const anchorRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            showDownloadOnTheWayTemplate && anchorRef.current?.click();
            setShowThankYouTemplate(true);
            setShowDownloadOnTheWayTemplate(false);
        }, 2000);

        // Clear the timeout when the component unmounts or if the dependencies change
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (!showDownloadOnTheWayTemplate) {
            // Automatically trigger the download after 3 seconds
            const downloadTimeout = setTimeout(() => {
                anchorRef.current?.click();
            }, 3000);

            return () => clearTimeout(downloadTimeout);
        }
    }, [showDownloadOnTheWayTemplate]);

    return (
        <div
            className="mx-auto grid w-full max-w-[45rem] grid-cols-1 place-items-center content-start px-8 py-12 md:py-28"
            id="pdf-download-confirmation"
        >
            <H3Variant3 className="text-center normal-case">Your download is on its way</H3Variant3>
            <p className="mt-12 max-w-[32.4rem] text-center">
                Thank you for submitting!
                <br />
                We have sent our information booklet to your email and your downloads folder.
            </p>
            <span className="mt-24 block max-w-[25.3rem] text-center font-latoBold text-[2rem] leading-[2.4rem]">
                Need help with your download?
            </span>
            <p className="mt-6">Please call for any further help</p>

            <a href="tel:0208 445 8877" className="font-mulishBold text-[2rem] leading-[2.4rem]">
                0208 445 8877
            </a>

            <p className="mt-12 text-center">
                If download is not starting{' '}
                <a
                    href={downloadFile}
                    download
                    className="relative inline-block font-mulishBold text-[1.8rem] leading-[2.4rem] text-blue decoration-blue underline-offset-4 transition-all duration-500 hover:underline"
                >
                    Click here
                </a>{' '}
                to download manually
            </p>
            <a href={downloadFile} ref={anchorRef} download></a>
        </div>
    );
};

export default DownloadOnTheWay;
