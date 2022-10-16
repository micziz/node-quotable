# node-quotable

Wrapper around the quotable api

## Install

```shell
npm i node-quotable
```

## Usage

```js
import { getRandomQuote } from 'node-quotable';

const data = await getRandomQuote();
console.log(data)
```

`data` is an object so you can get specific parts of it

```js
import { getRandomQuote } from 'node-quotable';

const { content, author } = await getRandomQuote();
```

## License

Apache 2.0