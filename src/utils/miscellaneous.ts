import { WpPageResponseInterface } from '@/types';
import { getData } from '@/utils/apiHelpers';
import { CountryCode } from 'libphonenumber-js';
import { NextRouter } from 'next/router';
import path from 'path';

const striptags = require('striptags');

/**
 * Trim the text to a specified length with ...
 *
 * @param {string} text
 * @param {number} length
 * @returns {*}  {string}
 */
export const trimText = (text: string, length: number): string => {
    return text.length > length ? text.substring(0, length - 3) + '...' : text;
};

/**
 * Validate an email by regular expression
 *
 * @param {string} email
 * @returns {RegExpMatchArray | null}
 */
export const validateEmail = (email: string): RegExpMatchArray | null => {
    return String(email)
        .toLowerCase()
        .match(
            // eslint-disable-next-line max-len
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

/**
 * Validate the phone number
 *
 * @param {string} number
 * @returns {*}  {Promise<boolean>}
 */
export const validatePhoneNumber = async (number: string): Promise<boolean> => {
    const libphone = await import('libphonenumber-js');

    const { isValidNumber } = libphone;

    return isValidNumber(number, 'GB');
};

/**
 * Format the phone number while user is typing it
 *
 * @param {string} number
 * @param {boolean} [international=false]
 * @returns {*}  {Promise<string>}
 */
export const formatPhoneNumber = async (number: string, international: boolean = false): Promise<string> => {
    const libphone = await import('libphonenumber-js');

    const { AsYouType } = libphone;

    const formattedNumber = new AsYouType('GB').input(number);

    return formattedNumber;
};
/**
 * Format the phone number into international number format
 *
 * @param {string} number
 * @param {CountryCode} [countryCode='GB']
 * @returns {*}  {Promise<string>}
 */
export const formatNumberToInternational = async (number: string, countryCode: CountryCode = 'GB'): Promise<string> => {
    const libphone = await import('libphonenumber-js');

    const { parsePhoneNumber } = libphone;

    return parsePhoneNumber(number, countryCode).formatInternational() || '';
};

/**
 * Get the top position fot he element relative to window top
 *
 * @param {(HTMLElement | null)} element
 * @returns {*}  {number}
 */
export const getElementTopPosition = (element: HTMLElement | null): number => {
    return element ? element.offsetTop + getElementTopPosition(element.offsetParent as HTMLElement) : 0;
};

/**
 * Get the day in full word
 *
 * @param {number} day
 * @returns {*}  {string}
 */
export const getTheDayName = (day: number): string => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[day] || '';
};

/**
 * Get the month in full world
 *
 * @param {number | undefined} date
 * @param {boolean} shortName
 * @returns {string}
 */
export const getTheMonthName = (date: number | undefined, shortName: boolean = false): string => {
    if (date === undefined) return '';

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    if (shortName) return shortMonths[date] || '';

    return months[date] || '';
};

/**
 * Get the name abbreviation (First letter of first name & first letter of last name)
 *
 * @param {string} name
 * @returns {*}  {string}
 */
export const getNameAbbreviations = (name: string): string => {
    const firstNameChar = name.split(' ')[0]?.charAt(0).toUpperCase();
    const firstNameSecondChar = name.split(' ')[0]?.charAt(1).toUpperCase();
    const lastNameChar = name.split(' ')[1]?.charAt(0).toUpperCase();

    if (firstNameChar && lastNameChar) return firstNameChar + lastNameChar;
    if (firstNameChar) return firstNameChar + firstNameSecondChar;
    if (lastNameChar) return lastNameChar;

    return '';
};

interface BreadcrumbInterface {
    url: string;
    name: string;
}

/**
 * Generate the breadcrumbs for the website
 *
 * @param {NextRouter} router
 * @returns {*}  {BreadcrumbInterface[]}
 */
export const generateBreadcrumbs = (router: NextRouter): BreadcrumbInterface[] => {
    const asPathWithoutQuery = router.asPath.split('?')[0];

    const asPathNestedRoutes = asPathWithoutQuery.split('/').filter((v) => v.length > 0);

    const crumblist: BreadcrumbInterface[] = asPathNestedRoutes.map((subpath, idx) => {
        return {
            url: '/' + asPathNestedRoutes.slice(0, idx + 1).join('/'),
            name: subpath.replaceAll(/\-|\#/gi, ' ')
        };
    });

    // Add in a default "Home" crumb for the top-level
    // return [{ href: '/', text: 'Home' }, ...crumblist];
    return [...crumblist];
};

/**
 * Format a number with comma separated
 *
 * @param {(number | null)} number
 * @returns {*}  {number | null}
 */
export const formatNumberWithComma = (number: number | null): string => {
    if (!number) return '';
    return number.toLocaleString('en-US');
};

/**
 * Split a full name into first name & last name
 *
 * @param {string} fullName
 * @returns {[string, string] | ''}
 */
export const splitName = (fullName: string): [string, string] => {
    if (!fullName) return ['', ''];

    const names = fullName.split(' ');
    const firstName = names.slice(0, names.length - 1).join(' ');
    const lastName = names[names.length - 1];

    // If first name is empty than assign the last name to first name variable and reverse the return value array
    // So that the last name will be the first name last name will be empty
    if (firstName == '') return [lastName, firstName];

    return [firstName, lastName];
};

/**
 * Return the difference between 2 dates
 *
 * @param {Date} date1
 * @param {Date} date2
 * @returns {number}
 */
export const dateDifferenceInDays = (date1: Date, date2: Date): number | boolean => {
    const now = new Date();
    if (date1 < now || date2 < now) {
        return false;
    }

    // @ts-ignore
    const diffTime: number = Math.abs(date2 - date1);
    return diffTime / (1000 * 60 * 60 * 24);
};

/**
 * Copy a text to clipboard
 *
 * @param {string} text
 * @returns {Promise<void>}
 */
export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};

/**
 * Check if user local storage is available or not
 *
 * @returns {boolean}
 */
export const isLocalStorageEnabled = (): boolean => {
    let localStorageEnabled = true;

    if (typeof window !== 'undefined') {
        try {
            window.localStorage.setItem('test', 'test');
            window.localStorage.removeItem('test');
            localStorageEnabled = true;
        } catch (e) {
            console.warn('Local storage is disabled');
            localStorageEnabled = false;
        }
    } else {
        console.warn('Window object is not defined');
    }

    return localStorageEnabled;
};

/**
 * Get the current file name without extension
 *
 * @param {string} filename
 * @returns {string}
 */
export const getCurrentFileName = (filename: string): string => {
    const name = path.basename(filename, path.extname(filename));
    return name === 'index' ? path.basename(path.dirname(filename)) : name;
};

/**
 * Get the page fields from wordpress api response
 * @returns {string}
 */
export const wordpressPageFields = (): string => {
    return 'title,acf,yoast_head,yoast_head_json';
};

/**
 * Open the freshChat options
 * @returns {Element | null}
 */
export const openFreshdeskChat = (): Element | null => {
    const freshChatIcon = document.getElementById('fc_frame');

    if (!freshChatIcon) {
        return null;
    }

    // Check if window.fcWidget is defined and is a function
    // @ts-ignore
    if (typeof window.fcWidget === 'object') {
        // @ts-ignore
        window.fcWidget.open();

        setTimeout(() => {
            freshChatIcon.style.opacity = '1';
        }, 500);
    }

    return freshChatIcon;
};

/**
 * Adds a sign prefix to a given number.
 *
 * @param {number | null} number - The number to which the sign will be prepended. Can be null.
 * @returns {string | number} - The modified number with the sign prefix. If the input number is null, the function returns null as well.
 */
export const prependSign = (number: number | null): string | number | null => {
    if (number === null) return number;

    if (number > 0) return `+${number}`;

    return number;
};

/**
 * Removes the initial <p> tag if it is the only parent <p> tag from the provided HTML string.
 *
 * @param {string} html - The input HTML string.
 * @returns {string} The modified HTML string with the initial <p> tag stripped, if applicable.
 */
export const stripInitialTags = (html: string): string => {
    return striptags(
        html,
        new Set(['div', 'b', 'strong', 'em', 'u', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'span'])
    );
};

/**
 * Check if the page is published or not
 * @returns {Promise<boolean>}
 */
export const isPagePublished = async ({ slug }: { slug: string }): Promise<boolean> => {
    const pageResponse: Response = await getData({
        url: `${process.env.WP_REST_URL}/pages?slug=${slug}&_fields=status`
    });

    if (!pageResponse.ok) {
        throw new Error('No response from WordPress database. Error text: ' + pageResponse.statusText);
    }

    const [data]: [WpPageResponseInterface<any>] = await pageResponse.json();

    // Assuming the status field indicates the status of the page, like 'publish', 'draft', etc.
    // Modify this according to your actual data structure.
    const status = data?.status;

    // Assuming 'publish' indicates the page is published. Modify this according to your actual data.
    return status == 'publish';
};
