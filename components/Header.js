import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
        <h1 className={styles.title}>
            <span>TheWebDev</span> News
        </h1>
        <p className={styles.description}>
            Keep up to date with latest web-developement news
        </p>
    </div>
  )
}

export default Header