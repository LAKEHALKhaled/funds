const express = require('express');
const mysql = require('mysql2');



const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connection to database. Remember to put YOUR password :) 
// Look at the docs or previous activities for sytax




// Routes & Queries
// E.g.: app.post('/route')



// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  