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

export interface Skill {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  cooldown: number;
  cost: number;
}

export interface HeroAttribute {
  health: number;
  attack: number;
  armor: number;
  magicResist: number;
  attackSpeed: number;
  range: number;
  mana: number;
}

export interface Hero {
  id: string;
  name: string;
  description: string;
  avatarUrl: string;
  cost: number;
  attributes: HeroAttribute;
  skills: Skill[];
  recommendedEquipments: Equipment[];
  position: string;
  damageType: '物理' | '魔法' | '真实';
  difficulty: 1 | 2 | 3;
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
