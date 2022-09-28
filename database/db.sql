CREATE DATABASE noteapp;

use noteapp;

CREATE TABLE registration(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    clave VARCHAR(255) NOT NULL,
    createAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addnotas(
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    createAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT(11),
    PRIMARY KEY (id),
    KEY fk_user_notes (user_id)
);



CREATE TABLE
describe registration;