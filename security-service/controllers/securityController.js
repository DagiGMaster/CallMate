const Auth = require('../models/Auth');


exports.authenticate = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log("authenticate start");

    const auth = new Auth({
      username,
      password
    });

  } catch (error) {
    console.error("Error in authenticate:", error.message);
    res.status(500).json({ error: error.message });
  }
};

