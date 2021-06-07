const Car = require('../models/car');
const fs = require('fs');



/**
 * create new car
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.createCar = (req, res, next) => {
    const CarObject = new Car({
      marque : req.body.marque,
      category : req.body.category,
      description : req.body.description,
      price : req.body.price,
      userId : req.body.userId,
      userPseudo : req.body.userPseudo,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    CarObject.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

  /**
   * get detail car
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */

exports.getOneCar = async (req, res, next) => {

  try {
    const Allcar = await Car.findOne({
      _id: req.params.id
    })
      .populate('comments.userid')
      .exec();
      return  res.status(200).json(Allcar);
  } catch (error) {
    res.status(400).json(error);
  }

};

/**
 * edit car
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.modifyCar = (req, res, next) => {
  const CarObject = req.file ?
      {
        ...JSON.parse(req.body.Car),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : { ...req.body };
    Car.updateOne({ _id: req.params.id }, { ...CarObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };
  exports.deleteCar = (req, res, next) => {
    Car.findOne({ _id: req.params.id })
      .then(Car => {
        const filename = Car.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Car.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
  };

  
/**
 * filter car by category
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getCarbyCategory = (req, res, next) => {
  Car.find({
    category: req.params.category
  }).then(
    (Car) => {
      res.status(200).json(Car);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

/**
 * get all car
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllCar = async (req, res, next) => {

  try {
    const Allcar = await Car.find()
      .populate('comments.postedBy')
      .exec();
      return  res.status(200).json(Allcar);
  } catch (error) {
    res.status(400).json(error);
  }


};