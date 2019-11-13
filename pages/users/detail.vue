<template>
  <div>
    详情页：{{ user.name }}
  </div>
</template>
<script>
function getUser (id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'logmei' })
    }, 2000)
  })
}
export default {
  async asyncData ({ query, error }) {
    if (query.id) {
      const user = await getUser(query.id)
      return { user }
    }
    error({ statusCode: 400, message: '请传递用户id' })
  }
}
</script>
