// Import required modules
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
// Create an Express router object


router.






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
    const user = req.user.id
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







