//conexion a la base de datos
// Para mas informacion visitar la pagina Sequelize que nos informa de como hacer la conexion


import Sequelize from 'sequelize';

const db = new Sequelize ('Stilos', 'postgres', '123456789', {
  host: 'localhost',
  dialect:'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


export default db;