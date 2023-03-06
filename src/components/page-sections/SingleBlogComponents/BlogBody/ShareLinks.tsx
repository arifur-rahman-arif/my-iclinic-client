import { handleAlert } from '@/features/alert/alertSlice';
import { useAppDispatch } from '@/store';
import { copyToClipboard } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import IconLinkedin from '@/icons/icon-linkedin-outline.svg';
import IconTwitter from '@/icons/icon-twitter-outline-svg.svg';
import IconShare from '@/icons/icon-share-outline.svg';
import IconFacebook from '@/icons/icon-facebook-outline.svg';
import { useRouter } from 'next/router';

interface ShareLinksInterface {}

/**
 * Social sharing links component
 *
 * @param {string} linkedin
 * @param {string} twitter
 * @param {string} postLink
 * @param {string} facebook
 * @returns {JSX.Element}
 * @constructor
 */
const ShareLinks = ({}: ShareLinksInterface): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    return (
        <div className="flex md:flex-col gap-8 flex-wrap items-center">
            <span className="text-[2rem] leading-[2.8rem] font-mulishBold md:mb-4">Share</span>

            <Link
                href="#"
                className="cursor-pointer transition-all duration-500 hover:scale-150"
                onClick={(e) => {
                    e.preventDefault();
                    window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}/${router.query.slug}`,
                        'linkedin-share-dialog',
                        'width=700,height=500'
                    );
                    return false;
                }}
            >
                <Image src={IconLinkedin} alt="Linkedin" />
            </Link>
            <Link
                href={'#'}
                className="cursor-pointer transition-all duration-500 hover:scale-150"
                onClick={(e) => {
                    e.preventDefault();
                    window.open(
                        `https://twitter.com/intent/tweet?url=${siteUrl}/${router.query.slug}`,
                        'linkedin-share-dialog',
                        'width=700,height=500'
                    );
                    return false;
                }}
            >
                <Image src={IconTwitter} alt="Twitter" />
            </Link>
            <button
                className="cursor-pointer transition-all duration-500 hover:scale-150"
                onClick={() => {
                    copyToClipboard(`${siteUrl}/${router.query.slug}`).then(() => {
                        dispatch(
                            handleAlert({
                                showAlert: true,
                                alertType: 'success',
                                alertMessage: 'Link copied to your clipboard'
                            })
                        );
                    });
                }}
            >
                <Image src={IconShare} alt="Share" />
            </button>
            <Link href={'#'} className="cursor-pointer transition-all duration-500 hover:scale-150">
                <Image
                    src={IconFacebook}
                    alt="Facebook"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(
                            `https://www.facebook.com/sharer.php?u=${siteUrl}/${router.query.slug}`,
                            'facebook-share-dialog',
                            'width=700,height=500'
                        );
                        return false;
                    }}
                />
            </Link>
        </div>
    );
};

export default ShareLinks;
