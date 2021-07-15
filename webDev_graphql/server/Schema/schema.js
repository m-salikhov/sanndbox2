import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
} from 'graphql';

import Movies from '../Models/movie.js';
import Directors from '../Models/director.js';

const MovieType = new GraphQLObjectType({
	name: 'Movie',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		director: {
			type: DirectorType,
			resolve(parent, args) {
				return Directors.findById(parent.directorId);
			},
		},
	}),
});

const DirectorType = new GraphQLObjectType({
	name: 'Director',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		movies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args) {
				return Movies.find({ directorId: parent.id });
			},
		},
	}),
});

const Query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		movie: {
			type: MovieType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Movies.findById(args.id);
			},
		},
		director: {
			type: DirectorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Directors.findById(args.id);
			},
		},
		movies: {
			type: new GraphQLList(MovieType),
			async resolve(parent, args) {
				const movies = await Movies.find({});
				return movies;
			},
		},
		directors: {
			type: new GraphQLList(DirectorType),
			resolve(parent, args) {
				return Directors.find({});
			},
		},
	},
});

export default new GraphQLSchema({
	query: Query,
});
