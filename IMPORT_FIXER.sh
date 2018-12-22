FILE=$1
TEXT=$(grep $FILE -e '// hoist-for-deno-webpack:' | sed 's/\/\/ hoist-for-deno-webpack: //g')
printf '%s\n%s\n' "$TEXT" "$(cat $FILE)" >$FILE