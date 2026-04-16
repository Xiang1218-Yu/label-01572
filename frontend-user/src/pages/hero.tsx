import { useState } from 'react';
import { ALL_HEROES } from '../data/mockData';
import { heroAvatar } from '../utils/avatar';
import type { Hero } from '../types';
import styles from './hero.module.css';

type TabType = 'attributes' | 'skills' | 'equipment' | 'compare';

export default function HeroPage() {
  const heroes = [...ALL_HEROES].sort((a, b) => b.cost - a.cost);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [compareList, setCompareList] = useState<Hero[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>('attributes');

  const handleAddToCompare = (hero: Hero) => {
    if (compareList.length < 4 && !compareList.some(h => h.id === hero.id)) {
      setCompareList([...compareList, hero]);
    }
  };

  const handleRemoveFromCompare = (heroId: string) => {
    setCompareList(compareList.filter(h => h.id !== heroId));
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (heroId: string) => compareList.some(h => h.id === heroId);
  const canAddToCompare = (heroId: string) => compareList.length < 4 && !isInCompare(heroId);

  const attributeLabels: Record<keyof Hero['attributes'], string> = {
    health: '生命值',
    attack: '攻击力',
    armor: '护甲',
    magicResist: '魔法抗性',
    attackSpeed: '攻击速度',
    range: '攻击距离',
    mana: '法力值',
  };

  const getCompareValueClass = (value: number, attr: keyof Hero['attributes']) => {
    if (compareList.length < 2) return '';
    const values = compareList.map((h) => h.attributes[attr]);
    const max = Math.max(...values);
    const min = Math.min(...values);
    
    if (value === max) return styles.bestValue;
    if (value === min) return styles.worstValue;
    return '';
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>英雄图鉴</h1>
      <div className={styles.grid}>
        {heroes.map((h) => (
          <div 
            key={h.id} 
            className={`${styles.card} ${isInCompare(h.id) ? styles.compareSelected : ''}`}
            onClick={() => setSelectedHero(h)}
          >
            <img
              className={styles.avatar}
              src={h.avatarUrl || heroAvatar(h.name, h.cost)}
              alt={h.name}
              loading="lazy"
            />
            <div className={styles.info}>
              <span className={styles.name}>{h.name}</span>
              <span className={styles.cost}>{'⭐'.repeat(h.cost)}</span>
            </div>
            <p className={styles.desc}>{h.description}</p>
            {isInCompare(h.id) && <div className={styles.compareBadge}>已加入对比</div>}
          </div>
        ))}
      </div>

      {/* 英雄详情弹窗 */}
      {selectedHero && (
        <div className={styles.modalOverlay} onClick={() => setSelectedHero(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedHero(null)}>×</button>

            <div className={styles.heroHeader}>
              <img
                src={selectedHero.avatarUrl || heroAvatar(selectedHero.name, selectedHero.cost)}
                alt={selectedHero.name}
                className={styles.heroAvatar}
              />
              <div className={styles.heroInfo}>
                <h2 className={styles.heroName}>{selectedHero.name}</h2>
                <div className={styles.heroMeta}>
                  <span className={styles.metaItem}>
                    <span className={styles.costStars}>{'⭐'.repeat(selectedHero.cost)}</span>
                    <span> 费用</span>
                  </span>
                  <span className={styles.metaItem}>位置: {selectedHero.position}</span>
                  <span className={styles.metaItem}>伤害: {selectedHero.damageType}</span>
                  <span className={styles.metaItem}>难度: {'⭐'.repeat(selectedHero.difficulty)}</span>
                </div>
                <p className={styles.heroDescription}>{selectedHero.description}</p>
                <button
                  className={styles.addToCompareBtn}
                  onClick={() => handleAddToCompare(selectedHero)}
                  disabled={!canAddToCompare(selectedHero.id)}
                >
                  {isInCompare(selectedHero.id) ? '已加入对比' : canAddToCompare(selectedHero.id) ? '加入对比' : '对比列表已满'}
                </button>
              </div>
            </div>

            <div className={styles.tabs}>
              <button
                className={`${styles.tabBtn} ${activeTab === 'attributes' ? styles.active : ''}`}
                onClick={() => setActiveTab('attributes')}
              >
                属性
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'skills' ? styles.active : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                技能
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'equipment' ? styles.active : ''}`}
                onClick={() => setActiveTab('equipment')}
              >
                最佳装备
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'compare' ? styles.active : ''}`}
                onClick={() => setActiveTab('compare')}
              >
                对比
              </button>
            </div>

            <div className={styles.tabContent}>
              {/* 属性Tab */}
              {activeTab === 'attributes' && (
                <div>
                  <h3 className={styles.sectionTitle}>基础属性</h3>
                  <div className={styles.attributesGrid}>
                    {Object.entries(selectedHero.attributes).map(([key, value]) => (
                      <div key={key} className={styles.attributeItem}>
                        <span className={styles.attributeName}>{attributeLabels[key as keyof Hero['attributes']]}</span>
                        <span className={styles.attributeValue}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 技能Tab */}
              {activeTab === 'skills' && (
                <div>
                  <h3 className={styles.sectionTitle}>英雄技能</h3>
                  <div className={styles.skillsList}>
                    {selectedHero.skills.map((skill) => (
                      <div key={skill.id} className={styles.skillItem}>
                        <div className={styles.skillIcon}>💫</div>
                        <div className={styles.skillInfo}>
                          <div className={styles.skillHeader}>
                            <h4 className={styles.skillName}>{skill.name}</h4>
                            <div className={styles.skillMeta}>
                              <span className={styles.skillCooldown}>冷却: {skill.cooldown}s</span>
                              <span className={styles.skillCost}>消耗: {skill.cost}</span>
                            </div>
                          </div>
                          <p className={styles.skillDescription}>{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 装备Tab */}
              {activeTab === 'equipment' && (
                <div>
                  <h3 className={styles.sectionTitle}>最佳装备</h3>
                  <div className={styles.equipmentsGrid}>
                    {selectedHero.recommendedEquipments.map((eq) => (
                      <div key={eq.id} className={styles.equipmentItem}>
                        <img src={eq.iconUrl} alt={eq.name} className={styles.equipmentIcon} />
                        <div className={styles.equipmentInfo}>
                          <div className={styles.equipmentName}>{eq.name}</div>
                          <div className={styles.equipmentDescription}>{eq.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 对比Tab */}
              {activeTab === 'compare' && (
                <div>
                  <h3 className={styles.sectionTitle}>属性对比</h3>
                  {compareList.length < 2 ? (
                    <div className={styles.emptyState}>
                      请选择至少2个英雄进行对比（最多可选择4个）
                    </div>
                  ) : (
                    <div className={styles.compareTableContainer}>
                      <table className={styles.compareTable}>
                        <thead>
                          <tr>
                            <th>属性</th>
                            {compareList.map((h) => (
                              <th key={h.id}>
                                <div className={styles.compareHeroHeader}>
                                  <img src={h.avatarUrl || heroAvatar(h.name, h.cost)} alt={h.name} />
                                  <span>{h.name}</span>
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>费用</th>
                            {compareList.map((h) => (
                              <td key={h.id} className={getCompareValueClass(h.cost, 'health')}>
                                {'⭐'.repeat(h.cost)}
                              </td>
                            ))}
                          </tr>
                          {Object.entries(attributeLabels).map(([attr, label]) => (
                            <tr key={attr}>
                              <th>{label}</th>
                              {compareList.map((h) => (
                                <td key={h.id} className={getCompareValueClass(h.attributes[attr as keyof Hero['attributes']], attr as keyof Hero['attributes'])}>
                                  {h.attributes[attr as keyof Hero['attributes']]}
                                </td>
                              ))}
                            </tr>
                          ))}
                          <tr>
                            <th>位置</th>
                            {compareList.map((h) => (
                              <td key={h.id}>{h.position}</td>
                            ))}
                          </tr>
                          <tr>
                            <th>伤害类型</th>
                            {compareList.map((h) => (
                              <td key={h.id}>{h.damageType}</td>
                            ))}
                          </tr>
                          <tr>
                            <th>难度</th>
                            {compareList.map((h) => (
                              <td key={h.id}>{'⭐'.repeat(h.difficulty)}</td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 对比栏 */}
      {compareList.length > 0 && (
        <div className={styles.compareBar}>
          <span>对比列表 ({compareList.length}/4)</span>
          <div className={styles.compareList}>
            {compareList.map((h) => (
              <div key={h.id} className={styles.compareHeroItem}>
                <img src={h.avatarUrl || heroAvatar(h.name, h.cost)} alt={h.name} />
                <span>{h.name}</span>
                <button
                  className={styles.removeCompareBtn}
                  onClick={() => handleRemoveFromCompare(h.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <button onClick={handleClearCompare} disabled={compareList.length === 0}>
            清空
          </button>
        </div>
      )}
    </div>
  );
}
