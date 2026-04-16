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
  jinx: { 
    id: 'h1', 
    name: '金克丝', 
    description: '疯狂的爆破专家，擅长远程输出', 
    avatarUrl: '/img/champion/Jinx.png', 
    cost: 5,
    role: '射手',
    stats: { health: 700, attack: 75, defense: 25, attackSpeed: 0.85, magicResist: 20, moveSpeed: 330 },
    skills: [
      { id: 'jinx-q', name: '枪炮交响曲', description: '切换武器形态，提升攻击距离和攻速', damage: 150, cooldown: 0, manaCost: 0 },
      { id: 'jinx-w', name: '振荡电磁波', description: '发射震荡波，造成伤害并减速', damage: 200, cooldown: 10, manaCost: 50 },
      { id: 'jinx-e', name: '嚼火者手雷', description: '投掷手雷，造成伤害并禁锢', damage: 180, cooldown: 20, manaCost: 70 },
      { id: 'jinx-r', name: '超究极死神飞弹', description: '发射全球导弹，造成巨额伤害', damage: 500, cooldown: 90, manaCost: 100 }
    ],
    recommendedEquipments: ['e1', 'e4', 'e5'],
    synergies: ['神射手', '皮城']
  },
  vi: { 
    id: 'h2', 
    name: '蔚', 
    description: '皮城执法官，近战坦克战士', 
    avatarUrl: '/img/champion/Vi.png', 
    cost: 4,
    role: '战士',
    stats: { health: 900, attack: 65, defense: 45, attackSpeed: 0.7, magicResist: 35, moveSpeed: 340 },
    skills: [
      { id: 'vi-q', name: '爆裂护盾', description: '获得护盾并增加攻击力', damage: 100, cooldown: 12, manaCost: 40 },
      { id: 'vi-w', name: '爆弹重拳', description: '三次攻击造成额外伤害', damage: 180, cooldown: 0, manaCost: 0 },
      { id: 'vi-e', name: '透体之劲', description: '冲刺并造成范围伤害', damage: 220, cooldown: 14, manaCost: 60 },
      { id: 'vi-r', name: '天霸横空烈轰', description: '锁定目标并击飞周围敌人', damage: 400, cooldown: 100, manaCost: 100 }
    ],
    recommendedEquipments: ['e7', 'e8', 'e3'],
    synergies: ['执法官', '斗士']
  },
  caitlyn: { 
    id: 'h3', 
    name: '凯特琳', 
    description: '皮城女警，精准射手', 
    avatarUrl: '/img/champion/Caitlyn.png', 
    cost: 4,
    role: '射手',
    stats: { health: 650, attack: 80, defense: 20, attackSpeed: 0.75, magicResist: 25, moveSpeed: 325 },
    skills: [
      { id: 'cait-q', name: '和平使者', description: '发射穿透子弹', damage: 200, cooldown: 8, manaCost: 50 },
      { id: 'cait-w', name: '约德尔诱捕器', description: '放置陷阱，禁锢敌人', damage: 150, cooldown: 16, manaCost: 30 },
      { id: 'cait-e', name: '90口径绳网', description: '后跳并减速敌人', damage: 180, cooldown: 18, manaCost: 75 },
      { id: 'cait-r', name: '让子弹飞', description: '超远距离狙击', damage: 550, cooldown: 90, manaCost: 100 }
    ],
    recommendedEquipments: ['e1', 'e4', 'e10'],
    synergies: ['神射手', '皮城']
  },
  jayce: { 
    id: 'h4', 
    name: '杰斯', 
    description: '未来守护者，远近双形态', 
    avatarUrl: '/img/champion/Jayce.png', 
    cost: 5,
    role: '战士',
    stats: { health: 850, attack: 70, defense: 40, attackSpeed: 0.75, magicResist: 30, moveSpeed: 335 },
    skills: [
      { id: 'jayce-r', name: '墨丘利之炮/锤', description: '切换形态，改变技能效果', damage: 0, cooldown: 6, manaCost: 0 },
      { id: 'jayce-q1', name: '电能震荡', description: '发射能量球', damage: 250, cooldown: 8, manaCost: 55 },
      { id: 'jayce-w1', name: '加速之门', description: '增加攻速和移速', damage: 0, cooldown: 10, manaCost: 40 },
      { id: 'jayce-e1', name: '闪电领域', description: '造成范围魔法伤害', damage: 200, cooldown: 12, manaCost: 60 }
    ],
    recommendedEquipments: ['e10', 'e5', 'e3'],
    synergies: ['执法官', '未来战士']
  },
  ekko: { 
    id: 'h5', 
    name: '艾克', 
    description: '时间刺客，灵活突进', 
    avatarUrl: '/img/champion/Ekko.png', 
    cost: 3,
    role: '刺客',
    stats: { health: 600, attack: 60, defense: 25, attackSpeed: 0.9, magicResist: 25, moveSpeed: 345 },
    skills: [
      { id: 'ekko-q', name: '时间卷曲器', description: '发射时间弹，造成伤害', damage: 180, cooldown: 6, manaCost: 45 },
      { id: 'ekko-w', name: '时光交错', description: '创造减速区域', damage: 150, cooldown: 14, manaCost: 60 },
      { id: 'ekko-e', name: '相位俯冲', description: '闪现到目标位置', damage: 120, cooldown: 10, manaCost: 50 },
      { id: 'ekko-r', name: '时空断裂', description: '回到过去并恢复生命', damage: 350, cooldown: 110, manaCost: 100 }
    ],
    recommendedEquipments: ['e9', 'e5', 'e2'],
    synergies: ['刺客', '时间']
  },
  yasuo: { 
    id: 'h6', 
    name: '亚索', 
    description: '疾风剑豪，暴击战士', 
    avatarUrl: '/img/champion/Yasuo.png', 
    cost: 5,
    role: '战士',
    stats: { health: 750, attack: 75, defense: 30, attackSpeed: 0.95, magicResist: 28, moveSpeed: 340 },
    skills: [
      { id: 'yasuo-q', name: '斩钢闪', description: '向前出剑，造成伤害', damage: 160, cooldown: 4, manaCost: 0 },
      { id: 'yasuo-w', name: '风之障壁', description: '创造气流墙阻挡飞行物', damage: 0, cooldown: 26, manaCost: 60 },
      { id: 'yasuo-e', name: '踏前斩', description: '突进到敌人身边', damage: 140, cooldown: 0, manaCost: 0 },
      { id: 'yasuo-r', name: '狂风绝息斩', description: '击飞并造成巨额伤害', damage: 450, cooldown: 80, manaCost: 100 }
    ],
    recommendedEquipments: ['e1', 'e2', 'e10'],
    synergies: ['决斗家', '疾风']
  },
  zed: { 
    id: 'h7', 
    name: '劫', 
    description: '影流之主，高爆发刺客', 
    avatarUrl: '/img/champion/Zed.png', 
    cost: 4,
    role: '刺客',
    stats: { health: 580, attack: 85, defense: 22, attackSpeed: 0.88, magicResist: 20, moveSpeed: 345 },
    skills: [
      { id: 'zed-q', name: '影奥义！诸刃', description: '发射手里剑造成伤害', damage: 200, cooldown: 6, manaCost: 50 },
      { id: 'zed-w', name: '影奥义！分身', description: '创造影子并换位', damage: 0, cooldown: 20, manaCost: 40 },
      { id: 'zed-e', name: '影奥义！鬼斩', description: '造成范围伤害并减速', damage: 180, cooldown: 8, manaCost: 50 },
      { id: 'zed-r', name: '禁奥义！瞬狱影杀阵', description: '标记目标并造成巨额伤害', damage: 600, cooldown: 120, manaCost: 100 }
    ],
    recommendedEquipments: ['e1', 'e2', 'e3'],
    synergies: ['刺客', '影流']
  },
  ahri: { 
    id: 'h8', 
    name: '阿狸', 
    description: '九尾妖狐，魔法输出', 
    avatarUrl: '/img/champion/Ahri.png', 
    cost: 4,
    role: '法师',
    stats: { health: 620, attack: 50, defense: 25, attackSpeed: 0.65, magicResist: 35, moveSpeed: 330 },
    skills: [
      { id: 'ahri-q', name: '欺诈宝珠', description: '发射宝珠造成两段伤害', damage: 220, cooldown: 7, manaCost: 55 },
      { id: 'ahri-w', name: '妖异狐火', description: '释放追踪火球', damage: 180, cooldown: 9, manaCost: 60 },
      { id: 'ahri-e', name: '魅惑妖术', description: '魅惑并减速敌人', damage: 150, cooldown: 12, manaCost: 85 },
      { id: 'ahri-r', name: '灵魄突袭', description: '多次突进并造成伤害', damage: 380, cooldown: 110, manaCost: 100 }
    ],
    recommendedEquipments: ['e6', 'e9', 'e5'],
    synergies: ['法师', '九尾']
  },
  lux: { 
    id: 'h9', 
    name: '拉克丝', 
    description: '光辉女郎，控制法师', 
    avatarUrl: '/img/champion/Lux.png', 
    cost: 3,
    role: '法师',
    stats: { health: 550, attack: 45, defense: 20, attackSpeed: 0.62, magicResist: 30, moveSpeed: 330 },
    skills: [
      { id: 'lux-q', name: '光之束缚', description: '禁锢敌人', damage: 160, cooldown: 10, manaCost: 50 },
      { id: 'lux-w', name: '曲光屏障', description: '为友军提供护盾', damage: 0, cooldown: 14, manaCost: 60 },
      { id: 'lux-e', name: '透光奇点', description: '减速并造成伤害', damage: 180, cooldown: 10, manaCost: 70 },
      { id: 'lux-r', name: '终极闪光', description: '发射激光造成巨额伤害', damage: 500, cooldown: 80, manaCost: 100 }
    ],
    recommendedEquipments: ['e6', 'e3', 'e5'],
    synergies: ['法师', '光辉']
  },
  garen: { 
    id: 'h10', 
    name: '盖伦', 
    description: '德玛西亚之力，前排坦克', 
    avatarUrl: '/img/champion/Garen.png', 
    cost: 1,
    role: '战士',
    stats: { health: 1000, attack: 55, defense: 50, attackSpeed: 0.6, magicResist: 40, moveSpeed: 340 },
    skills: [
      { id: 'garen-q', name: '致命打击', description: '沉默并造成额外伤害', damage: 150, cooldown: 8, manaCost: 0 },
      { id: 'garen-w', name: '勇气', description: '获得护甲和魔抗', damage: 0, cooldown: 18, manaCost: 0 },
      { id: 'garen-e', name: '审判', description: '旋转剑刃造成范围伤害', damage: 200, cooldown: 9, manaCost: 0 },
      { id: 'garen-r', name: '德玛西亚正义', description: '对低血量敌人造成真实伤害', damage: 450, cooldown: 120, manaCost: 0 }
    ],
    recommendedEquipments: ['e7', 'e8', 'e3'],
    synergies: ['斗士', '德玛西亚']
  },
  darius: { 
    id: 'h11', 
    name: '德莱厄斯', 
    description: '诺克萨斯之手，战场统治者', 
    avatarUrl: '/img/champion/Darius.png', 
    cost: 3,
    role: '战士',
    stats: { health: 850, attack: 70, defense: 40, attackSpeed: 0.65, magicResist: 32, moveSpeed: 340 },
    skills: [
      { id: 'darius-q', name: '大杀四方', description: '环形挥斧造成伤害', damage: 180, cooldown: 9, manaCost: 30 },
      { id: 'darius-w', name: '致残打击', description: '减速并造成伤害', damage: 160, cooldown: 7, manaCost: 40 },
      { id: 'darius-e', name: '无情铁手', description: '拉回敌人并破甲', damage: 120, cooldown: 20, manaCost: 45 },
      { id: 'darius-r', name: '诺克萨斯断头台', description: '斩杀并刷新冷却', damage: 550, cooldown: 120, manaCost: 100 }
    ],
    recommendedEquipments: ['e2', 'e7', 'e8'],
    synergies: ['斗士', '诺克萨斯']
  },
  kaisa: { 
    id: 'h12', 
    name: '卡莎', 
    description: '虚空之女，自适应射手', 
    avatarUrl: '/img/champion/Kaisa.png', 
    cost: 4,
    role: '射手',
    stats: { health: 630, attack: 72, defense: 22, attackSpeed: 0.88, magicResist: 25, moveSpeed: 330 },
    skills: [
      { id: 'kaisa-q', name: '艾卡西亚暴雨', description: '发射多枚导弹', damage: 220, cooldown: 10, manaCost: 55 },
      { id: 'kaisa-w', name: '虚空索敌', description: '标记并暴露敌人', damage: 180, cooldown: 20, manaCost: 60 },
      { id: 'kaisa-e', name: '极限超载', description: '隐身并提升攻速', damage: 0, cooldown: 16, manaCost: 80 },
      { id: 'kaisa-r', name: '猎手本能', description: '突进并获得护盾', damage: 350, cooldown: 110, manaCost: 100 }
    ],
    recommendedEquipments: ['e10', 'e4', 'e5'],
    synergies: ['神射手', '虚空']
  },
  thresh: { 
    id: 'h13', 
    name: '锤石', 
    description: '魂锁典狱长，控制辅助', 
    avatarUrl: '/img/champion/Thresh.png', 
    cost: 2,
    role: '辅助',
    stats: { health: 750, attack: 45, defense: 35, attackSpeed: 0.6, magicResist: 40, moveSpeed: 335 },
    skills: [
      { id: 'thresh-q', name: '死亡判决', description: '勾住并拉向敌人', damage: 160, cooldown: 18, manaCost: 70 },
      { id: 'thresh-w', name: '魂引之灯', description: '为队友提供护盾', damage: 0, cooldown: 22, manaCost: 60 },
      { id: 'thresh-e', name: '厄运钟摆', description: '击退并减速敌人', damage: 140, cooldown: 9, manaCost: 70 },
      { id: 'thresh-r', name: '幽冥监牢', description: '创造减速领域', damage: 250, cooldown: 140, manaCost: 100 }
    ],
    recommendedEquipments: ['e7', 'e3', 'e5'],
    synergies: ['守护者', '暗影']
  },
  leona: { 
    id: 'h14', 
    name: '蕾欧娜', 
    description: '曙光女神，坚韧前排', 
    avatarUrl: '/img/champion/Leona.png', 
    cost: 1,
    role: '坦克',
    stats: { health: 950, attack: 45, defense: 55, attackSpeed: 0.55, magicResist: 45, moveSpeed: 335 },
    skills: [
      { id: 'leona-q', name: '破晓之盾', description: '眩晕并造成伤害', damage: 120, cooldown: 12, manaCost: 40 },
      { id: 'leona-w', name: '日蚀', description: '获得护甲和魔抗', damage: 80, cooldown: 14, manaCost: 60 },
      { id: 'leona-e', name: '天顶之刃', description: '突进并禁锢敌人', damage: 140, cooldown: 13, manaCost: 60 },
      { id: 'leona-r', name: '日炎耀斑', description: '减速并眩晕中心敌人', damage: 300, cooldown: 90, manaCost: 100 }
    ],
    recommendedEquipments: ['e7', 'e8', 'e3'],
    synergies: ['守护者', '曙光']
  },
  morgana: { 
    id: 'h15', 
    name: '莫甘娜', 
    description: '堕落天使，控制法师', 
    avatarUrl: '/img/champion/Morgana.png', 
    cost: 3,
    role: '法师',
    stats: { health: 700, attack: 50, defense: 30, attackSpeed: 0.58, magicResist: 50, moveSpeed: 330 },
    skills: [
      { id: 'morgana-q', name: '暗之禁锢', description: '禁锢并造成伤害', damage: 180, cooldown: 11, manaCost: 50 },
      { id: 'morgana-w', name: '折磨之盾', description: '为队友提供魔法护盾', damage: 0, cooldown: 26, manaCost: 80 },
      { id: 'morgana-e', name: '痛苦腐蚀', description: '持续造成伤害并减速', damage: 220, cooldown: 12, manaCost: 70 },
      { id: 'morgana-r', name: '灵魂镣铐', description: '眩晕并造成伤害', damage: 400, cooldown: 120, manaCost: 100 }
    ],
    recommendedEquipments: ['e6', 'e5', 'e3'],
    synergies: ['法师', '堕落']
  },
  senna: { 
    id: 'h16', 
    name: '赛娜', 
    description: '暗影哨兵，远程辅助', 
    avatarUrl: '/img/champion/Senna.png', 
    cost: 2,
    role: '辅助',
    stats: { health: 680, attack: 65, defense: 25, attackSpeed: 0.62, magicResist: 30, moveSpeed: 330 },
    skills: [
      { id: 'senna-q', name: '黑暗洞灭', description: '发射光束造成伤害', damage: 190, cooldown: 8, manaCost: 50 },
      { id: 'senna-w', name: '黑雾咒附', description: '为队友提供护盾', damage: 0, cooldown: 17, manaCost: 70 },
      { id: 'senna-e', name: '暗影燎原', description: '创造减速区域', damage: 160, cooldown: 19, manaCost: 60 },
      { id: 'senna-r', name: '暗影之拥', description: '为全队提供护盾和隐身', damage: 280, cooldown: 130, manaCost: 100 }
    ],
    recommendedEquipments: ['e5', 'e4', 'e3'],
    synergies: ['神射手', '暗影']
  },
  aphelios: { 
    id: 'h17', 
    name: '厄斐琉斯', 
    description: '残月之肃，多武器射手', 
    avatarUrl: '/img/champion/Aphelios.png', 
    cost: 4,
    role: '射手',
    stats: { health: 600, attack: 78, defense: 20, attackSpeed: 0.82, magicResist: 22, moveSpeed: 325 },
    skills: [
      { id: 'aphe-q', name: '武器切换', description: '切换不同武器形态', damage: 0, cooldown: 2, manaCost: 0 },
      { id: 'aphe-w', name: '月银锋轮', description: '近战攻击并回复', damage: 170, cooldown: 0, manaCost: 0 },
      { id: 'aphe-e', name: '对影', description: '标记并追击敌人', damage: 200, cooldown: 10, manaCost: 60 },
      { id: 'aphe-r', name: '清辉夜凝', description: '发射大型能量波', damage: 480, cooldown: 110, manaCost: 100 }
    ],
    recommendedEquipments: ['e1', 'e4', 'e2'],
    synergies: ['神射手', '月神']
  },
  sett: { 
    id: 'h18', 
    name: '瑟提', 
    description: '腕豪，近战格斗家', 
    avatarUrl: '/img/champion/Sett.png', 
    cost: 3,
    role: '战士',
    stats: { health: 900, attack: 65, defense: 45, attackSpeed: 0.62, magicResist: 35, moveSpeed: 340 },
    skills: [
      { id: 'sett-q', name: '屈人之威', description: '下次攻击造成额外伤害', damage: 180, cooldown: 9, manaCost: 25 },
      { id: 'sett-w', name: '蓄意轰拳', description: '充能并造成范围伤害', damage: 250, cooldown: 16, manaCost: 50 },
      { id: 'sett-e', name: '强手裂颅', description: '拖拽并眩晕敌人', damage: 160, cooldown: 18, manaCost: 60 },
      { id: 'sett-r', name: '叹为观止', description: '抱摔敌人造成巨额伤害', damage: 500, cooldown: 120, manaCost: 100 }
    ],
    recommendedEquipments: ['e7', 'e8', 'e3'],
    synergies: ['斗士', '腕豪']
  },
  irelia: { 
    id: 'h19', 
    name: '艾瑞莉娅', 
    description: '刀锋舞者，灵活战士', 
    avatarUrl: '/img/champion/Irelia.png', 
    cost: 4,
    role: '战士',
    stats: { health: 720, attack: 70, defense: 35, attackSpeed: 0.85, magicResist: 30, moveSpeed: 340 },
    skills: [
      { id: 'irelia-q', name: '利刃冲击', description: '突进并造成伤害', damage: 160, cooldown: 12, manaCost: 20 },
      { id: 'irelia-w', name: '距破之舞', description: '格挡并反击', damage: 200, cooldown: 18, manaCost: 50 },
      { id: 'irelia-e', name: '比翼双刀', description: '眩晕并造成伤害', damage: 180, cooldown: 14, manaCost: 50 },
      { id: 'irelia-r', name: '至尊锋刃', description: '召唤剑阵造成持续伤害', damage: 420, cooldown: 110, manaCost: 100 }
    ],
    recommendedEquipments: ['e3', 'e7', 'e2'],
    synergies: ['决斗家', '刀锋']
  },
  talon: { 
    id: 'h20', 
    name: '泰隆', 
    description: '刀锋之影，高机动刺客', 
    avatarUrl: '/img/champion/Talon.png', 
    cost: 3,
    role: '刺客',
    stats: { health: 560, attack: 80, defense: 20, attackSpeed: 0.92, magicResist: 18, moveSpeed: 350 },
    skills: [
      { id: 'talon-q', name: '诺克萨斯式外交', description: '造成暴击伤害', damage: 220, cooldown: 8, manaCost: 30 },
      { id: 'talon-w', name: '斩草除根', description: '发出飞刀造成伤害', damage: 180, cooldown: 9, manaCost: 55 },
      { id: 'talon-e', name: '刺客之道', description: '翻越地形', damage: 0, cooldown: 2, manaCost: 0 },
      { id: 'talon-r', name: '暗影突袭', description: '隐身并发出飞刀', damage: 450, cooldown: 100, manaCost: 100 }
    ],
    recommendedEquipments: ['e1', 'e2', 'e10'],
    synergies: ['刺客', '刀锋']
  },
};

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
