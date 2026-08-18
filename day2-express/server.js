let express = require("express");

let app = express();


let port = 3000;
// middleware for accepting json data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
