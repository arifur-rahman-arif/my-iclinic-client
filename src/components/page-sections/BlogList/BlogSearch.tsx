import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';

import { BlogListInterface } from './BlogList';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TextField from 'src/components/Inputs/TextField';
import * as JsSearch from 'js-search';

interface BlogSearchInterface extends Omit<BlogListInterface, 'postsPerPageValue'> {
    filterBlogsBySearch: (arg: GeneralBlogInterface[] | []) => void;
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

/**
 * Blog search component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const BlogSearch = ({
    blogList,
    filterBlogsBySearch,
    searchValue,
    setSearchValue
}: BlogSearchInterface): JSX.Element => {
    const [index, setIndex] = useState<any>();

    /**
     * Save the search index for searching through the blog list
     */
    const saveSearchIndex = () => {
        // Define the search object
        const searchObject = new JsSearch.Search('isbn');

        // Define the index for search
        searchObject.addIndex('title');
        searchObject.addIndex('slug');
        searchObject.addIndex('description');

        // Add the documents for searchObject store
        searchObject.addDocuments(
            blogList.map((blog) => {
                return {
                    ...blog,
                    isbn: blog.slug
                };
            })
        );

        setIndex(searchObject);
    };

    useEffect(() => {
        saveSearchIndex();
    }, []);

    return (
        <div className="relative h-[6.4rem] w-full max-w-[44rem] mx-auto sm:mx-0">
            <TextField
                value={searchValue}
                type="text"
                id="blog-search"
                placeholder="Search..."
                defaultClassName="w-full h-full block border-b border-brand focus:border-brand focus:outline-none"
                placeHolderClassName="!text-[1.8rem] !left-0"
                icon={
                    <Image
                        src="/images/icons/icon-search-outline.svg"
                        alt=""
                        width={24}
                        height={24}
                        quality={70}
                        className="h-[2.4rem] w-[2.4rem]"
                    />
                }
                onChange={(e) => {
                    const value = e.target.value;
                    setSearchValue(value);

                    if (!value) {
                        filterBlogsBySearch(blogList);
                        return;
                    }
                    filterBlogsBySearch(index.search(e.target.value));
                }}
                onClearValue={() => {
                    filterBlogsBySearch(blogList);
                    setSearchValue('');
                }}
            />
        </div>
    );
};

export default BlogSearch;
