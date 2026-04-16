import { describe, it, expect, vi } from 'vitest';
import * as fc from 'fast-check';
import { render, fireEvent, cleanup, within } from '@testing-library/react';
import LineupList from '../LineupList';
import LineupCard from '../LineupCard';
import type { Lineup } from '../../types';

const ratingArb = fc.constantFrom('SS' as const, 'S' as const, 'A' as const, 'B' as const);

const equipArb = fc.record({
  id: fc.uuid(),
  name: fc.string({ minLength: 1, maxLength: 10 }),
  description: fc.string({ maxLength: 20 }),
  iconUrl: fc.constant(''),
});

const synergyArb = fc.record({
  id: fc.uuid(),
  name: fc.stringMatching(/^[a-zA-Z\u4e00-\u9fa5]{1,4}$/),
  description: fc.string({ maxLength: 20 }),
  iconUrl: fc.constant(''),
  count: fc.integer({ min: 2, max: 6 }),
});

const heroStatsArb = fc.record({
  health: fc.integer({ min: 500, max: 2500 }),
  attackDamage: fc.integer({ min: 20, max: 100 }),
  abilityPower: fc.integer({ min: 0, max: 150 }),
  armor: fc.integer({ min: 10, max: 100 }),
  magicResist: fc.integer({ min: 10, max: 100 }),
  attackSpeed: fc.integer({ min: 50, max: 150 }),
  range: fc.integer({ min: 1, max: 5 }),
  mana: fc.integer({ min: 50, max: 200 }),
});

const heroSkillArb = fc.record({
  id: fc.uuid(),
  name: fc.string({ minLength: 1, maxLength: 10 }),
  description: fc.string({ maxLength: 30 }),
  damage: fc.integer({ min: 50, max: 500 }),
  cooldown: fc.integer({ min: 5, max: 30 }),
  cost: fc.integer({ min: 10, max: 100 }),
  iconUrl: fc.constant(''),
});

const heroArb = fc.record({
  id: fc.uuid(),
  name: fc.stringMatching(/^[a-zA-Z\u4e00-\u9fa5]{1,6}$/),
  description: fc.string({ maxLength: 20 }),
  avatarUrl: fc.constant(''),
  cost: fc.integer({ min: 1, max: 5 }),
  stats: heroStatsArb,
  skills: fc.array(heroSkillArb, { minLength: 1, maxLength: 4 }),
  bestEquipment: fc.array(equipArb, { minLength: 1, maxLength: 3 }),
  synergies: fc.array(synergyArb, { minLength: 0, maxLength: 3 }),
});

const coreHeroArb = fc.record({
  hero: heroArb,
  equipment: fc.array(equipArb, { minLength: 1, maxLength: 3 }),
});

const lineupArb: fc.Arbitrary<Lineup> = fc.record({
  id: fc.uuid(),
  title: fc.stringMatching(/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/),
  author: fc.record({
    name: fc.stringMatching(/^[a-zA-Z\u4e00-\u9fa5]{1,6}$/),
    avatarUrl: fc.constant(''),
  }),
  rating: ratingArb,
  difficulty: fc.constantFrom('新手推荐', '进阶', '高手向'),
  category: fc.constantFrom('hot', 'new', 'fun', 'stable'),
  version: fc.constantFrom('S14', 'S13.5', 'S13', 'S12.5'),
  synergies: fc.array(synergyArb, { minLength: 0, maxLength: 3 }),
  coreHeroes: fc.array(coreHeroArb, { minLength: 1, maxLength: 3 }),
  allHeroes: fc.array(heroArb, { minLength: 1, maxLength: 8 }),
});

describe('LineupList & LineupCard - Property Tests', () => {
  // Feature: lineup-recommendation-page, Property 5: 列表渲染完整性
  it('Property 5: LineupList renders exactly as many cards as lineups provided', () => {
    fc.assert(
      fc.property(fc.array(lineupArb, { minLength: 0, maxLength: 10 }), (lineups) => {
        cleanup();
        const { container } = render(<LineupList lineups={lineups} loading={false} onCardClick={vi.fn()} />);
        const cards = container.querySelectorAll('[role="button"]');
        expect(cards.length).toBe(lineups.length);
      }),
      { numRuns: 100 }
    );
  });

  // Feature: lineup-recommendation-page, Property 6: 卡片信息完整性
  it('Property 6: LineupCard renders title, author name, rating, and difficulty', () => {
    fc.assert(
      fc.property(lineupArb, (lineup) => {
        cleanup();
        const onClick = vi.fn();
        const { container } = render(<LineupCard lineup={lineup} onClick={onClick} />);
        const html = container.innerHTML;

        expect(html).toContain(lineup.title);
        expect(html).toContain(lineup.author.name);
        expect(html).toContain(lineup.rating);
        expect(html).toContain(lineup.difficulty);
      }),
      { numRuns: 100 }
    );
  });

  // Feature: lineup-recommendation-page, Property 7: 卡片点击导航正确性
  it('Property 7: clicking LineupCard calls onClick with the correct lineup id', () => {
    fc.assert(
      fc.property(lineupArb, (lineup) => {
        cleanup();
        const onClick = vi.fn();
        const { container } = render(<LineupCard lineup={lineup} onClick={onClick} />);
        const scope = within(container);

        const card = scope.getByRole('button', { name: `阵容: ${lineup.title}` });
        fireEvent.click(card);

        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onClick).toHaveBeenCalledWith(lineup.id);
      }),
      { numRuns: 100 }
    );
  });
});
