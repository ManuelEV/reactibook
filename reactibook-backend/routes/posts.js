/*
	Posts routes
	/api/posts
*/

const { Router } = require('express');

const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');

const { validateFields } = require('../middlewares/validate-fields');

const { getPosts, createPost, updatePost, deletePost } = require('../controllers/posts');

const router = Router();



router.get('/', getPosts);



router.post('/',
 [
 	check('content', 'El título es obligatorio').not().isEmpty(),
   check('visibility', 'La visibilidad del post es obligatoria').not().isEmpty(),
 	check('date', 'Formato de fecha no válido').custom(isDate),
 	validateFields,
 ], 
 createPost);


router.put('/:id', updatePost);


router.delete('/:id', deletePost);


module.exports = router;