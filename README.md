# Azure Functions & ExpressJS Template

A small template to get started with Azure Functions & a minimalist Express app. Designed to work with Azure functions 2.0 & NodeJS v10

## Setup guide

- Download, clone or use template & then run NPM/Yarn install
- Build normal express app using the app folder
- It is generally easier to use VS Code Azure extension to start & deploy the app. However there is also a CLI that can be used to achieve the same outcome.
- All routes are handled by Express
- GET, POST, PUT & DELETE Requests are accepted. Can be added or removed in app/functions.json
- Azure Functions route prefix has been removed but can be added back in via host.json

## Known issues

- Multipart requests are not supported
