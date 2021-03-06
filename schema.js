exports.typeDefs=`
    type Recipe {
        _id: ID
        name: String!
        category: String!
        description: String!
        instructions: String!
        createdDate: String!
        likes: Int
        username: String
        image: String
    }

    type User {
        _id: ID
        username: String! @unique
        password: String!
        email: String!
        joinDate: String
        favorites: [Recipe]
    }

    type Query {
        getAllRecipes: [Recipe]
        getCurrentUser: User
        getUserRecipes(username: String!): [Recipe]
        getRecipe(_id: ID!): Recipe
        searchRecipes(searchTerm: String): [Recipe]
    }

    type Token {
        token: String!
    }

    type Mutation {
        addRecipe(name: String!, description: String!, category: String!, instructions: String!, username: String, image: String): Recipe
        deleteUserRecipe(_id: ID!): Recipe
        likeRecipe(_id: ID!, username: String!): Recipe
        unlikeRecipe(_id: ID!, username: String!): Recipe
        signInUser(username: String!, password: String!): Token
        signUpUser(username: String!, email: String!, password: String!): Token
    }
`