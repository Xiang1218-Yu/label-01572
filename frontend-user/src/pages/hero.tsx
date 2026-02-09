import { ALL_HEROES } from '../data/mockData';
import { heroAvatar } from '../utils/avatar';
import styles from './hero.module.css';

export default function HeroPage() {
  const heroes = [...ALL_HEROES].sort((a, b) => b.cost - a.cost);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>英雄图鉴</h1>
      <div className={styles.grid}>
        {heroes.map((h) => (
          <div key={h.id} className={styles.card}>
            <img
              className={styles.avatar}
              src={heroAvatar(h.name, h.cost)}
              alt={h.name}
              loading="lazy"
            />
            <div className={styles.info}>
              <span className={styles.name}>{h.name}</span>
              <span className={styles.cost}>{'⭐'.repeat(h.cost)}</span>
            </div>
            <p className={styles.desc}>{h.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
