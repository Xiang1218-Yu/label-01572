import type { Lineup } from '../types';
import LineupCard from './LineupCard';
import styles from './LineupList.module.css';

interface LineupListProps {
  lineups: Lineup[];
  loading: boolean;
  onCardClick: (lineupId: string) => void;
}

export default function LineupList({ lineups, loading, onCardClick }: LineupListProps) {
  if (loading) {
    return (
      <div className={styles.loading} role="status" aria-label="加载中">
        <div className={styles.spinner} />
      </div>
    );
  }

  if (lineups.length === 0) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon}>📭</span>
        <span className={styles.emptyText}>暂无匹配阵容</span>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {lineups.map((lineup) => (
        <LineupCard
          key={lineup.id}
          lineup={lineup}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}
