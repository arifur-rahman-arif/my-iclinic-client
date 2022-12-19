import { Container } from '@/components/container';
import DownloadForm from './DownloadForm';
import Image from 'next/image';
import PdfList from './PdfList';
import { Section } from '@/components/section';
import pdfList from './pdfList';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const DownloadOnTheWay = dynamic(() => import('./DownloadOnTheWay'));
const Thankyou = dynamic(() => import('./Thankyou'));

/**
 * Pdf download section
 *
 * @returns {*}  {JSX.Element}
 */
const PdfDownload = (): JSX.Element => {
    const [showForm, setShowForm] = useState<boolean>(true);
    const [showDownloadOnTheWayTemplate, setShowDownloadOnTheWayTemplate] = useState<boolean>(false);
    const [showThankYouTemplate, setShowThankYouTemplate] = useState<boolean>(false);

    return (
        <Section>
            <Container>
                <div className="relative mx-auto grid max-w-[100.2rem] grid-cols-1 rounded-primary bg-white shadow-shadow1 md:grid-cols-[auto_1fr]">
                    <Image
                        alt=""
                        src="/images/section-images/half-skewed-shape.svg"
                        width={280}
                        height={614}
                        quality={1}
                        className="absolute top-0 right-0 -z-[1] hidden h-[61.4rem] w-[28rem] translate-x-[40%] xl:block"
                    />
                    <div className="flex flex-col items-center justify-start rounded-tl-primary rounded-bl-primary bg-brandLight py-12 px-8 md:max-w-[43.9rem]">
                        <div>
                            <Image
                                src="/images/section-images/eye-testing-letters.svg"
                                alt=""
                                quality={60}
                                width={253}
                                height={160}
                                className="h-[16rem] w-[25.3rem]"
                            />
                        </div>

                        <h3 className="mt-8 text-center font-mulishBold text-[2.8rem] leading-[3.2rem]">
                            Get the guide to Modern Cataract Surgery
                        </h3>

                        <ul className="mt-12 flex w-full flex-col items-start justify-start gap-[1.5rem] pb-12 md:pl-[7.5rem]">
                            {pdfList.map((list, index) => (
                                <PdfList key={index} listText={list} />
                            ))}
                        </ul>
                    </div>

                    {showForm && (
                        <DownloadForm
                            setShowForm={setShowForm}
                            setShowDownloadOnTheWayTemplate={setShowDownloadOnTheWayTemplate}
                        />
                    )}

                    {showDownloadOnTheWayTemplate && (
                        <DownloadOnTheWay
                            showDownloadOnTheWayTemplate={showDownloadOnTheWayTemplate}
                            setShowThankYouTemplate={setShowThankYouTemplate}
                            setShowDownloadOnTheWayTemplate={setShowDownloadOnTheWayTemplate}
                        />
                    )}

                    {showThankYouTemplate && <Thankyou />}
                </div>
            </Container>
        </Section>
    );
};

export default PdfDownload;
