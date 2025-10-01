var express = require("express");
var router = express.Router();
var List = require("../module/list");

// Post method

router.post("/", async function (req, res, next) {
  console.log(req.body);
  try {
    let list = new List(req.body);
    // ❌ wrong: await List.save();
    // ✅ fix:
    await list.save();

    res.json({
      success: true,
      data: list,
    });
  } catch (e) {
    if (e.code == 11000) {
      res.json({
        success: false,
        err: "Duplicate value - already exists",
      });
    } else {
      res.json({
        success: false,
        err: e.message,
      });
    }
  }
});

// Get method

router.get("/", async function (req, res, next) {
  try {
    let list = await List.find();

    res.json({
      success: true,
      data: list,
    });
  } catch (e) {
    res.json({
      success: false,
      err: e.message,
    });
  }
});

// Put method 

router.put("/:userId", async function (req, res, next) {
  console.log(req.body, req.params.userId);
  try {
    // ✅ Added { new: true } to return updated document
    let list = await List.findByIdAndUpdate(req.params.userId, req.body, { new: true });

    res.json({
      success: true,
      data: list,
    });
  } catch (e) {
    console.log(e);

    if (e.code == 11000) {
      res.json({
        success: false,
        err: "Duplicate value - already exists",
      });
    } else {
      res.json({
        success: false,
        err: e.message,
      });
    }
  }
});

// delete method 

router.delete("/:userId", async function (req, res, next) {
  console.log(req.body, req.params.userId);
  try {
    let list = await List.findByIdAndDelete(req.params.userId);

    res.json({
      success: true,
      data: list,
    });
  } catch (e) {
    console.log(e);

    res.json({
      success: false,
      err: e.message,
    });
  }
});

module.exports = router;
