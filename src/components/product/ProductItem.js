import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

function ProductItem({ name, image, productName, className, id }) {
  return (
    <div className={`product-item ${className}`}>
      <div className="card-item relative overflow-hidden cursor-pointer max-w-full min-h-[400px] rounded-md min-w-[350px]">
        <Image
          src={image}
          alt={name}
          width={350}
          height={400}
          className="h-[500px] w-full object-cover rounded-lg"
        />
        <div className="text-2xl md:text-[32px] font-roboto font-semibold absolute bottom-0 left-4 text-[#261797] z-10 uppercase px-6 product-name">
          <p>{productName}</p>
          <Link
            className="w-fit"
            href={`/product/${id}/${name.replace(/ /g, "-")}`}
          >
            <Button className="mt-4 product-button !border-[#261797] hover:!bg-[#cbb024] hover:!text-white hover:!border-[#cbb024] hover:!shadow-indigo-500/50">
              Xem chi tiết
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
