import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserTable.module.css';

const SortIcon = ({ dir }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M7 2L10 6H4L7 2Z"   fill={dir === 'asc'  ? 'var(--accent)' : 'var(--border)'} />
    <path d="M7 12L4 8H10L7 12Z" fill={dir === 'desc' ? 'var(--accent)' : 'var(--border)'} />
  </svg>
);

export default function UserTable({ users, search }) {
  const navigate = useNavigate();
  const [sort, setSort] = useState({ key: 'name', dir: 'asc' });

  const toggle = (key) =>
    setSort(prev =>
      prev.key === key
        ? { key, dir: prev.dir === 'asc' ? 'desc' : 'asc' }
        : { key, dir: 'asc' }
    );

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return users.filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q)
    );
  }, [users, search]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const valA = sort.key === 'name' ? a.name : a.company.name;
      const valB = sort.key === 'name' ? b.name : b.company.name;
      const cmp  = valA.localeCompare(valB);
      return sort.dir === 'asc' ? cmp : -cmp;
    });
  }, [filtered, sort]);

  if (sorted.length === 0) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon}>🔍</span>
        <p>No users match <strong>"{search}"</strong></p>
        <p className={styles.emptyHint}>Try a different name or email.</p>
      </div>
    );
  }

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.thSort} onClick={() => toggle('name')}>
              <span>Name</span>
              <SortIcon dir={sort.key === 'name' ? sort.dir : null} />
            </th>
            <th>Email</th>
            <th>Phone</th>
            <th className={styles.thSort} onClick={() => toggle('company')}>
              <span>Company</span>
              <SortIcon dir={sort.key === 'company' ? sort.dir : null} />
            </th>
            <th className={styles.thAction}></th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((user, i) => (
            <tr
              key={user.id}
              className={styles.row}
              style={{ animationDelay: `${i * 40}ms` }}
              onClick={() => navigate(`/user/${user.id}`)}
            >
              <td>
                <div className={styles.nameCell}>
                  <div className={styles.avatar} style={{ '--hue': (user.id * 37) % 360 }}>
                    {user.name.charAt(0)}
                  </div>
                  <span className={styles.name}>{user.name}</span>
                </div>
              </td>
              <td className={styles.email}>{user.email}</td>
              <td className={styles.phone}>{user.phone}</td>
              <td><span className={styles.companyBadge}>{user.company.name}</span></td>
              <td><span className={styles.viewBtn}>View →</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.count}>
        Showing <strong>{sorted.length}</strong> of <strong>{users.length}</strong> users
      </p>
    </div>
  );
}