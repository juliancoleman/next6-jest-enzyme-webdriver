const Router = require("next-routes")();

Router
  .add({ name: "index", pattern: "/", page: "index" })
  .add({ name: "withLayout", pattern: "/withLayout", page: "withLayout" })
  .add({ name: "withForm", pattern: "/withForm", page: "withForm" });

export default Router;
