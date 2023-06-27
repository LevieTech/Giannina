const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `
    SELECT
      DATE_TRUNC('week', visit_time) AS week,
      SUM(count) AS total_visits
    FROM
      patients_visits
    GROUP BY
      DATE_TRUNC('week', visit_time)
    ORDER BY
      1;
  `;

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error('Error fetching patients', error);
      res.sendStatus(500);
    });
});

module.exports = router;










// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// router.get('/', rejectUnauthenticated, (req, res) => {
//   const queryText = 'SELECT * FROM patients_visits';

//   pool
//     .query(queryText)
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.error('Error fetching patients', error);
//       res.sendStatus(500);
//     });
// });

// router.post('/', (req, res) => {
//   const { name, age, condition } = req.body;
//   const queryText = 'INSERT INTO patients_visits (name, age, condition) VALUES ($1, $2, $3)';

//   pool
//     .query(queryText, [name, age, condition])
//     .then(() => {
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.error('Error adding new patient', error);
//       res.sendStatus(500);
//     });
// });

// module.exports = router;

