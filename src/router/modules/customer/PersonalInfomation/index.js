/** When your routing table is too long, you can split it into small modules**/

const PersonalInfomationRouter = [
  {
    path: "/customer/personalinfo",
    component: () => import("@/views/customer/PersonalInfomation/BaseInfo/index"),
    name: "/customer/personalinfo"
  }
];

export default PersonalInfomationRouter;
