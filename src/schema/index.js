import { makeExecutableSchema } from "graphql-tools";
import Resolvers from '../resolvers'
import Schema from './schema';

const schema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers,
  });

export default schema