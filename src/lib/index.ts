import { getPageData } from './commonUtils';
import { getCategories, getPost, getPosts, getPostsPerPageValue } from './page-functions/blogs/server-functions';
import { getTreatments } from './page-functions/financing-your-treatment';
import { getLatestPosts } from './page-functions/myopia';
import { getSpecialistPost, getSpecialistsPost } from './page-functions/our-specialists';

export {
    getPosts,
    getCategories,
    getPostsPerPageValue,
    getPost,
    getTreatments,
    getPageData,
    getLatestPosts,
    getSpecialistsPost,
    getSpecialistPost
};
