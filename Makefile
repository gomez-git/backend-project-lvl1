install: # install dependencies
	npm ci
	npm link

brain-games: # run brain-games.js
	@node bin/brain-games.js

lint: # run eslint
	@npx eslint .

publish: # publish npm package
	@npm publish --dry-run
