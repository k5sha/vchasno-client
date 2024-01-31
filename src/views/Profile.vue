
<template>
  <div class="profile_view">
    <h1>{{ user.first_name }} {{ user.second_name }} {{ user.patronymic }}</h1>
    <img
      :src="`http://localhost:3000/${user.userInfo.image}`"
      style="width: 128px; height: 128px;"
    >
  </div>
  
  
  <div class="forms">
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
      Змінити
    </button>
  </div>
</template>

<script lang='ts'>
import { mapActions, mapGetters } from 'vuex';
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
    computed: {
      ...mapGetters({user: 'account/user'})
    },
    mounted() {
      this.updateUserInfo.email = this.user.userInfo.email;
      this.updateUserInfo.phone = this.user.userInfo.phone;
    },
    methods: {
      ...mapActions({refreshUser: 'account/setUser'}),

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onFileChanged(event: any) {
        const inputElement = event.target as HTMLInputElement;
        if (inputElement.files && inputElement.files.length > 0) {
          this.file = inputElement.files[0] || null;
        }
      },
    async createUser () {
            await this.$apollo.mutate({
                mutation: EDIT_USER_INFO_MUTATION,
                variables: {
                   email: this.updateUserInfo.email != '' ? this.updateUserInfo.email : null,
                   phone: this.updateUserInfo.phone != '' ? this.updateUserInfo.phone : null,
                   file: this.file
                },
                context: {
                  hasUpload: true,
                  headers: {
                    'Content-Type': `${this.file != null ? 'multipart/form-data' : 'application/json'}`,
                    'x-apollo-operation-name': 'windows', 
                  },
                },
            })
          this.refreshUser()
        }
    }
}
</script>