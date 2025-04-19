const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/projects', (req, res) => res.render('projects'));
app.get('/contact', (req, res) => res.render('contact'));

app.listen(PORT, () => {
  console.log(`Portfolio running on http://localhost:${PORT}`);
});
