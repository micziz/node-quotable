import { getRandomQuote } from './index.js';

let { content, author} = await getRandomQuote();

console.log(content);
console.log(author);