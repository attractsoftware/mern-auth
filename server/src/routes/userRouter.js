const router = require("express").Router();
const userModel = require("../models/userModel");

router.get("/", (req, res) => {
  res.send("user apis");
});

router.get("/:id", async (req, res) => {
  const result = await userModel
    .findById(req.params.id)
    .select({ password: 0 });
  res.send(result);
});

router.post("/", async (req, res) => {
  //   const user = new userModel({
  //     name: "attract",
  //     email: "attract@gmail.com",
  //     username: "attract@",
  //     password: "12345",
  //   });
  const { name, email, username, password } = req.body;
  const user = new userModel({
    name: name,
    email: email,
    username: username,
    password: password,
  });

  const result = await user.save();

  res.send(result);
});

router.put("/:id", async (req, res) => {
  const { name } = req.body;
  const rs = await userModel.findByIdAndUpdate(req.params.id, {
    name: name,
  });
  res.send(rs);
});

module.exports = router;
