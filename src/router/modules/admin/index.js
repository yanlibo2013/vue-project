import DataManagementRouter from "./DataManagement";// 管理员/数据管理
import DataServiceRouter from "./DataService";// 管理员/数据服务
import CustomerManagementRouter from "./CustomerManagement";// 管理员/消费者管理
import PermissionManagementRouter from "./PermissionManagement";// 管理员/权限管理
import StatisticalManagmentRouter from "./StatisticalManagment";// 管理员/统计监控
import SystemManagmentRouter from "./SystemManagment";// 管理员/系统管理
import PersonalInfomationRouter from "./PersonalInfomation";// 管理员/个人信息

export default [
  ...CustomerManagementRouter,
  ...DataServiceRouter,
  ...DataManagementRouter,
  ...PermissionManagementRouter,
  ...SystemManagmentRouter,
  ...PersonalInfomationRouter,
  ...StatisticalManagmentRouter
];
