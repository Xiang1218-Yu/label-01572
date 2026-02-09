import { useState, useMemo } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import FilterModule from '../components/FilterModule';
import LineupList from '../components/LineupList';
import { MOCK_LINEUPS } from '../data/mockData';
import { filterLineups } from '../data/filterLineups';

export default function LineupPage() {
  const navigate = useNavigate();
  const { currentVersion } = useOutletContext<{ currentVersion: string }>();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeRating, setActiveRating] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredLineups = useMemo(
    () =>
      filterLineups(MOCK_LINEUPS, {
        category: activeCategory,
        rating: activeRating,
        keyword: searchKeyword,
        version: currentVersion,
      }),
    [activeCategory, activeRating, searchKeyword, currentVersion]
  );

  const handleCardClick = (lineupId: string) => {
    navigate(`/lineup/${lineupId}`);
  };

  return (
    <>
      <FilterModule
        activeCategory={activeCategory}
        activeRating={activeRating}
        searchKeyword={searchKeyword}
        onCategoryChange={setActiveCategory}
        onRatingChange={setActiveRating}
        onSearchChange={setSearchKeyword}
      />
      <LineupList
        lineups={filteredLineups}
        loading={false}
        onCardClick={handleCardClick}
      />
    </>
  );
}
