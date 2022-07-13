# Codingly.io: Base Serverless Framework Template

https://codingly.io

## What's included
* Folder structure used consistently across our projects.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-bundle): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/andrew-caines/sls-base
cd YOUR_PROJECT_NAME
npm install
```

Please note, this does not include MIDDY or http-errors or serverless or uuid or any other super common libraries, the idea being that you start with a bare-minimum scaffold and that way it can be used in other AWS features like notification service, or the such.

-Andrew
