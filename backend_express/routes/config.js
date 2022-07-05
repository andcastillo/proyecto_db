const config = {
  "user": "postgres", //env var: PGUSER
  "database": "mande_db", //env var: PGDATABASE
  "password": "mysecretpassword", //env var: PGPASSWORD
  "host": "postgres", // Server hosting the postgres database
  "port": 5432, //env var: PGPORT
  "max": 10, // max number of clients in the pool
  "idleTimeoutMillis": 30000, // how long a client is allowed to remain idle before being closed
};

module.exports = config