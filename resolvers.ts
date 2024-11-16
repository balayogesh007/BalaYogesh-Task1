import { UserResolver } from './src/users/user.resolver';

export const resolvers = {
  Query: {
    getAllUserDetails: () => UserResolver.getAllUserDetails(),
    getUserDetailsById: (parent: any, args: any) => {
      return UserResolver.getUserDetailsById(args?.id);
    },
  },
  Mutation: {
    updateUserDetail: () => UserResolver.updateUserDetail(),
    deleteUserDetail: () => UserResolver.deleteUserDetail(),
  },
};
