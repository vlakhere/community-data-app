const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Database configuration
const config = {
  server: 'lakherasamaj.database.windows.net',
  database: 'lakherasamajdata',
  user: 'vlakhere',
  password: 'Raone@8661',
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

// SQL connection pool
const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

// Handlebars view engine setup (optional)
app.set('view engine', 'hbs');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', async (req, res) => {
  // Handle form submission and database insertion here
  // Insert data into the SQL database using the 'pool' object

  res.redirect('/'); // Redirect to the home page
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
