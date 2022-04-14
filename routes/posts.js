const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
	try {
		const post = await Post.find();
		res.json(post);
	} catch (error) {
		res.json({
			message: error,
		});
	}
});

router.get('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.json(post);
	} catch (error) {
		res.json({
			message: error,
		});
	}
});

router.get('/specs', (req, res) => {
	res.send(`Specs post`);
});

router.post('/', async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
	});
	try {
		const savePost = await post.save();
		res.json(savePost);
	} catch (error) {
		res.json({
			message: error,
		});
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const removed = await Post.remove({
			_id: req.params.id,
		});
	} catch (error) {
		res.json({
			message: error,
		});
	}
});

router.patch('/:id', async (req, res) => {
	try {
		const updatePost = await Post.updateOne(
			{
				_id: req.params.id,
			},
			{ $set: { title: req.body.title } }
		);
        res.json(updatePost)
	} catch (error) {
		res.json({
			mess: error,
		});
	}
});

module.exports = router;
