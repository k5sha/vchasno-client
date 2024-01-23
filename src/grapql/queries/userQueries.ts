import gql from 'graphql-tag'

export const EDIT_USER_INFO_MUTATION = gql`
mutation updateUserInfo($file: Upload!) {
  updateUserInfo(updateUserInfo: { id: 1, email: "PIDOR", phone: "HUESOS", image: $file}) {
    email,
    phone,
    image
  }
}

`