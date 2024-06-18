require('dotenv').config();
const algoliasearch = require('algoliasearch');
const striptags = require('striptags');
const axios = require('axios');
const cheerio = require('cheerio');

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
                content: sliceStringByWordsAndSizeLimit(striptags(post?.content?.rendered, [], ' ')),
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
            content: sliceStringByWordsAndSizeLimit(striptags(post?.content?.rendered, [], ' ')),
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

/**
 **************************************************************
 **                                                          **
 **                    ALGOLIA CONTENT EXTRACTOR              **
 **                                                          **
 **************************************************************
 **************************************************************
 **************************************************************
 **                                                          **
 **                                                          **
 **                       U R L S                             **
 **                                                          **
 **                                                          **
 **************************************************************
 **************************************************************
 **************************************************************
 */
const pages = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about-us' },
    { name: 'Articles', url: '/articles' },
    { name: 'Astigmatism Treatment', url: '/astigmatism-treatment' },
    { name: 'Blepharitis Treatment', url: '/blepharitis-treatment' },
    { name: 'Cataract', url: '/cataract' },
    { name: 'Premium Lenses', url: '/cataract/premium-lenses' },
    { name: 'Cataract Price', url: '/cataract/price' },
    { name: 'Yag Capsulotomy for PCO', url: '/cataract/yag-capsulotomy-for-pco' },
    { name: 'Yag Capsulotomy Price', url: '/cataract/yag-capsulotomy-for-pco/price' },
    { name: 'Complaint', url: '/complaint' },
    { name: 'Conjunctivitis Treatment London', url: '/conjuctivitis-treatment-london' },
    { name: 'Contact Us', url: '/contact-us' },
    { name: 'Cookie Policy', url: '/cookie-policy' },
    { name: 'Corneal Treatments', url: '/corneal-treatments' },
    { name: 'Double Vision Treatment London', url: '/double-vision-treatment-london' },
    { name: 'Dry Eyes Treatment London', url: '/dry-eyes-treatment-london' },
    { name: 'Eyelid Surgery London', url: '/eyelid-surgery-london' },
    { name: 'Flashes Floaters', url: '/flashes-floaters' },
    { name: 'Glaucoma Treatment', url: '/glaucoma-treatment' },
    { name: 'Glaucoma Price', url: '/glaucoma-treatment/price' },
    { name: 'ICL', url: '/icl' },
    { name: 'ICL Price', url: '/icl/price' },
    { name: 'Keratoconus', url: '/keratoconus' },
    { name: 'LASEK PRK', url: '/lasek-prk' },
    { name: 'LASEK PRK Price', url: '/lasek-prk/price' },
    { name: 'LASIK London', url: '/lasik-london' },
    { name: 'LASIK Price', url: '/lasik-london/price' },
    { name: 'Lazy Eyes Treatment', url: '/lazy-eyes-treatement' },
    { name: 'Macular Degeneration', url: '/macular-degeneration' },
    { name: 'Myopia', url: '/myopia' },
    { name: 'Myopia Price', url: '/myopia/price' },
    { name: 'Our Specialists', url: '/our-specialists' },
    { name: 'Eye Diagnostics Technology', url: '/our-specialists/our-eye-diagnostics-technology' },
    { name: 'Paediatric Eye Care', url: '/paediatric-eye-care' },
    { name: 'Presbyond London', url: '/presbyond-london' },
    { name: 'Presbyond Price', url: '/presbyond-london/price' },
    { name: 'Financing Your Treatment', url: '/pricing-and-financing/financing-your-treatment' },
    { name: 'Our Prices', url: '/pricing-and-financing/our-prices' },
    { name: 'Privacy Policies', url: '/privacy-policies' },
    { name: 'Relex Smile London', url: '/relex-smile-london' },
    { name: 'Relex Smile Price', url: '/relex-smile-london/price' },
    { name: 'Search', url: '/search' },
    { name: 'Sitemap', url: '/sitemap' },
    { name: 'Suitability Check', url: '/suitability-check' },
    { name: 'Terms and Conditions', url: '/terms-and-conditions' },
    { name: 'Translation Service', url: '/translation-service' }
    // Add more URLs as needed
];

const fetchPageContent = async (url) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error(`Error fetching the page content from ${url}:`, error);
        return null;
    }
};

const extractSectionsFromHTML = (html) => {
    const $ = cheerio.load(html);
    const sections = [];

    $('section').each((i, el) => {
        const section = $(el);
        const id = section.attr('id');
        const titles = section
            .find('h2')
            .map((_, h2) => $(h2).text().trim())
            .get();
        const title = titles.length > 1 ? titles : titles[0];

        // Remove all <h2> and <a> tags from the section to exclude them from the content
        section.find('h2').remove();
        section.find('a').remove();

        // Initialize an array to store content elements
        const contentArray = section.contents();

        if (title) {
            sections.push({
                objectID: i,
                title,
                content: sliceStringByWordsAndSizeLimit(striptags(contentArray.toString(), [], ' ').trim()), // Example word limit
                section: id ? `#${id}` : ''
            });
        }
    });

    return sections;
};

const indexDataToAlgolia = async (data) => {
    try {
        index.clearObjects();

        index
            .saveObjects(data, { autoGenerateObjectIDIfNotExist: true })
            .then((res) => {
                console.log('Page content saved');
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (error) {
        console.error('Error indexing data to Algolia:', error);
    }
};

const processPages = async (pages) => {
    const sectionsData = [];

    for (const url of pages) {
        const pageUrl = `https://www.my-iclinic.co.uk${url.url}`;
        const html = await fetchPageContent(pageUrl);

        if (html) {
            const sections = extractSectionsFromHTML(html);

            sections.forEach((section) => {
                section.section = `${pageUrl}${section.section}`;
                sectionsData.push(section);
            });
        }
    }

    await indexDataToAlgolia(sectionsData);
};

processPages(pages);
