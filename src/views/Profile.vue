
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
				id: 1,
                email: null,
                phone: null,
            },
			file: null
        }
    },
    methods: {
		onFileChanged({ target: { files = [] } }) {
				this.file = files[0]
		},
        async createUser () {
			console.log(this.file)
            const userInfoUpdated = await this.$apollo.mutate({
                mutation: EDIT_USER_INFO_MUTATION,
                variables: {
                    // updateUserInfo: this.updateUserInfo,
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