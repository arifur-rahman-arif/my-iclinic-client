import { useDeviceSize } from '@/hooks';
import { useRef } from 'react';

interface ImageComponentInterface {
    mobileImage: JSX.Element;
    desktopImage: JSX.Element;
}

/**
 * Left right section image component
 *
 * @param {ImageComponentInterface} { mobileImage, desktopImage }
 * @returns {*}  {JSX.Element}
 */
const ImageComponent = ({ mobileImage, desktopImage }: ImageComponentInterface): JSX.Element => {
    const imageRef = useRef<HTMLDivElement>(null);

    const deviceSize = useDeviceSize();

    return (
        <div className="row-start-1  justify-self-center md:row-auto md:justify-self-auto" ref={imageRef}>
            {deviceSize === 'small' && mobileImage}
            {deviceSize === 'large' && desktopImage}
        </div>
    );
};

export default ImageComponent;
