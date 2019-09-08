# is-retry-allowed [![Build Status](https://travis-ci.org/sindresorhus/is-retry-allowed.svg?branch=master)](https://travis-ci.org/sindresorhus/is-retry-allowed)

> Check whether a request can be retried based on the `error.code`


## Install

```
$ npm install --save is-retry-allowed
```


## Usage

```js
const isRetryAllowed = require('is-retry-allowed');

isRetryAllowed({code: 'ETIMEDOUT'});
//=> true

isRetryAllowed({code: 'ENOTFOUND'});
//=> false

isRetryAllowed({});
//=> true
```


## API

### isRetryAllowed(error)

#### error

Type: `Error | object`

The `.code` property, if it exists, will be used to determine whether retry is allowed.
