import { cookies } from "next/headers";

export async function POST(request) {
  const res = await request.json();
  const force = res.force | undefined;
  if (force) {
    return Response.json(
      { message: "logout thanh cong" },
      {
        status: 200,
        statusText: "OK",
        headers: {
          "Set-Cookie": [
            `token=; Path=/; HttpOnly Max-Age=0`,
            `refreshToken=; Path=/; HttpOnly Max-Age=0`,
          ],
        },
      },
    );
  }
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return Response.json(
      { message: "khong nhan duoc token" },
      {
        status: 401,
      },
    );
  }

  return Response.json(request.json(), {
    status: 200,
    statusText: "OK",
    headers: {
      "Set-Cookie": [
        `token=; Path=/; HttpOnly Max-Age=0`,
        `refreshToken=; Path=/; HttpOnly Max-Age=0`,
      ],
    },
  });
}
