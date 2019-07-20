var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

// this sends us to the routes needed?
require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
