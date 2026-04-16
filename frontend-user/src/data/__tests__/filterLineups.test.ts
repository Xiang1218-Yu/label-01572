import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { filterLineups } from '../filterLineups';
import type { Lineup } from '../../types';

const ratingArb = fc.constantFrom('SS' as const, 'S' as const, 'A' as const, 'B' as const);
const categoryArb = fc.constantFrom('hot', 'new', 'fun', 'stable');

const heroArb = fc.record({
  id: fc.uuid(),
  name: fc.string({ minLength: 1, maxLength: 10 }),
  description: fc.string({ maxLength: 30 }),
  avatarUrl: fc.constant(''),
  cost: fc.integer({ min: 1, max: 5 }),
  role: fc.constantFrom('射手', '法师', '战士', '坦克', '刺客', '辅助'),
  stats: fc.record({
    health: fc.integer({ min: 500, max: 1000 }),
    attack: fc.integer({ min: 30, max: 100 }),
    defense: fc.integer({ min: 10, max: 50 }),
    attackSpeed: fc.double({ min: 0.5, max: 1.5 }),
    magicResist: fc.integer({ min: 10, max: 50 }),
    moveSpeed: fc.integer({ min: 300, max: 350 }),
  }),
  skills: fc.array(
    fc.record({
      id: fc.uuid(),
      name: fc.string({ minLength: 1, maxLength: 10 }),
      description: fc.string({ maxLength: 30 }),
      damage: fc.integer({ min: 50, max: 300 }),
      cooldown: fc.integer({ min: 0, max: 20 }),
      manaCost: fc.integer({ min: 0, max: 100 }),
    }),
    { minLength: 1, maxLength: 4 }
  ),
  recommendedEquipments: fc.array(fc.string(), { minLength: 0, maxLength: 3 }),
  synergies: fc.array(fc.string(), { minLength: 0, maxLength: 3 }),
});

const versionArb = fc.constantFrom('S14', 'S13.5', 'S13', 'S12.5');

const lineupArb: fc.Arbitrary<Lineup> = fc.record({
  id: fc.uuid(),
  title: fc.string({ minLength: 1, maxLength: 30 }),
  author: fc.record({ name: fc.string({ minLength: 1, maxLength: 10 }), avatarUrl: fc.constant('') }),
  rating: ratingArb,
  difficulty: fc.constantFrom('新手推荐', '进阶', '高手向'),
  category: categoryArb,
  version: versionArb,
  synergies: fc.constant([]),
  coreHeroes: fc.constant([]),
  allHeroes: fc.array(heroArb, { minLength: 1, maxLength: 8 }),
});

const lineupsArb = fc.array(lineupArb, { minLength: 0, maxLength: 20 });

describe('filterLineups - Property Tests', () => {
  // Feature: lineup-recommendation-page, Property 1: 分类筛选正确性
  it('Property 1: filtered by category should only contain lineups of that category', () => {
    fc.assert(
      fc.property(lineupsArb, categoryArb, (lineups, category) => {
        const result = filterLineups(lineups, { category, rating: '', keyword: '', version: '' });
        result.forEach((l) => {
          expect(l.category).toBe(category);
        });
      }),
      { numRuns: 100 }
    );
  });

  // Feature: lineup-recommendation-page, Property 2: 评级筛选正确性
  it('Property 2: filtered by rating should only contain lineups of that rating', () => {
    fc.assert(
      fc.property(lineupsArb, ratingArb, (lineups, rating) => {
        const result = filterLineups(lineups, { category: 'all', rating, keyword: '', version: '' });
        result.forEach((l) => {
          expect(l.rating).toBe(rating);
        });
      }),
      { numRuns: 100 }
    );
  });

  // Feature: lineup-recommendation-page, Property 3: 关键词搜索正确性
  it('Property 3: filtered by keyword should match title or hero name (case-insensitive)', () => {
    fc.assert(
      fc.property(lineupsArb, fc.string({ minLength: 1, maxLength: 5 }), (lineups, keyword) => {
        const result = filterLineups(lineups, { category: 'all', rating: '', keyword, version: '' });
        const kw = keyword.toLowerCase();
        result.forEach((l) => {
          const titleMatch = l.title.toLowerCase().includes(kw);
          const heroMatch = l.allHeroes.some((h) => h.name.toLowerCase().includes(kw));
          expect(titleMatch || heroMatch).toBe(true);
        });
      }),
      { numRuns: 100 }
    );
  });

  // Feature: lineup-recommendation-page, Property 4: 多条件筛选交集性
  it('Property 4: combined filter equals intersection of individual filters', () => {
    fc.assert(
      fc.property(lineupsArb, categoryArb, ratingArb, (lineups, category, rating) => {
        const combined = filterLineups(lineups, { category, rating, keyword: '', version: '' });
        const byCategory = filterLineups(lineups, { category, rating: '', keyword: '', version: '' });
        const byRating = filterLineups(lineups, { category: 'all', rating, keyword: '', version: '' });

        const intersectionIds = byCategory
          .filter((l) => byRating.some((r) => r.id === l.id))
          .map((l) => l.id);
        const combinedIds = combined.map((l) => l.id);

        expect(combinedIds).toEqual(intersectionIds);
      }),
      { numRuns: 100 }
    );
  });
});
