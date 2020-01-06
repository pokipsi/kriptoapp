require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const coins = require('./routes/api/coins');
app.use('/api/coins', coins);

const alerts = require('./routes/api/alerts');
app.use('/api/alerts', alerts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// setInterval(() => {
//     console.log(Date.now());
// }, 2000);

