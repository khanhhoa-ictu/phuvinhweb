'use client'
import { Button } from 'antd'
import React from 'react'
import styles from "./styles.module.scss"

function AddCategory() {
  return (
    <div>
         <Button className={styles.add} onClick={() => setIsModalVisible(true)}>
        Thêm danh mục sản phẩm
      </Button>
    </div>
  )
}

export default AddCategory