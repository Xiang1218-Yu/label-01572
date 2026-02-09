import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logger from '../utils/logger';
import styles from './UserPanel.module.css';

const STORAGE_KEY = 'gamehelper_user';

interface UserData {
  nickname: string;
  favorites: string[];
  history: string[];
}

function loadUser(): UserData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    logger.error('Failed to load user data', e);
  }
  return { nickname: '召唤师', favorites: [], history: [] };
}

function saveUser(data: UserData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    logger.error('Failed to save user data', e);
  }
}

interface UserPanelProps {
  onClose: () => void;
}

export default function UserPanel({ onClose }: UserPanelProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState(loadUser);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(user.nickname);
  const [resetDone, setResetDone] = useState(false);

  useEffect(() => {
    saveUser(user);
  }, [user]);

  const handleSave = () => {
    const trimmed = draft.trim();
    if (trimmed) {
      logger.info('Nickname updated', { from: user.nickname, to: trimmed });
      setUser((prev) => ({ ...prev, nickname: trimmed }));
    }
    setEditing(false);
  };

  const handleReset = () => {
    logger.info('User data reset');
    const fresh = { nickname: '召唤师', favorites: [], history: [] };
    saveUser(fresh);
    setUser(fresh);
    setEditing(false);
    setResetDone(true);
    setTimeout(() => onClose(), 1200);
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.panel} role="dialog" aria-label="用户中心">
        <div className={styles.header}>
          <div className={styles.avatarLarge}>{user.nickname[0]}</div>
          <div className={styles.userInfo}>
            <span className={styles.nickname}>{user.nickname}</span>
            <span className={styles.uid}>UID: 10086</span>
          </div>
          <button
            className={styles.editBtn}
            onClick={() => { setEditing(!editing); setDraft(user.nickname); }}
          >
            {editing ? '取消' : '编辑'}
          </button>
        </div>

        {editing && (
          <div className={styles.nicknameForm}>
            <input
              className={styles.nicknameInput}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="输入昵称"
              maxLength={12}
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            />
            <button className={styles.saveBtn} onClick={handleSave}>保存</button>
          </div>
        )}

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{user.favorites.length}</span>
            <span className={styles.statLabel}>收藏</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{user.history.length}</span>
            <span className={styles.statLabel}>浏览</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>0</span>
            <span className={styles.statLabel}>评论</span>
          </div>
        </div>

        <div className={styles.menu}>
          <button className={styles.menuItem} onClick={() => { navigate('/favorites'); onClose(); }}>
            <span className={styles.menuIcon}>⭐</span>我的收藏
          </button>
          <button className={styles.menuItem} onClick={() => { navigate('/history'); onClose(); }}>
            <span className={styles.menuIcon}>🕐</span>浏览历史
          </button>
          <div className={styles.menuDivider} />
          <button className={styles.menuItem} onClick={handleReset} disabled={resetDone}>
            <span className={styles.menuIcon}>{resetDone ? '✅' : '🔄'}</span>
            {resetDone ? '已重置' : '重置数据'}
          </button>
        </div>
      </div>
    </>
  );
}

export { loadUser, saveUser, STORAGE_KEY };
export type { UserData };
