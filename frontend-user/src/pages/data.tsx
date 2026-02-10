import { useMemo } from 'react';
import { MOCK_LINEUPS, VERSIONS } from '../data/mockData';
import { heroAvatar, equipAvatar } from '../utils/avatar';
import type { Hero, Equipment, Synergy } from '../types';
import styles from './data.module.css';

interface RankEntry<T> {
  item: T;
  count: number;
}

function countBy<T extends { id: string }>(items: T[]): RankEntry<T>[] {
  const map = new Map<string, { item: T; count: number }>();
  items.forEach((item) => {
    const existing = map.get(item.id);
    if (existing) existing.count++;
    else map.set(item.id, { item, count: 1 });
  });
  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}

export default function DataPage() {
  const lineups = MOCK_LINEUPS;

  const heroRank = useMemo(() => {
    const all: Hero[] = [];
    lineups.forEach((l) => l.allHeroes.forEach((h) => all.push(h)));
    return countBy(all).slice(0, 10);
  }, [lineups]);

  const equipRank = useMemo(() => {
    const all: Equipment[] = [];
    lineups.forEach((l) =>
      l.coreHeroes.forEach((ch) => ch.equipment.forEach((e) => all.push(e)))
    );
    return countBy(all).slice(0, 10);
  }, [lineups]);

  const synergyRank = useMemo(() => {
    const all: Synergy[] = [];
    lineups.forEach((l) => l.synergies.forEach((s) => all.push(s)));
    return countBy(all).slice(0, 8);
  }, [lineups]);

  const ratingDist = useMemo(() => {
    const dist: Record<string, number> = { SS: 0, S: 0, A: 0, B: 0 };
    lineups.forEach((l) => { dist[l.rating] = (dist[l.rating] || 0) + 1; });
    return dist;
  }, [lineups]);


  const versionDist = useMemo(() => {
    const dist: Record<string, number> = {};
    VERSIONS.forEach((v) => { dist[v] = 0; });
    lineups.forEach((l) => { dist[l.version] = (dist[l.version] || 0) + 1; });
    return dist;
  }, [lineups]);

  const uniqueHeroes = useMemo(() => {
    const set = new Set<string>();
    lineups.forEach((l) => l.allHeroes.forEach((h) => set.add(h.id)));
    return set.size;
  }, [lineups]);

  const uniqueEquip = useMemo(() => {
    const set = new Set<string>();
    lineups.forEach((l) => l.coreHeroes.forEach((ch) => ch.equipment.forEach((e) => set.add(e.id))));
    return set.size;
  }, [lineups]);

  const uniqueSyn = useMemo(() => {
    const set = new Set<string>();
    lineups.forEach((l) => l.synergies.forEach((s) => set.add(s.id)));
    return set.size;
  }, [lineups]);

  const rankClass = (i: number) =>
    i === 0 ? styles.rankTop1 : i === 1 ? styles.rankTop2 : i === 2 ? styles.rankTop3 : '';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📊 数据中心</h1>

      {/* Overview */}
      <div className={styles.overview}>
        <div className={styles.statCard}>
          <span className={styles.statIcon}>⚔️</span>
          <span className={styles.statValue}>{lineups.length}</span>
          <span className={styles.statLabel}>阵容总数</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statIcon}>🦸</span>
          <span className={styles.statValue}>{uniqueHeroes}</span>
          <span className={styles.statLabel}>英雄数量</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statIcon}>🛡️</span>
          <span className={styles.statValue}>{uniqueEquip}</span>
          <span className={styles.statLabel}>装备种类</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statIcon}>🔗</span>
          <span className={styles.statValue}>{uniqueSyn}</span>
          <span className={styles.statLabel}>羁绊种类</span>
        </div>
      </div>

      {/* Rating distribution */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>阵容评级分布</h2>
        <div className={styles.ratingGrid}>
          {(['SS', 'S', 'A', 'B'] as const).map((r) => (
            <div key={r} className={styles.ratingItem}>
              <span className={`${styles.ratingBadge} ${styles[`rating${r}`]}`}>{r}</span>
              <span className={styles.ratingCount}>{ratingDist[r]}</span>
              <span className={styles.ratingLabel}>个阵容</span>
            </div>
          ))}
        </div>
      </div>

      {/* Version distribution */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>赛季阵容分布</h2>
        <div className={styles.versionGrid}>
          {VERSIONS.map((v) => (
            <div key={v} className={styles.versionItem}>
              <span className={styles.versionName}>{v}</span>
              <span className={styles.versionCount}>{versionDist[v]}</span>
              <span className={styles.versionLabel}>个阵容</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero pick rate */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>英雄登场率排行</h2>
        <div className={styles.rankList}>
          {heroRank.map((entry, i) => (
            <div key={entry.item.id} className={styles.rankRow}>
              <span className={`${styles.rankIndex} ${rankClass(i)}`}>{i + 1}</span>
              <img className={styles.rankAvatar} src={entry.item.avatarUrl || heroAvatar(entry.item.name, entry.item.cost)} alt={entry.item.name} />
              <span className={styles.rankName}>{entry.item.name}</span>
              <div className={styles.rankBarWrap}>
                <div
                  className={`${styles.rankBar} ${styles.rankBarHero}`}
                  style={{ width: `${(entry.count / lineups.length) * 100}%` }}
                />
              </div>
              <span className={styles.rankValue}>{entry.count}/{lineups.length} 场</span>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment usage */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>装备使用率排行</h2>
        <div className={styles.rankList}>
          {equipRank.map((entry, i) => (
            <div key={entry.item.id} className={styles.rankRow}>
              <span className={`${styles.rankIndex} ${rankClass(i)}`}>{i + 1}</span>
              <img className={styles.rankAvatar} src={entry.item.iconUrl || equipAvatar(entry.item.name)} alt={entry.item.name} />
              <span className={styles.rankName}>{entry.item.name}</span>
              <div className={styles.rankBarWrap}>
                <div
                  className={`${styles.rankBar} ${styles.rankBarEquip}`}
                  style={{ width: `${(entry.count / equipRank[0].count) * 100}%` }}
                />
              </div>
              <span className={styles.rankValue}>{entry.count} 次</span>
            </div>
          ))}
        </div>
      </div>

      {/* Synergy popularity */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>羁绊热度排行</h2>
        <div className={styles.rankList}>
          {synergyRank.map((entry, i) => (
            <div key={entry.item.id} className={styles.rankRow}>
              <span className={`${styles.rankIndex} ${rankClass(i)}`}>{i + 1}</span>
              <span className={styles.rankName}>{entry.item.name}</span>
              <div className={styles.rankBarWrap}>
                <div
                  className={`${styles.rankBar} ${styles.rankBarSynergy}`}
                  style={{ width: `${(entry.count / synergyRank[0].count) * 100}%` }}
                />
              </div>
              <span className={styles.rankValue}>{entry.count} 次</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
