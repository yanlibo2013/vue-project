/** When your routing table is too long, you can split it into small modules**/

const PersonalInfomationRouter = [
  {
    path: "/personalinfo",
    component: () => import("@/views/admin/PersonalInfomation/BaseInfo/index"),
    name: "/personalinfo"
  }
];

export default PersonalInfomationRouter;
