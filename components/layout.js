import React from 'react';
import styles from "./layout.module.css";
import Navbar from './Navbar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
        <div className={styles.main}>
         <Header/>
          {children}
        </div>
    </div>
    </>
  )
}

export default Layout;