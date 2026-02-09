import type { Lineup } from '../types';
import { synergyAvatar, authorAvatar } from '../utils/avatar';
import Tooltip from './Tooltip';
import styles from './LineupCard.module.css';

interface LineupCardProps {
  lineup: Lineup;
  onClick: (lineupId: string) => void;
}

function getRatingClass(rating: string): string {
  switch (rating) {
    case 'SS': return styles.ratingSS;
    case 'S': return styles.ratingS;
    case 'A': return styles.ratingA;
    case 'B': return styles.ratingB;
    default: return styles.ratingB;
  }
}

export default function LineupCard({ lineup, onClick }: LineupCardProps) {
  return (
    <article
      className={styles.card}
      onClick={() => onClick(lineup.id)}
      role="button"
      tabIndex={0}
      aria-label={`阵容: ${lineup.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(lineup.id); }}
    >
      {/* 左侧：评级 */}
      <div className={`${styles.ratingBadge} ${getRatingClass(lineup.rating)}`}>
        {lineup.rating}
      </div>

      {/* 中间：信息主体 */}
      <div className={styles.info}>
        {/* 第一行：标题 + 难度 + 作者 */}
        <div className={styles.topRow}>
          <div className={styles.titleGroup}>
            <span className={styles.title}>{lineup.title}</span>
            <span className={styles.difficulty}>{lineup.difficulty}</span>
          </div>
          <div className={styles.author}>
            <img
              className={styles.authorAvatar}
              src={authorAvatar(lineup.author.name)}
              alt={lineup.author.name}
            />
            <span className={styles.authorName}>{lineup.author.name}</span>
          </div>
        </div>

        {/* 第二行：羁绊图标 */}
        <div className={styles.synergyRow}>
          <span className={styles.label}>羁绊</span>
          <div className={styles.synergies}>
            {lineup.synergies.map((syn) => (
              <Tooltip key={syn.id} content={{ name: syn.name, description: syn.description }}>
                <span className={styles.synergyChip}>
                  <img src={synergyAvatar(syn.name)} alt={syn.name} className={styles.synergyImg} />
                  <span className={styles.synergyName}>{syn.name}</span>
                  <span className={styles.synergyCount}>{syn.count}</span>
                </span>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* 第三行：核心英雄与装备 | 分割线 | 完整阵容 */}
        <div className={styles.heroRow}>
          <div className={styles.coreSection}>
            <span className={styles.label}>核心</span>
            <div className={styles.coreHeroes}>
              {lineup.coreHeroes.map((ch) => (
                <div key={ch.hero.id} className={styles.coreHero}>
                  <Tooltip content={{ name: ch.hero.name, description: ch.hero.description }}>
                    <img
                      className={styles.heroAvatarCore}
                      src={ch.hero.avatarUrl}
                      alt={ch.hero.name}
                    />
                  </Tooltip>
                  <div className={styles.equipRow}>
                    {ch.equipment.map((eq) => (
                      <Tooltip key={eq.id} content={{ name: eq.name, description: eq.description }}>
                        <img
                          className={styles.equipIcon}
                          src={eq.iconUrl}
                          alt={eq.name}
                        />
                      </Tooltip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.allSection}>
            <span className={styles.label}>阵容</span>
            <div className={styles.allHeroes}>
              {lineup.allHeroes.map((hero) => (
                <Tooltip key={hero.id} content={{ name: hero.name, description: hero.description }}>
                  <img
                    className={styles.heroAvatarSmall}
                    src={hero.avatarUrl}
                    alt={hero.name}
                  />
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 右侧：箭头 */}
      <span className={styles.arrow} aria-hidden="true">›</span>
    </article>
  );
}
