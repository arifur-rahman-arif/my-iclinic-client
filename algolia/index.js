require('dotenv').config();
const algoliasearch = require('algoliasearch');
const striptags = require('striptags');

if (!process.env?.NEXT_PUBLIC_ALGOLIA) return;

const indexName = process.env.NEXT_PUBLIC_ALGOLIA ? 'My-iClinic' : 'My-iClinic-dev';

const client = algoliasearch('LFKQJW9O2S', '47d64d3c035e3b58c0efafcc0d89e6ed');
const index = client.initIndex(indexName);

/**
 * Slice big string into smaller pieces of string
 *
 * @param {string} string
 * @returns {*[]}
 */
const sliceStringByWordsAndSizeLimit = (string) => {
    const words = string.split(' ');
    const totalWords = words.length;
    const result = [];
    let currentSize = 0;

    for (let i = 0; i < totalWords; i += 200) {
        const limitedWords = words.slice(i, i + 200);
        const limitedString = limitedWords.join(' ');
        const limitedSize = limitedString.length;

        if (currentSize + limitedSize > 9200) {
            break; // Stop if adding the next string would exceed the size limit
        }

        result.push(limitedString);
        currentSize += limitedSize;
    }

    return result;
};
/**
 * Get the post in formatted way
 * @returns {Promise<*>}
 */
const getPosts = async () => {
    const apiResponse = await fetch(`${process.env.WP_REST_URL}/posts?_fields=id,title,content,slug&per_page=100`, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${process.env.WP_JWT_TOKEN}`
        }
    });

    if (apiResponse.status !== 200) {
        throw new Error('Unable to fetch WordPress posts. Error text: ' + apiResponse.statusText);
    }

    const data = await apiResponse.json();

    return data.map((post) => ({
        objectID: post.id,
        title: post?.title?.rendered || '',
        content: sliceStringByWordsAndSizeLimit(striptags(post?.content?.rendered)),
        section: `/articles/${post.slug}`,
        type: 'article'
    }));
};

getPosts().then((data) => {
    index
        .saveObjects(data)
        .then((res) => {
            console.log('Articles saved');
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
            content: sliceStringByWordsAndSizeLimit(striptags(post?.content?.rendered)),
            section: `/our-specialists/${post.slug}`,
            type: 'specialist'
        };
    });
};

getSpecialistsPost().then((data) => {
    index
        .saveObjects(data)
        .then((res) => {
            console.log('Specialist saved');
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
});
