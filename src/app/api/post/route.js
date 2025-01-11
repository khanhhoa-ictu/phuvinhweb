import pool from "@/lib/mysql";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const pageSize = 10;

  const [rows] = await pool.query(
    "SELECT * FROM post ORDER BY created_at DESC"
  );
  const data = {
    listPost: rows.slice(pageSize * page - pageSize, pageSize * page),
    total: rows.length,
  };
  return Response.json({ data: data, status: 200 });
}

export async function POST(req, res) {
  const request = await req.json();
  const { title, content, summary, thumbnail } = request;
  const [rows] = await pool.query(
    "INSERT INTO post (title, content, summary, thumbnail) VALUES (?,?,?,?)",
    [title, content, summary, thumbnail]
  );
  if (rows) {
    return Response.json(
      { message: "Thêm bài viết thành công" },
      {
        status: 200,
      }
    );
  } else {
    return Response.json(
      { message: "Thêm bài viết thất bại" },
      {
        status: 422,
      }
    );
  }
}

export async function DELETE(req, res) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.delete;
  const [rows] = await pool.query("DELETE FROM post WHERE id=?", [id]);
  console.log(rows);

  if (rows) {
    return Response.json(
      { message: "Thêm bài viết thành công" },
      {
        status: 200,
      }
    );
  } else {
    return Response.json(
      { message: "Thêm bài viết thất bại" },
      {
        status: 422,
      }
    );
  }
}
