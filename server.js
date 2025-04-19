const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files for /portfolio
app.use('/portfolio', express.static(path.join(__dirname, 'public')));

// Route for /portfolio root
app.get('/portfolio', (req, res) => {
  res.render('index');
});

// Optional: subpages
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
  console.log(`Server running at http://localhost:${PORT}`);
});
