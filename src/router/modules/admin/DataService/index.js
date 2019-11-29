/** When your routing table is too long, you can split it into small modules**/

const DataServiceRouter = [
  {
    path: "/admin/dataservice/history",
    component: () => import("@/views/admin/DataService/HistoryRecord/index"),
    name: "/admin/dataservice/history"
  },
  {
    path: "/admin/dataservice/list",
    component: () => import("@/views/admin/DataService/ServiceList/index"),
    name: "/admin/dataservice/list"
  },
  {
    path: "/admin/dataservice/apply",
    component: () => import("@/views/admin/DataService/apply/index"),
    name: "/admin/dataservice/apply"
  },
  {
    path: "/admin/dataservice/pull",
    component: () =>
      import("@/views/admin/DataService/apply/pull"),
    name: "/admin/dataservice/pull"
  },
  {
    path: "/admin/dataservice/push",
    component: () =>
      import("@/views/admin/DataService/apply/push"),
    name: "/admin/dataservice/push"
  }
];

export default DataServiceRouter;
