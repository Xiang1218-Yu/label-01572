import type { Lineup, FilterCriteria } from '../types';

export function filterLineups(lineups: Lineup[], criteria: FilterCriteria): Lineup[] {
  return lineups.filter((lineup) => {
    if (criteria.version) {
      if (lineup.version !== criteria.version) return false;
    }

    if (criteria.category && criteria.category !== 'all') {
      if (lineup.category !== criteria.category) return false;
    }

    if (criteria.rating) {
      if (lineup.rating !== criteria.rating) return false;
    }

    if (criteria.keyword) {
      const kw = criteria.keyword.toLowerCase();
      const titleMatch = lineup.title.toLowerCase().includes(kw);
      const heroMatch = lineup.allHeroes.some((h) => h.name.toLowerCase().includes(kw));
      if (!titleMatch && !heroMatch) return false;
    }

    return true;
  });
}
