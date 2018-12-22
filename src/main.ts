import lodash from '../deno_modules/lodash';
console.log(lodash.includes(['a','b','c'], 'a'));

import path from '../deno_modules/path';
console.log(path.join('example', 'thomas'));

import marked from '../deno_modules/marked';
const parsed = marked.lexer('> i am using marked.')
console.log(parsed)

import example from '../deno_modules/example.js';
console.log(example)