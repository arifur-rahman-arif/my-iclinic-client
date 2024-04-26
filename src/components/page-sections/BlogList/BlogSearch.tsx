import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import { handleAlert } from '@/features/alert/alertSlice';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TextField from 'src/components/Inputs/TextField';
import useSWRMutation from 'swr/mutation';
// import * as JsSearch from 'js-search';
import { proxy, useSnapshot } from 'valtio';

// import { devtools } from 'valtio/utils';

export interface StoreInterface {
    searchValue: string;
    articles: GeneralBlogInterface[] | [];
    isMutating: boolean;
    formSubmitted: boolean;
}

export const store: StoreInterface = proxy<StoreInterface>({
    searchValue: '',
    articles: [],
    isMutating: false,
    formSubmitted: false
} as StoreInterface);

// const unsub = devtools(store, { name: 'Search Form', enabled: true });

let timeoutId: any;

/**
 * Blog search component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const BlogSearch = (): JSX.Element => {
    const snap = useSnapshot(store);
    const dispatch = useDispatch();
    /**
     * Sends data to a specified URL using a POST request.
     *
     * @param {string} url - The URL to send the data to.
     * @param {object} payload - The payload object containing the data to be sent.
     * @param {any} payload.arg - The argument to be included in the payload.
     *
     * @returns {Promise<any>} - A promise that resolves to the JSON response from the server.
     */
    const sendData = async (url: string, { arg }: { arg: string }): Promise<any> => {
        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(arg)
            });
            return await res.json();
        } catch (err) {
            throw err;
        }
    };

    // SWR mutation hook to handle form data submission
    const { trigger, isMutating } = useSWRMutation(`/api/articles-search`, sendData);

    // Effect to update the component state with the mutation loading status
    useEffect(() => {
        store.isMutating = isMutating;
    }, [isMutating]);

    /**
     * Handles the submission of the quote request form.
     * Formats and validates the form data, then triggers the mutation to send the data to the server.
     *
     * @async
     * @function handleFormSubmit
     * @returns {Promise<void>} - A promise that resolves once the form submission is complete.
     */
    const handleFormSubmit = async (): Promise<void> => {
        try {
            if (!store.searchValue) return;

            // Trigger the mutation and get the result
            const result = await trigger(store.searchValue);

            // Handle the response from the server
            if (!result?.success) {
                dispatch(
                    handleAlert({
                        showAlert: true,
                        alertType: 'error',
                        alertMessage: result.data.message || 'Something went wrong. Please try again'
                    })
                );
                return;
            }

            if (result?.success) {
                store.articles = result.data?.data;
            }
        } catch (e) {
            dispatch(
                handleAlert({
                    showAlert: true,
                    alertType: 'error',
                    alertMessage: 'Something went wrong. Please try again'
                })
            );
            console.error(e);
        }
    };

    // const [index, setIndex] = useState<any>();

    // /**
    //  * Save the search index for searching through the blog list
    //  */
    // const saveSearchIndex = () => {
    //     // Define the search object
    //     const searchObject = new JsSearch.Search('isbn');
    //
    //     // Define the index for search
    //     searchObject.addIndex('title');
    //     searchObject.addIndex('slug');
    //     searchObject.addIndex('description');
    //
    //     // Add the documents for searchObject store
    //     searchObject.addDocuments(
    //         blogList.map((blog) => {
    //             return {
    //                 ...blog,
    //                 isbn: blog.slug
    //             };
    //         })
    //     );
    //
    //     setIndex(searchObject);
    // };
    //
    // useEffect(() => {
    //     saveSearchIndex();
    // }, []);

    return (
        <div className="relative mx-auto h-[6.4rem] w-full max-w-[44rem] sm:mx-0">
            <TextField
                value={snap.searchValue}
                type="text"
                id="blog-search"
                placeholder="Search..."
                defaultClassName="w-full h-full block border-b border-brand focus:border-brand focus:outline-none"
                placeHolderClassName="!left-0"
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
                    store.searchValue = e.target.value;
                    store.isMutating = true;

                    // Clear the timeout when input value changes
                    clearTimeout(timeoutId);

                    timeoutId = setTimeout(() => {
                        handleFormSubmit();
                    }, 1500);

                    // if (!value) {
                    //     filterBlogsBySearch(blogList);
                    //     return;
                    // }
                    // filterBlogsBySearch(index.search(e.target.value));
                }}
                onClearValue={() => {
                    store.searchValue = '';
                    store.articles = [];
                    // filterBlogsBySearch(blogList);
                    // setSearchValue('');
                }}
            />
        </div>
    );
};

export default BlogSearch;
