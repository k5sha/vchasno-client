<template>
  <h2>About</h2>
  <h3>{{ count }}</h3>
  <button @click="count++">
    Add
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue" 

export default defineComponent({
  name: 'AboutVue',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
count: 0,
    }
  },

})
</script>