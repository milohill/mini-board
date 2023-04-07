let express = require('express');

let router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Board!', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

router.post('/new', (req, res, next) => {
  const { user, text } = req.body;
  messages.push({
    user: user,
    text: text,
    added: new Date(),
  });
  res.status(200).redirect('/');
});

module.exports = router;
