const StreamChatSDK = require("stream-chat");
const StreamChat = StreamChatSDK.StreamChat;

const streamChatMiddleware = (req, res, next) => {
  req.streamChat = StreamChat.getInstance(
    process.env.STREAM_API_KEY,
    process.env.STREAM_PRIVATE_API_KEY
  );
  next();
};

module.exports = streamChatMiddleware;
