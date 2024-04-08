const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    if (user.password && user.email) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      await user.save();
      res.status(201).send({ message: "User created" });
    } else {
      console.log(req.body, "as user<");
      res.status(400).send({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ error: "No account found" });
    }

    if (!user.is_active) {
      return res.status(401).send({ error: "Privelge denied." });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).send({ error: "Invalid email or password" });
    }

    const token = user.generateAuthToken();

    res.send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
