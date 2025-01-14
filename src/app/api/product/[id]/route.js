import pool from "@/lib/mysql";

export async function GET(req, { params }) {
  const id = params.id;
  const [row] = await pool.query("SELECT * FROM product WHERE id =?", [id]);
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
  const [rows] = await pool.query("DELETE FROM product WHERE id=?", [id]);

  if (rows) {
    return Response.json(
      { message: "Xoa sản phẩm thành công" },
      {
        status: 200,
      },
    );
  } else {
    return Response.json(
      { message: "Xoá sản phẩm thất bại" },
      {
        status: 422,
      },
    );
  }
}
