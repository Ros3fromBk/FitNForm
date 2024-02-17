DROP DATABASE IF EXISTS fitnform_app;

CREATE DATABASE fitnform_app;

\c fitnform_app;

CREATE TABLE excercises (
  excercise_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  targeted_muscles TEXT,
  body_parts TEXT,
  added_to_routine BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SELECT * FROM excercises 