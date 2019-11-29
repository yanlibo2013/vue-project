/** When your routing table is too long, you can split it into small modules**/

const SystemManagmentRouter = [
  {
    path: "/statistical",
    component: () => import("@/views/admin/StatisticalManagment/index"),
    name: "/statistical"
  }
];

export default SystemManagmentRouter;
