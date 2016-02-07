var mongoose = require('mongoose'),
Musician = mongoose.model('Musician');


exports.indexPage = function(req, res){
  //unless, I found a good way to get root dir
  var filename = require.main.filename;
  var dirname = filename.replace('server.js',"");
  res.sendFile(dirname + '/templates/index.html');
};

exports.findAll = function(req, res){
  Musician.find({},function(err, results) {
    return res.send(results);
  });
};

exports.findByName = function(req, res){
  var name = req.query.name;
  Musician.find({'name':name},function(err, result) {
    return res.send(result);
  });
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;
  console.log("Update is: "+ updates);
  

  Musician.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d musicians', numberAffected);
      return res.send(202);
  });
};


exports.add = function(req, res) {
  Musician.create(req.body, function (err, musician) {
    if (err) return console.log(err);
    return res.send(musician);
  });
};


exports.delete = function(req, res){
  var id = req.params.id;
  Musician.remove({'_id':id},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){
  Musician.create(
    { "name": "Ben", "band": "DJ Code Red", "instrument": "Reason" },
    { "name": "Mike D.","band": "Kingston Kats", "instrument": "drums" },
    { "name": "Eric", "band": "Eric", "instrument": "piano" },
    { "name": "Paul", "band": "The Eyeliner", "instrument": "guitar" }
  , function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
};

exports.storeIP = function(req, res){
  var ip = req.query.ip;
  console.log("IP is: " + ip); 
  return res.send(202);
};
