// const m = require('./dist/marked.js')
// console.log(typeof m);

// const window = {}

import marked from './dist/marked';
const parsed = marked.lexer('> i am using marked.')
console.log(parsed);