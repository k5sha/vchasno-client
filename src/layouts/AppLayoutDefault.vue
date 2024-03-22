<template>
  <component :is="$route.meta.layoutComponent">
    <slot />
  </component>
</template>

<script>

export default {
    name: "AppLayoutDefault",
}
</script>

<style scoped>
	html {
		background-color: white;
	}
</style>