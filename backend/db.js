const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports.saveTelemetry = async (data) => {
  const { id, gps, fuel, hours, speed } = data;
  await pool.query(
    `INSERT INTO telemetry(equipment_id, gps, fuel, hours, speed, timestamp)
     VALUES($1,$2,$3,$4,$5,NOW())`,
    [id, gps, fuel, hours, speed]
  );
};