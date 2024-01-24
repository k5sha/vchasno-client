
<template>
  <div class="graphql-test">
    <input
      v-model="updateUserInfo.email"
      type="email"
      placeholder="Email"
    >
    <input
      v-model="updateUserInfo.phone"
      type="phone"
      placeholder="Phone"
    >
    <input
      type="file"
      accept="image/*"
      captures	
      @change="onFileChanged"
    >
    <button @click="createUser">
      Create User
    </button>
  </div>
</template>

<script lang='ts'>
import { EDIT_USER_INFO_MUTATION } from '../grapql/queries/userQueries';

export default {
    name: 'GraphQLTest',
    data() {
        return {
            updateUserInfo: {
                email: null,
                phone: null,
            },
			file: null as File | null
        }
    },
    methods: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onFileChanged(event: any) {
        const inputElement = event.target as HTMLInputElement;
        if (inputElement.files && inputElement.files.length > 0) {
          this.file = inputElement.files[0] || null;
        }
      },
    async createUser () {
			console.log(this.file)
            const userInfoUpdated = await this.$apollo.mutate({
                mutation: EDIT_USER_INFO_MUTATION,
                variables: {
                   email: this.updateUserInfo.email,
                   phone: this.updateUserInfo.phone,
                   file: this.file
                },
                context: {
                  hasUpload: true,
                  headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-apollo-operation-name': 'windows', 
                  },
                },
            })

            console.log(userInfoUpdated.data.updateUserInfo)
        }
    }
}
</script>