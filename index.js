const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userRouter = require("./app/routes/user");

/* Swagger */

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello World",
      version: "1.0.0",
    },

    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
    ],
  },
  apis: ["./src/routes*.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use(
  "/swagger-docs",
  swaggerUi.serve,
  swaggerUi.setup(openapiSpecification)
);
/* Swagger */

const PORT = process.env.PORT || 5000;
require("./app/models");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// routes
app.use("/user", userRouter);

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
