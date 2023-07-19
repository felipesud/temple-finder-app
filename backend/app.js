const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = 3000;

app.use(cors());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      connectSrc: ["'self'", "http://localhost:3000"],
      scriptSrc: ["'self'", "https://apis.google.com"],
      imgSrc: [
        "'self'",
        "https://www.gstatic.com",
        "https://assets.churchofjesuschrist.org",
        "https://assets.ldscdn.org",
      ],
      mediaSrc: ["'self'", "https://www.gstatic.com"],
      frameSrc: ["'self'", "https://www.gstatic.com"],
    },
  })
);

// DB Connection
const conn = require("./db/conn");
conn();

app.use(express.json());
// Routes
const routes = require("./routes/router");
app.use("/api", routes);

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
