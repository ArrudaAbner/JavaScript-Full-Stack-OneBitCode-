const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

router.get("/", async(req, res) => {
  try {
    let checklist = await Checklist.find({})
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error)
  }
})

router.post("/", async (req, res) => {
  let { name } = req.body;

  try {
    let checklist = await checklist.create({ name });
    res.status(200).json(checklist);
  } catch (err) {
    res.status(422).json(err)
  }
});

router.get("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id)
    res.status(200).json(checklist)
  } catch (err) {
    res.status(422).json(err)
  }
  console.log(req.params.id);
  res.send(`ID: ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`PUT ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`DELETE ID: ${req.params.id}`);
});

module.exports = router;
