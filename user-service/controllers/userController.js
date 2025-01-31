const User = require('../models/User');

// Create Payment
exports.createUser = async (req, res) => {
  const { username, phonenumber, email, password, role, status, createdate, lastupdate, deleteamount, issubscriber, isguest} = req.body;

  try {
    console.log("createUser start");

    const user = new User({
      username,
      phonenumber,
      email,
      password,
      role,
      status,
      createdate,
      lastupdate,
      deleteamount,
      issubscriber,
      isguest
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error("Error in createUser:", error.message);
    res.status(500).json({ error: error.message });
  }
};

//login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Edit User
exports.editUser = async (req, res) => {
  console.log("editUser start");

  const { userid, phonenumber, ...updates } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { userid, phonenumber },
      updates,
      { new: true } // Return the updated document
    );

    if (!user) {
      return res.status(400).json({ message: "The user was not found" });
    }

    res.status(200).json({ message: "Edit successful", user });
  } catch (error) {
    console.error("Error in editPayment:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete Payment
exports.deleteUser = async (req, res) => {
  console.log("deleteUser start");

  const { userid, phonenumber } = req.body;

  try {
    const user = await User.findOneAndDelete({ userid, phonenumber });

    if (!user) {
      return res.status(400).json({ message: "The user was not found" });
    }

    res.status(200).json({ message: "Delete successful", payment });
  } catch (error) {
    console.error("Error in deletePayment:", error.message);
    res.status(500).json({ error: error.message });
  }
};
