import { getSpecialistPost, getSpecialistsPost } from './page-functions/our-specialists';
import { getLatestPosts } from './page-functions/myopia';
import { getNavMenuData, getPageData } from './commonUtils';
import { getTreatments } from './page-functions/financing-your-treatment';
import { getCategories, getPost, getPosts, getPostsPerPageValue } from './page-functions/blogs/server-functions';

export {
    getPosts,
    getCategories,
    getPostsPerPageValue,
    getPost,
    getTreatments,
    getPageData,
    getLatestPosts,
    getNavMenuData,
    getSpecialistsPost,
    getSpecialistPost
};
