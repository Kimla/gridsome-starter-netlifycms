import NotFound from "C:\\xampp\\htdocs\\gridsome-starter-netlifycms\\node_modules\\gridsome\\app\\pages\\404.vue"

export const routes = [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "~/pages/Index.vue")
  },
  {
    name: "blogPost",
    path: "/blog/:slug",
    component: () => import(/* webpackChunkName: "component--blog-post" */ "~/templates/BlogPost.vue"),
    meta: { data: true }
  }
]

export { NotFound }

