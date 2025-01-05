import React from "react";
import ProductItem from "./ProductItem";

function TableProduct({ dataSource }) {
  return (
    <div>
      <table className="w-full">
        <tbody>
          <tr className="py-2 h-10">
            <th>Tên sản phẩm</th>
            <th>Hành động</th>
          </tr>

          {dataSource.map((item) => {
            return <ProductItem post={item} key={item.title} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableProduct;
