CREATE DATABASE noteapp;

use noteapp;

CREATE TABLE registration(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    clave VARCHAR(255) NOT NULL,
    createAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe registration;