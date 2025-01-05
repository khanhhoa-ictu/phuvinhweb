'use client'
import { Select } from 'antd'
import React, { useState } from 'react'

function SelectCategory() {
  const [value, setValue] = useState("ống thép")
  return (
    <div className='my-10 flex justify-end mx-4 max-w-[1200px] lg:mx-auto' >
       <Select value={value} className='w-[273px] !h-10' onChange={(e)=>setValue(e)}>
          <Select.Option value="1">ống thép</Select.Option>
          <Select.Option value="2">cuộn tôn</Select.Option>
        </Select>
    </div>
  )
}

export default SelectCategory