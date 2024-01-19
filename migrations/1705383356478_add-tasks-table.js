/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    description VARCHAR(400),
    status VARCHAR(200) NOT NULL
    );
    `);
};

exports.down = pgm => {
    pg.sql(` 
    DROP TABLE users;`
    );
};
