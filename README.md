# Patas cache store for Memory lru

The Memory (deletes the least-recently-used items) cache store engine for the [Patas](
    https://github.com/funwun/patas) module.

## Installation
```bash
npm install patas-store-memory-lru
```

## Usage Example
```javascript
// require modules
var Patas = require('patas').Patas,
    redisStore = require('patas-store-memory-lru');

// create redis store
var store =  memoryLruStore({
    prefix: 'test-',
    ttl: 30000, // default: 30 * 1000
    size: 1024 * 1024 * 10 // max store size (bytes)
});

// create patas with source and stores
var patas = new Patas({
    source: ...,
    stores: [store]
});
```
Get detail from [patas](https://github.com/funwun/patas).

## Options
* `prefix` Cache key prefix.
* `ttl` Cache timeout after a given number of milliseconds `default ttl for patas.query()`.
* `size` Max memory usage.

## License

The MIT License (MIT) Copyright (c) 2016 Lewis Deng &lt;kekuer@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
