import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import { VERSIONS } from '../data/mockData';
import logger from '../utils/logger';
import styles from './Layout.module.css';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentVersion, setCurrentVersion] = useState(VERSIONS[0]);
  const location = useLocation();

  useEffect(() => {
    logger.info('Page navigation', { path: location.pathname });
  }, [location.pathname]);

  const handleVersionChange = (version: string) => {
    logger.info('Version changed', { from: currentVersion, to: version });
    setCurrentVersion(version);
  };

  return (
    <div className={styles.layout}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className={styles.main}>
        <TopBar
          currentVersion={currentVersion}
          versions={VERSIONS}
          onVersionChange={handleVersionChange}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <ErrorBoundary>
          <Outlet context={{ currentVersion }} />
        </ErrorBoundary>
        <Footer />
      </main>
    </div>
  );
}
