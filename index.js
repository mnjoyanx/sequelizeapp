const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userRouter = require("./app/routes/user");
const postRouter = require("./app/routes/post");
const taskRouter = require("./app/routes/task");
const priorityRouter = require("./app/routes/priority");
const teacherRouter = require("./app/routes/teacher");
const schoolRouter = require("./app/routes/school");

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
  apis: ["./app/routes/*.yml"], // files containing annotations as above
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
app.use("/post", postRouter);
app.use("/task", taskRouter);
app.use("/priority", priorityRouter);
app.use("/teacher", teacherRouter);
app.use("/school", schoolRouter);

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
