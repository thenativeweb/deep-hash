# deep-hash

deep-hash calculates nested hashes.

## Installation

```shell
$ npm install deep-hash
```

## Quick start

First you need to add a reference to deep-hash to your application:

```javascript
const deepHash = require('deep-hash');
```

Then call `deepHash` and provide a value you want to hash. Beside the primitive data types also objects and arrays are supported:

```javascript
const hash = deepHash({
  name: 'the native web',
  founded: 2012
});

// => {
//      name: '55a1f59420da66b2c4c87b565660054cff7c2aad5ebe5f56e04ae0f2a20f00a9',
//      founded: '4b9a7f50c0bb198c6f5414c5a8459f5d216d34ab521ea94c060ea35cac66f900'
//    }
```

*Please note that deep-hash uses SHA256 as hash algorithm.*

Optionally, you may specify a secret to "salt" the hashes:

```javascript
const hash = deepHash({
  name: 'the native web',
  founded: 2012
}, 'secret');
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```

## License

The MIT License (MIT)
Copyright (c) 2018 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
