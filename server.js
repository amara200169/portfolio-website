const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/portfolio', express.static(path.join(__dirname, 'public'))); // Note the base path

const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/about', (req, res) => res.render('about'));
router.get('/projects', (req, res) => res.render('projects'));
router.get('/contact', (req, res) => res.render('contact'));

app.use('/portfolio', router); // Use the router under /portfolio

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Portfolio running on http://localhost:${PORT}`);
});
