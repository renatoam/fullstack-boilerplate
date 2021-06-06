-- UP
CREATE TABLE Product (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description TEXT
);

INSERT INTO Product (description) values ('Teste produto')

CREATE TABLE Category (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description TEXT
);

INSERT INTO Category (description) values ('Teste cateogria')

-- Down
DROP TABLE Product;
DROP TABLE Category;