import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_LINEUPS } from '../data/mockData';
import { loadUser } from '../components/UserPanel';
import LineupList from '../components/LineupList';
import styles from './placeholder.module.css';

export default function HistoryPage() {
  const navigate = useNavigate();
  const user = loadUser();

  const lineups = useMemo(
    () => user.history
      .map((id) => MOCK_LINEUPS.find((l) => l.id === id))
      .filter((l): l is NonNullable<typeof l> => !!l),
    [user.history]
  );

  if (lineups.length === 0) {
    return (
      <div className={styles.container}>
        <span className={styles.icon}>🕐</span>
        <h1 className={styles.title}>浏览历史</h1>
        <p className={styles.desc}>还没有浏览过任何阵容详情。</p>
      </div>
    );
  }

  return (
    <LineupList lineups={lineups} loading={false} onCardClick={(id) => navigate(`/lineup/${id}`)} />
  );
}
