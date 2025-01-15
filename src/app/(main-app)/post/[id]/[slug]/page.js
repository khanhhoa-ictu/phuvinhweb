import { getPostDetail } from "@/service/post";
import styles from "./styles.module.scss";

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id;

  // fetch data
  const { payload } = await getPostDetail(id);

  return {
    title: payload?.data?.attributes?.title,
    description: payload?.data?.attributes?.summary,
  };
}

async function PostDetail({ params }) {
  const { id } = params;
  const { payload: postDetail } = await getPostDetail(id);
  return (
    <div className={styles.container}>
      <div className={styles.containerDetail}>
        <div className={styles.detail}>
          <div className={styles.dateTime}>
            <p>
              {/* {moment(postDetail?.reg_date).format("DD/MM/YYYY")} */}- By
              Smile
            </p>
          </div>
          <div className={styles.detailContent}>
            <div
              dangerouslySetInnerHTML={{ __html: `${postDetail?.data?.content}` }}
              className={styles.detailContents}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
