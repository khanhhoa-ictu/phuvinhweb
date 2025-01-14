import pool from "@/lib/mysql";

export async function GET(req, { params }) {
  const id = params.id;
  const [row] = await pool.query("SELECT * FROM category WHERE id =?", [id]);
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

export async function DELETE(req, { params }) {
  const id = params.id;
  const [rows] = await pool.query("DELETE FROM category WHERE id=?", [id]);

  if (rows) {
    return Response.json(
      { message: "Xoa bài viết thành công" },
      {
        status: 200,
      },
    );
  } else {
    return Response.json(
      { message: "Xoá bài viết thất bại" },
      {
        status: 422,
      },
    );
  }
}
