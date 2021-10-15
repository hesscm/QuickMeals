const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, async (req, res) => {
  // GET route code here
  try {
    await pool.query('BEGIN');
    const queryText = '';
    const result = await pool.query(queryText, [req.user.id]);
    await pool.query('COMMIT');
    console.log(result.rows);
    res.send(result.rows);

  } catch (error) {
    console.log('ROLLBACK', error);
    await pool.query('ROLLBACK');
    throw error;
  }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
