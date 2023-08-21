const User = require("../../models/user");

module.exports = {
  create,
};

async function create(req, res) {
  const payload = req.body;

  try {
    const newUser = {
      clerkId: payload.data.id,
      firstName: payload.data.first_name,
      lastName: payload.data.last_name,
    };
    await User.create(newUser);
    res.json({});
  } catch (err) {
    res.status(400).json(err);
  }
}
