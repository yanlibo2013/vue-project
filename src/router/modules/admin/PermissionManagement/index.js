/** When your routing table is too long, you can split it into small modules**/

const PermissionManagementRouter = [
  {
    path: "/permission/role",
    component: () =>
      import("@/views/admin/PermissionManagement/RoleManagment/index"),
    name: "/permission/role"
  },
  {
    path: "/permission/user",
    component: () =>
      import("@/views/admin/PermissionManagement/UserManagment/index"),
    name: "/permission/user"
  },
  {
    path: "/permission/log",
    component: () =>
      import("@/views/admin/PermissionManagement/log/index"),
    name: "/permission/log"
  }
];

export default PermissionManagementRouter;
