import pool from "@/lib/mysql";

export async function GET(req, { params }) {
  const id = params.id;
  const [rows] = await pool.query("SELECT * FROM post WHERE id =?", [id]);
  if (rows[0]) {
    return Response.json({
      data: rows[0],
      status: 200,
    });
  } else {
    return Response.json(
      { message: "Không tìm thấy bài viết" },
      {
        status: 404,
      },
    );
  }
}
