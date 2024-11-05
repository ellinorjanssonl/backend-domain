const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cookieRoutes = require("./routes/cookieRoutes.js");
const boardRoutes = require("./routes/boardRoutes.js");
const taskRoutes = require("./routes/taskRoutes.js");
const inviteRoutes = require("./routes/inviteRoutes.js");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5173', // Din frontends URL
    credentials: true // Om du använder cookies
  }));
app.use(cookieParser());

app.use("/cookie", cookieRoutes);
app.use("/board", boardRoutes);
app.use("/task", taskRoutes);
app.use("/invite", inviteRoutes);
module.exports = app;