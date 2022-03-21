const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server');
const data = require('./db.json');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname + '/../build/')));

app.use('/graphql', jsonGraphqlExpress.default(data));
app.listen(PORT);
