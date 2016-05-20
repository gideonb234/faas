var express = require('express');
var router = express.Router(); 

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('SOMETHING IS HAPPEN.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function (req, res) {
  res.send('Hello Fuckboy!');
});

router.route('/cheeky-nudes')
	.get(function(req,res){
		res.json({"message":"oi send me some cheeky nudes mate"});
	});

router.route('/cheeky-nudes/:name')
	.get(function(req,res){
		res.json({"message":"oi " + req.params.name + " send me some cheeky nudes mate"});
	});

router.route('/tell-me-more/:awkward_name')
	.get(function(req,res){
		res.json({"message":"haha and then what do you want me to do " + req.params.awkward_name + " ;)"});
	});

router.route('/wasnotme/')
	.get(function(req,res){		
		res.json({"message":"That wasn't me it was my friend"});
	});

router.route('/wasnotme/:itwas')
	.get(function(req,res){		
		res.json({"message":"That wasn't me it was " + req.params.itwas});
	});

router.route('/other-guys/:reason/:context')
	.get(function(req,res){
		res.json("I'm not like those guys who " + req.params.context + ", I'm different from them because " + req.params.reason)
	});

module.exports = router;