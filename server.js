// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3000;

// app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files from the "public" directory
// app.use(express.static('public'));

// // Serve static files from the "Modules" directory
// app.use('/Modules', express.static('Modules'));

// // Routes
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

// // Define routes for Module 1
// app.get('/module1', (req, res) => res.sendFile(path.join(__dirname, 'Modules', 'Module 1', 'module1.html')));

// // Update routes for IDOR module
// app.get('/module1/idor', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Modules', 'Module 1', 'idor.html'));
// });

// // Middleware to set content type for CSS files in the IDOR module
// app.use('/module1/idor', (req, res, next) => {
//     if (req.url.endsWith('.css')) {
//         res.header('Content-Type', 'text/css');
//     }
//     next();
// });

// // Define routes for the user dashboard
// app.use('/module1/idor/user', require('./Modules/Module 1/user/route_user.js'));

// app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
