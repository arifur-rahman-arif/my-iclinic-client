import Image from 'next/image';

interface BlogMetaInterface {
    views: number;
    readTime: string;
    defaultClassName?: string;
    className?: string;
    publishedDate?: string;
}

/**
 * Blog meta component for showing total views and read time
 *
 * @param {number} views
 * @param {string} readTime
 * @param {string | undefined} defaultClassName
 * @param {string | undefined} className
 * @returns {JSX.Element}
 * @constructor
 */
const BlogMeta = ({
    views,
    readTime,
    defaultClassName = 'flex items-center justify-start gap-8 flex-wrap mt-12',
    className,
    publishedDate
}: BlogMetaInterface): JSX.Element => {
    return (
        <div className={`${defaultClassName} ${className}`}>
            <div className="flex items-center justify-start gap-2" title={`Total View: ${views || 0}`}>
                <Image
                    src="/images/icons/icon-eye-outline-dark.svg"
                    width={18}
                    height={18}
                    alt=""
                    className="mt-[0.1rem] h-8 w-8"
                />
                <span className="font-mulishBold text-[1.4rem] leading-8 text-[#697072]">{views || 0}</span>
            </div>
            <div className="flex items-center justify-start gap-2" title={`Reading Time: ${readTime}`}>
                {/* <Image */}
                {/*     src="/images/icons/icon-clock-outline-dark.svg" */}
                {/*     width={18} */}
                {/*     height={18} */}
                {/*     alt="" */}
                {/*     className="mt-1 h-[1.8rem] w-[1.8rem]" */}
                {/* /> */}
                {/* <span className="font-mulishBold text-[1.4rem] leading-8 text-[#697072]">{readTime}</span> */}

                <Image src="/images/icons/icon-calender-outline.svg" width={16} height={16} alt="" />
                <span className="font-mulishBold text-[1.4rem] leading-8 text-[#697072]">{publishedDate}</span>
            </div>
        </div>
    );
};

export default BlogMeta;
