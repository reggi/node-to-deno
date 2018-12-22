find ./deno_modules -type f -exec sed -i -e '0,/module.exports =/s//export default/' {} \;
sh IMPORT_FIXER_ALL.sh