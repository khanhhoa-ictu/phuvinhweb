import React from 'react'
import AddCategory from './components/add-category'
import TableCategory from './components/table-category'

function Category() {
    const payload = [
        {
            id: 1,
            title:'Danh mục 1'
        },
        {
            id: 2,
            title:'Danh muc 2'
        }
    ]
  return (
    <div className="flex-1 mt-10 px-10">
    <div className="max-w-[1200px] mx-auto" >
      <h1 className="text-[32px] uppercase text-center mb-10 font-semibold">
        Quản lý danh mục sản phẩm
      </h1>
      <div className="flex justify-end">
        <AddCategory />
      </div>
      <TableCategory dataSource={payload} />
    </div>
  </div>
  )
}

export default Category