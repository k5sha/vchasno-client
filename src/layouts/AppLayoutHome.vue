<template>
  <component :is="$route.meta.layoutComponent">
    <slot />
  </component>
</template>
  
  <script>
  
  export default {
	  name: "AppLayoutHome",
  }
  </script>
  
  <style>
	  body {
		  background-color: black;
	  }
  </style>