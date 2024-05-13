CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  category TEXT
);



CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  name TEXT,
  message TEXT,
  category_id INT REFERENCES categories(id)
);


CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  name TEXT,
  comment TEXT,
  post_id INT REFERENCES posts(id)
);

 INSERT INTO categories (category) VALUES
 ('Education'), ('Health'), ('Sports'), ('Employment'), ('Art');

 INSERT INTO posts (name, message, category_id) VALUES
('John', 'Great book about astrophysics', 1),
('Rose', 'Really good advice on meal prep and planning', 2),
('Mark', 'Great motivation to remain disciplined in sports', 3),
('Lucy', 'Good read on the pros and cons of working from home', 4),
('Tom', 'Must read for up and coming artists and designers!', 5);

-- join query to replace category_id with category name
SELECT posts.id, posts.name, posts.message, categories.category
FROM posts
JOIN categories ON posts.category_id = categories.id;