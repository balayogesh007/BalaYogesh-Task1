import { UserDetails } from './user-data';

export const UserResolver = {
  getAllUserDetails: () => {
    return UserDetails;
  },

  getUserDetailsById: (id: number) => {
    console.log('ID', id);
    const user = UserDetails.find((value) => value?.id == id);
    return user;
  },

  updateUserDetail: () => {
    return 'Updated Successfully';
  },

  deleteUserDetail: () => {
    return 'Deleted Successfully';
  },
};
