import { useState, useEffect } from 'react';
import UserPanel from './UserPanel';
import { loadUser } from './UserPanel';
import styles from './TopBar.module.css';

interface TopBarProps {
  currentVersion: string;
  versions: string[];
  onVersionChange: (version: string) => void;
  onMenuToggle: () => void;
}

export default function TopBar({ currentVersion, versions, onVersionChange, onMenuToggle }: TopBarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userPanelOpen, setUserPanelOpen] = useState(false);
  const [nickname, setNickname] = useState(() => loadUser().nickname);

  useEffect(() => {
    if (!userPanelOpen) {
      setNickname(loadUser().nickname);
    }
  }, [userPanelOpen]);

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <button className={styles.menuBtn} onClick={onMenuToggle} aria-label="打开菜单">
          ☰
        </button>
        <span className={styles.brand}>GameHelper</span>
        <div className={styles.versionSelect}>
          <button
            className={styles.versionBtn}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="listbox"
          >
            {currentVersion}
            <span className={`${styles.arrow} ${dropdownOpen ? styles.arrowOpen : ''}`}>▼</span>
          </button>
          {dropdownOpen && (
            <div className={styles.dropdown} role="listbox">
              {versions.map((v) => (
                <button
                  key={v}
                  className={`${styles.dropdownItem} ${v === currentVersion ? styles.dropdownItemActive : ''}`}
                  role="option"
                  aria-selected={v === currentVersion}
                  onClick={() => {
                    onVersionChange(v);
                    setDropdownOpen(false);
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.right}>
        <button
          className={styles.userBtn}
          aria-label="用户中心"
          onClick={() => setUserPanelOpen(!userPanelOpen)}
        >
          <span className={styles.avatar}>{nickname[0]}</span>
          <span>{nickname}</span>
        </button>
        {userPanelOpen && <UserPanel onClose={() => setUserPanelOpen(false)} />}
      </div>
    </header>
  );
}
