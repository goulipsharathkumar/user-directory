import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoMark}>BF</span>
        <span className={styles.logoText}>BuyerForesight</span>
      </Link>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Directory</Link>
      </nav>
    </header>
  );
}