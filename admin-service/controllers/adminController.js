const Admin = require('../models/Admin');

// Create Product
exports.editAdmin = async (req, res) => {
  const { phoneNumber, ...updates } = req.body;

  try {
    console.log("editAdmin start");

    const admin = await Admin.findOneAndUpdate(
      { phoneNumber },
      updates,
      { new: true }
    );

    if (!admin) {
      return res.status(400).json({ message: "The admin was not found" });
    }
  } catch (error) {
    console.error("Error in editAdmin:", error.message);
    res.status(500).json({ error: error.message });
  }
};