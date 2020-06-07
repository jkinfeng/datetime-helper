'use strict';

/**
 * UNIX time
 * Example: new Date().getTime()
 */

/**
 * Datetime of a date type to UNIX time seconds
 * Note: The value of the given number rounded to the nearest integer.
 */
Date.prototype.getUnixTimeSec = function () {
    return Math.round(this.getTime() / 1000)
};

/**
 * Datetime of numerical type to UNIX time seconds
 * Note: When time is already of numerical type and the time is milliseconds,
 *       The value of the given number rounded to the nearest integer.
 * Example: Date.now().getUnixTimeSec()
 */
Number.prototype.getUnixTimeSec = function () {
    return Math.round(this / 1000);
};

/**
 * UNIX time seconds to Datetime of a data type
 * Note: When time is already of a numerical type and the time is seconds,
 * Example: (integer).getDatetime()
 */
Number.prototype.getDatetime = function () {
    return new Date(this * 1000);
};

/**
 * Datetime of string type to UNIX time seconds
 * Note: When time is already of string type and the date must be in program format
 *       The value of the given number rounded to the nearest integer.
 * Program format:
 *       Thu Jan 01 1970 08:00:00 GMT+0800 (GMT+08:00)
 *       January 1, 1970 00:00:00 GMT
 *       01 Jan 1970 00:00:00 GMT
 *       1970-01-01T08:00:00.000
 *       1970-01-01T00:00:00.000Z
 *       01-01-1970 08:00:00.000
 *       01-01-1970 00:00:00.000Z
 *       ...
 * Example: "1970-01-01T08:00:00Z".getUnixTimeSec()
 */
String.prototype.getUnixTimeSec = function () {
    return Math.round(new Date(this).getTime() / 1000);
};

/**
 * Zero hour of the date
 * If The date is 12:25, August 15, 1999. then the date is 00:00 , August 15, 1999
 * Example: new Date().getDateZeroTime()
 */
Date.prototype.getDateZeroTime = function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
};

/**
 * Date add return a date
 * Example: new Date().add(1)
 */
Date.prototype.add = function ($days) {
    this.setDate(this.getDate() + $days);
    return this;
};

/**
 * Time difference return an object
 * {approximately days, day, hour, min, sec}
 * Example: new Date().diff(new Date("1970-1-1"))
 */
Date.prototype.diff = function ($date) {
    const diffValue = this.getUnixTimeSec() - $date.getUnixTimeSec();
    const days = (diffValue / 86400).toFixed(2);
    const day = diffValue >= 86400 ? parseInt(diffValue / 86400) : 0;
    const hour = diffValue % 86400 / 3600 >= 1 ? parseInt(diffValue % 86400 / 3600) : 0;
    const min = diffValue % 86400 % 3600 / 60 >= 1 ? parseInt(diffValue % 86400 % 3600 / 60) : 0;
    const sec = diffValue % 86400 % 3600 % 60;
    return {days, day, hour, min, sec};
};

/**
 * Date formatter
 * Example: new Date().format('YYYY-MM-DD HH:mm:ss:ms')
 */
Date.prototype.format = function ($pattern = 'YYYY-MM-DD HH:mm:ss') {
    const functionCall = {
        YYYY: ['getFullYear', 4],
        YY: ['getFullYear', 2],
        MM: ['getMonth', 2, 1],
        DD: ['getDate', 2],
        HH: ['getHours', 2],
        mm: ['getMinutes', 2],
        ss: ['getSeconds', 2],
        ms: ['getMilliseconds', 3]
    };

    function dateFormat($date, $pattern) {
        function findMatch() {
            const matching = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/.exec($pattern);
            if (matching) {
                const hitTarget = functionCall[matching[1]];
                const addPrefix = '00' + String($date[hitTarget[0]]() + (hitTarget[2] || 0));
                const result = addPrefix.slice(-hitTarget[1]) + (matching[2] || '');
                $pattern = $pattern.replace(matching[0], result);
                findMatch();
            }
        }

        findMatch();
        return $pattern
    }

    return dateFormat(this, $pattern)
};