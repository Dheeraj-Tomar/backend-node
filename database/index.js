const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const envDatabasePath = process.env.DATABASE_PATH || path.join('data', 'iqnaax.db');
const databasePath = path.isAbsolute(envDatabasePath)
  ? envDatabasePath
  : path.resolve(__dirname, '..', envDatabasePath);

const databaseDir = path.dirname(databasePath);
fs.mkdirSync(databaseDir, { recursive: true });

function getDbConnection() {
  return new sqlite3.Database(databasePath);
}

module.exports = {
  databasePath,
  getDbConnection,
};
