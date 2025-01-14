"use client";
import { handleErrorMessage } from "@/common";
import { getListCategory } from "@/service/catygory";
import { Select } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function SelectCategory() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    try {
      const data = await getListCategory(1, "ASC");
      const payload = data.payload.data?.listPost;
      setCategories(payload);
      setValue(payload[0].id);
    } catch (error) {
      console.log(error);
      handleErrorMessage(error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const handleSelectCategory = (e) => {
    setValue(e);
    router.push(`?page=1&category=${e}`);
  };
  return (
    <div className="my-10 flex justify-end mx-4 max-w-[1200px] lg:mx-auto">
      <Select
        value={value}
        className="w-[273px] !h-10"
        onChange={handleSelectCategory}
      >
        {categories.map((item) => {
          return (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
}

export default SelectCategory;
