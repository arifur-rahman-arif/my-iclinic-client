// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import { WpPageResponseInterface } from '@/types';
import { getData } from '@/utils/apiHelpers';
import { wordpressPageFields } from '@/utils/miscellaneous';
import axios from 'axios';

interface GetPageDataProps {
    slug?: string;
    fields?: string;
    url?: string;
    draft?: boolean;
}

/**
 * Get the page data from WordPress API
 * @returns {WpPageResponseInterface<any>}
 */
export const getPageData = async ({ slug, fields, url, draft }: GetPageDataProps = {}): Promise<
    WpPageResponseInterface<any>
> => {
    const pageResponse: Response = await getData({
        url:
            url ||
            `${process.env.WP_REST_URL}/pages?slug=${slug}&status=${draft ? 'draft' : 'publish'}&_fields=${
                fields || wordpressPageFields()
            }`
    });

    if (!pageResponse.ok) {
        throw new Error('No response from WordPress database. Error text: ' + pageResponse.statusText);
    }

    const [data]: [WpPageResponseInterface<any>] = await pageResponse.json();

    return {
        ...data,
        yoast_head: yoastHeadReplacement(data?.yoast_head?.replace(/http(?=:\/\/)/g, 'https')),
        yoast_head_json: {
            ...(data?.yoast_head_json || null),
            schema: replaceSchemaUrl(data?.yoast_head_json?.schema || null)
        }
    };
};

/**
 * Replace the canonical link tag from the yoast head
 *
 * @param {string} headText
 * @returns {string | null}
 */
const yoastHeadReplacement = (headText: string) => {
    if (!headText) return null;

    // Replace the canonical link tag
    const regex = /<link\s+rel=\"canonical\"\s+href=\"([^\"]*)\".*?>/g;
    const replacement = '';
    let canonicalReplacedText = headText.replace(regex, replacement);

    // Replace the og url meta
    const ogUrlRegex = /<meta\s+property=\"og:url\"\s+content=\"([^\"]*)\".*?>/g;
    canonicalReplacedText = canonicalReplacedText?.replace(ogUrlRegex, replacement);

    /**
     * Custom replace function to exclude /wp-content/uploads URLs
     * @param {string} text
     * @param {string} searchValue
     * @param {string} replaceValue
     * @returns {string}
     */
    const customReplace = (text: string, searchValue: string, replaceValue: string) => {
        let result = '';
        let startIndex = 0;
        const searchLength = searchValue.length;

        // Iterate through the text to find and replace occurrences
        while (startIndex < text.length) {
            const matchIndex = text.indexOf(searchValue, startIndex);

            // If no more matches found, append remaining text and exit loop
            if (matchIndex === -1) {
                result += text.slice(startIndex);
                break;
            }

            // Check if the match is not followed by /wp-content/uploads
            const nextCharIndex = matchIndex + searchLength;
            if (text[nextCharIndex] !== '/' || !text.slice(nextCharIndex + 1).startsWith('wp-content/uploads')) {
                // Append text from startIndex to matchIndex and the replacement value
                result += text.slice(startIndex, matchIndex) + replaceValue;
            } else {
                // If followed by /wp-content/uploads, append the match as is
                result += text.slice(startIndex, nextCharIndex);
            }

            // Update startIndex to the end of the match
            startIndex = nextCharIndex;
        }

        return result;
    };

    // Replace WordPress URL with actual site URL, excluding /wp-content/uploads
    return customReplace(canonicalReplacedText, process.env.WP_URL as any, process.env.SITE_URL as any);
};

/**
 * Replace the schema url from wordpress yoast seo
 *
 * @param {any} schema
 * @returns {any}
 */
const replaceSchemaUrl = (schema: any) => {
    if (!schema) return null;

    let stringifyData = JSON.stringify(schema);

    stringifyData = stringifyData.replace(/http(?=:\/\/)/g, 'https');

    return JSON.parse(JSON.stringify(stringifyData).replaceAll(`${process.env.WP_URL}`, `${process.env.SITE_URL}`));
};

// /**
//  * Get necessary nav menu data from WordPress API
//  *
//  * @returns {WpPageResponseInterface<any>}
//  */
// export const getNavMenuData = async (): Promise<any> => {
//     return await getPosts();
// };

// /**
//  * Get the specified categories id
//  *
//  * @returns {Promise<any>}
//  */
// const getSpecificCategoriesID = async (): Promise<any> => {
//     const [cataractCategory, surgeryCategory, iclinicCategory] = await Promise.all([
//         getData({
//             url: `${process.env.WP_REST_URL}/categories?slug=cataract&_fields=id`
//         }),
//         getData({
//             url: `${process.env.WP_REST_URL}/categories?slug=laser-eye-surgery&_fields=id`
//         }),
//         getData({
//             url: `${process.env.WP_REST_URL}/categories?slug=uncategorized&_fields=id`
//         })
//     ]);
//
//     if (!cataractCategory.ok) {
//         throw new Error('Failed to fetch cataract category. Error text: ' + cataractCategory.statusText);
//     }
//
//     if (!surgeryCategory.ok) {
//         throw new Error('Failed to fetch surgery category. Error text: ' + surgeryCategory.statusText);
//     }
//
//     if (!iclinicCategory.ok) {
//         throw new Error('Failed to fetch surgery category. Error text: ' + iclinicCategory.statusText);
//     }
//
//     const cataractId = (await cataractCategory.json())[0].id;
//     const surgeryCategoryId = (await surgeryCategory.json())[0].id;
//     const iclinicCategoryId = (await iclinicCategory.json())[0].id;
//
//     return {
//         cataractId,
//         surgeryCategoryId,
//         iclinicCategoryId
//     };
// };

// /**
//  * Get the specified posts data
//  *
//  * @returns {Promise<any>}
//  */
// const getPosts = async (): Promise<any> => {
//     const { cataractId, surgeryCategoryId, iclinicCategoryId } = await getSpecificCategoriesID();
//
//     const [cataractResponse, surgeryResponse, iclinicResponse] = await Promise.all([
//         getData({
//             url: `${process.env.WP_REST_URL}/posts?categories=${cataractId}&per_page=6&_fields=title,slug&orderby=date&order=desc`
//         }),
//         getData({
//             url: `${process.env.WP_REST_URL}/posts?categories=${surgeryCategoryId}&per_page=8&_fields=title,slug&orderby=date&order=desc`
//         }),
//         getData({
//             url: `${process.env.WP_REST_URL}/posts?categories=${iclinicCategoryId}&per_page=5&_fields=title,slug&orderby=date&order=desc`
//         })
//     ]);
//
//     if (!cataractResponse.ok) {
//         throw new Error('Failed to fetch cataract posts. Error text: ' + cataractResponse.statusText);
//     }
//
//     if (!surgeryResponse.ok) {
//         throw new Error('Failed to fetch surgery posts. Error text: ' + surgeryResponse.statusText);
//     }
//
//     if (!iclinicResponse.ok) {
//         throw new Error('Failed to fetch surgery posts. Error text: ' + iclinicResponse.statusText);
//     }
//
//     const articles = await getArticles();
//
//     const cataractPosts = await cataractResponse.json();
//     const surgeryPosts = await surgeryResponse.json();
//     const iclinicPosts = await iclinicResponse.json();
//
//     return {
//         cataractPosts,
//         surgeryPosts,
//         iclinicPosts,
//         articles
//     };
// };

// /**
//  * Get all the categories Id
//  *
//  * @returns {Promise<any>}
//  */
// const getCategories = async (): Promise<any> => {
//     const [categoriesIdRes] = await Promise.all([
//         getData({
//             url: `${process.env.WP_REST_URL}/categories?_fields=id,name`
//         })
//     ]);
//
//     if (!categoriesIdRes.ok) {
//         throw new Error('Failed to fetch all the categories. Error text: ' + categoriesIdRes.statusText);
//     }
//
//     return await categoriesIdRes.json();
// };

// /**
//  * Get the articles organized by their categories
//  *
//  * @returns {Promise<ArticleAccordion[]>}
//  */
// export const getArticles = async (): Promise<ArticleAccordion[]> => {
//     const categories = await getCategories();
//
//     const articles = await Promise.all(
//         categories.map((category: any, index: any) => getCategoryArticles(category, index))
//     );
//
//     return articles.filter((categoryArticle) => categoryArticle !== null) as ArticleAccordion[];
//
//     // return articles
//     //     .filter((categoryArticle) => categoryArticle !== null)
//     //     .map((categoryArticle) => {
//     //         const { articles, ...rest } = categoryArticle!;
//     //         return { ...rest, articles: articles.slice(0, 3) };
//     //     }) as ArticleAccordion[];
// };

// /**
//  * Fetch all the categories articles
//  *
//  * @param {{id: number, name: string}} category
//  * @param {number} index
//  * @returns {Promise<CategoriesArticle>}
//  */
// const getCategoryArticles = async (
//     category: { id: number; name: string },
//     index: number
// ): Promise<ArticleAccordion | null> => {
//     const response = await getData({
//         url: `${process.env.WP_REST_URL}/posts?categories=${category.id}&per_page=2&orderby=date&order=desc`
//     });
//     const posts = await response.json();
//
//     if (posts.length === 0) {
//         return null;
//     }
//
//     const articles: ArticleInterface[] = posts.map((post: any) => ({
//         slug: post.slug,
//         title: { rendered: post.title.rendered }
//     }));
//
//     return {
//         title: category.name,
//         articles,
//         open: index === 0
//     };
// };

/**
 * Get trustpilot reviews
 * @returns {Promise<{average: string, total: string}>}
 */
export const getReviews = async (): Promise<any> => {
    const trustpilotPage = await axios.get('https://uk.trustpilot.com/review/my-iclinic.co.uk');
    if (trustpilotPage.status !== 200) throw new Error('Unable to get reviews');
    const trustPilotResponse = trustpilotPage.data;

    const jsdom = require('jsdom');
    const { JSDOM } = jsdom;
    const trustpilotDom = new JSDOM(trustPilotResponse);

    const trustPilotTotalReview = trustpilotDom.window.document
        .querySelector('.typography_body-l__KUYFJ.typography_appearance-default__AAY17')
        .textContent.split(' ')[0];

    const trustPilotAverageReview = trustpilotDom.window.document.querySelector(
        '#__next > div > div > main > div > div.styles_mainContent__nFxAv > section > div.paper_paper__1PY90.paper_outline__lwsUX.card_card__lQWDv.styles_reviewsOverview__mVIJQ > div.styles_header__yrrqf > h2 > span'
    ).textContent;

    return {
        trustpilot: {
            total: trustPilotTotalReview,
            average: trustPilotAverageReview
        }
    };
};
