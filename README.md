# Bling to Pipedrive

> API Restful with Node.js, TypeScript and MongoDB for the integration between Bling and Pipedrive

## Requirements

- Create an integration between Pipedrive and Bling platforms.
- Create a collection that saves opportunities entered in Bling by day and total value.
- List the data for this collection

## Endpoints

- **[GET]** `/deals`: List the deals collection
- **[POST]** `/deals`: Store deals providers by Pipedrive and save it on Bling and deals collection

## Usage

- Install dependencies with `yarn`
- Copy your `env.example` to `.env` and setup your environments
- Start the API with `yarn start` :rocket:

## Coverage

![image](https://user-images.githubusercontent.com/30202634/93416367-0f076f00-f87c-11ea-81b4-ce58dc5c880d.png)

## Project Structure

```bash
bling-pipedrive
├── src/
│   ├── domain/
│   │   └── usecases/
│   ├── infra/
│   │   ├── helpers/
│   │   └── repositories/
│   ├── main/
│   │   ├── adapters/
│   │   ├── composers/
│   │   ├── config/
│   │   ├── middlewares/
│   │   └── routes/
│   ├── presentation/
│   │   ├── errors/
│   │   ├── helpers/
│   │   └── routers/
│   └── utils/
│       ├── errors/
│       └── mocks/
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .huskyrc.json
├── .lintstagedrc.json
├── .prettierrc
├── LICENSE
├── README.md
├── env.example
├── jest-integration-config.js
├── jest-mongodb-config.js
├── jest-unit-config.js
├── jest.config.js
├── package.json
├── tsconfig.json
├── tsconfig.release.json
└── yarn.lock
```
