import { gql } from "apollo-boost";

/* Recipes Queries */
export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      _id
      name
      category
      description
      instructions
      createdDate
      likes
      username
      image
    }
  }
`;

export const GET_RECIPE = gql`
  query($_id: ID!) {
    getRecipe(_id: $_id) {
      name
      category
      description
      instructions
      createdDate
      likes
      username
      image
    }
  }
`;

export const SEARCH_RECIPES = gql`
  query($searchTerm: String) {
    searchRecipes(searchTerm: $searchTerm) {
      _id
      name
      category
      description
      instructions
      createdDate
      likes
      username
      image
    }
  }
`;

/* Recipes Mutations */
export const ADD_RECIPE = gql`
  mutation($name: String!, $description: String!, $category: String!, $instructions: String!, $username: String!, $image: String) {
    addRecipe(name: $name, description: $description, category: $category, instructions: $instructions, username: $username, image: $image) {
      name
      description
      category
      instructions
      username
      image
    }
  }
`;

export const DELETE_USER_RECIPE = gql`
  mutation($_id: ID!) {
    deleteUserRecipe(_id: $_id) {
      _id
    }
  }
`;


/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      joinDate
      email
      favorites {
        _id
        name
        category
        createdDate
        likes
        username
        description
        image
      }
    }
  }
`;

export const GET_USER_RECIPES = gql`
  query($username: String!) {
    getUserRecipes(username: $username) {
      _id
      name
      category
      createdDate
      likes
      username
      description
      image
    }
  }
`;

export const GET_USER_FAVORITES = gql`
  query {
    getCurrentUser {
      favorites {
        _id
      }
    }
  }
`

/* User Mutations */
export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signUpUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

export const LIKE_RECIPE = gql`
    mutation($_id: ID!, $username: String!) {
        likeRecipe(_id: $_id, username: $username) {
            _id
        }
    }
`;

export const UNLIKE_RECIPE = gql`
    mutation($_id: ID!, $username: String!) {
        unlikeRecipe(_id: $_id, username: $username) {
            _id
        }
    }
`;

export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signInUser(username: $username, password: $password) {
      token
    }
  }
`;
