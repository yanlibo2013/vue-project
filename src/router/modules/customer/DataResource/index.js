/** When your routing table is too long, you can split it into small modules**/

const DataServiceRouter = [
    {
      path: "/resource",
      component: () => import("@/views/customer/DataResource/RessourceDetails/index"),
      name: "/resource"
    }
  ];
  
  export default DataServiceRouter;
  