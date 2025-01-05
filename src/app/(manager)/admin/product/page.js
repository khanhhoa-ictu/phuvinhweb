import React from 'react'
import AddProduct from './components/add-product'
import TableProduct from './components/table-product'

function Product() {
    const payload = [
        {
            id: 1,
            title:'Sản phẩm 1'
        },
        {
            id: 2,
            title:'Sản phẩm 2'
        }
    ]
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