import DataServiceRouter from "./DataService"; // 消费者/数据服务
import DataResourceRouter from "./DataResource"; // 消费者/数据服务
import AccessConfigRouter from "./AccessConfig"; // 消费者/数据服务
import PersonalInfomationRouter from "./PersonalInfomation"; // 消费者/数据服务
export default [
  ...DataServiceRouter,
  ...DataResourceRouter,
  ...AccessConfigRouter,
  ...PersonalInfomationRouter
];
