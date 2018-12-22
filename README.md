# node-to-deno

https://github.com/denoland/deno 
> A secure TypeScript runtime on V8 https://deno.land/

How do you run a `node` file in `deno`?
How do you use `node_modules` / `npm` packages in `deno`?

Webpack!

This is a proof of concept that allows you to use a `npm` module in deno.

```bash
yarn
yarn build
deno ./src/main.ts
```