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

## installation
```
npm i datetime-helper
```

## Usage
```
require('datetime-helper');
```

### Date To Unix time
```
// return integer
const date = new Date().;
date.getUnixTimeSec();
```

### Number To Unix time
```
// return integer
Date.now().getUnixTimeSec();
```

### Number To Date
```
// return date
(1591200000).getDatetime();
```

### String To Unix time
```
// Datetime of string type to UNIX time seconds
// Note: When time is already of string type and the date must be in program format
//       The value of the given number rounded to the nearest integer.
// Program format:
//       Thu Jan 01 1970 08:00:00 GMT+0800 (GMT+08:00)
//       January 1, 1970 00:00:00 GMT
//       01 Jan 1970 00:00:00 GMT
//       1970-01-01T08:00:00.000
//       1970-01-01T00:00:00.000Z
//       01-01-1970 08:00:00.000
//       01-01-1970 00:00:00.000Z
//       ...
// return integer

"1970-01-01T08:00:00Z".getUnixTimeSec();
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

## Version
0.0.3

## Copyright
(C) 2020 Jkin.Feng

## Licensed
MIT
