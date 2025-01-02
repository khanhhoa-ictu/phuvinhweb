import { Button } from "antd";
function Introduce() {
  return (
    <div className="h-[calc(100vh-80px)] lg:h-[calc(100vh-160px)] flex items-center">
      <div className="flex flex-col items-center justify-between gap-[60px] w-[300px] lg:w-[600px] mx-auto relative">
        <h1 className="text-[#473dc6] lg:text-[80px] text-[32px] font-bold">
          Phú Vinh Stell
        </h1>
        <p className="text-[#473dc6] text-sm lg:text-xl text-center font-semibold">
          Bằng vào sự nỗ lực không ngừng cải tiến chất lượng sản phẩm, dịch vụ,
          PHÚ VINH phấn đấu trở thành doanhnghiệp hàng đầu sản xuất thép Việt
          Nam.
        </p>
        <Button className="!text-xl lg:!text-2xl !px-8 !py-5 !rounded-[80px] !h-[62px]">
          Tư Vấn Miễn Phí
        </Button>
      </div>
    </div>
  );
}

export default Introduce;
