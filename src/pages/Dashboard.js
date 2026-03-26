import React, { useState } from 'react';
import Header from '../components/Header';
import UserTable from '../components/UserTable';
import Loader from '../components/Loader';
import { useUsers } from '../hooks/useUsers';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState('');

  return (
    <div className={styles.page}>
      <Header />
      <main className={`${styles.main} page-enter`}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>User Management</p>
          <h1 className={styles.title}>User Directory</h1>
          <p className={styles.subtitle}>Browse, search, and manage all registered users in one place.</p>
        </section>

        <div className={styles.controls}>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="none" aria-hidden>
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M13 13L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search by name or email…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className={styles.clearBtn} onClick={() => setSearch('')}>✕</button>
            )}
          </div>
          <div className={styles.stats}>
            {!loading && !error && (
              <span className={styles.statBadge}>{users.length} Users</span>
            )}
          </div>
        </div>

        {loading  && <Loader text="Fetching users…" />}
        {error    && <div className={styles.error}>⚠️ Error: {error}</div>}
        {!loading && !error && <UserTable users={users} search={search} />}
      </main>
    </div>
  );
}