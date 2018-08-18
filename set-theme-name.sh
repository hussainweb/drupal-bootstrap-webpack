#!/usr/bin/env bash

if [ "$1" == "" ]; then
    echo "Usage: $0 new_theme_name";
    exit 1;
fi

sed -i "s/THEMENAME/$1/g" config/schema/THEMENAME.schema.yml
sed -i "s/THEMENAME/$1/g" THEMENAME.starterkit.yml

mv THEMENAME.libraries.yml $1.libraries.yml
mv THEMENAME.starterkit.yml $1.info.yml
mv THEMENAME.theme $1.theme

mv config/install/THEMENAME.settings.yml config/install/$1.settings.yml
mv config/schema/THEMENAME.schema.yml config/schema/$1.schema.yml

rm $0
