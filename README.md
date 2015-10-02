React Webpack Loopback
=====================

The minimal dev environment to enable live-editing React components.



### Usage

```
npm install
gulp dev
open localhost:8080/webpack-dev-server/ or without /webpack-dev-server
```


### Server


## Local environement

- launch `mongod`
- edit `.env` by adding the following line

`DB_CONNECTOR=loopback-connector-mongodb
DB_URI=mongodb://127.0.0.1`

- run `node .`

It will launch a local server on port `3001` that will expose an API plug on your local mongo database

## Deploy

By default the gulp production task will put all the file in server/client directory.
