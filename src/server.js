const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://msteeves:<password>@finalproject.zlu8job.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const adoptionSchema = new mongoose.Schema({
  name: String,
  email: String,
  animal: String,
  message: String,
  animalName: String,
  shelterLocation: String,
});

const Adoption = mongoose.model('Adoption', adoptionSchema);

app.post('/api/submit-adoption-form', async (req, res) => {
  try {
    const formData = req.body;

    const adoption = new Adoption(formData);
    await adoption.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
