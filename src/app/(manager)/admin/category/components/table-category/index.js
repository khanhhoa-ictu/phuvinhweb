import React from "react";
import CategoryItem from "./CategoryItem";

function TableCategory({dataSource}) {
  return (
    <div>
      <table className="w-full">
        <tbody>
          <tr className="py-2 h-10">
            <th>Tên sản phẩm</th>
            <th>Hành động</th>
          </tr>

          {dataSource.map((item) => {
            return <CategoryItem post={item} key={item.title} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableCategory;
