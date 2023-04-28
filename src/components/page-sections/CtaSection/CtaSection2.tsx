import { SideImageSection } from '@/components/page-sections';
import Cta5 from '@/page-sections/SectionParts/Cta5';
import { ImageType2 } from '@/types';
import { ReactNode } from 'react';

interface CtaSection2Interface {
    title?: ReactNode;
    descriptions?: ReactNode[];
    image?: ImageType2;
    imageLarge?: ImageType2;
    h3LightHeading?: ReactNode;
    h3BoldHeading?: ReactNode;
    textColumnExtras?: ReactNode;
    sectionClass?: string;
    button1Text?: string;
    excludeSloganText?: boolean;
    altText?: string;
    button1ClassName?: string;
}

/**
 * Cta section component
 *
 * @param {CtaSection2Interface} {title, descriptions}
 * @returns {*}  {JSX.Element}
 */
const CtaSection2 = ({
    title,
    descriptions,
    image,
    imageLarge,
    h3BoldHeading,
    h3LightHeading,
    textColumnExtras,
    sectionClass,
    button1Text,
    excludeSloganText,
    altText
}: CtaSection2Interface): JSX.Element => {
    return (
        <SideImageSection
            sectionClass={sectionClass}
            normalLightHeading={title}
            h3LightHeading={h3LightHeading}
            h3BoldHeading={h3BoldHeading}
            descriptions={descriptions}
            largeImageClassName="!rounded-primary"
            smallImageClassName="!rounded-primary"
            sectionImage={
                image || {
                    url: '/images/section-images/glasses-free-presbyond-large.png',
                    width: 640,
                    height: 514
                }
            }
            sectionImageDesktop={
                imageLarge || {
                    url: '/images/section-images/glasses-free-presbyond-large.png',
                    width: 640,
                    height: 514
                }
            }
            altText={altText || ''}
            textColumnExtras={
                textColumnExtras || (
                    <>
                        <Cta5 button1Text={button1Text} excludeSloganText={excludeSloganText} />
                    </>
                )
            }
        />
    );
};

export default CtaSection2;
