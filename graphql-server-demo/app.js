const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const env = require('./config');
const schema = require('./schema/schema');


const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const PORT = env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Now listening for requests on port ${PORT}`);
});
