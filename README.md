# Datetime Helper

### fix bugs
```
Date.prototype.diff
Example: new Date().diff(new Date("2021-1-1"));
when the date diff is negative integer, then take absolute value
return an object
{
    pastOrFuture: true(represents the past) or false(represents the future)
    days: about days apart, 
    day: day apart, 
    hour: hour apart, 
    min: min apart, 
    sec: sec apart
}
```

## Usage
```
require('datetime-helper');
```

### Number To Date
```
// return date
(1591200000).getDatetime();
```

 
### Zero hour of the date
```
// return date
new Date().getDateZeroTime();
```
 
### Date add
```
// return date
new Date().add(1);
```
 
### DateTime difference
```
// return object

new Date().diff(new Date("1970-1-1"));
```
   
### Date formatter
```
// return string
new Date().format();
new Date().format('YYYY-MM-DD HH:mm:ss:ms');
new Date().format('YYYY/MM/DD HH/mm/ss/ms');
new Date().format('YYYY年MM年DD日HH小时mm分ss秒ms毫秒');
new Date().format('MM,DD YYYY');
......
```



# [@jkinfeng/datetime-helper](https://github.com/jkinfeng/datetime-helper)
> Extended methods for JavaScript Date Object & Number Object & String Object with dates & times

[![NPM version](https://img.shields.io/npm/v/datetime-helper.svg?style=flat)](https://github.com/jkinfeng/datetime-helper) 
[![NPM Downloads](https://img.shields.io/npm/dm/datetime-helper.svg?style=flat)](https://github.com/jkinfeng/datetime-helper) 
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/jkinfeng/datetime-helper/blob/HEAD/LICENSE)

>JavaScript Date objects represent a single moment in time in a platform-independent format.<br>
Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.<br>
The getTime() method returns the number of milliseconds since the Unix Epoch.<br>
JavaScript uses milliseconds as the unit of measurement, whereas Unix Time is in seconds.<br>
getTime() always uses UTC for time representation.<br>
For example, a client browser in one timezone,<br>
getTime() will be the same as a client browser in any other timezone.

## Installation

```
npm i datetime-helper
```

## Basic usage:
```javascript
require('datetime-helper');
```

## API Reference

### Syntax
**dateObj.getUnixTimeSec()**
  > The getUnixTimeSec() method returns the number of seconds since the Unix Epoch.
  - Example: new Date().getUnixTimeSec();
```
  result numbers like this: 1592494318
```
**numberObj.getUnixTimeSec()**
  > The getUnixTimeSec() method returns the number of seconds since the Unix Epoch.
  - Example: (1592494318215).getUnixTimeSec();
```
  result numbers like this: 1592494318
```
**stringObj.getUnixTimeSec()**
  > A string in RFC2822 or ISO 8601 date format, the getUnixTimeSec() method returns the number of seconds since the Unix Epoch.
  - Example:
    - "1592494318215".getUnixTimeSec();
    - "January 1, 1970 00:00:00".getUnixTimeSec();
    - "1970-01-01T00:00:00.000Z".getUnixTimeSec();
```
  result numbers like this: 1592494318
```


- dateObj.getUnixTimeSec()
  > The getUnixTimeSec() method returns the number of seconds since the Unix Epoch.
- dateObj.getUnixTimeSec()
  > The getUnixTimeSec() method returns the number of seconds since the Unix Epoch.
  
**dateObj.format()**
  > The getUnixTimeSec() method returns the number of seconds since the Unix Epoch.


## Contributing

Please submit all issues and pull requests to the [jkinfeng/datetime-helper](https://github.com/jkinfeng/datetime-helper) repository!

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/jkinfeng/datetime-helper/issues).

### License

[MIT](LICENSE)