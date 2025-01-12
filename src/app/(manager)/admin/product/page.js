import React from 'react'
import AddProduct from './components/add-product'
import TableProduct from './components/table-product'
import { getListProduct } from '@/service/product';

async function Product({searchParams}) {
    const data = await getListProduct(Number(searchParams.page));
    const payload = data.payload.data?.products;
   
  return (
    <div className="flex-1 mt-10 px-10">
    <div className="max-w-[1200px] mx-auto" >
      <h1 className="text-[32px] uppercase text-center mb-10 font-semibold">
        Quản lý sản phẩm
      </h1>
      <div className="flex justify-end">
        <AddProduct />
      </div>
      <TableProduct dataSource={payload} />
    </div>
  </div>
  )
}

export default Product