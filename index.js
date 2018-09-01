const express     = require('express');
const app         = express();
const PORT        = process.env.PORT || 8000;
const server      = app.listen(PORT);
const socketLimit = 10;
const nileServer  = require('nile.js/nileServer')(server, 10);
const path        = require('path');
//const broadcast   = require('./Broadcast.html');



app.use(express.static(__dirname));
app.use('/', nileServer);

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname + '/broadcast.html'));

})
app.get('/view', function (req, res){
  res.sendFile(path.join(__dirname + '/view/view.html'));
})
console.log("works");
