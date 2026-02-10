import { ALL_EQUIPMENTS } from '../data/mockData';
import { equipAvatar } from '../utils/avatar';
import styles from './equipment.module.css';

export default function EquipmentPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>装备图鉴</h1>
      <div className={styles.grid}>
        {ALL_EQUIPMENTS.map((eq) => (
          <div key={eq.id} className={styles.card}>
            <img
              className={styles.icon}
              src={eq.iconUrl || equipAvatar(eq.name)}
              alt={eq.name}
              loading="lazy"
            />
            <span className={styles.name}>{eq.name}</span>
            <p className={styles.desc}>{eq.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
