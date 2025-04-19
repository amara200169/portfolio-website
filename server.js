const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the base path for the app (to match Apache proxy path)
const basePath = '/portfolio';

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files under /portfolio
app.use(basePath, express.static(path.join(__dirname, 'public')));

// Routes under /portfolio
app.get(`${basePath}/`, (req, res) => res.render('index'));
app.get(`${basePath}/about`, (req, res) => res.render('about'));
app.get(`${basePath}/projects`, (req, res) => res.render('projects'));
app.get(`${basePath}/contact`, (req, res) => res.render('contact'));

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Portfolio running at http://localhost:${PORT}${basePath}`);
});
