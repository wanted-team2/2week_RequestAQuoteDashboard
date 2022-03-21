const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server');
const cors = require('cors');
const data = require('./db.json');

let corsOptions = {
  origin: 'http://localhost:3000/',
};
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.use('/graphql', jsonGraphqlExpress.default(data));
app.listen(PORT);
