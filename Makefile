install:
	npm install

brain-games:
	node bin/brain-games.js

publish-pack:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

