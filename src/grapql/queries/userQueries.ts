import gql from 'graphql-tag'

export const EDIT_USER_INFO_MUTATION = gql`
mutation updateUserInfo($email: String, $phone: String, $file: Upload!) {
  updateUserInfo(updateUserInfo: { email: $email, phone: $phone, image: $file}) {
    email,
    phone,
    image
  }
}

`