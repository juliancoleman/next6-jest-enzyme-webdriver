const Router = require("next-routes")();

Router
  .add({ name: "index", pattern: "/", page: "index" });

export default Router;
