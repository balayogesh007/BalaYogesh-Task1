import { CreateUserInput } from './src/modules/users/dto/create-user.input';
import { UserResolver } from './src/modules/users/user.resolver';

export const resolvers = {
  Query: {
    getAllUserDetails: (_: unknown, args: { pageNo: number; perPage: number; }) => UserResolver.getAllUserDetails(args?.pageNo, args?.perPage),
    getUserDetailsById: (parent: any, args: {id: string}) => {
      return UserResolver.getUserDetailsById(args?.id);
    },
  },
  Mutation: {
    createUser: (_: unknown, args: {createUserInput: CreateUserInput}) => UserResolver.createUser(args?.createUserInput),
    updateUserDetail: () => UserResolver.updateUserDetail(),
    deleteUserDetail: (_: unknown, args: {id: string}) => UserResolver.deleteUserDetail(args?.id),
  },
};
