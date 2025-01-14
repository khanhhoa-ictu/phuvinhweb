import pool from "@/lib/mysql";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  0;
  const request = await req.json();

  let { email, password } = request;
  password = bcrypt.hashSync(password, 10);
  const role = "user";

  const [rows] = await pool.query(
    "INSERT INTO user (email, password, role) VALUES (?,?,?)",
    [email, password, role]
  );
  if (rows) {
    return Response.json(
      { message: "Dang ky thanh cong" },
      {
        status: 200,
      }
    );
  } else {
    return Response.json(
      { message: "Dang ky that bai" },
      {
        status: 422,
      }
    );
  }
  
}
