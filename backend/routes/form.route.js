const router = require('express').Router();
const Form = require('../models/form.model');

router.route('/').get((req, res) => {
  Form.find()
    .then(form => res.json(form))
    .catch(err => res.status(400).json('Error @ form home'))
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const address = req.body.address;
  const age = Number(req.body.age);
  const birthdate = req.body.birthdate;
  const email = req.body.email;
  const contactNum = Number(req.body.contactNum);
  const cardId = req.body.cardId;
  const position = req.body.position;
  const department = req.body.department;
  const gender = req.body.gender;
  const aboutMe = req.body.aboutMe;
  const startDate = req.body.startDate;

  const newForm = new Form({
    username,
    address,
    age,
    birthdate,
    email,
    contactNum,
    cardId,
    position,
    department,
    gender,
    aboutMe,
    startDate
  });

  newForm.save()
    .then(() => res.json('Added succesfully'))
    .catch(err => res.status(400).json('err ' + err))
});

router.route('/:id').get((req, res) => {
  Form.findById(req.params.id)
    .then(form => res.json(form))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').delete((req, res) => {
  Form.findByIdAndDelete(req.params.id)
    .then(() => res.json('Form deleted'))
    .catch(err => res.status(400).json('Err ' + err));
});

router.route('/edit/:id').post((req, res) => {
  Form.findById(req.params.id)
    .then(form => {
      form.username = req.body.username;
      form.address = req.body.address;
      form.age = Number(req.body.age);
      form.birthdate = req.body.birthdate;
      form.email = req.body.email;
      form.contactNum = Number(req.body.contactNum);
      form.cardId = req.body.cardId;
      form.position = req.body.position;
      form.department = req.body.department;
      form.gender = req.body.gender;
      form.aboutMe = req.body.aboutMe;
      form.startDate = req.body.startDate;

      form.save()
        .then(() => res.json('Form Updated'))
        .catch(err => res.json('Err + ' + err))
    })
    .catch(err => res.status(400).json('Err' + err));
})


module.exports = router;