'use client'
import { Select } from 'antd'
import React from 'react'

function SelectCategory() {
  return (
    <div className='my-20 flex justify-end mx-4' >
       <Select value={1}>
          <Select.Option value="1">giay dep</Select.Option>
          <Select.Option value="2">quan ao</Select.Option>
        </Select>
    </div>
  )
}

export default SelectCategory