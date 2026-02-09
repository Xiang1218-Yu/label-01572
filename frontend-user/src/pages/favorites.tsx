import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_LINEUPS } from '../data/mockData';
import { loadUser } from '../components/UserPanel';
import LineupList from '../components/LineupList';
import styles from './placeholder.module.css';

export default function FavoritesPage() {
  const navigate = useNavigate();
  const user = loadUser();

  const lineups = useMemo(
    () => MOCK_LINEUPS.filter((l) => user.favorites.includes(l.id)),
    [user.favorites]
  );

  if (lineups.length === 0) {
    return (
      <div className={styles.container}>
        <span className={styles.icon}>⭐</span>
        <h1 className={styles.title}>我的收藏</h1>
        <p className={styles.desc}>还没有收藏任何阵容，去阵容详情页点击收藏吧。</p>
      </div>
    );
  }

  return (
    <LineupList lineups={lineups} loading={false} onCardClick={(id) => navigate(`/lineup/${id}`)} />
  );
}
