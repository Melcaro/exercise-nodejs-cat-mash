const express = require('express');
const cors = require('cors');
const catsRouter = require('./routes/catsRouter');
const app = express();
app.use(cors());

app.use('/cats', catsRouter);

app.listen(process.env.PORT || 4000);
