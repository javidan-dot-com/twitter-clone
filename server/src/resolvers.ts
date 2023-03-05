import { Resolvers } from "./resolvers-types.generated"
import queryTwitterResolvers from "./resolvers/Query"

const resolvers: Resolvers = {
    Query: queryTwitterResolvers,
}
export default resolvers