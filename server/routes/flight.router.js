// Import required modules
const express = require("express");
const pool = require("../modules/pool");

// Create an Express router object
const router = express.Router();

// Define a GET route
router.get("/", (req, res) => {
  // Use the database connection pool to execute a SELECT query
  pool.query("SELECT * FROM flight_info", (error, result) => {
    // If there was an error executing the query
    if (error) {
      console.log(`Error executing query: ${error}`);
      res.sendStatus(500);
    } else {
      // If the query was successful, send the result back to the client
      res.send(result.rows);
    }
  });
});

router.post("/", (req, res) => {
    const flightData = req.body;
    const { guestName, departureDate, arrivalDate, fromCity, toCity, airline, flightNumber } = flightData;
  
    const queryText = `
          INSERT INTO "flight_info" (guestName, departureDate, arrivalDate, fromCity, toCity, airline, flightNumber)
          VALUES ($1, $2, $3, $4, $5, $6, $7);
          `;
  
    const queryValues = [
      guestName,
      departureDate,
      arrivalDate,
      fromCity,
      toCity,
      airline,
      flightNumber
    ];
  
    pool
      .query(queryText, queryValues)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log("Error adding flight_info to database", err);
        res.sendStatus(500);
      });
  });
  

// Export the router object
module.exports = router;
// This is a basic example, and you would need to replace table_name with the actual name of the table you want to retrieve data from. Additionally, you could add filters to the SELECT query to retrieve specific data. Finally, you may need to handle error cases and edge cases based on your specific needs.






