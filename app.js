const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();


mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});

const catchErrorMIddleware = ((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    console.error(err);
    return res.status(err.status).send({ status: err.status, message: err.message });
  }

  return next();
});

app.use(catchErrorMIddleware);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
