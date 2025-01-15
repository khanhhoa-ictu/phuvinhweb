import pool from "@/lib/mysql";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("page-size") || 10;
  const is_homepage = searchParams.get("is_homepage") || false;

  const [rows] = await pool.query(
    `SELECT * FROM product ${is_homepage === "true" ? "WHERE is_homepage = true " : " "}ORDER BY created_at DESC`,
  );

  const data = {
    products: rows.slice(pageSize * page - pageSize, pageSize * page),
    total: rows.length,
  };
  return Response.json({ data: data, status: 200 });
}

export async function POST(req, res) {
  const request = await req.json();
  const { name, description, category_id, thumbnail, is_homepage } = request;
  const [rows] = await pool.query(
    "INSERT INTO product (name, description, category_id, thumbnail, is_homepage) VALUES (?,?,?,?,?)",
    [name, description, category_id, thumbnail, is_homepage],
  );
  if (rows) {
    return Response.json(
      { message: "Thêm sản phẩm thành công" },
      {
        status: 200,
      },
    );
  } else {
    return Response.json(
      { message: "Thêm sản phẩm thất bại" },
      {
        status: 422,
      },
    );
  }
}

export async function PUT(req, res) {
  const request = await req.json();
  const { name, description, category_id, thumbnail, is_homepage, id } =
    request;
  const [rows] = await pool.query(
    "UPDATE product SET name = ?, description = ?, category_id = ?, thumbnail = ?, is_homepage = ? WHERE id = ?",
    [name, description, category_id, thumbnail, is_homepage, id],
  );

  if (rows) {
    return Response.json(
      { message: "Cập nhât sản phẩm thành công" },
      {
        status: 200,
      },
    );
  } else {
    return Response.json(
      { message: "Cập nhât sản phẩm thất bại" },
      {
        status: 422,
      },
    );
  }
}
