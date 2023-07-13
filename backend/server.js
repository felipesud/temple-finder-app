const express = require('express');
const app = express();
const port = 3000;

const templeRoutes = require('./routes/temples');
app.use('./api/temples', templeRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`))


