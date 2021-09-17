const express = require("express");
require("express-async-errors");
const {validEndPoint, errorHandle} = require("./src/middlewares/middlewares");


const port = process.env.PORT || 3000;

const routes = require("./src/routes/routes")
const app = express();
app.use(express.json());
app.use(routes);

//Middlewares
app.all("*", validEndPoint);
app.use(errorHandle);

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`);
});
