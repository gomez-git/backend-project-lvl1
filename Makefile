install: # install dependencies
	npm ci
	npm link

publish: # publish npm package
	npm publish --dry-run

lint: # run eslint
	npx eslint .
