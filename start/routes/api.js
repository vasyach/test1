var express = require('express');
var router = express.Router();

router.route('/posts')
	.get(function(req, res){
		res.send({messgae: 'TODO Return all post'});

	})
	.post(function(req,res) {
		// body...
		res.send({message: 'TODO Create a new post'});
	});

router.route('/posts/:id')

	//returns a particullar post
	.get(function(req,res){
		res.send({message: 'TODO Return post with ID ' + req.params.id});
	})

	// update existing post 
	.put(function(req,res){
		res.send({message: 'TODO modify post with ID ' + req.params.id}); 
	})

	// delete existing post 
	.delete(function(req,res){
		res.send({message: 'TODO delete a post with ID ' + req.params.id}); 
	});

module.exports = router;
