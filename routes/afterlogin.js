const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  
  return res.render("afterloginpage");
});
module.exports = router;