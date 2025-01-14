import pool from "@/lib/mysql";

export async function GET(req, { params }) {
  const id = params.id;
  const [row] = await pool.query("SELECT * FROM post WHERE id =?", [id]);
  if (row) {
    return Response.json({
      data: row[0],
      status: 200,
    });
  } else {
    return Response.json(
      { message: "Không tìm thấy bài viết" },
      {
        status: 422,
      },
    );
  }
}
