import { ImageType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface BlogAuthorInterface {
    author?: {
        logo?: ImageType;
        name: string;
        profile?: string;
    };
    excludeLink?: boolean;
}

// eslint-disable-next-line valid-jsdoc
/**
 * BLog author component
 *
 * @param {{logo?: ImageType, name: string} | undefined} author
 * @returns {JSX.Element}
 * @constructor
 */
const BlogAuthor = ({ author, excludeLink }: BlogAuthorInterface): JSX.Element => {
    if (author?.profile && !excludeLink) {
        return (
            <Link
                href={author.profile}
                className="flex cursor-pointer items-center justify-start gap-4 transition-all duration-500 hover:opacity-50"
            >
                <Image
                    src={author?.logo || '/images/logos/logo-iclinic-small.png'}
                    width={author?.logo?.width || 32}
                    height={author?.logo?.height || 32}
                    alt=""
                    unoptimized
                    className="overflow-hidden rounded-full object-cover"
                />
                <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-mulishBold text-[1.4rem] leading-8">
                    {author?.name || 'My iClinic'}
                </span>
            </Link>
        );
    } else {
        return (
            <div className="flex items-center justify-start gap-4">
                <Image
                    src={author?.logo || '/images/logos/logo-iclinic-small.png'}
                    width={author?.logo?.width || 32}
                    height={author?.logo?.height || 32}
                    alt=""
                    unoptimized
                    className="overflow-hidden rounded-full object-cover"
                />
                <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-mulishBold text-[1.4rem] leading-8">
                    {author?.name || 'My iClinic'}
                </span>
            </div>
        );
    }
};

export default BlogAuthor;
