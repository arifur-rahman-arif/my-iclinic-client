import { ImageType } from '@/types';
import Image from 'next/image';

interface BlogAuthorInterface {
    author?: {
        logo?: ImageType;
        name: string;
    };
}

// eslint-disable-next-line valid-jsdoc
/**
 * BLog author component
 *
 * @param {{logo?: ImageType, name: string} | undefined} author
 * @returns {JSX.Element}
 * @constructor
 */
const BlogAuthor = ({ author }: BlogAuthorInterface): JSX.Element => {
    return (
        <div className="flex items-center justify-start gap-4">
            <Image
                src={author?.logo || '/images/logos/iclinic-rounded.png'}
                width={author?.logo?.width || 32}
                height={author?.logo?.height || 32}
                alt=""
                className="overflow-hidden rounded-full object-cover"
            />
            <span className="font-mulishBold text-[1.4rem] leading-8">{author?.name || 'My iClinic'}</span>
        </div>
    );
};

export default BlogAuthor;
