
const { response } = require('express'); 

const Post = require('../models/Post');

const getPosts = async (req, res = response) => {

	const posts = await Post.find();

	res.json({
		ok: true,
		posts,
	});

}

const createPost = async (req, res = response) => {

	const post = new Post(req.body);

	console.log(post);

	try {
		const savedPost = await post.save();

		res.json({
			ok: true,
			post: savedPost,
		});

	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'No se pudo crear el nuevo post',
		});
	}

}

const updatePost = async (req, res = response) => {

	const postId = req.params.id;

	try {
		const post = await Post.findById(postId);

		if (!post) {
			return res.status(400).json({
				ok: false,
				msg: 'No existe post con ese Id',
			});
		}

		const newPost = {
			...req.body
		}

		const updatedPost = await Post.findByIdAndUpdate(postId, newPost, {new: true});

		res.json({
			ok: true,
			post: updatedPost,
		});

	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'No se pudo actualizar el post',
		});
	}

}

const deletePost = async (req, res = response) => {

	const postId = req.params.id;

	try {
		const post = await Post.findById(postId);

		if (!post) {
			return res.status(400).json({
				ok: false,
				msg: 'No existe post con ese Id',
			});
		}

		await Post.findByIdAndDelete( postId );

        res.json({ ok: true });

	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'No se pudo eliminar el post',
		});
	}

}

module.exports = {
	getPosts,
	createPost,
	updatePost,
	deletePost,
}