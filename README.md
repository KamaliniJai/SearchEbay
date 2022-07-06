# SearchEbay

This test is completed with webdriverIO and mocha. For reports Allure has been used

This test suite has two tests and one test is made to fail purposefully for reporting purpose
## Pre requisites
- Node
- npm
- webdriver io
- allure-commandline
- Java runtime needed for allure

## How to run the test

#### 1. Install node & npm
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

#### 3. Install webriver io
```sh
npm install @wdio/cli
```
#### 4. Install allure-commandline
```sh
npm allure-commandline -g
```
#### 5. Run the tests
```sh
npx wdio run wdio.conf.js
```
#### 6. Generate the report using allure-commandline
```sh
allure generate --clean allure-results && allure open
```
