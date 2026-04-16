import type { Lineup, NavItem, Hero } from '../types';

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

const equipments = {
  ie: { id: 'e1', name: '无尽之刃', description: '大幅提升暴击伤害', iconUrl: '/img/item/3031.png' },
  bt: { id: 'e2', name: '饮血剑', description: '提供攻击力和生命偷取', iconUrl: '/img/item/3072.png' },
  ga: { id: 'e3', name: '守护天使', description: '死亡后复活一次', iconUrl: '/img/item/3026.png' },
  rfc: { id: 'e4', name: '急速火炮', description: '增加攻击距离', iconUrl: '/img/item/3094.png' },
  hoj: { id: 'e5', name: '正义之手', description: '提供攻击力和治疗效果', iconUrl: '/img/item/3124.png' },
  dcap: { id: 'e6', name: '帽子', description: '大幅提升法术强度', iconUrl: '/img/item/3089.png' },
  warmog: { id: 'e7', name: '狂徒铠甲', description: '大量生命值和回复', iconUrl: '/img/item/3083.png' },
  bramble: { id: 'e8', name: '棘刺背心', description: '反弹伤害并减少治疗', iconUrl: '/img/item/3076.png' },
  shiv: { id: 'e9', name: '电刀', description: '攻击时释放闪电链', iconUrl: '/img/item/3087.png' },
  gs: { id: 'e10', name: '巨人杀手', description: '对高生命值目标额外伤害', iconUrl: '/img/item/3036.png' },
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

const heroes: Record<string, Hero> = {
  jinx: {
    id: 'h1',
    name: '金克丝',
    description: '疯狂的爆破专家，擅长远程输出',
    avatarUrl: '/img/champion/Jinx.png',
    cost: 5,
    stats: { health: 800, attackDamage: 70, abilityPower: 0, armor: 25, magicResist: 20, attackSpeed: 0.85, range: 4, mana: 80 },
    skills: [{ id: 'sk1', name: '超究极死神飞弹', description: '发射一枚巨型飞弹，对目标区域造成大范围伤害', damage: 400, cooldown: 15, cost: 80, iconUrl: '' }],
    bestEquipment: [equipments.ie, equipments.rfc, equipments.hoj],
    synergies: [synergies.marksman, synergies.enforcer]
  },
  vi: {
    id: 'h2',
    name: '蔚',
    description: '皮城执法官，近战坦克战士',
    avatarUrl: '/img/champion/Vi.png',
    cost: 4,
    stats: { health: 1200, attackDamage: 55, abilityPower: 0, armor: 45, magicResist: 30, attackSpeed: 0.65, range: 1, mana: 70 },
    skills: [{ id: 'sk2', name: '天霸横空烈轰', description: '冲向目标，造成物理伤害并击飞敌人', damage: 300, cooldown: 12, cost: 70, iconUrl: '' }],
    bestEquipment: [equipments.warmog, equipments.bramble, equipments.ga],
    synergies: [synergies.enforcer, synergies.brawler]
  },
  caitlyn: {
    id: 'h3',
    name: '凯特琳',
    description: '皮城女警，精准射手',
    avatarUrl: '/img/champion/Caitlyn.png',
    cost: 4,
    stats: { health: 700, attackDamage: 65, abilityPower: 0, armor: 20, magicResist: 20, attackSpeed: 0.75, range: 5, mana: 75 },
    skills: [{ id: 'sk3', name: '让子弹飞', description: '精准瞄准，对最远的敌人造成高额伤害', damage: 500, cooldown: 15, cost: 75, iconUrl: '' }],
    bestEquipment: [equipments.ie, equipments.rfc, equipments.gs],
    synergies: [synergies.marksman, synergies.enforcer]
  },
  jayce: {
    id: 'h4',
    name: '杰斯',
    description: '未来守护者，远近双形态',
    avatarUrl: '/img/champion/Jayce.png',
    cost: 5,
    stats: { health: 950, attackDamage: 60, abilityPower: 40, armor: 35, magicResist: 30, attackSpeed: 0.70, range: 3, mana: 80 },
    skills: [{ id: 'sk4', name: '墨丘利之锤/炮', description: '切换形态并释放强力技能', damage: 350, cooldown: 10, cost: 80, iconUrl: '' }],
    bestEquipment: [equipments.gs, equipments.hoj, equipments.ga],
    synergies: [synergies.enforcer, synergies.mage]
  },
  ekko: {
    id: 'h5',
    name: '艾克',
    description: '时间刺客，灵活突进',
    avatarUrl: '/img/champion/Ekko.png',
    cost: 3,
    stats: { health: 650, attackDamage: 50, abilityPower: 60, armor: 20, magicResist: 25, attackSpeed: 0.80, range: 2, mana: 60 },
    skills: [{ id: 'sk5', name: '时空断裂', description: '回到过去，恢复生命值并造成伤害', damage: 250, cooldown: 8, cost: 60, iconUrl: '' }],
    bestEquipment: [equipments.shiv, equipments.hoj, equipments.ga],
    synergies: [synergies.assassin, synergies.shadow]
  },
  yasuo: {
    id: 'h6',
    name: '亚索',
    description: '疾风剑豪，暴击战士',
    avatarUrl: '/img/champion/Yasuo.png',
    cost: 5,
    stats: { health: 900, attackDamage: 75, abilityPower: 0, armor: 30, magicResist: 25, attackSpeed: 0.90, range: 1, mana: 80 },
    skills: [{ id: 'sk6', name: '狂风绝息斩', description: '闪烁到敌人身边，造成多段伤害', damage: 450, cooldown: 15, cost: 80, iconUrl: '' }],
    bestEquipment: [equipments.ie, equipments.bt, equipments.gs],
    synergies: [synergies.duelist, synergies.assassin]
  },
  zed: {
    id: 'h7',
    name: '劫',
    description: '影流之主，高爆发刺客',
    avatarUrl: '/img/champion/Zed.png',
    cost: 4,
    stats: { health: 600, attackDamage: 80, abilityPower: 0, armor: 20, magicResist: 20, attackSpeed: 0.85, range: 1, mana: 70 },
    skills: [{ id: 'sk7', name: '禁奥义！瞬狱影杀阵', description: '释放影分身，对目标造成致命伤害', damage: 600, cooldown: 12, cost: 70, iconUrl: '' }],
    bestEquipment: [equipments.ie, equipments.bt, equipments.ga],
    synergies: [synergies.assassin, synergies.shadow]
  },
  ahri: {
    id: 'h8',
    name: '阿狸',
    description: '九尾妖狐，魔法输出',
    avatarUrl: '/img/champion/Ahri.png',
    cost: 4,
    stats: { health: 750, attackDamage: 30, abilityPower: 80, armor: 20, magicResist: 35, attackSpeed: 0.70, range: 3, mana: 75 },
    skills: [{ id: 'sk8', name: '灵魂突袭', description: '释放多枚法球，对敌人造成魔法伤害', damage: 400, cooldown: 12, cost: 75, iconUrl: '' }],
    bestEquipment: [equipments.dcap, equipments.shiv, equipments.hoj],
    synergies: [synergies.mage, synergies.guardian]
  },
  lux: {
    id: 'h9',
    name: '拉克丝',
    description: '光辉女郎，控制法师',
    avatarUrl: '/img/champion/Lux.png',
    cost: 3,
    stats: { health: 550, attackDamage: 25, abilityPower: 70, armor: 15, magicResist: 30, attackSpeed: 0.65, range: 4, mana: 60 },
    skills: [{ id: 'sk9', name: '终极闪光', description: '发射一束光波，对直线上的敌人造成伤害', damage: 350, cooldown: 10, cost: 60, iconUrl: '' }],
    bestEquipment: [equipments.dcap, equipments.ga, equipments.shiv],
    synergies: [synergies.mage, synergies.guardian]
  },
  garen: {
    id: 'h10',
    name: '盖伦',
    description: '德玛西亚之力，前排坦克',
    avatarUrl: '/img/champion/Garen.png',
    cost: 1,
    stats: { health: 1000, attackDamage: 35, abilityPower: 0, armor: 40, magicResist: 25, attackSpeed: 0.55, range: 1, mana: 50 },
    skills: [{ id: 'sk10', name: '德玛西亚正义', description: '对敌人造成真实伤害，伤害基于目标已损失生命值', damage: 200, cooldown: 8, cost: 50, iconUrl: '' }],
    bestEquipment: [equipments.warmog, equipments.bramble, equipments.ga],
    synergies: [synergies.brawler, synergies.guardian]
  },
  darius: {
    id: 'h11',
    name: '德莱厄斯',
    description: '诺克萨斯之手，战场统治者',
    avatarUrl: '/img/champion/Darius.png',
    cost: 3,
    stats: { health: 900, attackDamage: 55, abilityPower: 0, armor: 35, magicResist: 25, attackSpeed: 0.60, range: 1, mana: 70 },
    skills: [{ id: 'sk11', name: '诺克萨斯断头台', description: '对目标造成致命伤害，击杀后可立即再次施放', damage: 400, cooldown: 10, cost: 70, iconUrl: '' }],
    bestEquipment: [equipments.bt, equipments.warmog, equipments.ga],
    synergies: [synergies.brawler, synergies.duelist]
  },
  kaisa: {
    id: 'h12',
    name: '卡莎',
    description: '虚空之女，自适应射手',
    avatarUrl: '/img/champion/Kaisa.png',
    cost: 4,
    stats: { health: 650, attackDamage: 60, abilityPower: 50, armor: 20, magicResist: 20, attackSpeed: 0.90, range: 4, mana: 75 },
    skills: [{ id: 'sk12', name: '虚空索敌', description: '发射多枚导弹，对敌人造成伤害', damage: 380, cooldown: 12, cost: 75, iconUrl: '' }],
    bestEquipment: [equipments.gs, equipments.rfc, equipments.hoj],
    synergies: [synergies.marksman, synergies.brawler]
  },
  thresh: {
    id: 'h13',
    name: '锤石',
    description: '魂锁典狱长，控制辅助',
    avatarUrl: '/img/champion/Thresh.png',
    cost: 2,
    stats: { health: 800, attackDamage: 30, abilityPower: 40, armor: 30, magicResist: 30, attackSpeed: 0.60, range: 2, mana: 60 },
    skills: [{ id: 'sk13', name: '幽冥监牢', description: '创建一个监牢，禁锢并伤害进入的敌人', damage: 200, cooldown: 10, cost: 60, iconUrl: '' }],
    bestEquipment: [equipments.warmog, equipments.bramble],
    synergies: [synergies.guardian, synergies.shadow]
  },
  leona: {
    id: 'h14',
    name: '蕾欧娜',
    description: '曙光女神，坚韧前排',
    avatarUrl: '/img/champion/Leona.png',
    cost: 1,
    stats: { health: 1100, attackDamage: 25, abilityPower: 30, armor: 50, magicResist: 40, attackSpeed: 0.50, range: 1, mana: 50 },
    skills: [{ id: 'sk14', name: '日炎耀斑', description: '召唤太阳光束，造成伤害并眩晕敌人', damage: 150, cooldown: 8, cost: 50, iconUrl: '' }],
    bestEquipment: [equipments.warmog, equipments.bramble],
    synergies: [synergies.guardian, synergies.brawler]
  },
  morgana: {
    id: 'h15',
    name: '莫甘娜',
    description: '堕落天使，控制法师',
    avatarUrl: '/img/champion/Morgana.png',
    cost: 3,
    stats: { health: 700, attackDamage: 25, abilityPower: 65, armor: 20, magicResist: 40, attackSpeed: 0.60, range: 3, mana: 65 },
    skills: [{ id: 'sk15', name: '灵魂镣铐', description: '释放锁链，对敌人造成伤害并眩晕', damage: 280, cooldown: 10, cost: 65, iconUrl: '' }],
    bestEquipment: [equipments.dcap, equipments.ga],
    synergies: [synergies.mage, synergies.shadow]
  },
  senna: {
    id: 'h16',
    name: '赛娜',
    description: '暗影哨兵，远程辅助',
    avatarUrl: '/img/champion/Senna.png',
    cost: 2,
    stats: { health: 600, attackDamage: 45, abilityPower: 35, armor: 15, magicResist: 20, attackSpeed: 0.70, range: 5, mana: 60 },
    skills: [{ id: 'sk16', name: '黑暗洞灭', description: '释放一道光束，造成伤害并治疗友军', damage: 220, cooldown: 8, cost: 60, iconUrl: '' }],
    bestEquipment: [equipments.rfc, equipments.hoj],
    synergies: [synergies.marksman, synergies.shadow]
  },
  aphelios: {
    id: 'h17',
    name: '厄斐琉斯',
    description: '残月之肃，多武器射手',
    avatarUrl: '/img/champion/Aphelios.png',
    cost: 4,
    stats: { health: 650, attackDamage: 65, abilityPower: 0, armor: 18, magicResist: 20, attackSpeed: 0.85, range: 4, mana: 80 },
    skills: [{ id: 'sk17', name: '武器切换', description: '切换武器并释放对应的强力技能', damage: 420, cooldown: 12, cost: 80, iconUrl: '' }],
    bestEquipment: [equipments.ie, equipments.rfc, equipments.bt],
    synergies: [synergies.marksman, synergies.shadow]
  },
  sett: {
    id: 'h18',
    name: '瑟提',
    description: '腕豪，近战格斗家',
    avatarUrl: '/img/champion/Sett.png',
    cost: 3,
    stats: { health: 1000, attackDamage: 50, abilityPower: 0, armor: 40, magicResist: 30, attackSpeed: 0.60, range: 1, mana: 70 },
    skills: [{ id: 'sk18', name: '叹为观止', description: '将一名敌人砸向地面，造成范围伤害', damage: 350, cooldown: 10, cost: 70, iconUrl: '' }],
    bestEquipment: [equipments.warmog, equipments.bramble, equipments.ga],
    synergies: [synergies.brawler, synergies.guardian]
  },
  irelia: {
    id: 'h19',
    name: '艾瑞莉娅',
    description: '刀锋舞者，灵活战士',
    avatarUrl: '/img/champion/Irelia.png',
    cost: 4,
    stats: { health: 750, attackDamage: 55, abilityPower: 0, armor: 25, magicResist: 25, attackSpeed: 0.80, range: 1, mana: 70 },
    skills: [{ id: 'sk19', name: '先锋之刃', description: '发射利刃，造成伤害并标记敌人', damage: 320, cooldown: 10, cost: 70, iconUrl: '' }],
    bestEquipment: [equipments.ga, equipments.warmog, equipments.bt],
    synergies: [synergies.duelist, synergies.assassin]
  },
  talon: {
    id: 'h20',
    name: '泰隆',
    description: '刀锋之影，高机动刺客',
    avatarUrl: '/img/champion/Talon.png',
    cost: 3,
    stats: { health: 550, attackDamage: 65, abilityPower: 0, armor: 15, magicResist: 20, attackSpeed: 0.85, range: 1, mana: 60 },
    skills: [{ id: 'sk20', name: '暗影突袭', description: '隐身并突袭目标，造成高额伤害', damage: 380, cooldown: 8, cost: 60, iconUrl: '' }],
    bestEquipment: [equipments.ie, equipments.bt, equipments.ga],
    synergies: [synergies.assassin, synergies.shadow]
  },
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
