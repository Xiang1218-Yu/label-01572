import type { Hero } from '../types';
import { heroAvatar } from '../utils/avatar';
import styles from './HeroDetail.module.css';

interface HeroDetailProps {
  hero: Hero;
  onClose: () => void;
  onAddToCompare: (hero: Hero) => void;
  isInCompare: boolean;
}

export default function HeroDetail({ hero, onClose, onAddToCompare, isInCompare }: HeroDetailProps) {
  const statLabels: Record<string, string> = {
    health: '生命值',
    attackDamage: '攻击力',
    abilityPower: '法术强度',
    armor: '护甲',
    magicResist: '魔抗',
    attackSpeed: '攻速',
    range: '攻击距离',
    mana: '法力值',
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.heroInfo}>
          <img
            className={styles.avatar}
            src={hero.avatarUrl || heroAvatar(hero.name, hero.cost)}
            alt={hero.name}
          />
          <div className={styles.basicInfo}>
            <h2 className={styles.name}>{hero.name}</h2>
            <div className={styles.cost}>
              {'⭐'.repeat(hero.cost)}
              <span className={styles.costText}>{hero.cost}费英雄</span>
            </div>
            <p className={styles.description}>{hero.description}</p>
          </div>
        </div>

        <button
          className={`${styles.compareBtn} ${isInCompare ? styles.active : ''}`}
          onClick={() => onAddToCompare(hero)}
        >
          {isInCompare ? '✓ 已加入对比' : '+ 加入对比'}
        </button>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>基础属性</h3>
          <div className={styles.statsGrid}>
            {Object.entries(hero.stats).map(([key, value]) => (
              <div key={key} className={styles.statItem}>
                <span className={styles.statLabel}>{statLabels[key]}</span>
                <span className={styles.statValue}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>英雄技能</h3>
          {hero.skills.map((skill) => (
            <div key={skill.id} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <h4 className={styles.skillName}>{skill.name}</h4>
                <div className={styles.skillMeta}>
                  <span className={styles.metaItem}>伤害: {skill.damage}</span>
                  <span className={styles.metaItem}>冷却: {skill.cooldown}s</span>
                  <span className={styles.metaItem}>蓝耗: {skill.cost}</span>
                </div>
              </div>
              <p className={styles.skillDesc}>{skill.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>最佳装备</h3>
          <div className={styles.equipmentList}>
            {hero.bestEquipment.map((eq) => (
              <div key={eq.id} className={styles.equipmentItem}>
                <img className={styles.equipmentIcon} src={eq.iconUrl} alt={eq.name} />
                <div className={styles.equipmentInfo}>
                  <span className={styles.equipmentName}>{eq.name}</span>
                  <span className={styles.equipmentDesc}>{eq.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>英雄羁绊</h3>
          <div className={styles.synergyList}>
            {hero.synergies.map((synergy) => (
              <div key={synergy.id} className={styles.synergyItem}>
                <img className={styles.synergyIcon} src={synergy.iconUrl} alt={synergy.name} />
                <span className={styles.synergyName}>{synergy.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
