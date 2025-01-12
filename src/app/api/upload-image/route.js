import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: "smile159",
  api_key: "678772438397898",
  api_secret: "zvdEWEfrF38a2dLOtVp-3BulMno",
});

const uploadImg = async (buffer) => {
  try {
    const result = await new Promise(async (resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "auto", folder: "test" },
          async (error, result) => {
            if (error) {
              return reject(error); // Kết thúc Promise với lỗi
            } else {
              return resolve(result); // Kết thúc Promise với kết quả
            }
          }
        )
        .end(buffer);
    });
    return result.secure_url; // Trả về URL ảnh đã upload
  } catch (error) {
    return null;
  }
};

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file-image"); // Lấy file từ FormData
    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { message: "No valid file provided" },
        { status: 400 }
      );
    }

    // Chuyển file thành Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload file lên Cloudinary
    const urlImg = await uploadImg(buffer);

    if (!urlImg) {
      return NextResponse.json({ message: "Upload failed" }, { status: 500 });
    }

    return NextResponse.json({ url: urlImg, message: "success" });
  } catch (error) {
    return NextResponse.json(
      { message: "tải file không thành công" },
      {
        status: 422,
      }
    );
  }
}
