import { useState } from 'react';
import { ALL_HEROES, ALL_EQUIPMENTS } from '../data/mockData';
import { heroAvatar } from '../utils/avatar';
import HeroDetailModal from '../components/HeroDetailModal';
import HeroCompare from '../components/HeroCompare';
import Tooltip from '../components/Tooltip';
import type { Hero } from '../types';
import styles from './hero.module.css';

export default function HeroPage() {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [compareHeroes, setCompareHeroes] = useState<Hero[]>([]);
  const [showGuide, setShowGuide] = useState(true);
  const heroes = [...ALL_HEROES].sort((a, b) => b.cost - a.cost);

  const handleHeroClick = (hero: Hero) => {
    setSelectedHero(hero);
  };

  const handleAddToCompare = (hero: Hero, e: React.MouseEvent) => {
    e.stopPropagation();
    if (compareHeroes.find(h => h.id === hero.id)) {
      setCompareHeroes(compareHeroes.filter(h => h.id !== hero.id));
    } else if (compareHeroes.length < 4) {
      setCompareHeroes([...compareHeroes, hero]);
    }
  };

  const handleRemoveFromCompare = (heroId: string) => {
    setCompareHeroes(compareHeroes.filter(h => h.id !== heroId));
  };

  const handleClearCompare = () => {
    setCompareHeroes([]);
  };

  const isInCompare = (heroId: string) => {
    return compareHeroes.some(h => h.id === heroId);
  };

  const isCompareDisabled = (heroId: string) => {
    return compareHeroes.length >= 4 && !isInCompare(heroId);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>英雄图鉴</h1>
      
      {showGuide && (
        <div className={styles.guideCard}>
          <div className={styles.guideContent}>
            <span className={styles.guideIcon}>💡</span>
            <span className={styles.guideText}>
              点击英雄卡片右上角的 <strong>+</strong> 按钮添加英雄到对比，最多可对比4个英雄。
              点击英雄卡片可查看详细信息。
            </span>
          </div>
          <button className={styles.guideClose} onClick={() => setShowGuide(false)}>
            ✕
          </button>
        </div>
      )}
      
      {compareHeroes.length > 0 && (
        <HeroCompare
          compareHeroes={compareHeroes}
          onRemove={handleRemoveFromCompare}
          onClear={handleClearCompare}
        />
      )}

      <div className={styles.grid}>
        {heroes.map((h) => (
          <div
            key={h.id}
            className={`${styles.card} ${isInCompare(h.id) ? styles.selectedCard : ''}`}
            onClick={() => handleHeroClick(h)}
          >
            <Tooltip 
              content={
                isInCompare(h.id) 
                  ? '点击移除对比' 
                  : isCompareDisabled(h.id) 
                    ? '最多只能对比4个英雄' 
                    : '点击添加对比'
              } 
              position="top"
            >
              <button
                className={`${styles.compareBtn} ${isInCompare(h.id) ? styles.compareBtnActive : ''} ${isCompareDisabled(h.id) ? styles.compareBtnDisabled : ''}`}
                onClick={(e) => handleAddToCompare(h, e)}
                disabled={isCompareDisabled(h.id)}
              >
                {isInCompare(h.id) ? '✓' : '+'}
              </button>
            </Tooltip>
            <img
              className={styles.avatar}
              src={h.avatarUrl || heroAvatar(h.name, h.cost)}
              alt={h.name}
              loading="lazy"
            />
            <div className={styles.info}>
              <span className={styles.name}>{h.name}</span>
              <span className={styles.cost}>{'⭐'.repeat(h.cost)}</span>
            </div>
            <p className={styles.desc}>{h.description}</p>
            <div className={styles.statsPreview}>
              <span className={styles.stat}>❤️ {h.stats.health}</span>
              <span className={styles.stat}>⚔️ {h.stats.attack}</span>
              <span className={styles.stat}>🛡️ {h.stats.defense}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedHero && (
        <HeroDetailModal
          hero={selectedHero}
          equipments={ALL_EQUIPMENTS}
          onClose={() => setSelectedHero(null)}
        />
      )}
    </div>
  );
}
