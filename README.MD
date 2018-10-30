# turkish-time [![npm](https://img.shields.io/npm/v/turkish-time.svg?style=flat-square)](https://www.npmjs.com/package/turkish-time)

This is a simple node module that returns the Turkish time within a date object.
Moment is more likely a good solution if you require more advanced operations.

### Upcoming Changes

Offset stays same unlike for the time where unlike other countries where Turkish government decided to pass a law for continuous summer time usage
  
English Source = https://www.theguardian.com/world/2016/sep/08/turkey-to-stay-on-summer-time-all-year-round

This law will be revoked on 28 October 2018
Module will be updated on 15 October 2018 to work in a similar manner to moment.js

Edit : The revocation is revoked by the president.

### Install

You can easily install it by the following command.

```bash
npm i turkish-time
```

### Usage

Usage is simple and fairly straight forward as it overrides console methods
require `turkish-time` into script...

```javascript
  let turkish-time = require('turkish-time');
  turkish-time.getTime(); //Returns a Date object
```
