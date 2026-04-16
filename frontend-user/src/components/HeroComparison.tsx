import type { Hero } from '../types';
import { heroAvatar } from '../utils/avatar';
import styles from './HeroComparison.module.css';

interface HeroComparisonProps {
  heroes: Hero[];
  onRemoveHero: (heroId: string) => void;
  onClose: () => void;
}

export default function HeroComparison({ heroes, onRemoveHero, onClose }: HeroComparisonProps) {
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

  const statKeys = ['health', 'attackDamage', 'abilityPower', 'armor', 'magicResist', 'attackSpeed', 'range', 'mana'];

  const getStatValue = (hero: Hero, key: string) => {
    const statsMap: Record<string, number> = {
      health: hero.stats.health,
      attackDamage: hero.stats.attackDamage,
      abilityPower: hero.stats.abilityPower,
      armor: hero.stats.armor,
      magicResist: hero.stats.magicResist,
      attackSpeed: hero.stats.attackSpeed,
      range: hero.stats.range,
      mana: hero.stats.mana,
    };
    return statsMap[key] || 0;
  };

  const getMaxValue = (key: string) => {
    return Math.max(...heroes.map((h) => getStatValue(h, key)));
  };

  if (heroes.length === 0) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>英雄属性对比</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.compareTable}>
          <div className={styles.tableHeader}>
            <div className={styles.statLabelCell}>属性</div>
            {heroes.map((hero) => (
              <div key={hero.id} className={styles.heroHeader}>
                <button
                  className={styles.removeBtn}
                  onClick={() => onRemoveHero(hero.id)}
                  title="移除"
                >
                  ✕
                </button>
                <img
                  className={styles.avatar}
                  src={hero.avatarUrl || heroAvatar(hero.name, hero.cost)}
                  alt={hero.name}
                />
                <span className={styles.heroName}>{hero.name}</span>
                <span className={styles.heroCost}>{'⭐'.repeat(hero.cost)}</span>
              </div>
            ))}
          </div>

          <div className={styles.tableRow}>
            <div className={styles.statLabelCell}>费用</div>
            {heroes.map((hero) => (
              <div key={hero.id} className={styles.statCell}>
                <span className={styles.statValue}>{hero.cost}</span>
              </div>
            ))}
          </div>

          {statKeys.map((statKey) => {
            const maxValue = getMaxValue(statKey);
            return (
              <div key={statKey} className={styles.tableRow}>
                <div className={styles.statLabelCell}>{statLabels[statKey]}</div>
                {heroes.map((hero) => {
                  const value = getStatValue(hero, statKey);
                  const isMax = value === maxValue;
                  return (
                    <div key={hero.id} className={styles.statCell}>
                      <span className={`${styles.statValue} ${isMax ? styles.highlight : ''}`}>
                        {value}
                      </span>
                      <div className={styles.progressBar}>
                        <div
                          className={`${styles.progressFill} ${isMax ? styles.highlightFill : ''}`}
                          style={{ width: `${(value / maxValue) * 100}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className={styles.skillSection}>
          <h3 className={styles.sectionTitle}>技能对比</h3>
          <div className={styles.skillsGrid}>
            {heroes.map((hero) => (
              <div key={hero.id} className={styles.heroSkills}>
                <div className={styles.skillHeroInfo}>
                  <img
                    className={styles.skillAvatar}
                    src={hero.avatarUrl || heroAvatar(hero.name, hero.cost)}
                    alt={hero.name}
                  />
                  <span className={styles.skillHeroName}>{hero.name}</span>
                </div>
                {hero.skills.map((skill) => (
                  <div key={skill.id} className={styles.skillCard}>
                    <h4 className={styles.skillName}>{skill.name}</h4>
                    <div className={styles.skillMeta}>
                      <span>伤害: {skill.damage}</span>
                      <span>冷却: {skill.cooldown}s</span>
                      <span>蓝耗: {skill.cost}</span>
                    </div>
                    <p className={styles.skillDesc}>{skill.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
