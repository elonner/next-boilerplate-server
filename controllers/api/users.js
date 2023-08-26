const User = require("../../models/user");
const ClerkNodeSDK = require("@clerk/clerk-sdk-node");
const clerkClient = ClerkNodeSDK.clerkClient;

module.exports = {
  create,
  getToken,
};

async function create(req, res) {
  const payload = req.body;

  try {
    const clerkUser = await clerkClient.users.getUser(payload.data.id);
  } catch (err) {
    return res.status(500).json(err);
  }

  try {
    const newUser = await User.create({
      clerkId: payload.data.id,
      firstName: payload.data.first_name,
      lastName: payload.data.last_name,
    });

    await req.streamChat.upsertUser({
      id: newUser._id,
      name: `${newUser.firstName} ${newUser.lastName}`,
    });

    res.json({});
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getToken(req, res) {
  try {
    const user = await User.findOne({ clerkId: req.params.clerkId });
    const streamToken = req.streamChat.createToken(user.id);

    res.json({ user, streamToken });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
