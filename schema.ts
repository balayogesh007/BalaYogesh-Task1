export const typeDefs = `
    type User{
        id: String
        name: String
        emailId: String
        phoneNumber: Int
    }

    type Query{
      getAllUserDetails: [User],
      getUserDetailsById(id: Int!): User
    }

    type Mutation{
      updateUserDetail: String
      deleteUserDetail: String
    }
`;
