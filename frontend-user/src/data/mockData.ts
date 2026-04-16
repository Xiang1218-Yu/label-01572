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

const heroes = {
  jinx: { 
    id: 'h1', 
    name: '金克丝', 
    description: '疯狂的爆破专家，擅长远程输出', 
    avatarUrl: '/img/champion/Jinx.png', 
    cost: 5,
    attributes: {
      health: 800,
      attack: 85,
      armor: 25,
      magicResist: 20,
      attackSpeed: 0.85,
      range: 4,
      mana: 80
    },
    skills: [
      {
        id: 'jinx-q',
        name: '枪炮交响曲',
        description: '切换武器形态，火箭发射器提升攻击距离和范围伤害，机枪提升攻击速度',
        iconUrl: '',
        cooldown: 0,
        cost: 0
      },
      {
        id: 'jinx-w',
        name: '震荡电磁波',
        description: '发射震荡波，对第一个命中的敌人造成伤害和减速效果',
        iconUrl: '',
        cooldown: 10,
        cost: 50
      },
      {
        id: 'jinx-e',
        name: '嚼火者手雷',
        description: '放置3个陷阱，陷阱被触发时会禁锢敌人并造成伤害',
        iconUrl: '',
        cooldown: 20,
        cost: 70
      },
      {
        id: 'jinx-r',
        name: '超究极死神飞弹',
        description: '发射一枚全球飞弹，对命中的第一个英雄造成基于其已损失生命值的伤害',
        iconUrl: '',
        cooldown: 90,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.ie, equipments.rfc, equipments.hoj],
    position: '射手',
    damageType: '物理',
    difficulty: 2
  },
  vi: { 
    id: 'h2', 
    name: '蔚', 
    description: '皮城执法官，近战坦克战士', 
    avatarUrl: '/img/champion/Vi.png', 
    cost: 4,
    attributes: {
      health: 1100,
      attack: 75,
      armor: 45,
      magicResist: 35,
      attackSpeed: 0.7,
      range: 1,
      mana: 70
    },
    skills: [
      {
        id: 'vi-q',
        name: '强能冲拳',
        description: '蓄力后冲向敌人，造成伤害并击飞目标',
        iconUrl: '',
        cooldown: 14,
        cost: 40
      },
      {
        id: 'vi-w',
        name: '爆弹重拳',
        description: '第三次攻击对敌人造成额外最大生命值百分比伤害并破甲',
        iconUrl: '',
        cooldown: 0,
        cost: 0
      },
      {
        id: 'vi-e',
        name: '天霸横空烈轰',
        description: '对面前的敌人造成伤害，可存储两次使用次数',
        iconUrl: '',
        cooldown: 12,
        cost: 35
      },
      {
        id: 'vi-r',
        name: '天霸断空烈轰',
        description: '锁定并冲向敌方英雄，击飞目标和周围敌人，造成大量伤害',
        iconUrl: '',
        cooldown: 120,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.warmog, equipments.bramble, equipments.ga],
    position: '战士',
    damageType: '物理',
    difficulty: 2
  },
  caitlyn: { 
    id: 'h3', 
    name: '凯特琳', 
    description: '皮城女警，精准射手', 
    avatarUrl: '/img/champion/Caitlyn.png', 
    cost: 4,
    attributes: {
      health: 750,
      attack: 80,
      armor: 22,
      magicResist: 20,
      attackSpeed: 0.75,
      range: 5,
      mana: 75
    },
    skills: [
      {
        id: 'caitlyn-q',
        name: '和平使者',
        description: '发射穿刺弹，对直线上的敌人造成伤害',
        iconUrl: '',
        cooldown: 8,
        cost: 50
      },
      {
        id: 'caitlyn-w',
        name: '约德尔诱捕器',
        description: '放置陷阱，触发后禁锢敌人并暴露其视野',
        iconUrl: '',
        cooldown: 20,
        cost: 30
      },
      {
        id: 'caitlyn-e',
        name: '90口径绳网',
        description: '后跳并发射绳网，对命中的敌人造成减速效果',
        iconUrl: '',
        cooldown: 16,
        cost: 70
      },
      {
        id: 'caitlyn-r',
        name: '让子弹飞',
        description: '瞄准远处的敌方英雄，蓄力后造成巨额伤害',
        iconUrl: '',
        cooldown: 100,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.ie, equipments.rfc, equipments.gs],
    position: '射手',
    damageType: '物理',
    difficulty: 2
  },
  jayce: { 
    id: 'h4', 
    name: '杰斯', 
    description: '未来守护者，远近双形态', 
    avatarUrl: '/img/champion/Jayce.png', 
    cost: 5,
    attributes: {
      health: 950,
      attack: 82,
      armor: 35,
      magicResist: 30,
      attackSpeed: 0.78,
      range: 3,
      mana: 85
    },
    skills: [
      {
        id: 'jayce-r',
        name: '墨丘利之炮/锤',
        description: '切换远程炮形态和近战锤形态，技能也会随之变化',
        iconUrl: '',
        cooldown: 6,
        cost: 0
      }
    ],
    recommendedEquipments: [equipments.gs, equipments.hoj, equipments.ga],
    position: '战士',
    damageType: '物理',
    difficulty: 3
  },
  ekko: { 
    id: 'h5', 
    name: '艾克', 
    description: '时间刺客，灵活突进', 
    avatarUrl: '/img/champion/Ekko.png', 
    cost: 3,
    attributes: {
      health: 850,
      attack: 70,
      armor: 28,
      magicResist: 32,
      attackSpeed: 0.72,
      range: 1,
      mana: 65
    },
    skills: [
      {
        id: 'ekko-q',
        name: '时间卷曲器',
        description: '发射时间装置，对路径上的敌人造成伤害并减速，返回时再次造成伤害',
        iconUrl: '',
        cooldown: 9,
        cost: 50
      },
      {
        id: 'ekko-w',
        name: '时光交错',
        description: '延迟后在区域内造成伤害和眩晕，艾克进入区域会获得护盾',
        iconUrl: '',
        cooldown: 18,
        cost: 60
      },
      {
        id: 'ekko-e',
        name: '相位俯冲',
        description: '短距离位移，下次攻击造成额外魔法伤害',
        iconUrl: '',
        cooldown: 12,
        cost: 40
      },
      {
        id: 'ekko-r',
        name: '时空断裂',
        description: '回到几秒前的位置，恢复生命值并对周围敌人造成伤害',
        iconUrl: '',
        cooldown: 110,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.shiv, equipments.hoj, equipments.dcap],
    position: '刺客',
    damageType: '魔法',
    difficulty: 3
  },
  yasuo: { 
    id: 'h6', 
    name: '亚索', 
    description: '疾风剑豪，暴击战士', 
    avatarUrl: '/img/champion/Yasuo.png', 
    cost: 5,
    attributes: {
      health: 900,
      attack: 78,
      armor: 30,
      magicResist: 25,
      attackSpeed: 0.8,
      range: 1,
      mana: 60
    },
    skills: [
      {
        id: 'yasuo-q',
        name: '斩钢闪',
        description: '向前出剑，第三次攻击会发射旋风击飞敌人',
        iconUrl: '',
        cooldown: 4,
        cost: 0
      },
      {
        id: 'yasuo-w',
        name: '风之障壁',
        description: '创造一道风墙，阻挡所有敌方飞行道具',
        iconUrl: '',
        cooldown: 26,
        cost: 30
      },
      {
        id: 'yasuo-e',
        name: '踏前斩',
        description: '冲向目标敌人，造成伤害，可多次使用叠加伤害',
        iconUrl: '',
        cooldown: 0.5,
        cost: 0
      },
      {
        id: 'yasuo-r',
        name: '狂风绝息斩',
        description: '闪烁到被击飞的敌人身边，对范围内的所有被击飞敌人造成大量伤害',
        iconUrl: '',
        cooldown: 80,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.ie, equipments.bt, equipments.gs],
    position: '战士',
    damageType: '物理',
    difficulty: 3
  },
  zed: { 
    id: 'h7', 
    name: '劫', 
    description: '影流之主，高爆发刺客', 
    avatarUrl: '/img/champion/Zed.png', 
    cost: 4,
    attributes: {
      health: 820,
      attack: 76,
      armor: 26,
      magicResist: 22,
      attackSpeed: 0.77,
      range: 1,
      mana: 0
    },
    skills: [
      {
        id: 'zed-q',
        name: '影奥义！诸刃',
        description: '发射手里剑，对路径上的敌人造成伤害',
        iconUrl: '',
        cooldown: 6,
        cost: 0
      },
      {
        id: 'zed-w',
        name: '影奥义！分身',
        description: '创造一个影子，可再次激活与影子交换位置',
        iconUrl: '',
        cooldown: 20,
        cost: 0
      },
      {
        id: 'zed-e',
        name: '影奥义！鬼斩',
        description: '对周围敌人造成伤害并减速',
        iconUrl: '',
        cooldown: 3,
        cost: 0
      },
      {
        id: 'zed-r',
        name: '禁奥义！瞬狱影杀阵',
        description: '标记目标英雄，几秒后触发印记造成已损失生命值百分比伤害',
        iconUrl: '',
        cooldown: 90,
        cost: 0
      }
    ],
    recommendedEquipments: [equipments.ie, equipments.bt, equipments.ga],
    position: '刺客',
    damageType: '物理',
    difficulty: 3
  },
  ahri: { 
    id: 'h8', 
    name: '阿狸', 
    description: '九尾妖狐，魔法输出', 
    avatarUrl: '/img/champion/Ahri.png', 
    cost: 4,
    attributes: {
      health: 780,
      attack: 55,
      armor: 21,
      magicResist: 30,
      attackSpeed: 0.65,
      range: 3,
      mana: 90
    },
    skills: [
      {
        id: 'ahri-q',
        name: '欺诈宝珠',
        description: '宝珠射出和返回时分别造成真实和魔法伤害',
        iconUrl: '',
        cooldown: 7,
        cost: 50
      },
      {
        id: 'ahri-w',
        name: '妖异狐火',
        description: '释放狐火攻击附近的敌人',
        iconUrl: '',
        cooldown: 9,
        cost: 40
      },
      {
        id: 'ahri-e',
        name: '魅惑妖术',
        description: '魅惑命中的第一个敌人，使其走向阿狸',
        iconUrl: '',
        cooldown: 12,
        cost: 60
      },
      {
        id: 'ahri-r',
        name: '灵魄突袭',
        description: '向前突进并发射法球，可连续使用三次',
        iconUrl: '',
        cooldown: 110,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.dcap, equipments.shiv, equipments.hoj],
    position: '法师',
    damageType: '魔法',
    difficulty: 2
  },
  lux: { 
    id: 'h9', 
    name: '拉克丝', 
    description: '光辉女郎，控制法师', 
    avatarUrl: '/img/champion/Lux.png', 
    cost: 3,
    attributes: {
      health: 700,
      attack: 50,
      armor: 20,
      magicResist: 28,
      attackSpeed: 0.62,
      range: 3,
      mana: 85
    },
    skills: [
      {
        id: 'lux-q',
        name: '光之束缚',
        description: '发射光球，禁锢命中的敌人',
        iconUrl: '',
        cooldown: 10,
        cost: 40
      },
      {
        id: 'lux-w',
        name: '曲光屏障',
        description: '为友军提供护盾',
        iconUrl: '',
        cooldown: 14,
        cost: 60
      },
      {
        id: 'lux-e',
        name: '透光奇点',
        description: '放置区域，减速敌人并可引爆造成伤害',
        iconUrl: '',
        cooldown: 8,
        cost: 50
      },
      {
        id: 'lux-r',
        name: '终极闪光',
        description: '发射大型激光束，对直线上的所有敌人造成伤害',
        iconUrl: '',
        cooldown: 80,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.dcap, equipments.ga, equipments.shiv],
    position: '法师',
    damageType: '魔法',
    difficulty: 1
  },
  garen: { 
    id: 'h10', 
    name: '盖伦', 
    description: '德玛西亚之力，前排坦克', 
    avatarUrl: '/img/champion/Garen.png', 
    cost: 1,
    attributes: {
      health: 1200,
      attack: 65,
      armor: 50,
      magicResist: 38,
      attackSpeed: 0.6,
      range: 1,
      mana: 0
    },
    skills: [
      {
        id: 'garen-q',
        name: '致命打击',
        description: '加速并沉默敌人，造成额外伤害',
        iconUrl: '',
        cooldown: 8,
        cost: 0
      },
      {
        id: 'garen-w',
        name: '勇气',
        description: '获得护盾和伤害减免',
        iconUrl: '',
        cooldown: 16,
        cost: 0
      },
      {
        id: 'garen-e',
        name: '审判',
        description: '旋转大剑，对周围敌人造成持续伤害',
        iconUrl: '',
        cooldown: 9,
        cost: 0
      },
      {
        id: 'garen-r',
        name: '德玛西亚正义',
        description: '对低血量敌人造成真实伤害',
        iconUrl: '',
        cooldown: 120,
        cost: 0
      }
    ],
    recommendedEquipments: [equipments.warmog, equipments.bramble, equipments.ga],
    position: '坦克',
    damageType: '物理',
    difficulty: 1
  },
  darius: { 
    id: 'h11', 
    name: '德莱厄斯', 
    description: '诺克萨斯之手，战场统治者', 
    avatarUrl: '/img/champion/Darius.png', 
    cost: 3,
    attributes: {
      health: 1050,
      attack: 78,
      armor: 40,
      magicResist: 32,
      attackSpeed: 0.68,
      range: 1,
      mana: 0
    },
    skills: [
      {
        id: 'darius-q',
        name: '大杀四方',
        description: '挥舞斧头，对外圈敌人造成额外伤害和治疗效果',
        iconUrl: '',
        cooldown: 9,
        cost: 0
      },
      {
        id: 'darius-w',
        name: '致残打击',
        description: '下次攻击造成额外伤害并减速敌人',
        iconUrl: '',
        cooldown: 5,
        cost: 0
      },
      {
        id: 'darius-e',
        name: '无情铁手',
        description: '将前方敌人拉到身边并破甲',
        iconUrl: '',
        cooldown: 24,
        cost: 0
      },
      {
        id: 'darius-r',
        name: '诺克萨斯断头台',
        description: '斩杀低血量敌人，击杀后可刷新技能',
        iconUrl: '',
        cooldown: 100,
        cost: 0
      }
    ],
    recommendedEquipments: [equipments.bt, equipments.warmog, equipments.bramble],
    position: '战士',
    damageType: '物理',
    difficulty: 2
  },
  kaisa: { 
    id: 'h12', 
    name: '卡莎', 
    description: '虚空之女，自适应射手', 
    avatarUrl: '/img/champion/Kaisa.png', 
    cost: 4,
    attributes: {
      health: 780,
      attack: 78,
      armor: 23,
      magicResist: 24,
      attackSpeed: 0.82,
      range: 4,
      mana: 75
    },
    skills: [
      {
        id: 'kaisa-q',
        name: '艾卡西亚暴雨',
        description: '发射多枚导弹攻击附近敌人',
        iconUrl: '',
        cooldown: 10,
        cost: 55
      },
      {
        id: 'kaisa-w',
        name: '虚空索敌',
        description: '发射光束，标记并暴露敌人',
        iconUrl: '',
        cooldown: 20,
        cost: 60
      },
      {
        id: 'kaisa-e',
        name: '极限超载',
        description: '获得移动速度和攻击速度加成，潜行效果',
        iconUrl: '',
        cooldown: 16,
        cost: 30
      },
      {
        id: 'kaisa-r',
        name: '猎手本能',
        description: '超远位移到带有标记的敌人附近，获得护盾',
        iconUrl: '',
        cooldown: 100,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.gs, equipments.rfc, equipments.hoj],
    position: '射手',
    damageType: '物理',
    difficulty: 2
  },
  thresh: { 
    id: 'h13', 
    name: '锤石', 
    description: '魂锁典狱长，控制辅助', 
    avatarUrl: '/img/champion/Thresh.png', 
    cost: 2,
    attributes: {
      health: 850,
      attack: 55,
      armor: 35,
      magicResist: 35,
      attackSpeed: 0.65,
      range: 2,
      mana: 70
    },
    skills: [
      {
        id: 'thresh-q',
        name: '死亡判决',
        description: '钩中敌人并将其拉向自己',
        iconUrl: '',
        cooldown: 18,
        cost: 60
      },
      {
        id: 'thresh-w',
        name: '魂引之灯',
        description: '放置灯笼，友军点击可飞到锤石身边',
        iconUrl: '',
        cooldown: 22,
        cost: 40
      },
      {
        id: 'thresh-e',
        name: '厄运钟摆',
        description: '将周围敌人击退或拉向自己，造成减速',
        iconUrl: '',
        cooldown: 9,
        cost: 50
      },
      {
        id: 'thresh-r',
        name: '幽冥监牢',
        description: '创造牢笼，敌人触碰会受到伤害和减速',
        iconUrl: '',
        cooldown: 120,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.warmog, equipments.bramble, equipments.ga],
    position: '辅助',
    damageType: '魔法',
    difficulty: 3
  },
  leona: { 
    id: 'h14', 
    name: '蕾欧娜', 
    description: '曙光女神，坚韧前排', 
    avatarUrl: '/img/champion/Leona.png', 
    cost: 1,
    attributes: {
      health: 1150,
      attack: 50,
      armor: 55,
      magicResist: 45,
      attackSpeed: 0.58,
      range: 1,
      mana: 60
    },
    skills: [
      {
        id: 'leona-q',
        name: '破晓之盾',
        description: '下次攻击眩晕敌人',
        iconUrl: '',
        cooldown: 10,
        cost: 40
      },
      {
        id: 'leona-w',
        name: '日蚀',
        description: '获得护甲和魔法抗性加成，对周围敌人造成伤害',
        iconUrl: '',
        cooldown: 14,
        cost: 45
      },
      {
        id: 'leona-e',
        name: '天顶之刃',
        description: '冲向敌人，造成伤害并标记目标',
        iconUrl: '',
        cooldown: 12,
        cost: 50
      },
      {
        id: 'leona-r',
        name: '日炎耀斑',
        description: '召唤太阳光束，造成伤害并眩晕中心区域敌人',
        iconUrl: '',
        cooldown: 90,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.warmog, equipments.bramble, equipments.ga],
    position: '坦克',
    damageType: '魔法',
    difficulty: 1
  },
  morgana: { 
    id: 'h15', 
    name: '莫甘娜', 
    description: '堕落天使，控制法师', 
    avatarUrl: '/img/champion/Morgana.png', 
    cost: 3,
    attributes: {
      health: 880,
      attack: 52,
      armor: 25,
      magicResist: 40,
      attackSpeed: 0.6,
      range: 3,
      mana: 80
    },
    skills: [
      {
        id: 'morgana-q',
        name: '暗之禁锢',
        description: '禁锢命中的敌人',
        iconUrl: '',
        cooldown: 11,
        cost: 50
      },
      {
        id: 'morgana-w',
        name: '折磨之影',
        description: '在区域内造成持续魔法伤害',
        iconUrl: '',
        cooldown: 10,
        cost: 60
      },
      {
        id: 'morgana-e',
        name: '黑暗之盾',
        description: '为友军提供法术免疫护盾',
        iconUrl: '',
        cooldown: 20,
        cost: 70
      },
      {
        id: 'morgana-r',
        name: '灵魂镣铐',
        description: '连接周围敌人，延迟后造成眩晕和伤害',
        iconUrl: '',
        cooldown: 120,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.dcap, equipments.shiv, equipments.ga],
    position: '法师',
    damageType: '魔法',
    difficulty: 2
  },
  senna: { 
    id: 'h16', 
    name: '赛娜', 
    description: '暗影哨兵，远程辅助', 
    avatarUrl: '/img/champion/Senna.png', 
    cost: 2,
    attributes: {
      health: 720,
      attack: 70,
      armor: 22,
      magicResist: 28,
      attackSpeed: 0.7,
      range: 4,
      mana: 80
    },
    skills: [
      {
        id: 'senna-q',
        name: '黑暗洞灭',
        description: '发射穿刺光束，对敌人造成伤害并治疗友军',
        iconUrl: '',
        cooldown: 8,
        cost: 40
      },
      {
        id: 'senna-w',
        name: '无尽厮守',
        description: '放置黑雾区域，禁锢敌人',
        iconUrl: '',
        cooldown: 16,
        cost: 50
      },
      {
        id: 'senna-e',
        name: '黑雾咒附',
        description: '进入伪装状态，友军在周围也会获得伪装效果',
        iconUrl: '',
        cooldown: 25,
        cost: 60
      },
      {
        id: 'senna-r',
        name: '暗影燎原',
        description: '发射全球光束，为友军提供护盾并对敌人造成伤害',
        iconUrl: '',
        cooldown: 100,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.rfc, equipments.hoj, equipments.ga],
    position: '辅助',
    damageType: '物理',
    difficulty: 2
  },
  aphelios: { 
    id: 'h17', 
    name: '厄斐琉斯', 
    description: '残月之肃，多武器射手', 
    avatarUrl: '/img/champion/Aphelios.png', 
    cost: 4,
    attributes: {
      health: 760,
      attack: 82,
      armor: 20,
      magicResist: 21,
      attackSpeed: 0.78,
      range: 4,
      mana: 70
    },
    skills: [
      {
        id: 'aphelios-q',
        name: '武器切换',
        description: '在五把不同武器之间切换，每种武器有独特效果',
        iconUrl: '',
        cooldown: 2,
        cost: 0
      }
    ],
    recommendedEquipments: [equipments.ie, equipments.rfc, equipments.bt],
    position: '射手',
    damageType: '物理',
    difficulty: 3
  },
  sett: { 
    id: 'h18', 
    name: '瑟提', 
    description: '腕豪，近战格斗家', 
    avatarUrl: '/img/champion/Sett.png', 
    cost: 3,
    attributes: {
      health: 1100,
      attack: 80,
      armor: 42,
      magicResist: 36,
      attackSpeed: 0.7,
      range: 1,
      mana: 0
    },
    skills: [
      {
        id: 'sett-q',
        name: '屈人之威',
        description: '下次两次攻击造成额外伤害和攻击速度加成',
        iconUrl: '',
        cooldown: 9,
        cost: 0
      },
      {
        id: 'sett-w',
        name: '蓄意轰拳',
        description: '蓄力后造成巨额伤害，获得基于已损失生命值的护盾',
        iconUrl: '',
        cooldown: 16,
        cost: 0
      },
      {
        id: 'sett-e',
        name: '强手裂颅',
        description: '将两侧敌人拉到一起，造成伤害和减速',
        iconUrl: '',
        cooldown: 12,
        cost: 0
      },
      {
        id: 'sett-r',
        name: '叹为观止',
        description: '扛起敌方英雄砸向地面，对范围内敌人造成伤害',
        iconUrl: '',
        cooldown: 120,
        cost: 0
      }
    ],
    recommendedEquipments: [equipments.warmog, equipments.bramble, equipments.ga],
    position: '战士',
    damageType: '物理',
    difficulty: 2
  },
  irelia: { 
    id: 'h19', 
    name: '艾瑞莉娅', 
    description: '刀锋舞者，灵活战士', 
    avatarUrl: '/img/champion/Irelia.png', 
    cost: 4,
    attributes: {
      health: 860,
      attack: 75,
      armor: 32,
      magicResist: 28,
      attackSpeed: 0.76,
      range: 1,
      mana: 65
    },
    skills: [
      {
        id: 'irelia-q',
        name: '利刃冲击',
        description: '冲向敌人，击杀目标后刷新技能',
        iconUrl: '',
        cooldown: 12,
        cost: 20
      },
      {
        id: 'irelia-w',
        name: '距破之舞',
        description: '蓄力后造成伤害并格挡伤害',
        iconUrl: '',
        cooldown: 18,
        cost: 50
      },
      {
        id: 'irelia-e',
        name: '比翼双刀',
        description: '扔出两把刀，交汇时眩晕敌人',
        iconUrl: '',
        cooldown: 14,
        cost: 45
      },
      {
        id: 'irelia-r',
        name: '先锋之刃',
        description: '发射剑阵，标记敌人并造成伤害，穿过剑阵获得位移效果',
        iconUrl: '',
        cooldown: 110,
        cost: 100
      }
    ],
    recommendedEquipments: [equipments.ga, equipments.warmog, equipments.bt],
    position: '战士',
    damageType: '物理',
    difficulty: 3
  },
  talon: { 
    id: 'h20', 
    name: '泰隆', 
    description: '刀锋之影，高机动刺客', 
    avatarUrl: '/img/champion/Talon.png', 
    cost: 3,
    attributes: {
      health: 800,
      attack: 74,
      armor: 24,
      magicResist: 22,
      attackSpeed: 0.75,
      range: 1,
      mana: 0
    },
    skills: [
      {
        id: 'talon-q',
        name: '诺克萨斯式外交',
        description: '跳向敌人，造成高额伤害',
        iconUrl: '',
        cooldown: 6,
        cost: 0
      },
      {
        id: 'talon-w',
        name: '斩草除根',
        description: '发射飞刀，对敌人造成伤害和减速',
        iconUrl: '',
        cooldown: 9,
        cost: 0
      },
      {
        id: 'talon-e',
        name: '刺客之道',
        description: '翻越墙体，获得移动速度加成',
        iconUrl: '',
        cooldown: 16,
        cost: 0
      },
      {
        id: 'talon-r',
        name: '暗影突袭',
        description: '隐身并发射飞刀，再次激活造成伤害',
        iconUrl: '',
        cooldown: 100,
        cost: 0
      }
    ],
    recommendedEquipments: [equipments.ie, equipments.bt, equipments.ga],
    position: '刺客',
    damageType: '物理',
    difficulty: 3
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
