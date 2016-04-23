var express = require('express');
var router = express.Router();

router.route('/posts')
	.get(function(req, res){
		res.send({messgae: 'todo Return all post'});

	})
	.post(function(req,res) {
		// body...
		res.send({message: 'todo Create a new post'});
	});
	 

module.exports = router;

