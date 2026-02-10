import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_LINEUPS } from '../data/mockData';
import { heroAvatar, equipAvatar, synergyAvatar, authorAvatar } from '../utils/avatar';
import { loadUser, saveUser } from '../components/UserPanel';
import Tooltip from '../components/Tooltip';
import { logger } from '../utils/logger';
import styles from './detail.module.css';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lineup = MOCK_LINEUPS.find((l) => l.id === id);

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (!id) return;
    const user = loadUser();
    setIsFav(user.favorites.includes(id));
    if (!user.history.includes(id)) {
      logger.info('History recorded', { lineupId: id });
      user.history = [id, ...user.history].slice(0, 50);
      saveUser(user);
    }
  }, [id]);

  const toggleFav = () => {
    if (!id) return;
    const user = loadUser();
    if (user.favorites.includes(id)) {
      user.favorites = user.favorites.filter((f) => f !== id);
      logger.info('Favorite removed', { lineupId: id });
    } else {
      user.favorites = [id, ...user.favorites];
      logger.info('Favorite added', { lineupId: id });
    }
    saveUser(user);
    setIsFav(user.favorites.includes(id));
  };

  if (!lineup) {
    return (
      <div className={styles.notFound}>
        <span className={styles.notFoundIcon}>🔍</span>
        <h2>阵容未找到</h2>
        <p>该阵容不存在或已被移除</p>
        <button className={styles.backBtn} onClick={() => navigate('/')}>返回推荐列表</button>
      </div>
    );
  }

  const ratingClass = styles[`rating${lineup.rating}`] ?? '';

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate('/')}>← 返回列表</button>
        <button className={styles.favBtn} onClick={toggleFav} aria-label={isFav ? '取消收藏' : '收藏'}>
          {isFav ? '⭐ 已收藏' : '☆ 收藏'}
        </button>
      </header>

      <section className={styles.hero}>
        <div className={styles.titleRow}>
          <span className={`${styles.ratingBadge} ${ratingClass}`}>{lineup.rating}</span>
          <h1 className={styles.title}>{lineup.title}</h1>
          <span className={styles.difficulty}>{lineup.difficulty}</span>
        </div>
        <div className={styles.authorRow}>
          <img src={authorAvatar(lineup.author.name)} alt={lineup.author.name} className={styles.authorImg} />
          <span className={styles.authorName}>{lineup.author.name}</span>
        </div>
      </section>

      <div className={styles.twoCol}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>羁绊</h2>
          <div className={styles.synergyList}>
            {lineup.synergies.map((syn) => (
              <div key={syn.id} className={styles.synergyItem}>
                <img src={synergyAvatar(syn.name)} alt={syn.name} className={styles.synergyImg} />
                <div>
                  <span className={styles.synergyName}>{syn.name}</span>
                  <span className={styles.synergyCount}>×{syn.count}</span>
                </div>
                <span className={styles.synergyDesc}>{syn.description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>核心英雄 & 装备</h2>
          <div className={styles.coreList}>
            {lineup.coreHeroes.map((ch) => (
              <div key={ch.hero.id} className={styles.coreCard}>
                <img src={ch.hero.avatarUrl || heroAvatar(ch.hero.name, ch.hero.cost)} alt={ch.hero.name} className={styles.coreImg} />
                <div className={styles.coreInfo}>
                  <span className={styles.coreName}>{ch.hero.name}</span>
                  <span className={styles.coreCost}>{ch.hero.cost}费</span>
                  <p className={styles.coreDesc}>{ch.hero.description}</p>
                </div>
                <div className={styles.equipList}>
                  {ch.equipment.map((eq) => (
                    <Tooltip key={eq.id} content={{ name: eq.name, description: eq.description }}>
                      <img src={eq.iconUrl || equipAvatar(eq.name)} alt={eq.name} className={styles.equipImg} />
                    </Tooltip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>完整阵容</h2>
        <div className={styles.allHeroes}>
          {lineup.allHeroes.map((h) => (
            <Tooltip key={h.id} content={{ name: h.name, description: h.description }}>
              <div className={styles.heroTile}>
                <img src={h.avatarUrl || heroAvatar(h.name, h.cost)} alt={h.name} className={styles.heroTileImg} />
                <span className={styles.heroTileName}>{h.name}</span>
                <span className={styles.heroTileCost}>{h.cost}费</span>
              </div>
            </Tooltip>
          ))}
        </div>
      </section>
    </div>
  );
}
