var express = require("express");
var app = express();

app.use('/static', express.static('public'));
app.set("port", process.env.PORT || 3000);

app.get("/roman/:num", function(req, res) {
  var num = parseInt(req.params.num);

   // Load the 'romanize' module
  const roman = require('./lib/romanize'); 

  try {
    var result = roman(num);
  } catch (ex) {
    res.status(400);
    res.json({ error: "Bad request. " + ex.message});
    return;	  
  }
  console.log(num + " to roman is: " + result);
  console.log('Done');

  res.json({ result: result });
});

app.listen(app.get("port"), function() {
  console.log("App started on port " + app.get("port"));
});