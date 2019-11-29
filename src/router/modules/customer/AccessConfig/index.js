/** When your routing table is too long, you can split it into small modules**/

const AccessConfigRouter = [
  {
    path: "/config",
    component: () => import("@/views/customer/AccessConfig/AddConfig/index"),
    name: "/config"
  }
];

export default AccessConfigRouter;
