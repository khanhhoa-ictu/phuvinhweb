"use client";
import React from "react";
import { Pagination } from "antd";
import { useRouter } from "next/navigation";

function CustomPagination({ currentPage, totalItems, pageSize, category }) {
  const router = useRouter();
  const handleChangePage = (page) => {
    if(category){
      router.push(`?page=${page}&category=${category}`);
      return
    }
    router.push(`?page=${page}`);
  };
  return (
    <Pagination
      className="[&_li]:!font-roboto"
      align="start"
      defaultCurrent={currentPage}
      total={totalItems}
      showSizeChanger={false}
      pageSize={pageSize}
      onChange={handleChangePage}
    />
  );
}

export default CustomPagination;
