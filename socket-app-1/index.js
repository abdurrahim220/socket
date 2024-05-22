const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);
const path = require("path");
const { Server } = require("socket.io");

const io = new Server(expressServer);

// io.on("connection", (socket) => {
//   console.log("New user Connected");

//   //!   showing data connect and disconnect
//   //   socket.on("disconnect", () => {
//   //     console.log("User disconnected");
//   //   });

//   //!   showing data server to client after fix time
//   //   setTimeout(() => {
//   //     socket.send("Learn with Rabbile Hasan (Server --> Client)");
//   //   }, 10000);

//   //   !real time data with custom event
//   //   setInterval(() => {
//   //     let d = new Date();
//   //     let t = d.getTime();
//   //     // socket.send(t);
//   //     socket.emit("myEvent", t);
//   //   }, 10);

//   // !receive data from client with purify method
//   // socket.on("message", (msg) => {
//   //   console.log(msg);
//   // });

//   // !receive data from client with custom method method
//   // socket.on("MyEvent", (msg) => {
//   //   console.log(msg);
//   // });
// });

// ? Broadcast data

// io.on('connection',(socket)=>{
//   io.emit('MyBroadcast',"Hello everyone");

// })

// ! two namespace

// let buyNsp = io.of("/buy");
// buyNsp.on("connection", (socket) => {
//   buyNsp.emit("MyEvent", "Hello buy");
// });

// let sellNsp = io.of("/sell"); // namespace to create grouping
// sellNsp.on("connection", (socket) => {
//   sellNsp.emit("MyEvent", "Hello sell");
// });

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  // console.log("Serving file:", filePath);
  res.sendFile(filePath);
});

expressServer.listen(3000, () => {
  console.log(`Server running on 3000`);
});
