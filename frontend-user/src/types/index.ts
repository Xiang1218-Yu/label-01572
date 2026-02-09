export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Synergy {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  count: number;
}

export interface Equipment {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
}

export interface Hero {
  id: string;
  name: string;
  description: string;
  avatarUrl: string;
  cost: number;
}

export interface CoreHero {
  hero: Hero;
  equipment: Equipment[];
}

export type Rating = 'SS' | 'S' | 'A' | 'B';

export interface Lineup {
  id: string;
  title: string;
  author: Author;
  rating: Rating;
  difficulty: string;
  category: string;
  version: string;
  synergies: Synergy[];
  coreHeroes: CoreHero[];
  allHeroes: Hero[];
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface FilterCriteria {
  category: string;
  rating: string;
  keyword: string;
  version?: string;
}
