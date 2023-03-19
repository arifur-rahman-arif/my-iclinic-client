import { Container } from '@/components/Container';
import { BlogCategoriesInterface } from '@/page-sections/BlogList/Filters';
import { PostInterface } from '@/types';
import { BlogSidebarRight } from './BlogSidebarRight';
import BodyContent from './BodyContent';
import { RelatedPosts } from './RelatedPosts';
import ShareLinks from './ShareLinks';

interface BlogBodyInterface {
    post: PostInterface;
    categories: BlogCategoriesInterface[];
}

/**
 * Blog body section
 *
 * @param {PostInterface} post
 * @param {BlogCategoriesInterface[]} categories
 * @returns {JSX.Element}
 * @constructor
 */
const BlogBody = ({ post, categories }: BlogBodyInterface): JSX.Element => {
    return (
        <Container className="mt-24 grid grid-cols-1 content-start gap-12 md:mt-32 md:grid-cols-[auto_1fr] xl:grid-cols-[auto_1fr_30rem]">
            <ShareLinks />
            <BodyContent content={post.description} includeCta />
            <BlogSidebarRight recentArticles={post.recentPosts} categories={categories} />
            <RelatedPosts posts={post.relatedPosts} />
        </Container>
    );
};

export default BlogBody;
