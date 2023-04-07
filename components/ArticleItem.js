import Link from "next/link";
import styles from "../styles/article.module.css";

const ArticleItem = ({ article }) => {
  return(
    <Link href={`/article/${article.id}`}>
        <div className={styles.card}>
            <h3>{article.title} &rarr;</h3>
        </div>
    </Link>
  )
}

export default ArticleItem;