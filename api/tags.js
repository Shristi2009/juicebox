const express = require('express');
const postsRouter = express.Router();
 const {getAllTags} = require('../db');



postsRouter.get('/', async (req, res)=> {
    const tags = await getAllTags();
    res.send({
        tags
    });
});

module.exports = tagsRouter;