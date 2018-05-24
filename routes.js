const routes = (module.exports = require("next-routes")());

routes
  .add({ name: "index", pattern: "/", page: "index" });
