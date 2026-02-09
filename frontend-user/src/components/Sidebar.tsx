import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../data/mockData';
import QRCode from './QRCode';
import styles from './Sidebar.module.css';

const NAV_ROUTES: Record<string, string> = {
  lineup: '/',
  data: '/data',
  hero: '/hero',
  equipment: '/equipment',
  synergy: '/synergy',

};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveNav = () => {
    const entry = Object.entries(NAV_ROUTES).find(([, path]) => {
      if (path === '/') return location.pathname === '/' || location.pathname.startsWith('/lineup');
      return location.pathname.startsWith(path);
    });
    return entry?.[0] ?? 'lineup';
  };

  const activeNav = getActiveNav();

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.logo} aria-label="游戏助手">G</div>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeNav === item.id ? styles.navItemActive : ''}`}
              onClick={() => {
                navigate(NAV_ROUTES[item.id] ?? '/');
                onClose();
              }}
              aria-label={item.label}
              aria-current={activeNav === item.id ? 'page' : undefined}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className={styles.qrSection}>
          <QRCode text={`${window.location.origin}/download`} size={48} />
          <span className={styles.qrLabel}>下载App</span>
        </div>
      </aside>
    </>
  );
}
