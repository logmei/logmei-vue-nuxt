export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    console.log('to path', to.path)
    next()
  })
}
