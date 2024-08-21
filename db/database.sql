CREATE DATABASE IF NOT EXISTS bibliotecaDatabase;

USE bibliotecaDatabase;

CREATE TABLE libro(
    id INT(100) NOT NULL AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    author varchar(45) NOT NULL,
    genre varchar(45) NOT NULL,
    cover varchar(100),
    language varchar(45) NOT NULL,
    PRIMARY KEY(id)
);

DESCRIBE libro;

INSERT INTO libro VALUES
    (1,"La naranja mecanica","Anthony Burgess","Novela","https://images.cdn1.buscalibre.com/fit-in/360x360/81/22/812252fdfa443853ac4f0c38d89a9690.jpg"),
    (2,"Free to Choose","Milton Friedman","Economia","https://m.media-amazon.com/images/I/61Zhy-hiepL._AC_UF1000,1000_QL80_.jpg");
