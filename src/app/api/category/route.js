import pool from "@/lib/mysql";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const pageSize = 10;

  const [rows] = await pool.query(
    "SELECT * FROM category ORDER BY created_at DESC"
  );
  const data = {
    listPost: rows.slice(pageSize * page - pageSize, pageSize * page),
    total: rows.length,
  };
  return Response.json({ data: data, status: 200 });
}

export async function POST(req, res) {
  const request = await req.json();
  const { name } = request;
  const [rows] = await pool.query("INSERT INTO category (name) VALUES (?)", [
    name,
  ]);

  if (rows) {
    return Response.json(
      { message: "Thêm danh mục thành công" },
      {
        status: 200,
      }
    );
  } else {
    return Response.json(
      { message: "Thêm danh mục thất bại" },
      {
        status: 422,
      }
    );
  }
}

export async function PUT(req, res) {
  const request = await req.json();
  const { name, id } = request;
  const [rows] = await pool.query("UPDATE category SET name = ? WHERE id = ?", [
    name,
    id,
  ]);

  if (rows) {
    return Response.json(
      { message: "Cập nhât danh mục thành công" },
      {
        status: 200,
      }
    );
  } else {
    return Response.json(
      { message: "Cập nhât danh mục thất bại" },
      {
        status: 422,
      }
    );
  }
}
