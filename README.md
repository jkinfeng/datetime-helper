# [@jkinfeng/datetime-helper](https://github.com/jkinfeng/datetime-helper)
> Datetime helper for JavaScript<br>

[![NPM version](https://img.shields.io/npm/v/datetime-helper.svg?style=flat)](https://github.com/jkinfeng/datetime-helper) 
[![NPM Downloads](https://img.shields.io/npm/dm/datetime-helper.svg?style=flat)](https://github.com/jkinfeng/datetime-helper) 
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/jkinfeng/datetime-helper/blob/HEAD/LICENSE)

>JavaScript Date objects represent a single moment in time in a platform-independent format.<br>
Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.<br>
The getTime() method returns the number of milliseconds since the Unix Epoch.<br>
JavaScript uses milliseconds as the unit of measurement, whereas Unix Time is in seconds.<br>
getTime() always uses UTC for time representation.<br>
For example, a client browser in one timezone,<br>
getTime() will be the same as a client browser in any other timezone.<br>
So use the dateObj.getUnixTimeSec() uniform standard in seconds<br>
save the time(integer number) to database or any storage<br>
You don't need to think about timezone

## Installation

```
npm i datetime-helper
```

## Basic usage:
```javascript
// node.js
// const dth = require('datetime-helper');

// web browser
// <script src='___js_path___/datetime-helper/index.js'></script>
// __DateTime.getUnixTimeSec(...)
```

## API Reference

### Syntax
**dth.getUnixTimeSec($dateTime, $ms = false)**
> The getUnixTimeSec() method returns the number of seconds since the Unix Epoch.
  
| Param | Type | Default Value | Description |
| --- | --- | --- | --- |
| <$dateTime> | <code>Object or String or Number</code> |  | Date Object or A string of RFC2822 or ISO 8601 date or A Number |
| [$ms] | <code>Boolean</code> | false | true: in millisecond<br><br>false: in second |

> Example:
```javascript
const dth = require('datetime-helper');
dth.getUnixTimeSec(new Date());
dth.getUnixTimeSec(1592494318);
dth.getUnixTimeSec(1592494318856, true);
dth.getUnixTimeSec(Date.now(), true);
dth.getUnixTimeSec('1592494318');
dth.getUnixTimeSec('1592494318856', true);
dth.getUnixTimeSec('1970-01-01');  // A string in RFC2822 or ISO 8601 date format
dth.getUnixTimeSec('1970-01-01T00:00:00.000Z');
```
<br>

**dth.getDateZeroTime($dateTime, $ms = false)**
> The getUnixTimeSec() method returns the number of seconds since the Unix Epoch.
  
| Param | Type | Default Value | Description |
| --- | --- | --- | --- |
| <$dateTime> | <code>Object or String or Number</code> |  | Date Object or A string of RFC2822 or ISO 8601 date or A Number |
| [$ms] | <code>Boolean</code> | false | true: in millisecond<br><br>false: in second |

> Example:
```javascript
const dth = require('datetime-helper');
dth.getDateZeroTime(new Date());
dth.getDateZeroTime(1592494318);
dth.getDateZeroTime(1592494318856, true);
dth.getDateZeroTime(Date.now(), true);
dth.getDateZeroTime('1592494318');
dth.getDateZeroTime('1592494318856', true);
dth.getDateZeroTime('1970-01-01');  // A string in RFC2822 or ISO 8601 date format
dth.getDateZeroTime('1970-01-01T00:00:00.000Z');
```
<br>

**dth.dateAdd($date, $days)**
> The dateAdd() method returns a Date Object of JavaScript.
  
| Param | Type | Default Value | Description |
| --- | --- | --- | --- |
| <$date> | <code>Date Object</code> |  |  |
| <$days> | <code>Integer</code> |  |  |

> Example:
```javascript
const dth = require('datetime-helper');
dth.dateAdd(new Date(), 100);
dth.dateAdd(new Date(), -100);
```
<br>

**dth.dateDiff($start_date, $end_date)**
> The dateDiff() method returns an Object of JavaScript.<br>
  when 'Invalid Date' then returns 'Invalid Start Date' or 'Invalid End Date'
  
| Param | Type | Default Value | Description |
| --- | --- | --- | --- |
| <$start_date> | <code>Object or String or Number</code> |  | Date Object or A string of RFC2822 or ISO 8601 date or A Number |
| <$end_date> | <code>Object or String or Number</code> |  | Date Object or A string of RFC2822 or ISO 8601 date or A Number |

> Return an Object
```javascript
// {
//    pof: boolean,  // pass or future, 
//                      false: $start_date >= $end_date,
//                      true $start_date < $end_date
//    val: integer (in sec), // the number of seconds between two date
//    days: string(float.toFix(2)),  // about how many days
//    day: integer, // specific days
//    hour: integer,  // specific hour
//    min: integer,  // specific min
//    sec: integer  // specific sec
// }
```

> Example:
```javascript
const dth = require('datetime-helper');
dth.dateDiff(new Date('1970-01-01'), new Date('1971-01-01'));
dth.dateDiff(Date.now() / 1000, new Date('1971-01-01'));
dth.dateDiff(1592494318, 1602494318);
dth.dateDiff('1592494318', '1582494318');
```
<br>

**dth.format($date, $pattern = 'YYYY-MM-DD HH:mm:ss')**
> The format() method return format a Date instance to string.
  
| Param | Type | Default Value | Description |
| --- | --- | --- | --- |
| <$date> | <code>Date Object</code> |  |  |
| [$pattern] | <code>String</code> | YYYY-MM-DD HH:mm:ss | YYYY: full year<br>YY: year<br>MM: month<br>DD: day<br>HH: hour<br>mm: min<br>ss: sec<br>ms: millisecond  |

> Example:
```javascript
const dth = require('datetime-helper');
dth.format(new Date());
dth.format(new Date(), 'YYYY/MM/DD HH/mm/ss/ms');
dth.format(new Date(), 'YYYY年MM年DD日HH小时mm分ss秒ms毫秒');
dth.format(new Date(), 'MM @ DD @ YYYY @ what the fun~~ HH ~~ mm ~~ ss ~~ ms');
```
<br>

## Contributing

Please submit all issues and pull requests to the [jkinfeng/datetime-helper](https://github.com/jkinfeng/datetime-helper) repository!

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/jkinfeng/datetime-helper/issues).

### License

[MIT](LICENSE)