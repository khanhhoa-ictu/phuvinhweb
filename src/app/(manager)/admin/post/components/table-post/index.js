import React from 'react'
import PostItem from './PostItem';

function TablePost({dataSource}) {
    return (
        <div>
          <table className="w-full">
          <tbody>
            <tr>
              <th>Tiêu đề bài viết</th>
              <th>Hành động</th>
            </tr>
            
              {dataSource.map((item) => {
                return <PostItem post={item} key={item.title} />;
              })}
            </tbody>
          </table>
        </div>
      );
}

export default TablePost