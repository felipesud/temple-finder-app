const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


mongoose
  .connect('mongodb+srv://<felipesud>:<felipe>@cluster0.lvbamfb.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

const templeRoutes = require('./routes/temples');
app.use('/api/temples', templeRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
