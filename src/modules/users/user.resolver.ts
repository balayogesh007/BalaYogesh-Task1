import { CreateUserInput } from './dto/create-user.input';
import { UserService } from './user.service';

export const UserResolver = {

  createUser: async (createUserInput: CreateUserInput) => {
    const userService = new UserService();
    return userService.createUser(createUserInput);
  },

  getAllUserDetails: async (pageNo: number, perPage: number) => {
    const userService = new UserService();
    return userService.getAllUserDetails(pageNo, perPage);
  },

  getUserDetailsById: async (id: string) => {
    const userService = new UserService();
    return userService.getUserDetailsById(id);
  },

  updateUserDetail: () => {
    return 'Updated Successfully';
  },

  deleteUserDetail: async (id: string) => {
    const userService = new UserService;
    return userService.deleteUserDetail(id)
  },
};
