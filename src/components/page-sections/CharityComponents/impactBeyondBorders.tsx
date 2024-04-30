import { Section } from '@/components/Section';
import bulletPoint from '@/icons/icon-dotted-arrow-white.svg';
import iconPlay from '@/icons/icon-play-circle.svg';
import charityMap from '@/section-images/chairty-map.webp';
import { ImageType3 } from '@/types';
import Image from 'next/image';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { useEffect, useRef, useState } from 'react';
import styles from './styles/VideoPlayer.module.scss';

interface Props {
    heading: string;
    introduction: string;
    descriptions: string[];
    list: string[];
    video: string;
    videoPoster: ImageType3;
}

/**
 * Component for rendering the section showcasing impact beyond borders.
 *
 * @param {Object} Props - Props object containing the following properties:
 *   @param {string} heading - The heading for the section.
 *   @param {string} introduction - The introduction text for the section.
 *   @param {string[]} descriptions - An array of description texts for the section.
 *   @param {string[]} list - An array of items for a list in the section.
 *   @param {string} video - The URL of the video to be displayed in the section.
 *   @param {string} videoPoster - The poster image for the video.
 *
 * @returns {JSX.Element} - JSX element representing the section showcasing impact beyond borders.
 */
const ImpactBeyondBorders = ({ heading, introduction, descriptions, list, video, videoPoster }: Props): JSX.Element => {
    return (
        <Section id="impact-beyond-borders" className="bg-[#003E79]">
            <div className="grid md:grid-cols-2 lg:grid-cols-[auto_1fr]">
                {/* Column 1 */}
                <div className="grid content-center gap-6 py-12 pl-8 md:py-20 md:pr-24 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)]">
                    <h2 className="normal-case text-white">{heading || ''}</h2>
                    <strong className="text-[#0099FF]">{introduction || ''}</strong>
                    <>
                        {descriptions?.length
                            ? descriptions.map((item, key) => (
                                  <p
                                      className="max-w-[50rem] text-white"
                                      key={key}
                                      dangerouslySetInnerHTML={{ __html: item }}
                                  ></p>
                              ))
                            : null}
                    </>

                    <ul className="grid gap-6">
                        {list?.length
                            ? list.map((item, key) => (
                                  <li key={key} className="flex items-center justify-start gap-2">
                                      <Image src={bulletPoint} alt="" />
                                      <span className="text-white">{item}</span>
                                  </li>
                              ))
                            : null}
                    </ul>
                </div>

                {/* Column 2 */}
                <VideoPlayer videoUrl={video} posterImage={videoPoster} />

                <Image src={charityMap} alt="" className="w-full object-cover md:col-span-2" />
            </div>
        </Section>
    );
};

interface VideoPlayerProps {
    videoUrl: string;
    posterImage: ImageType3;
}

/**
 * Component for rendering a video player with play/pause functionality.
 *
 * @param {Object} VideoPlayerProps - Props object containing the following properties:
 *   @param {string} videoUrl - The URL of the video to be played.
 *   @param {Object} posterImage - The poster image for the video.
 *
 * @returns {JSX.Element} - JSX element representing the video player.
 */
const VideoPlayer = ({ videoUrl, posterImage }: VideoPlayerProps): JSX.Element => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    /**
     * Function for toggling the play/pause state of a video element.
     *
     * This function checks if a video element is currently playing. If it is playing, it pauses the video;
     * otherwise, it plays the video. It also toggles the state of the `isPlaying` variable.
     */
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (!videoRef.current) return;

        const player = new Plyr(videoRef.current as HTMLVideoElement, {
            captions: { active: true },
            tooltips: {
                controls: true,
                seek: true
            },
            controls: [
                'play-large', // The large play button in the center
                'play', // Play/pause playback
                'fast-forward', // Fast forward by the seek time (default 10 seconds)
                'progress', // The progress bar and scrubber for playback and buffering
                'current-time', // The current time of playback
                'duration', // The full duration of the media
                'mute', // Toggle mute
                'volume', // Volume control
                'captions', // Toggle captions
                'settings', // Settings menu
                'airplay', // Airplay (currently Safari only)
                'fullscreen' //
            ]
        });

        player.on('playing', (event) => {
            setIsPlaying(true);
        });

        player.on('pause', (event) => {
            setIsPlaying(false);
        });
    }, []);

    return (
        <div className={`relative ${styles.styles}`}>
            <button
                className={`absolute bottom-0 left-1/2 z-10 grid -translate-y-1/2 -translate-x-1/2 place-items-center transition-all duration-500 md:left-0 md:translate-x-24 md:-translate-y-24 ${
                    isPlaying && 'pointer-events-none opacity-0'
                }`}
                onClick={togglePlayPause}
            >
                <Image src={iconPlay} alt="" />
                <span className="text-center font-mulishBold text-[1.4rem] uppercase leading-8 text-white">Play</span>
            </button>

            <video
                ref={videoRef}
                playsInline
                controls
                data-poster={posterImage.src}
                className="h-full md:min-h-[55rem] md:min-w-[50rem] xl:min-w-[85rem]"
            >
                <source src={videoUrl} type="video/mp4" />
            </video>

            {/* <video ref={videoRef} className="w-full h-full" src={videoUrl} poster={posterImage.src} controls={false} */}
            {/*        onPlaying={() => setIsPlaying(true)} onPaused={() => setIsPlaying(false)} /> */}
            {/* Conditional rendering of play/pause button based on isPlaying state */}

            {/* Allow clicking anywhere on the video area to control playback */}
            <div
                className={`video-overlay absolute inset-0 z-10 h-[calc(100%_-_5rem)] w-full ${
                    !isPlaying && 'pointer-events-none'
                }`}
                onClick={togglePlayPause}
            />
        </div>
    );
};

export default ImpactBeyondBorders;
