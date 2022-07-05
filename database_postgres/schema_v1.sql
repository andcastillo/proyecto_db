-- Database: mande_db

-- DROP DATABASE mande_db;

CREATE DATABASE mande_db
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    TEMPLATE template0;

\c mande_db

CREATE TABLE usuario(
	id_usuario SERIAL PRIMARY KEY,
	nombre_usuario VARCHAR(60) UNIQUE,
	password VARCHAR(60) CHECK (length(password) > 3),
	premium BOOLEAN DEFAULT FALSE
);