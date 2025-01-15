import { getPostDetail } from "@/service/post";
import styles from "./styles.module.scss";
import { getProductDetail } from "@/service/product";

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id;

  // fetch data
  const { payload } = await getProductDetail(id);

  return {
    title: payload?.data?.attributes?.name,
    description: payload?.data?.attributes?.name,
  };
}

async function ProductDetail({ params }) {
  const { id } = params;
  const { payload: postDetail } = await getProductDetail(id);
  return (
    <div className={styles.container}>
      <div className={styles.containerDetail}>
        <div className={styles.detail}>
          <div className={styles.dateTime}>
            <p>
              {dayjs(postDetail?.created_at).format("DD/MM/YYYY")} -{" "}
              <span className="font-semibold text-[#261797]">Phú vinh steel</span>
            </p>
          </div>
          <div className={styles.detailContent}>
            <div
              dangerouslySetInnerHTML={{
                __html: `${postDetail?.data?.description}`,
              }}
              className={styles.detailContents}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
