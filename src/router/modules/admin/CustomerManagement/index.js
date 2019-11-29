/** When your routing table is too long, you can split it into small modules**/

const CustomerManagementRouter = [
  {
    path: "/customer/list",
    component: () => import("@/views/admin/CustomerManagement/UserList/index"),
    name: "/customer/list"
  },
  {
    path: "/customer/adduser",
    component: () => import("@/views/admin/CustomerManagement/AddUser/index"),
    name: "/customer/adduser"
  },
  {
    path: "/customer/application",
    component: () => import("@/views/admin/CustomerManagement/ApplicationManagment/index"),
    name: "/customer/application"
  },
  {
    path: "/customer/resource",
    component: () => import("@/views/admin/CustomerManagement/DataResManagment/index"),
    name: "/customer/resource"
  }
];

export default CustomerManagementRouter;
