const Comment = require('../models/comment');
const Car = require('../models/car');
const fs = require('fs');


/**
 * create new comment
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.createComment = async (req, res, next) => {
    try {
      const { contenu, carid, userid , userPseudo} = req.body
      
      const result = await Car.findByIdAndUpdate(carid, { $push: { comments: {contenu : contenu, userid: userid, userPseudo: userPseudo } } }, { new: true })
      .populate('comments.userid')
      .exec();

       res.status(200).json(result);
    
    } catch(error) {
    res.status(400).json(error);
    }
  };

 
/**
 * get omment of Comment
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.getCommentCar = (req, res, next) => {
  Comment.find({
    CommentId: req.params.CommentId
  }).then(
    (Comment) => {
      res.status(200).json(Comment);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

