<template>
  <div class="hello">
    <p>实现功能：</p>
    <p v-for='(item,index) in msgList'>{{item}}</p>
    <button @click='goToOrder'>去demo页查看</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msgList: ['1.axios请求/响应拦截器','2.axios请求/响应loding动画']
    }
  },
  methods:{
    goToOrder(){
      this.$router.push('/demo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

button {
  background:#42b983;
  color: #fff;
  border: none;
  padding: 5px;
}
</style>
