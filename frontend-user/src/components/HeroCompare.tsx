import type { Hero } from '../types';
import { heroAvatar } from '../utils/avatar';
import styles from './HeroCompare.module.css';

interface HeroCompareProps {
  compareHeroes: Hero[];
  onRemove: (heroId: string) => void;
  onClear: () => void;
}

export default function HeroCompare({ compareHeroes, onRemove, onClear }: HeroCompareProps) {
  if (compareHeroes.length === 0) {
    return null;
  }

  const statKeys = ['health', 'attack', 'defense', 'attackSpeed', 'magicResist', 'moveSpeed'] as const;

  const getStatLabel = (stat: string) => {
    const labels: Record<string, string> = {
      health: '生命值',
      attack: '攻击力',
      defense: '护甲',
      attackSpeed: '攻击速度',
      magicResist: '魔法抗性',
      moveSpeed: '移动速度'
    };
    return labels[stat] || stat;
  };

  const getBestValue = (stat: keyof Hero['stats']) => {
    return Math.max(...compareHeroes.map(h => h.stats[stat]));
  };

  return (
    <div className={styles.compareContainer}>
      <div className={styles.compareHeader}>
        <h3 className={styles.compareTitle}>英雄对比 ({compareHeroes.length})</h3>
        <button className={styles.clearBtn} onClick={onClear}>清空对比</button>
      </div>

      <div className={styles.compareTable}>
        <div className={styles.compareRow}>
          <div className={styles.compareLabel}></div>
          {compareHeroes.map(hero => (
            <div key={hero.id} className={styles.compareHeroHeader}>
              <button
                className={styles.removeBtn}
                onClick={() => onRemove(hero.id)}
                title="移除对比"
              >
                ×
              </button>
              <img
                className={styles.compareAvatar}
                src={hero.avatarUrl || heroAvatar(hero.name, hero.cost)}
                alt={hero.name}
              />
              <div className={styles.compareName}>{hero.name}</div>
              <div className={styles.compareCost}>{'⭐'.repeat(hero.cost)}</div>
              <div className={styles.compareRole}>{hero.role}</div>
            </div>
          ))}
        </div>

        {statKeys.map(stat => {
          const bestValue = getBestValue(stat);
          return (
            <div key={stat} className={styles.compareRow}>
              <div className={styles.compareLabel}>{getStatLabel(stat)}</div>
              {compareHeroes.map(hero => (
                <div
                  key={hero.id}
                  className={`${styles.compareValue} ${
                    hero.stats[stat] === bestValue ? styles.bestValue : ''
                  }`}
                >
                  {hero.stats[stat]}
                </div>
              ))}
            </div>
          );
        })}

        <div className={styles.compareRow}>
          <div className={styles.compareLabel}>花费</div>
          {compareHeroes.map(hero => (
            <div key={hero.id} className={styles.compareValue}>
              {hero.cost}
            </div>
          ))}
        </div>

        <div className={styles.compareRow}>
          <div className={styles.compareLabel}>技能数量</div>
          {compareHeroes.map(hero => (
            <div key={hero.id} className={styles.compareValue}>
              {hero.skills.length}
            </div>
          ))}
        </div>

        <div className={styles.compareRow}>
          <div className={styles.compareLabel}>羁绊</div>
          {compareHeroes.map(hero => (
            <div key={hero.id} className={styles.compareSynergies}>
              {hero.synergies.join(', ')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
