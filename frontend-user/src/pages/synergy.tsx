import { ALL_SYNERGIES } from '../data/mockData';
import { synergyAvatar } from '../utils/avatar';
import styles from './synergy.module.css';

export default function SynergyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>羁绊一览</h1>
      <div className={styles.grid}>
        {ALL_SYNERGIES.map((s) => (
          <div key={s.id} className={styles.card}>
            <div className={styles.header}>
              <img src={synergyAvatar(s.name)} alt={s.name} className={styles.icon} />
              <span className={styles.name}>{s.name}</span>
              <span className={styles.count}>{s.count}人</span>
            </div>
            <p className={styles.desc}>{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
