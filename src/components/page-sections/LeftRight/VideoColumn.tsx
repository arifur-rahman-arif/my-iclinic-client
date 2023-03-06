import { useOnScreen } from '@/hooks';
import dynamic from 'next/dynamic';
import { FC, useRef } from 'react';

const VideoPlayer = dynamic(() => import('@/page-sections/SectionParts/VideoPlayer/VideoPlayer'));

/**
 * Video component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const VideoColumn: FC = (): JSX.Element => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: containerRef });

    return (
        <div className="row-start-1 justify-self-center md:row-auto md:justify-self-auto" ref={containerRef}>
            {onEnter && (
                <VideoPlayer
                    videoUrl="/videos/glaucoma-eye-surgery.mp4"
                    localPoster="/images/section-images/glaucoma-eye-surgery-poster.jpg"
                />
            )}
        </div>
    );
};

export default VideoColumn;
