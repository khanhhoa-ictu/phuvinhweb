import pool from "@/lib/mysql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  0;
  const request = await req.json();

  const { email, password } = request;
  const [rows] = await pool.query("SELECT * FROM user WHERE email = ?", [
    email,
  ]);

  if (!rows[0]) {
    return Response.json(
      { message: "không tìm thấy thông tin người dùng" },
      {
        status: 404,
      },
    );
  }

  if (!bcrypt.compareSync(password, rows[0].password)) {
    return Response.json(
      { message: "Tài khoản hoặc mật khẩu không chính xác" },
      {
        status: 422,
      },
    );
  }

  let token = jwt.sign(
    {
      email: email,
      role: rows[0].role,
      iat: Math.floor(Date.now() / 1000) - 60 * 30,
    },
    "secret",
    { expiresIn: "300d" },
  );

  let refreshToken = jwt.sign(
    { email: email, iat: Math.floor(Date.now() / 1000) - 60 * 30 },
    "re-secret",
    { expiresIn: "1000 days" },
  );
  const user = { id: rows[0]?.id, email: rows[0]?.email, role: rows[0].role };
  const payload = jwt.decode(token);
  const expireDate = new Date(payload.exp * 1000).toUTCString();
  return Response.json(
    { token, refreshToken, user },
    {
      status: 200,
      statusText: "OK",
      headers: {
        "Set-Cookie": [
          `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${expireDate};`,
          `refreshToken=${refreshToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${expireDate};`,
        ],
      },
    },
  );
}
