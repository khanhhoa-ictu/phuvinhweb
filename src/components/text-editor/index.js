"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styles from "./styles.module.scss";
import { uploadFile } from "@/service/image";
import React, { useRef } from "react"

function customUploadAdapter(loader) {
  return {
    upload: async () => {
      const data = new FormData();
      const file = await loader.file;
      data.append("file-image", file);

      const response = await uploadFile(data);
      return {
        default: response.payload.url,
      };
    },
  };
}

function uploadPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return customUploadAdapter(loader);
  };
}

const TextEditor = React.memo(({data,onChange}) => {
  const editorRef = useRef(null);
  return (
    <div className={styles.textEditor}>
      <CKEditor
        editor={ClassicEditor}
        config={{
          extraPlugins: [uploadPlugin],
          image: {
            toolbar: [
              "imageTextAlternative", // Thêm mô tả thay thế cho hình ảnh
              "imageStyle:full",
              "imageStyle:side",
              "|",
              "resizeImage:25", // Tùy chọn resize 25%
              "resizeImage:50", // Tùy chọn resize 50%
              "resizeImage:75", // Tùy chọn resize 75%
              "resizeImage:original", // Tùy chọn resize về kích thước gốc
            ],
            resizeUnit: "px", // Đơn vị resize (px hoặc %)
          },
          toolbar: [
            "undo",
            "redo",
            "|",
            "heading",
            "alignment",
            "|",
            "bold",
            "italic",
            "|",
            "uploadImage",
            "blockQuote",
            "|",
            "bulletedList",
            "numberedList",
          ],
        }}
        data={data || ""}
        onReady={(editor) => {
          editorRef.current = editor; // Lưu trữ tham chiếu của CKEditor
        }}
        onChange={(event, editor) => onChange(event, editor)}
      />
    </div>
  );
});

export default TextEditor;
