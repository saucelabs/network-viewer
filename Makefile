build:
	rm -rf ./lib
	mkdir -p ./lib
	babel ./src -d ./lib
	node-sass --include-path ./node_modules --output-style compact -q --importer ./config/sass-importer.js ./src -o ./lib && \
	postcss -r --config=./config/postcss.config.js ./lib/*.css || exit 0
	cp -a ./src/images/. ./lib/images/ || exit 0
	cp -a ./src/fonts/. ./lib/fonts/ || exit 0
