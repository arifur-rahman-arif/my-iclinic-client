import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import ArticlesCategories from './ArticlesCategories';
import RecentArticles, { RecentArticlesInterface } from './RecentArticles';

interface BlogSidebarRightInterface {
    recentArticles: RecentArticlesInterface[];
    categories: BlogCategoriesInterface[];
}

/**
 * Blog sidebar component
 *
 * @param {RecentArticlesInterface[]} recentArticles
 * @param {BlogCategoriesInterface[]} categories
 * @returns {JSX.Element}
 * @constructor
 */
const BlogSidebarRight = ({ recentArticles, categories }: BlogSidebarRightInterface): JSX.Element => {
    return (
        <div className="grid content-start gap-12 md:col-start-2 xl:col-start-auto">
            <RecentArticles articles={recentArticles} />
            <ArticlesCategories categories={categories} />
        </div>
    );
};

export default BlogSidebarRight;
