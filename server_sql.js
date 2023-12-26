// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');
// const sqlite3 = require('sqlite3');
// const path = require('path');

// const app = express();
// const port = 3000;

// app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files from the "public" directory
// app.use(express.static('public'));

// // Serve static files from the "Modules" directory
// app.use('/Modules', express.static('Modules'));

// // SQLite database setup
// const db = new sqlite3.Database('user_database.db');

// // Create a table for users
// db.serialize(() => {
//     db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
    
//     // Insert some sample users
//     const users = [
//         { username: 'user1', password: 'password1' },
//         { username: 'user2', password: 'password2' },
//         { username: 'user3', password: 'password3' },
//         { username: 'user4', password: 'password4' },
//         { username: 'user5', password: 'password5' }
//     ];

//     const insertUser = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");

//     users.forEach(user => {
//         insertUser.run(user.username, user.password);
//     });

//     insertUser.finalize();
// });

// // Routes
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

// app.get('/module1', (req, res) => res.sendFile(path.join(__dirname, 'Modules', 'Module 1', 'module1.html')));

// app.get('/module1/idor', (req, res) => res.sendFile(path.join(__dirname, 'Modules', 'Module 1', 'idor.html')));

// app.use('/module1/idor', (req, res, next) => {
//     if (req.url.endsWith('.css')) {
//         res.header('Content-Type', 'text/css');
//     }
//     next();
// });

// app.use('/module1/idor/user', require('./Modules/Module 1/user/route_user_sql.js'));

// app.get('/module1/idor/user/:userId', (req, res) => {
//     const userId = req.params.userId;
//     res.sendFile(path.join(__dirname, 'Modules', 'Module 1', `${userId}.html`));
// });

// app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
