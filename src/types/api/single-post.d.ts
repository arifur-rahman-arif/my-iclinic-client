import { GeneralBlogInterface } from '@/components/Card/BlogCard2/BlogCard2';
import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import { RecentArticlesInterface } from '@/page-sections/SingleBlogComponents/BlogBody/BlogSidebarRight/RecentArticles';
import { ImageType } from '@/types';

export default interface PostInterface {
    ID: number;
    slug: string;
    image: ImageType;
    author?: {
        logo?: ImageType;
        name: string;
    };
    title: string;
    categories: BlogCategoriesInterface[];
    description: string;
    views: number;
    readTime: string;
    recentPosts: Array<RecentArticlesInterface>;
    relatedPosts: Omit<GeneralBlogInterface, 'description'>[];
    publishedDate: string;
}
