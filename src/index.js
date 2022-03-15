const express = require("express");
const cors = require("cors");
const router = require("./routes");
require("dotenv");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 8080;

require("./services/connect").connectDatabase();
app.listen(port, console.log(`Running on: ${port}`));
