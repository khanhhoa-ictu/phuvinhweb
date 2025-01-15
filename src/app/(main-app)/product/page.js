import background from "@/assets/image/post/background.png";
import CustomPagination from "@/components/pagination";
import ProductItem from "@/components/product/ProductItem";
import { getListProductByCategory } from "@/service/product";
import Image from "next/image";
import SelectCategory from "./SelectCategory";

export const metadata = {
  title: "Sản Phẩm Ống Thép Phú Vinh - Thép Chất Lượng Cao, Giá Cạnh Tranh",
  description:
    "Khám phá danh mục sản phẩm thép đa dạng tại Ống Thép Phú Vinh. Chúng tôi cung cấp thép chất lượng cao, bền bỉ, giá cả hợp lý, đáp ứng mọi nhu cầu xây dựng và công nghiệp.",
};

async function Product({ searchParams }) {
  const category = searchParams?.category || null;
  const currentPage = Number(searchParams.page) || 1;
  const pageSize = 10;
  const data = await getListProductByCategory(currentPage, pageSize, category);
  const products = data.payload.data?.products;
  return (
    <div className="flex-1">
      <div className="relative">
        <Image
          src={background}
          width={1487}
          height={283}
          className="w-full h-auto max-h-[260px]"
        />
        <h1 className="uppercase sm:text-[32px] text-xl font-bold absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          Sản Phẩm
        </h1>
      </div>

      <SelectCategory />

      <div className="max-w-[1200px] gap-x-6 lg:mx-auto flex flex-col mx-4 md:flex-row flex-wrap md:gap-x-4 items-center lg:justify-between mb-10 gap-y-10">
        {products?.map((item) => (
          <ProductItem
            key={item}
            image={item.thumbnail}
            name="test"
            productName="Ống sắt mạ kẽm vuông hình chữ nhật"
            className="max-w-[370px]"
            id={item.id}
          />
        ))}
      </div>
      <div className="flex justify-center mt-[100px] relative z-10 mb-20">
        <CustomPagination
          currentPage={currentPage}
          totalItems={data.payload.data?.total}
          pageSize={pageSize}
          category={category}
        />
      </div>
    </div>
  );
}

export default Product;
