const { Router } = require('express')

const MovieTagsController = require('../controllers/MovieTagsController')

const movie_tagsRoutes = Router()

const movie_tagsController = new MovieTagsController()

movie_tagsRoutes.get('/:user_id', movie_tagsController.index)


module.exports = movie_tagsRoutes