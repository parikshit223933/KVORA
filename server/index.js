const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const db = require("./config/mongoose");

app.use(
  session({
    secret: "foo",
    name: "Kvora",
    resave: false,
    cookie: { maxAge: 1000 * 60 * 1000 },
    store: new MongoStore(
      { mongooseConnection: db, autoRemove: "disabled" },
      function (error) {
        console.log(error || "Connect Mongo Setup is working fine!");
      }
    ),
  })
);
app.use(require("./Routes"));
app.use(cors());

app.listen(port, (error) => {
  if (error) {
    console.log("There was an error in Starting the server at the port", port);
    return;
  }
  console.log(`Server is running on the port ${port}`);
});
