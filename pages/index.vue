<template>
  <div class="container">
    <div>
      <Logo />

      <nuxt-link to="/ours">
        logmei-vue-nuxt
      </nuxt-link>
      <br>
      <el-button @click="login">
        登录
      </el-button>
      <el-button @click="$router.push({name:'users-list',params:{id:'aaa'}})">
        用户列表
      </el-button>
      <el-button @click="$router.push({name:'users-detail',query:{id:'bbbb'}})">
        用户详情
      </el-button>
      <el-button @click="$router.push({name:'users-id',params:{id:'1'}})">
        用户详情通过server端获取
      </el-button>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    login () {
      localStorage.setItem('token', 'token1234567890')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
