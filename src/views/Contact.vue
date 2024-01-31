<template>
  <h2>Уроки</h2>
  <h1 v-if="$apollo.loading">
    Loading...
  </h1>
  <p
    v-for="subject in subjects"
    v-else
    :key="subject.id"
  >
    {{ subject.title }}
  </p>
</template>

<script lang='ts'>
import { defineComponent } from "vue"
import gql from 'graphql-tag'

export default defineComponent({
    name: 'ContactVue',
    apollo: {
    subjects:{
      query: gql`query {
      subjects {
        title
      }}`,
      pollInterval: 5000
    }
  },
  data() {
    return {
      subjects:[ {id: 0, title: ''}]
    }
  },
})
</script>