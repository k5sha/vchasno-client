import gql from 'graphql-tag'

export const EDIT_USER_INFO_MUTATION = gql`
mutation updateUserInfo($first_name: String!, $second_name: String!,$patronymic: String!, $email: String, $phone: String, $file: Upload) {
  updateUserInfo(updateUserInfo: { first_name: $first_name,second_name: $second_name,patronymic: $patronymic,email: $email, phone: $phone, image: $file}) {
    first_name,
    second_name,
    patronymic,
    email,
    phone,
    image
  }
}
`

export const REGISTER_USER = gql`mutation signup($signup: SignupUserInput!) {
  signup(signupUserInput: $signup) {
    access_token
  }
}
`

export const LOGIN_USER = gql`mutation login($login: LoginUserInput!) {
  login(loginUserInput: $login) {
    access_token
  }
}`

export const LOGGED_IN_USER = gql`query {
  me {
    id,
    username,
    userInfo {
      first_name,
      second_name,
      patronymic,
      image,
      email,
      phone
    }
  }
}`