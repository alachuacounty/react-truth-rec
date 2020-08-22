/* setting up the assets being required in this project*/
const express = require('express');
const bodyparser = require("body-parser");
const chalk = require('chalk');
const App = express();
const port = 8080;
const cors = require("cors");
App.use(cors());
App.use(bodyparser.urlencoded({extended:false}));
App.use(bodyparser.json());

/*********************************/
//Add static route, using App.use()
/*********************************/

App.use("/", express.static("client/build"));

/*********************************/

App.post("/contactform", function(req, res){

  console.log("/*******************************************************/");
  console.log(req.body.firstName);

  let result = {"firstname":req.body.firstName};

  res.send(result);

  
})


App.listen(port, () =>{
    console.log("Server is running on port 80, spawning client..");
});

