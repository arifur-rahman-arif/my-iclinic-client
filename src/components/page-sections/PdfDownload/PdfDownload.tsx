import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { pdfList } from '@/page-sections/PdfDownload/pdfList';
import PdfListComponent from '@/page-sections/PdfDownload/PdfListComponent';
import Thankyou from '@/page-sections/PdfDownload/Thankyou';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import DownloadForm from './DownloadForm';
import HTMLReactParser from 'html-react-parser';

const DownloadOnTheWay = dynamic(() => import('./DownloadOnTheWay'));

interface PdfDownloadInterface {
    title: ReactNode;
    list?: ReactNode[];
    description?: string;
    pageSlug: string;
    downloadFile: string;
}

/**
 * Pdf download section
 *
 * @returns {*}  {JSX.Element}
 */
const PdfDownload = ({ title, list, description, pageSlug, downloadFile }: PdfDownloadInterface): JSX.Element => {
    const [showForm, setShowForm] = useState<boolean>(true);
    const [showDownloadOnTheWayTemplate, setShowDownloadOnTheWayTemplate] = useState<boolean>(false);
    const [showThankYouTemplate, setShowThankYouTemplate] = useState<boolean>(false);

    return (
        <Section>
            <Container>
                {/* <div className="relative mx-auto mb-12 grid max-w-[100.2rem] grid-cols-1 justify-items-center gap-8 md:mb-16"> */}
                {/*     <h2> */}
                {/*         <strong>Download our guide</strong> */}
                {/*     </h2> */}
                {/*     <span className="h-4 overflow-hidden"> */}
                {/*         <Image src={IconPin} alt="" /> */}
                {/*     </span> */}
                {/* </div> */}
                <div className="relative mx-auto grid max-w-[100.2rem] grid-cols-1 rounded-primary bg-white shadow-[0px_1px_3px_0px_rgba(0,21,41,0.06),0px_1px_2px_0px_rgba(0,21,41,0.04)] md:grid-cols-[auto_1fr]">
                    <div className="flex w-full flex-col items-center justify-center gap-12 rounded-tl-primary rounded-bl-primary bg-[#003E79] py-12 px-8 md:max-w-[43.9rem] md:px-20">
                        <div>
                            <Image
                                src="/images/section-images/eye-testing-letters.svg"
                                alt=""
                                quality={70}
                                width={253}
                                height={160}
                                className="h-[16rem] w-[25.3rem]"
                            />
                        </div>

                        <h3 className="mt-8 text-center font-mulishBold text-[2.8rem] leading-[3.2rem] text-white">
                            {typeof title === 'string' ? HTMLReactParser(title) : title}
                        </h3>

                        {description && <p className="text-center text-white [&_*]:text-white">{description}</p>}

                        {list?.length && (
                            <ul className="mt-12 flex w-full flex-col items-start justify-start gap-[1.5rem] pb-12 md:pl-[7.5rem]">
                                {pdfList.map((list, index) => (
                                    <PdfListComponent key={index} listText={list} />
                                ))}
                            </ul>
                        )}
                    </div>

                    {showForm && (
                        <DownloadForm
                            setShowForm={setShowForm}
                            setShowDownloadOnTheWayTemplate={setShowDownloadOnTheWayTemplate}
                            pageSlug={pageSlug}
                        />
                    )}

                    {showDownloadOnTheWayTemplate && (
                        <DownloadOnTheWay
                            showDownloadOnTheWayTemplate={showDownloadOnTheWayTemplate}
                            setShowThankYouTemplate={setShowThankYouTemplate}
                            setShowDownloadOnTheWayTemplate={setShowDownloadOnTheWayTemplate}
                            downloadFile={downloadFile}
                        />
                    )}

                    {showThankYouTemplate && <Thankyou downloadFile={downloadFile} />}
                </div>
            </Container>
        </Section>
    );
};

export default PdfDownload;
