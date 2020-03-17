/* setting up the assets being required in this project*/
const Express = require('express');
const chalk = require('chalk');
const App = Express();
const port = 80;
const cors = require("cors");
App.use(cors());

/*********************************/
//Add static route, using App.use()
/*********************************/

App.use("/", Express.static("client/build"));

/*********************************/




App.listen(port, () =>{
    console.log("Server is running on port 80, spawning client..");
});

