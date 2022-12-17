import { CountryCode } from 'libphonenumber-js';

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
 * @param {number} date
 * @returns {*}  {string}
 */
export const getTheMonthName = (date: number): string => {
    const days = [
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

    return days[date] || '';
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
