import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,      // Địa chỉ máy chủ MySQL
  user: process.env.MYSQL_USER,      // Tên người dùng
  password: process.env.MYSQL_PASSWORD, // Mật khẩu
  database: process.env.MYSQL_DATABASE, // Tên cơ sở dữ liệu
});

export default pool;
