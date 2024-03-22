<template>
  <component :is="$route.meta.layoutComponent">
    <slot />
  </component>
</template>
	
	<script>
	
	export default {
		name: "AppLayoutAuth",
	}
	</script>
	
<style>
	body {
			background: rgb(184,68,192);
			background: linear-gradient(90deg, rgba(184,68,192,0.79) 50%, rgba(179,124,255,1) 100%);
	}	
</style>