import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styles from './NotFound.module.css';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={`${styles.wrap} page-enter`}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.sub}>The page you're looking for doesn't exist.</p>
        <button className={styles.btn} onClick={() => navigate('/')}>← Back to Dashboard</button>
      </div>
    </div>
  );
}