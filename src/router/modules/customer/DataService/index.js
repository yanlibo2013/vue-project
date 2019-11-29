/** When your routing table is too long, you can split it into small modules**/

const PersonalInfomationRouter = [
  {
    path: "/customer/dataservice/details",
    component: () => import("@/views/customer/DataService/DataDetails/index"),
    name: "/customer/dataservice/details"
  },
  {
    path: "/customer/dataservice/apply",
    component: () => import("@/views/customer/DataService/DataApply/index"),
    name: "/customer/dataservice/apply"
  },
  {
    path: "/customer/dataservice/subscription",
    component: () => import("@/views/customer/DataService/DataSubscrip/index"),
    name: "/customer/dataservice/subscription"
  },
  {
    path: "/customer/dataservice/pull",
    component: () =>
      import("@/views/customer/DataService/DataSubscrip/details/pull"),
    name: "/customer/dataservice/pull"
  },
  {
    path: "/customer/dataservice/push",
    component: () =>
      import("@/views/customer/DataService/DataSubscrip/details/push"),
    name: "/customer/dataservice/push"
  },
  {
    path: "/customer/dataservice/res/sub",
    component: () =>
      import("@/views/customer/DataService/DataApply/subscrip.vue"),
    name: "/customer/dataservice/res/sub"
  },
  {
    path: "/customer/dataservice/res/apply",
    component: () => import("@/views/customer/DataService/DataApply/apply.vue"),
    name: "/customer/dataservice/res/apply"
  }
];

export default PersonalInfomationRouter;
