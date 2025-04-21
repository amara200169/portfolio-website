const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use('/portfolio', express.static(path.join(__dirname, 'public')));

// Routes
app.get('/portfolio', (req, res) => {
  res.render('index');
});
app.get('/portfolio/about', (req, res) => {
  res.render('about');
});
app.get('/portfolio/projects', (req, res) => {
  res.render('projects');
});
app.get('/portfolio/contact', (req, res) => {
  res.render('contact');
});
app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}/portfolio`);
});
