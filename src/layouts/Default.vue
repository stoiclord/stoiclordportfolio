<template>
  <div v-show="isNavActive" class="layout">
    <Nav/>
    <slot/>
  </div>
</template>

<script>
import Nav from "../components/Nav";

export default {
  data (){
    return{
      isNavActive : true,
    }
  },

  components: {
    Nav
  }
};
</script>


<style lang="scss">
</style>
