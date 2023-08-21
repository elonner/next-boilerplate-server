require("dotenv").config();
require("./config/database");
const logger = require("morgan");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const handleWebhook = require("./config/handleWebhook");

const PORT = process.env.PORT || 4000;

const http = require("http").Server(app);
const cors = require("cors");
// console.log(process.env.NODE_ENV, process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL : 'http://localhost:3000');

app.use(logger("dev"));

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  handleWebhook
);

app.use(express.json());
app.use(cors());

app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/orders", require("./routes/api/orders"));

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
