const express = require("express");

const router = express.Router();

router.get("/Checklists", (req, res) => {
  console.log("Olá");
  res.send();
});

module.exports = router;
