<template>
  <div>
    users vue
    <el-button @click="increment">
      计算{{ counter }}
    </el-button>
    <div>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <el-button @click="addUser">
      添加用户
    </el-button>
    <nuxt-child />
  </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'
function getUsers () {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve([
        'logmei',
        'logmei987',
        'aaaaa'
      ])
    }, 1000)
  })
}
export default {
  layout: 'our',
  fetch ({ store }) {
    // fetch在创建组件前执行填充状态树
    // 提交时注意命名空间
    return getUsers().then(users => store.commit('users/set', users))
  },
  computed: {
    ...mapState([
      'counter'
    ]),
    ...mapState('users', ['list'])
  },
  methods: {
    addUser () {
      const username = `111${this.counter}`
      this.increment()
      this.add(username)
    },
    ...mapMutations([
      'increment'
    ]),
    ...mapMutations('users', ['add'])
  }
}
</script>
