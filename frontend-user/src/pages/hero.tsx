import { useState } from 'react';
import { ALL_HEROES } from '../data/mockData';
import type { Hero } from '../types';
import { heroAvatar } from '../utils/avatar';
import HeroDetail from '../components/HeroDetail';
import HeroComparison from '../components/HeroComparison';
import styles from './hero.module.css';

export default function HeroPage() {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [compareList, setCompareList] = useState<Hero[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const heroes = [...ALL_HEROES].sort((a, b) => b.cost - a.cost);

  const handleHeroClick = (hero: Hero) => {
    setSelectedHero(hero);
  };

  const handleAddToCompare = (hero: Hero) => {
    setCompareList((prev) => {
      const isInList = prev.some((h) => h.id === hero.id);
      if (isInList) {
        return prev.filter((h) => h.id !== hero.id);
      }
      if (prev.length >= 4) {
        return prev;
      }
      return [...prev, hero];
    });
  };

  const handleRemoveFromCompare = (heroId: string) => {
    setCompareList((prev) => prev.filter((h) => h.id !== heroId));
  };

  const isInCompare = (heroId: string) => {
    return compareList.some((h) => h.id === heroId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>英雄图鉴</h1>
        {compareList.length > 0 && (
          <button
            className={styles.compareButton}
            onClick={() => setShowComparison(true)}
          >
            对比英雄 ({compareList.length}/4)
          </button>
        )}
      </div>

      <div className={styles.grid}>
        {heroes.map((h) => (
          <div
            key={h.id}
            className={`${styles.card} ${isInCompare(h.id) ? styles.selectedCard : ''}`}
            onClick={() => handleHeroClick(h)}
          >
            {isInCompare(h.id) && (
              <div className={styles.selectedBadge}>已选</div>
            )}
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
            <button
              className={styles.addCompareBtn}
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCompare(h);
              }}
            >
              {isInCompare(h.id) ? '✓ 已选' : '+ 对比'}
            </button>
          </div>
        ))}
      </div>

      {selectedHero && (
        <HeroDetail
          hero={selectedHero}
          onClose={() => setSelectedHero(null)}
          onAddToCompare={handleAddToCompare}
          isInCompare={isInCompare(selectedHero.id)}
        />
      )}

      {showComparison && (
        <HeroComparison
          heroes={compareList}
          onRemoveHero={handleRemoveFromCompare}
          onClose={() => setShowComparison(false)}
        />
      )}
    </div>
  );
}
