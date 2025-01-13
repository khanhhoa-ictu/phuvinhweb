import pool from "@/lib/mysql";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("page-size") || 10;
  const category = searchParams.get("category") || 1;

  const [rows] = await pool.query(
    "SELECT * FROM product WHERE category_id = ? ORDER BY created_at DESC",
    [category]
  );
  const data = {
    products: rows.slice(pageSize * page - pageSize, pageSize * page),
    total: rows.length,
  };
  return Response.json({ data: data, status: 200 });
}
