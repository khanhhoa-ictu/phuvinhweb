import { Button } from "antd";
function Introduce() {
  return (
    <div className="h-[calc(100vh-80px)] lg:h-[calc(100vh-160px)] flex items-center">
      <div className="flex flex-col items-center justify-between gap-[60px] w-[800px] lg:w-[800px] mx-auto relative">
        <h1 className="text-[#473dc6] lg:text-[80px] text-[32px] font-bold uppercase">
          Phú Vinh Steel
        </h1>
        <p className="text-[#473dc6] text-sm md:text-xl lg:text-[25px] text-center font-semibold leading-[32px]">
          Bằng sự nỗ lực không ngừng cải tiến chất lượng sản phẩm, dịch vụ, PHÚ
          VINH phấn đấu trở thành doanh nghiệp hàng đầu sản xuất thép Việt Nam.
        </p>
        <Button className="!text-xl lg:!text-2xl !px-8 !py-5 !rounded-[80px] !h-[62px] !bg-[#cbb024]">
          Tư Vấn Miễn Phí
        </Button>
      </div>
    </div>
  );
}

export default Introduce;
