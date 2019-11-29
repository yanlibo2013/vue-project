/** When your routing table is too long, you can split it into small modules**/

const DataManagementRouter = [
  {
    path: "/datamanagment/resouce",
    component: () => import("@/views/admin/DataManagement/resouce/index"),
    name: "/datamanagment/resouce"
  },
  {
    path: "/datamanagment/set",
    component: () => import("@/views/admin/DataManagement/set/index"),
    name: "/datamanagment/set"
  },
  {
    path: "/datamanagment/publish",
    component: () => import("@/views/admin/DataManagement/publish/index"),
    name: "/datamanagment/publish"
  },
  {
    path: "/datamanagment/relate",
    component: () => import("@/views/admin/DataManagement/relate/index"),
    name: "/datamanagment/relate"
  }
];

export default DataManagementRouter;
