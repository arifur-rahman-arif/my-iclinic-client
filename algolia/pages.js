require('dotenv').config();
const algoliasearch = require('algoliasearch');
const striptags = require('striptags');
const axios = require('axios');
const cheerio = require('cheerio');

if (!process.env?.NEXT_PUBLIC_ALGOLIA) return;
// My-iClinic-dev
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_DB || 'My-iClinic';

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

module.exports = {
    sliceStringByWordsAndSizeLimit
};

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
    { name: 'Suitability Check', url: '/suitability-check' },
    { name: 'Terms and Conditions', url: '/terms-and-conditions' },
    { name: 'Translation Service', url: '/translation-service' },
    { name: 'Laser Eye Surgery', url: '/laser-eye-surgery' }
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
    const pageTitle = $('title').text().trim();

    $('section, main').each((i, el) => {
        const section = $(el);
        const id = section.attr('id');
        const titles = section
            .find('h1, h2, h3') // Include all heading tags
            .map((_, heading) => $(heading).text().trim())
            .get();
        const title = titles.join(' ');

        // Remove all <h2> and <a> tags from the section to exclude them from the content
        section.find('h2, h1, h3').remove();
        section.find('a').remove();

        // Initialize an array to store content elements
        const contentArray = section.contents();

        if (title) {
            sections.push({
                pageTitle,
                title,
                content: sliceStringByWordsAndSizeLimit(striptags(contentArray.toString(), [], ' ').trim()), // Example word limit
                section: id ? `#${id}` : ''
            });
        }
    });

    return sections;
};

const indexDataToAlgolia = async (data) => {
    const chunkSize = 50;
    const delay = 1000;
    let totalRecord = 0;

    for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);

        try {
            const response = await index.saveObjects(chunk, { autoGenerateObjectIDIfNotExist: true });

            totalRecord += response?.objectIDs?.length;

            console.log(`Page content saved: ${i + 1} to ${i + chunkSize}`);

            await new Promise((resolve) => setTimeout(resolve, delay));
        } catch (error) {
            console.error('Error indexing data to Algolia:', error);
        }
    }

    console.log(`Total records saved: ${totalRecord}`);
};

const processPages = async (pages) => {
    const sectionsData = [];

    for (const url of pages) {
        const pageUrl = `${process.env?.INDEXING_URL || 'https://www.websider.co.uk'}${url.url}`;
        const html = await fetchPageContent(pageUrl);

        if (html) {
            const sections = extractSectionsFromHTML(html);

            sections.forEach((section) => {
                section.section = `${url.url}/${section.section}`;
                sectionsData.push(section);
            });
        }
    }

    await indexDataToAlgolia(sectionsData);
};

processPages(pages);
