<template>
  <div>
       <div class="til">我是{{name}}模板</div>
     <el-progress :percentage="70" type="circle"></el-progress>
  </div>
</template>


<script>
  export default {
    name: 'Test2',
    data () {
      return {
        name: '大鹏'
      }
    }
  }
</script>

<style>
  .til {
    color: red;
  }

</style>
