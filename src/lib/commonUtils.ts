import { WpPageResponseInterface } from '@/types';
import { getData } from '@/utils/apiHelpers';
import { getCurrentFileName, wordpressPageFields } from '@/utils/miscellaneous';

interface GetPageDataProps {
    slug?: string;
    fields?: string;
}

/**
 * Get the page data from WordPress API
 * @returns {WpPageResponseInterface<any>}
 */
export const getPageData = async ({ slug, fields }: GetPageDataProps = {}): Promise<WpPageResponseInterface<any>> => {
    const pageResponse: Response = await getData({
        url: `${process.env.WP_REST_URL}/pages?slug=${slug || getCurrentFileName(__filename)}&_fields=${
            fields || wordpressPageFields()
        }`
    });

    if (!pageResponse.ok) {
        throw new Error('No response from WordPress database. Error text: ' + pageResponse.statusText);
    }

    const [data]: WpPageResponseInterface<any> = await pageResponse.json();

    return data;
};
