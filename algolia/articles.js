require('dotenv').config();
const algoliasearch = require('algoliasearch');
const striptags = require('striptags');
const { sliceStringByWordsAndSizeLimit } = require('./pages');

if (!process.env?.NEXT_PUBLIC_ALGOLIA) return;
// My-iClinic-dev
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_DB || 'My-iClinic';

const client = algoliasearch('LFKQJW9O2S', '47d64d3c035e3b58c0efafcc0d89e6ed');
const index = client.initIndex(indexName);
index.clearObjects();

/**
 * ==================================================================================
 * ==================================================================================
 * ==================================================================================
 * ==================================================================================
 * ==================================================================================
 * This block of code is responsible for saving the content of our pages into Algolia.
 * It specifically targets articles and specialists.
 * ==================================================================================
 * ==================================================================================
 * ==================================================================================
 * ==================================================================================
 * ==================================================================================
 */

/**
 * Get the post in formatted way
 * @returns {Promise<*>}
 */
const getPosts = async () => {
    const totalPosts = await getPostsCount();
    const postsPerPage = 100;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const data = [];

    for (let page = 1; page <= totalPages; page++) {
        const apiResponse = await fetch(
            `${process.env.WP_REST_URL}/posts?_fields=id,title,content,slug&per_page=${postsPerPage}&page=${page}`,
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${process.env.WP_JWT_TOKEN}`
                }
            }
        );

        if (apiResponse.status !== 200) {
            throw new Error('Unable to fetch WordPress posts. Error text: ' + apiResponse.statusText);
        }

        const responseData = await apiResponse.json();
        data.push(
            ...responseData.map((post) => ({
                objectID: post.id,
                title: post?.title?.rendered || '',
                content: sliceStringByWordsAndSizeLimit(
                    striptags(post?.content?.rendered.replaceAll('&nbsp;', ' '), [], ' ')
                ),
                section: `/articles/${post.slug}`,
                type: 'article'
            }))
        );
    }

    return data;
};

/**
 * Get total posts count from WordPress
 * @returns {Promise<number>}
 */
const getPostsCount = async () => {
    const apiResponse = await fetch(`${process.env.WP_REST_URL}/posts?_fields=id&per_page=1`, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${process.env.WP_JWT_TOKEN}`
        }
    });

    if (apiResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress posts count. Error text: ' + apiResponse.statusText);
    }

    const { headers } = apiResponse;
    const headerObject = Object.fromEntries(headers.entries());

    return Number(headerObject['x-wp-total']);
};

getPosts().then((data) => {
    index
        .saveObjects(data)
        .then((res) => {
            console.log('Articles saved:', res?.objectIDs.length);
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
});

const getSpecialistsPost = async () => {
    const apiResponse = await fetch(
        `${process.env.WP_REST_URL}/specialist?_fields=id,title,content,slug,acf&per_page=50`,
        {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${process.env.WP_JWT_TOKEN}`
            }
        }
    );

    const posts = await apiResponse.json();

    return posts.map((post) => {
        return {
            objectID: post.id,
            title: post?.title?.rendered || '',
            designation: post.acf.specialist_data.degree || '' + ' ' + post.acf.specialist_data.title || '',
            content: sliceStringByWordsAndSizeLimit(
                striptags(post?.content?.rendered.replaceAll('&nbsp;', ' '), [], ' ')
            ),
            section: `/our-specialists/${post.slug}`,
            type: 'specialist'
        };
    });
};

getSpecialistsPost().then((data) => {
    index
        .saveObjects(data)
        .then((res) => {
            console.log('Specialist saved', res?.objectIDs.length);
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
});
