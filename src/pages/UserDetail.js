import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { useUser } from '../hooks/useUsers';
import styles from './UserDetail.module.css';

function InfoCard({ title, children }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      {children}
    </div>
  );
}

function InfoRow({ label, value, href }) {
  return (
    <div className={styles.infoRow}>
      <span className={styles.label}>{label}</span>
      {href
        ? <a href={href} target="_blank" rel="noreferrer" className={styles.link}>{value}</a>
        : <span className={styles.value}>{value}</span>
      }
    </div>
  );
}

export default function UserDetail() {
  const { id }   = useParams();
  const navigate = useNavigate();
  const { user, loading, error } = useUser(id);

  return (
    <div className={styles.page}>
      <Header />
      <main className={`${styles.main} page-enter`}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          ← Back to Directory
        </button>

        {loading && <Loader text="Loading user…" />}
        {error   && <div className={styles.error}>⚠️ {error}</div>}

        {user && (
          <>
            <div className={styles.profileHero}>
              <div className={styles.bigAvatar} style={{ '--hue': (user.id * 37) % 360 }}>
                {user.name.charAt(0)}
              </div>
              <div>
                <p className={styles.heroEyebrow}>User #{user.id}</p>
                <h1 className={styles.heroName}>{user.name}</h1>
                <p className={styles.heroUsername}>@{user.username}</p>
                <a href={`mailto:${user.email}`} className={styles.heroBadge}>{user.email}</a>
              </div>
            </div>

            <div className={styles.grid}>
              <InfoCard title="📞 Contact">
                <InfoRow label="Phone"   value={user.phone} />
                <InfoRow label="Email"   value={user.email}   href={`mailto:${user.email}`} />
                <InfoRow label="Website" value={user.website} href={`https://${user.website}`} />
              </InfoCard>
              <InfoCard title="📍 Address">
                <InfoRow label="Street"  value={`${user.address.street}, ${user.address.suite}`} />
                <InfoRow label="City"    value={user.address.city} />
                <InfoRow label="Zipcode" value={user.address.zipcode} />
                <InfoRow label="Geo"     value={`${user.address.geo.lat}, ${user.address.geo.lng}`} />
              </InfoCard>
              <InfoCard title="🏢 Company">
                <InfoRow label="Name"         value={user.company.name} />
                <InfoRow label="Catch Phrase" value={user.company.catchPhrase} />
                <InfoRow label="BS"           value={user.company.bs} />
              </InfoCard>
            </div>
          </>
        )}
      </main>
    </div>
  );
}