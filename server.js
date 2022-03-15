/* eslint-disable @typescript-eslint/no-var-requires */
const jsonMerger = require('json-merger');
const mergedDb = jsonMerger.mergeFiles(['./mock/items.json', './mock/companies.json']);

const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(mergedDb);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3010, () => {
  console.log('JSON Server is running');
});
