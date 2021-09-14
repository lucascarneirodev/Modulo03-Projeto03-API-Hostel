const express = require("express");
require("express-async-errors");
// const {connect} = require("./src/database/connections")
// connect()

const port = process.env.PORT || 3000;

const routes = require("./src/routes/public")
const app = express();
app.use(express.json());
app.use(routes)


app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`);
});
