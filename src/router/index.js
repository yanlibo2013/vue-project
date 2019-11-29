Vue.use(VueRouter);

import adminRouter from "./modules/admin/index"; // admin
import coustomerRouter from "./modules/customer/index"; // customer

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/index")
  },
  {
    path: "",
    // component: Container,
    component: () => import("@/container/index"),
    redirect: "login",
    children: [...adminRouter, ...coustomerRouter]
  }
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [];

const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
