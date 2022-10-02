const express = require("express");
const dbConfig = require("./config/db.config");
const cors = require("cors");
const app = express();
const route = require("./routes/userRoute");
// parse requests of content-type - application/json
app.use(express.json());

// middlewares
const corsOptions = {
  origin: "*",
};

// for the cross origin files
app.use(cors(corsOptions));

app.use("/api", route);

/**
 * set port, listen for requests
 */

const PORT = process.env.PORT || 8081;

// server port
app.listen(PORT, dbConfig, () => {
  console.log("Server running on port:", PORT);
});
