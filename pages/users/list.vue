<template>
  <div>
    用户列表页
    <div v-for="(item,index) in users" :key="index">
      {{ item.id }}--{{ item.name }}
    </div>
  </div>
</template>
<script>
function getUsers () {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve([
        { id: 1, name: 'aaa' },
        { id: 2, name: 'bbbb' }
      ])
    }, 2000)
  })
}
export default {
  async asyncData (context) {
    console.log('asyncData', process.server, process.client)
    const users = await getUsers()
    return { users }
  }
}
</script>
