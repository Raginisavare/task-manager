/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(400),
    age VARCHAR(200) NOT NULL
    );
    `);
};

exports.down = pgm => {
    pg.sql(` 
    DROP TABLE users;`
    );
};
