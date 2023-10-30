const http = require("http");
const app = require("./app")
require("dotenv").config();

//Start the server
http.createServer(app).listen(process.env.port, ()=>console.log(`Server Running on port: ${process.env.port}`));
