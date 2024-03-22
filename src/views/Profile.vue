
<template>
  <div class="profile_view">
    <h1>{{ user.userInfo.second_name }} {{ user.userInfo.first_name }} {{ user.userInfo.patronymic }}</h1>
    <img
      :src="`${api_url}${user.userInfo.image}`"
      style="width: 128px; height: 128px;"
    >
  </div>
  
  
  <div class="forms">
    <input
      type="file"
      accept="image/*"
      captures	
      @change="onFileChanged"
    >
    <br>
    <br>
    <div>
      <h3>Інформація</h3>
      <input
        v-model="updateUserInfo.second_name"  
        type="text"
        placeholder="Прізвище"
      >
      <br>
      <br>
      <input
        v-model="updateUserInfo.first_name"
        type="text"
        placeholder="Ім'я"
      >
      <br>
      <br>
      <input
        v-model="updateUserInfo.patronymic"
        type="text"
        placeholder="По батькові"
      >
      <br>
      <br>
    </div>
    <h3>Контактні дані</h3>
    <div>
      <input
        v-model="updateUserInfo.email"
        type="email"
        placeholder="Email"
      >
      <br>
      <br>
      <input
        v-model="updateUserInfo.phone"
        type="phone"
        placeholder="Phone"
      >
      <br>
      <br>
    </div>
    <br>
    <br>
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
          api_url: import.meta.env.VITE_SERVER_API,
            updateUserInfo: {
                first_name: null,
                second_name: null,
                patronymic: null,
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
      this.updateUserInfo.first_name = this.user.userInfo.first_name;
      this.updateUserInfo.second_name = this.user.userInfo.second_name;
      this.updateUserInfo.patronymic = this.user.userInfo.patronymic;
      this.updateUserInfo.phone = this.user.userInfo.phone;
      this.updateUserInfo.email = this.user.userInfo.email;
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
                    first_name: this.updateUserInfo.first_name != '' ? this.updateUserInfo.first_name : null,
                    second_name: this.updateUserInfo.second_name != '' ? this.updateUserInfo.second_name : null,
                    patronymic: this.updateUserInfo.patronymic != '' ? this.updateUserInfo.patronymic : null,
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