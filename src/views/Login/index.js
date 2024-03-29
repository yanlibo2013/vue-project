import project1 from "@/views/Login/project1/index.vue";
import project2 from "@/views/Login/project2/index.vue";
import login from "@/views/Login/Login/index.vue";

const getProjectName = val => {
  switch (val) {
    case "login":
      return login;
    case "project1":
      return project1;
    case "project2":
      return project2;
    default:
      return project1;
  }
};

export default getProjectName(process.env.BASE_PROJECT);
