export const typeDefs = `
    input CreateUserInput{
      first_name: String,
      last_name: String,
      email_id: String,
      is_major: Boolean,
      city: String,
      district: String,
      state: String,
      country: String
    }
    
    type UserProfile{
      id: ID
      isMajor: Boolean
      city: String
      district: String
      state: String
      country: String
    }
    type User{
        id: ID
        first_name: String
        last_name: String
        email_id: String
    }

    type Query{
      getAllUserDetails(pageNo: Int!, perPage: Int!): [User],
      getUserDetailsById(id: ID!): User,
      signIn(emailId: String!): String
    }

    type Mutation{
      createUser(createUserInput: CreateUserInput!): User
      updateUserDetail: String
      deleteUserDetail(id: ID!): User
    }
`;
