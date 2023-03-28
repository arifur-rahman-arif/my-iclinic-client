import { ArticleAccordion, ArticleInterface } from '@/components/Accordion/ArticlesSubmenuAccordion/AccordionItem';
import { WpPageResponseInterface } from '@/types';
import { getData } from '@/utils/apiHelpers';
import { getCurrentFileName, wordpressPageFields } from '@/utils/miscellaneous';

interface GetPageDataProps {
    slug?: string;
    fields?: string;
    url?: string;
}

/**
 * Get the page data from WordPress API
 * @returns {WpPageResponseInterface<any>}
 */
export const getPageData = async ({ slug, fields, url }: GetPageDataProps = {}): Promise<
    WpPageResponseInterface<any>
> => {
    const pageResponse: Response = await getData({
        url:
            url ||
            `${process.env.WP_REST_URL}/pages?slug=${slug || getCurrentFileName(__filename)}&_fields=${
                fields || wordpressPageFields()
            }`
    });

    if (!pageResponse.ok) {
        throw new Error('No response from WordPress database. Error text: ' + pageResponse.statusText);
    }

    const [data]: [WpPageResponseInterface<any>] = await pageResponse.json();

    return data;
};

/**
 * Get necessary nav menu data from WordPress API
 *
 * @returns {WpPageResponseInterface<any>}
 */
export const getNavMenuData = async (): Promise<any> => {
    return await getPosts();
};

/**
 * Get the specified categories id
 *
 * @returns {Promise<any>}
 */
const getSpecificCategoriesID = async (): Promise<any> => {
    const [cataractCategory, surgeryCategory, iclinicCategory] = await Promise.all([
        getData({
            url: `${process.env.WP_REST_URL}/categories?slug=cataract&_fields=id`
        }),
        getData({
            url: `${process.env.WP_REST_URL}/categories?slug=laser-eye-surgery&_fields=id`
        }),
        getData({
            url: `${process.env.WP_REST_URL}/categories?slug=uncategorized&_fields=id`
        })
    ]);

    if (!cataractCategory.ok) {
        throw new Error('Failed to fetch cataract category. Error text: ' + cataractCategory.statusText);
    }

    if (!surgeryCategory.ok) {
        throw new Error('Failed to fetch surgery category. Error text: ' + surgeryCategory.statusText);
    }

    if (!iclinicCategory.ok) {
        throw new Error('Failed to fetch surgery category. Error text: ' + iclinicCategory.statusText);
    }

    const cataractId = (await cataractCategory.json())[0].id;
    const surgeryCategoryId = (await surgeryCategory.json())[0].id;
    const iclinicCategoryId = (await iclinicCategory.json())[0].id;

    return {
        cataractId,
        surgeryCategoryId,
        iclinicCategoryId
    };
};

/**
 * Get the specified posts data
 *
 * @returns {Promise<any>}
 */
const getPosts = async (): Promise<any> => {
    const { cataractId, surgeryCategoryId, iclinicCategoryId } = await getSpecificCategoriesID();

    const [cataractResponse, surgeryResponse, iclinicResponse] = await Promise.all([
        getData({
            url: `${process.env.WP_REST_URL}/posts?categories=${cataractId}&per_page=6&_fields=title,slug&orderby=date&order=desc`
        }),
        getData({
            url: `${process.env.WP_REST_URL}/posts?categories=${surgeryCategoryId}&per_page=8&_fields=title,slug&orderby=date&order=desc`
        }),
        getData({
            url: `${process.env.WP_REST_URL}/posts?categories=${iclinicCategoryId}&per_page=5&_fields=title,slug&orderby=date&order=desc`
        })
    ]);

    if (!cataractResponse.ok) {
        throw new Error('Failed to fetch cataract posts. Error text: ' + cataractResponse.statusText);
    }

    if (!surgeryResponse.ok) {
        throw new Error('Failed to fetch surgery posts. Error text: ' + surgeryResponse.statusText);
    }

    if (!iclinicResponse.ok) {
        throw new Error('Failed to fetch surgery posts. Error text: ' + iclinicResponse.statusText);
    }

    const articles = await getArticles();

    const cataractPosts = await cataractResponse.json();
    const surgeryPosts = await surgeryResponse.json();
    const iclinicPosts = await iclinicResponse.json();

    return {
        cataractPosts,
        surgeryPosts,
        iclinicPosts,
        articles
    };
};

/**
 * Get all the categories Id
 *
 * @returns {Promise<any>}
 */
const getCategories = async (): Promise<any> => {
    const [categoriesIdRes] = await Promise.all([
        getData({
            url: `${process.env.WP_REST_URL}/categories?_fields=id,name`
        })
    ]);

    if (!categoriesIdRes.ok) {
        throw new Error('Failed to fetch all the categories. Error text: ' + categoriesIdRes.statusText);
    }

    return await categoriesIdRes.json();
};

/**
 * Get the articles organized by their categories
 *
 * @returns {Promise<ArticleAccordion[]>}
 */
export const getArticles = async (): Promise<ArticleAccordion[]> => {
    const categories = await getCategories();

    const articles = await Promise.all(
        categories.map((category: any, index: any) => getCategoryArticles(category, index))
    );

    return articles.filter((categoryArticle) => categoryArticle !== null) as ArticleAccordion[];

    // return articles
    //     .filter((categoryArticle) => categoryArticle !== null)
    //     .map((categoryArticle) => {
    //         const { articles, ...rest } = categoryArticle!;
    //         return { ...rest, articles: articles.slice(0, 6) };
    //     }) as ArticleAccordion[];
};

/**
 * Fetch all the categories articles
 *
 * @param {{id: number, name: string}} category
 * @param {number} index
 * @returns {Promise<CategoriesArticle>}
 */
const getCategoryArticles = async (
    category: { id: number; name: string },
    index: number
): Promise<ArticleAccordion | null> => {
    const response = await getData({
        url: `${process.env.WP_REST_URL}/posts?categories=${category.id}&per_page=2&orderby=date&order=desc`
    });
    const posts = await response.json();

    if (posts.length === 0) {
        return null;
    }

    const articles: ArticleInterface[] = posts.map((post: any) => ({
        slug: post.slug,
        title: { rendered: post.title.rendered }
    }));

    return {
        title: category.name,
        articles,
        open: index === 0
    };
};
