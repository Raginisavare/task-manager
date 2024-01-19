const pool = require('../pool');
const toCamelCase = require('./utils/to-camel-case');

class userRepo{
    //add user
static async insert(username, bio){
    const { rows } = await pool.query('INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *;',
        [username, bio]
    );
    return rows[0];
}
//fetch user

static async find(){
    const { rows } = await pool.query('SELECT * from users;');
   // return toCamelCase(rows);
   return rows;
}

//Update 
static async update(id,name,age){
    const{ rows } = await pool.query(
      'UPDATE users SET name = $1, age = $2 WHERE id = $3 RETURNING *;',
      [name,age,id]
    );
    //return toCamelCase(rows)[0];
    return rows[0];

  }
  //delete user
  static async delete(id){

    const { rows }=await pool.query('DELETE FROM users WHERE id = $1 RETURNING *;',
    [id]
    );
 //return toCamelCase(rows)[0];
 return rows[0];
}

}
module.exports = userRepo;