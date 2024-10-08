#!/bin/bash
# Specify the folder path you want to scan
folder_path="./src/Assets/Icons"

app_output_file="./src/Components/Icons/index.tsx"


web_output_file="./src/Components/Icons/index.web.ts"

# Make the files to writeable only from script
chmod +w "$app_output_file"
chmod +w "$web_output_file"

> "$app_output_file"
> "$web_output_file"

echo "//  This file is auto-generated and read-only
import React, { FC } from 'react';
import { IconProps } from './props';
import { getSize } from './utils/getSize';
" >> "$app_output_file"

echo "//  This file is auto-generated and read-only
import { makeIconWeb } from './utils/makeIconWeb'" >> "$web_output_file"

for file in "$folder_path"/*; do
  if [ -f "$file" ]; then
    filename=$(basename -- "$file")
    filename_noext="${filename%.*}"  # remove the extension
    filename_capitalized="$(tr '[:lower:]' '[:upper:]' <<< ${filename_noext:0:1})${filename_noext:1}"
    echo "import { ReactComponent as Icon${filename_capitalized}Svg } from '~Assets/Icons/$filename'" >> "$web_output_file"
    echo "import Icon${filename_capitalized}Svg from '~Assets/Icons/$filename'" >> "$app_output_file"
  fi
done

echo "
export * from './props'

" >> "$web_output_file"

echo "

export * from './props';

" >> "$app_output_file"

# Loop through files in the folder and append their paths to the output files
for file in "$folder_path"/*; do
  if [ -f "$file" ]; then
    filename=$(basename -- "$file")
    filename_noext="${filename%.*}"  # remove the extension
    filename_capitalized="$(tr '[:lower:]' '[:upper:]' <<< ${filename_noext:0:1})${filename_noext:1}"
    echo "export const Icon${filename_capitalized}: FC<IconProps> = ({ color = '#000000', size = 'xxs', isRTL = false, testID = 'icon-${filename_noext}' }) => {
  const iconSize = getSize(size);
  return <Icon${filename_capitalized}Svg color={color} height={iconSize} width={iconSize} style={{
        transform: isRTL ? [{ scaleX: -1 }] : []
      }} testID={testID} accessible={true} accessibilityRole='image' />;
}; " >> "$app_output_file"
    echo "export const Icon${filename_capitalized} = makeIconWeb(Icon${filename_capitalized}Svg)" >> "$web_output_file"
  fi
done

prettier --write "$app_output_file"
prettier --write "$web_output_file"

npx eslint --fix -c ./packages/icons/.eslintrc.cjs --ext .tsx "$app_output_file"

# Make the output files read-only
chmod -w "$app_output_file"
chmod -w "$web_output_file"


echo "File paths have been written to index.tsx"