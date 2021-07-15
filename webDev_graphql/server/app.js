import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';

import schema from './Schema/schema.js';

mongoose.connect(
	'mongodb+srv://admin:admin@cluster0.krtgv.mongodb.net/webDevGraphQL?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connecting to dataBase'));

const app = express();
const PORT = 5000;

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
