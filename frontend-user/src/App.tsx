import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import LineupPage from './pages/index';
import DetailPage from './pages/detail';
import DataPage from './pages/data';
import HeroPage from './pages/hero';
import EquipmentPage from './pages/equipment';
import SynergyPage from './pages/synergy';
import FavoritesPage from './pages/favorites';
import HistoryPage from './pages/history';
import DownloadPage from './pages/download';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LineupPage />} />
            <Route path="/lineup/:id" element={<DetailPage />} />
            <Route path="/data" element={<DataPage />} />
            <Route path="/hero" element={<HeroPage />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/synergy" element={<SynergyPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/download" element={<DownloadPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
