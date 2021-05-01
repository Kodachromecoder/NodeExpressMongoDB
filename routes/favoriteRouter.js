const express = require('express');
const Favorite = require('../models/favorite');
const favoriteRouter = express.Router();
const authenticate = require('../authenticate');
const cors = require('./cors');


favoriteRouter.route('/')


favoriteRouter.route('/:campsiteId')


module.exports = favoriteRouter;