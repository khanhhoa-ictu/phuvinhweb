import pool from "@/lib/mysql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  const request = await req.json();
  
  const { username, password } = request;
  const [rows] = await pool.query('SELECT * FROM user WHERE username = ?', [username]);
  if (rows.length === 0) {
    return Response.json(
      { message: "không tìm thấy thông tin người dùng" },
      {
        status: 404,
      }
    );
  }
  
  const user = rows[0];
  if (!user.id) {
    return Response.json(
      { message: "Tài khoản hoặc mật khẩu không chính xác" },
      {
        status: 422,
      }
    );
  }
  if (!bcrypt.compareSync(password, result[0].password)) {
    return Response.json(
      { message: "Tài khoản hoặc mật khẩu không chính xác" },
      {
        status: 422,
      }
    );
  }

  let token = jwt.sign(
    {
      username: username,
      role: result.role,
      iat: Math.floor(Date.now() / 1000) - 60 * 30,
    },
    "secret",
    { expiresIn: "1h" }
  );
  let refreshToken = jwt.sign(
    { username: username, iat: Math.floor(Date.now() / 1000) - 60 * 30 },
    "re-secret",
    { expiresIn: "10 days" }
  );
  res.send({ token, refreshToken, user });
  return Response.json({ token, refreshToken, user, status: 200 });
 
}
