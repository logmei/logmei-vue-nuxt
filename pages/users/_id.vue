<template>
  <div>用户id:{{ user }}</div>
</template>
<script>
export default {
  async asyncData ({ params, $axios, error }) {
    const data = await $axios.$get(`/api/users/${params.id}`)

    if (data.code === 0) {
      return { user: data.result }
    }

    error({ statusCode: 400, message: 'id有误' })
  }
}
</script>
