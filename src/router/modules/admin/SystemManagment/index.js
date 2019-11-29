/** When your routing table is too long, you can split it into small modules**/

const SystemManagmentRouter = [
  {
    path: "/system",
    component: () => import("@/views/admin/SystemManagment/index"),
    name: "/system"
  }
];

export default SystemManagmentRouter;
