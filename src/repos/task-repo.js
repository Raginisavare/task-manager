const pool=require('../pool')
const toCamelCase = require('./utils/to-camel-case');

class taskRepoo{
    static async insert(description, status){
        const { rows } = await pool.query('INSERT INTO tasks (description, status) VALUES ($1, $2) RETURNING *;',
            [description, status]
        );
        return rows[0];
    }
}
module.exports = taskRepoo;