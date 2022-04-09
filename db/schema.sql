DROP DATABASE IF EXISTS `dancing_platypus_db`;
CREATE DATABASE `dancing_platypus_db`;
USE `dancing_platypus_db`;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  clicks INT NOT NULL,
  PRIMARY KEY (id)
);



