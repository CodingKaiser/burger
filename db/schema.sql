CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured boolean default false,
  date varchar(20),
  PRIMARY KEY (id)
);
