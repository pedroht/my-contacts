const express = require('express');
require('express-async-errors');

const router = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors);
app.use(router);
app.use(errorHandler);

const port = 3001 || process.env.PORT;

app.listen(port, () => console.log(`🔥 Server started at http://localhost:${port}`));
