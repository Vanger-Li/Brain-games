install:
	npm install

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

publish-pack:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

