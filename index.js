const router = require("express").Router();

const apiRoutes = require("./api");

const homeRoutes = require("./home-routes.js");

const dashboardRoutes = require("./dashboard-routes.js");

router.use("/", home);

router.use("/dashboard", dashboard);

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
