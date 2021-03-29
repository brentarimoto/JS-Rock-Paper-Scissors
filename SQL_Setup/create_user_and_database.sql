/*
Please use below code in psql to create user and database
*/

CREATE USER rps_app WITH PASSWORD 'R0qp@ps!z' CREATEDB;
CREATE DATABASE rps_database;
GRANT ALL PRIVILEGES ON DATABASE rps_database TO rps_app;
