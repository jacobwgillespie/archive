#!/bin/bash

# Generate JavaScript
pbjs -t static-module -o generated/client.js -w commonjs --force-number tfplugin5.proto

# Generate TypeScript
pbts -o generated/client.d.ts generated/client.js

# Replace Long types with number (see https://github.com/dcodeIO/protobuf.js/issues/1109)
sed -i '' 's/reader.int64();/reader.int64().toNumber();/g' generated/client.js

# Format generated files
prettier --write generated/client.d.ts generated/client.js
