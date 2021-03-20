### Schema

DROP DATABASE IF EXISTS bx34fwvma7hl20ht;

CREATE DATABASE bx34fwvma7hl20ht;
USE bx34fwvma7hl20ht;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
