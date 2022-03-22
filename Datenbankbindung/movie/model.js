import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "sml12345",
    database: "movie-db",
});

await connection.connect();

export async function getAll() {
    const query = 'SELECT * FROM Movies';
    const [data] = await connection.query(query);
    return data;
}

async function insert(movie) {
    // const query = 'INSERT INTO Movies (title, year) Values ()'
    await connection.insert(movie);
}
async function update(movie) {
    await connection.update(movie);
}
export async function get(id) {
    const query = 'SELECT * FROM Movies WHERE ID = @ID'
    connection.query(query, id)
}
export async function remove(id) {
    const query = 'DELETE FROM Movies WHERE ID = @ID'
    connection.query(query, id)
}
export function save(movie) {
    await connection.save(movie);
}