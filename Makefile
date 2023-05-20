install:
	npm ci

test:
	npm test

test-steps:
	npx jest --testNamePattern step1
	npx jest --testNamePattern step2
	npx jest --testNamePattern step3
	npx jest --testNamePattern step4
	npx jest --testNamePattern step5

run:
	bin/weather.js __fixtures__/weather1.csv
