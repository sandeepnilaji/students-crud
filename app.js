const express = require("express");
const app = express();
const data = require("./user_data.json");
app.use(express.json());
app.post("/users", function (request, response) {
  var jsons = request.body;
  data.push(jsons);
  return response.send(data);
});
// working
app.get("/", function (request, response) {
  return response.send("Welcome to Home page");
});
// working
app.get("/users", function (request, response) {
  return response.send({ data });
});
//
app.patch("/users/:id", function (request, response) {
  let id = request.params.id;
  let newusers = data.map((el) => {
    if (el.id == id) {
      el.first_name = "sandeep";
    }
    return el;
  });
  response.send(newusers);
});
app.delete("/users/:id", function (request, response) {
  var id = request.params.id;
  var data1 = data.filter((el) => {
    if (el.id != id) {
      return el;
    }
  });
  response.send(data1);
});

app.listen(5000, () => {
  console.log("listening on 5000");
});
