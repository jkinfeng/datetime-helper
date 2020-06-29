'use strict';

(function ($global) {
    const __dateTime = {};

    // __dateTime.timeZone = Date.getTimezoneOffset();

    __dateTime.getUnixTimeSec = ($dateTime, $ms = false) => {
        if ('object' === typeof $dateTime && $dateTime instanceof Date) {
            return Math.round($dateTime.getTime() / 1000);
        }

        if ('number' === typeof $dateTime) {
            return $ms ? Math.round($dateTime / 1000) : $dateTime;
        }

        if ('string' === typeof $dateTime) {
            if (!isNaN(Number($dateTime))) {
                return $ms ? Math.round(Number($dateTime) / 1000) : Number($dateTime);
            } else {
                return Math.round(new Date($dateTime).getTime() / 1000);
            }
        }

        return "Invalid Date";
    };

    /**
     * Zero hour of the date
     */
    __dateTime.getDateZeroTime = ($dateTime, $ms = false) => {
        let __thisDateTime;

        if ('object' === typeof $dateTime && $dateTime instanceof Date) {
            __thisDateTime = $dateTime
        }

        if ('number' === typeof $dateTime) {
            __thisDateTime = $ms ? new Date($dateTime) : new Date($dateTime * 1000);
        }

        if ('string' === typeof $dateTime) {
            if (!isNaN(Number($dateTime))) {
                __thisDateTime = $ms ? new Date(Number($dateTime)) : new Date(Number($dateTime) * 1000);
            } else {
                __thisDateTime = new Date($dateTime);
            }
        }

        if ('Invalid Date' === $dateTime.toString()) {
            return "Invalid Date";
        }

        __thisDateTime.setHours(0);
        __thisDateTime.setMinutes(0);
        __thisDateTime.setSeconds(0);
        __thisDateTime.setMilliseconds(0);

        return __thisDateTime;
    };

    /**
     * Date formatter
     */
    __dateTime.format = ($date, $pattern = 'YYYY-MM-DD HH:mm:ss') => {
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

        return dateFormat($date, $pattern)
    };


    if ('function' === typeof define && define.amd) {
        define(function () {
            return __dateTime;
        });
    } else if ('object' === typeof exports) {
        module.exports = __dateTime;
    } else {
        $global.__DateTime = __dateTime;
    }
})(this);


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
 * {past Or Future pastOrFuture, approximately days, day, hour, min, sec}
 * Example: new Date().diff(new Date("1970-1-1"))
 * fix bugs: when the date diff is negative integer, then take absolute value
 * add var: pastOrFuture return boolean, when past is true, when future is false;
 */
Date.prototype.diff = function ($date) {
    let diffValue = this.getUnixTimeSec() - $date.getUnixTimeSec();
    let pastOrFuture = true;
    if (diffValue === 0) {
        return {pastOrFuture: false, days: 0, day: 0, hour: 0, min: 0, sec: 0}
    } else if (diffValue < 0) {
        pastOrFuture = false;
        diffValue = Math.abs(diffValue);
    }
    const days = (diffValue / 86400).toFixed(2);
    const day = diffValue >= 86400 ? parseInt(diffValue / 86400) : 0;
    const hour = diffValue % 86400 / 3600 >= 1 ? parseInt(diffValue % 86400 / 3600) : 0;
    const min = diffValue % 86400 % 3600 / 60 >= 1 ? parseInt(diffValue % 86400 % 3600 / 60) : 0;
    const sec = diffValue % 86400 % 3600 % 60;
    return {pastOrFuture, days, day, hour, min, sec};
};

