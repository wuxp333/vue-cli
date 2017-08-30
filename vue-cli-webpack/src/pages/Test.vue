<template>
    <div>
        <p class="til">hello world !</p>
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
    export default {
      name: 'Test',
      data () {
        return {
          a: 'Hello world !'
        }
      },
      methods: {

      },
      mounded () {}
    }
</script>
<style scoped>
    .til {
        color:gold;
    }
</style>