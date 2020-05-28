install:
	npm install

publish-pack:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

