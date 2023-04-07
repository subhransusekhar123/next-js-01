import Link from "next/link" 
import styles from "../styles/Nav.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/"></Link>
            </li>
            <li>
                <Link href="/"></Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar