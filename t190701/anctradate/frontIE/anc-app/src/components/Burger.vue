<template>
    <tasty-burger-button 
        :type="buttonType" 
        :active="isActive" 
        :size="size" 
        :color="color" 
        :active-color="activeColor"
        v-on:toggle="onToggle" />
</template>

<script>
export default {
    name: "burger",

  data () {
    return {
      buttonType: 'elastic',
      isActive: false,
      size: 'xl',
      color: 'green',
      activeColor: 'orange'
    }
  },
  methods: {
    onToggle(active) {
      // Toggle menu
    }
  }
}
</script>