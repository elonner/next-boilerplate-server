require("dotenv").config();
require("./config/database");
const logger = require("morgan");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const handleWebhook = require("./config/handleWebhook");
const streamChatMiddleware = require("./middleware/streamChatMiddleware");

const PORT = process.env.PORT || 4000;

const http = require("http").Server(app);
const cors = require("cors");

app.use(logger("dev"));

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  handleWebhook
);

app.use(express.json());
app.use(cors());
app.use(streamChatMiddleware);

app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/orders", require("./routes/api/orders"));

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
