const express = require('express');
const tagsRouter = express.Router();
 const {getAllTags, getPostsByTagName} = require('../db');



tagsRouter.get('/', async (req, res)=> {
    const tags = await getAllTags();
    res.send({
        tags
    });
});
tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    // read the tagname from the params
    const tagName= req.params.tagName
    console.log(`tagNAme ${tagName}`);
    try {
        const postsByTag=await getPostsByTagName(tagName);
        res.send({posts:postsByTag});


      // use our method to get posts by tag name from the db
      // send out an object to the client { posts: // the posts }
    } catch ({ name, message }) {
        next({ name, message });
      // forward the name and message to the error handler
    }
  });

module.exports = tagsRouter;