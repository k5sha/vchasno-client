import gql from 'graphql-tag'

export const EDIT_USER_INFO_MUTATION = gql`
mutation updateUserInfo($email: String, $phone: String, $file: Upload) {
  updateUserInfo(updateUserInfo: { email: $email, phone: $phone, image: $file}) {
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
    first_name,
    second_name,
    patronymic,
    userInfo {
      image,
      email,
      phone
    }
  }
}`