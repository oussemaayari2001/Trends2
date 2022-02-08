const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route




const db = require("./app/Models");
const Role = db.role;
// 
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});



app.get("/", (req, res) => {
    res.json({ message: "Welcome to Trends application." });
  });
 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended:false }));
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
// db.sequelize.sync();
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }
  