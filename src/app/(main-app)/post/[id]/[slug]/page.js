import React from "react";

async function PostDetail({ params }) {
  const { id } = params;
  // const { payload } = await getBlogDetail(id);
  const content = "";
  return (
    <div className="flex-1 py-20">
      <div className="px-4 sm:px-10 md:px-[60px] lg:px-20 max-w-[1200px] mx-auto">
        <h2 className="text-[#261797] text-[32px] font-bold mb-6 text-center uppercase">
          title
        </h2>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

export default PostDetail;
