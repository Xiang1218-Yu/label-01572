import type { Lineup, NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'lineup', label: '阵容', icon: '⚔️' },
  { id: 'data', label: '数据', icon: '📊' },
  { id: 'hero', label: '英雄', icon: '🦸' },
  { id: 'equipment', label: '装备', icon: '🛡️' },
  { id: 'synergy', label: '羁绊', icon: '🔗' },
];

export const VERSIONS = ['S14', 'S13.5', 'S13', 'S12.5'];

export const CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'hot', label: '国服最卷' },
  { id: 'new', label: '最新' },
  { id: 'fun', label: '娱乐' },
  { id: 'stable', label: '稳定上分' },
];

export const RATINGS = ['SS', 'S', 'A', 'B'];

const heroes = {
  jinx: { id: 'h1', name: '金克丝', description: '疯狂的爆破专家，擅长远程输出', avatarUrl: '', cost: 5 },
  vi: { id: 'h2', name: '蔚', description: '皮城执法官，近战坦克战士', avatarUrl: '', cost: 4 },
  caitlyn: { id: 'h3', name: '凯特琳', description: '皮城女警，精准射手', avatarUrl: '', cost: 4 },
  jayce: { id: 'h4', name: '杰斯', description: '未来守护者，远近双形态', avatarUrl: '', cost: 5 },
  ekko: { id: 'h5', name: '艾克', description: '时间刺客，灵活突进', avatarUrl: '', cost: 3 },
  yasuo: { id: 'h6', name: '亚索', description: '疾风剑豪，暴击战士', avatarUrl: '', cost: 5 },
  zed: { id: 'h7', name: '劫', description: '影流之主，高爆发刺客', avatarUrl: '', cost: 4 },
  ahri: { id: 'h8', name: '阿狸', description: '九尾妖狐，魔法输出', avatarUrl: '', cost: 4 },
  lux: { id: 'h9', name: '拉克丝', description: '光辉女郎，控制法师', avatarUrl: '', cost: 3 },
  garen: { id: 'h10', name: '盖伦', description: '德玛西亚之力，前排坦克', avatarUrl: '', cost: 1 },
  darius: { id: 'h11', name: '德莱厄斯', description: '诺克萨斯之手，战场统治者', avatarUrl: '', cost: 3 },
  kaisa: { id: 'h12', name: '卡莎', description: '虚空之女，自适应射手', avatarUrl: '', cost: 4 },
  thresh: { id: 'h13', name: '锤石', description: '魂锁典狱长，控制辅助', avatarUrl: '', cost: 2 },
  leona: { id: 'h14', name: '蕾欧娜', description: '曙光女神，坚韧前排', avatarUrl: '', cost: 1 },
  morgana: { id: 'h15', name: '莫甘娜', description: '堕落天使，控制法师', avatarUrl: '', cost: 3 },
  senna: { id: 'h16', name: '赛娜', description: '暗影哨兵，远程辅助', avatarUrl: '', cost: 2 },
  aphelios: { id: 'h17', name: '厄斐琉斯', description: '残月之肃，多武器射手', avatarUrl: '', cost: 4 },
  sett: { id: 'h18', name: '瑟提', description: '腕豪，近战格斗家', avatarUrl: '', cost: 3 },
  irelia: { id: 'h19', name: '艾瑞莉娅', description: '刀锋舞者，灵活战士', avatarUrl: '', cost: 4 },
  talon: { id: 'h20', name: '泰隆', description: '刀锋之影，高机动刺客', avatarUrl: '', cost: 3 },
};

const equipments = {
  ie: { id: 'e1', name: '无尽之刃', description: '大幅提升暴击伤害', iconUrl: '' },
  bt: { id: 'e2', name: '饮血剑', description: '提供攻击力和生命偷取', iconUrl: '' },
  ga: { id: 'e3', name: '守护天使', description: '死亡后复活一次', iconUrl: '' },
  rfc: { id: 'e4', name: '急速火炮', description: '增加攻击距离', iconUrl: '' },
  hoj: { id: 'e5', name: '正义之手', description: '提供攻击力和治疗效果', iconUrl: '' },
  dcap: { id: 'e6', name: '帽子', description: '大幅提升法术强度', iconUrl: '' },
  warmog: { id: 'e7', name: '狂徒铠甲', description: '大量生命值和回复', iconUrl: '' },
  bramble: { id: 'e8', name: '棘刺背心', description: '反弹伤害并减少治疗', iconUrl: '' },
  shiv: { id: 'e9', name: '电刀', description: '攻击时释放闪电链', iconUrl: '' },
  gs: { id: 'e10', name: '巨人杀手', description: '对高生命值目标额外伤害', iconUrl: '' },
};

const synergies = {
  marksman: { id: 's1', name: '神射手', description: '神射手每次攻击获得额外攻速', iconUrl: '', count: 4 },
  enforcer: { id: 's2', name: '执法官', description: '执法官拘捕敌方最强单位', iconUrl: '', count: 2 },
  assassin: { id: 's3', name: '刺客', description: '刺客跳跃至敌方后排并获得暴击', iconUrl: '', count: 4 },
  mage: { id: 's4', name: '法师', description: '法师施放双重技能', iconUrl: '', count: 3 },
  guardian: { id: 's5', name: '守护者', description: '守护者为相邻友军提供护盾', iconUrl: '', count: 2 },
  brawler: { id: 's6', name: '斗士', description: '斗士获得额外生命值', iconUrl: '', count: 4 },
  duelist: { id: 's7', name: '决斗家', description: '决斗家攻击时获得攻速加成', iconUrl: '', count: 3 },
  shadow: { id: 's8', name: '影流', description: '影流成员获得额外全能吸血', iconUrl: '', count: 3 },
};


export const MOCK_LINEUPS: Lineup[] = [
  {
    id: 'l1',
    title: '皮城神射 · 金克丝主C',
    author: { name: '战术大师', avatarUrl: '' },
    rating: 'SS',
    difficulty: '新手推荐',
    category: 'hot',
    version: 'S14',
    synergies: [synergies.marksman, synergies.enforcer],
    coreHeroes: [
      { hero: heroes.jinx, equipment: [equipments.ie, equipments.rfc, equipments.hoj] },
      { hero: heroes.vi, equipment: [equipments.warmog, equipments.bramble, equipments.ga] },
    ],
    allHeroes: [heroes.jinx, heroes.vi, heroes.caitlyn, heroes.jayce, heroes.leona, heroes.thresh, heroes.senna, heroes.garen],
  },
  {
    id: 'l2',
    title: '影流刺客 · 劫一刀流',
    author: { name: '暗影猎手', avatarUrl: '' },
    rating: 'SS',
    difficulty: '进阶',
    category: 'hot',
    version: 'S14',
    synergies: [synergies.assassin, synergies.shadow],
    coreHeroes: [
      { hero: heroes.zed, equipment: [equipments.ie, equipments.bt, equipments.ga] },
      { hero: heroes.ekko, equipment: [equipments.shiv, equipments.hoj] },
    ],
    allHeroes: [heroes.zed, heroes.ekko, heroes.talon, heroes.irelia, heroes.sett, heroes.thresh, heroes.garen, heroes.darius],
  },
  {
    id: 'l3',
    title: '法师天团 · 阿狸核心',
    author: { name: '魔法学院', avatarUrl: '' },
    rating: 'S',
    difficulty: '新手推荐',
    category: 'new',
    version: 'S14',
    synergies: [synergies.mage, synergies.guardian],
    coreHeroes: [
      { hero: heroes.ahri, equipment: [equipments.dcap, equipments.shiv, equipments.hoj] },
      { hero: heroes.lux, equipment: [equipments.dcap, equipments.ga] },
    ],
    allHeroes: [heroes.ahri, heroes.lux, heroes.morgana, heroes.leona, heroes.thresh, heroes.garen, heroes.senna],
  },
  {
    id: 'l4',
    title: '疾风剑豪 · 亚索快攻',
    author: { name: '风之旅人', avatarUrl: '' },
    rating: 'S',
    difficulty: '高手向',
    category: 'fun',
    version: 'S13.5',
    synergies: [synergies.duelist, synergies.assassin],
    coreHeroes: [
      { hero: heroes.yasuo, equipment: [equipments.ie, equipments.bt, equipments.gs] },
      { hero: heroes.irelia, equipment: [equipments.ga, equipments.warmog] },
    ],
    allHeroes: [heroes.yasuo, heroes.irelia, heroes.ekko, heroes.talon, heroes.sett, heroes.leona, heroes.garen],
  },
  {
    id: 'l5',
    title: '虚空猎手 · 卡莎超载',
    author: { name: '虚空先知', avatarUrl: '' },
    rating: 'S',
    difficulty: '进阶',
    category: 'stable',
    version: 'S14',
    synergies: [synergies.marksman, synergies.brawler],
    coreHeroes: [
      { hero: heroes.kaisa, equipment: [equipments.gs, equipments.rfc, equipments.hoj] },
      { hero: heroes.sett, equipment: [equipments.warmog, equipments.bramble, equipments.ga] },
    ],
    allHeroes: [heroes.kaisa, heroes.sett, heroes.vi, heroes.darius, heroes.garen, heroes.leona, heroes.thresh, heroes.senna],
  },
  {
    id: 'l6',
    title: '斗士前排 · 瑟提格斗',
    author: { name: '格斗之王', avatarUrl: '' },
    rating: 'A',
    difficulty: '新手推荐',
    category: 'stable',
    version: 'S13.5',
    synergies: [synergies.brawler, synergies.guardian],
    coreHeroes: [
      { hero: heroes.sett, equipment: [equipments.warmog, equipments.bramble, equipments.ga] },
      { hero: heroes.darius, equipment: [equipments.bt, equipments.warmog] },
    ],
    allHeroes: [heroes.sett, heroes.darius, heroes.vi, heroes.garen, heroes.leona, heroes.thresh, heroes.morgana],
  },
  {
    id: 'l7',
    title: '残月射手 · 厄斐琉斯',
    author: { name: '月光猎人', avatarUrl: '' },
    rating: 'A',
    difficulty: '高手向',
    category: 'new',
    version: 'S13',
    synergies: [synergies.marksman, synergies.shadow],
    coreHeroes: [
      { hero: heroes.aphelios, equipment: [equipments.ie, equipments.rfc, equipments.bt] },
      { hero: heroes.thresh, equipment: [equipments.warmog, equipments.bramble] },
    ],
    allHeroes: [heroes.aphelios, heroes.thresh, heroes.senna, heroes.zed, heroes.ekko, heroes.leona, heroes.garen],
  },
  {
    id: 'l8',
    title: '未来战士 · 杰斯双形态',
    author: { name: '科技先锋', avatarUrl: '' },
    rating: 'B',
    difficulty: '进阶',
    category: 'fun',
    version: 'S12.5',
    synergies: [synergies.enforcer, synergies.mage],
    coreHeroes: [
      { hero: heroes.jayce, equipment: [equipments.gs, equipments.hoj, equipments.ga] },
      { hero: heroes.caitlyn, equipment: [equipments.ie, equipments.rfc] },
    ],
    allHeroes: [heroes.jayce, heroes.caitlyn, heroes.vi, heroes.lux, heroes.morgana, heroes.garen, heroes.leona],
  },
];

// 导出英雄、装备、羁绊数据供其他页面使用
export const ALL_HEROES = Object.values(heroes);
export const ALL_EQUIPMENTS = Object.values(equipments);
export const ALL_SYNERGIES = Object.values(synergies);
