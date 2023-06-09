import styles from "../styles/article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {
        articles.map(article => <ArticleItem article={article} key={article.id}/>)
      }
    </div>
  )
}

export default ArticleList