import { useEffect } from 'react';
import type { Hero, Equipment } from '../types';
import { heroAvatar } from '../utils/avatar';
import styles from './HeroDetailModal.module.css';

interface HeroDetailModalProps {
  hero: Hero | null;
  equipments: Equipment[];
  onClose: () => void;
}

export default function HeroDetailModal({ hero, equipments, onClose }: HeroDetailModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!hero) {
    return null;
  }

  const getRecommendedEquipments = () => {
    return hero.recommendedEquipments
      .map(id => equipments.find(e => e.id === id))
      .filter(Boolean) as Equipment[];
  };

  const getStatLabel = (stat: string) => {
    const labels: Record<string, string> = {
      health: '生命值',
      attack: '攻击力',
      defense: '护甲',
      attackSpeed: '攻击速度',
      magicResist: '魔法抗性',
      moveSpeed: '移动速度'
    };
    return labels[stat] || stat;
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        
        <div className={styles.header}>
          <img
            className={styles.avatar}
            src={hero.avatarUrl || heroAvatar(hero.name, hero.cost)}
            alt={hero.name}
          />
          <div className={styles.headerInfo}>
            <div className={styles.nameRow}>
              <h2 className={styles.name}>{hero.name}</h2>
              <span className={styles.cost}>{'⭐'.repeat(hero.cost)}</span>
            </div>
            <div className={styles.role}>{hero.role}</div>
            <p className={styles.description}>{hero.description}</p>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>基础属性</h3>
          <div className={styles.statsGrid}>
            {Object.entries(hero.stats).map(([key, value]) => (
              <div key={key} className={styles.statItem}>
                <span className={styles.statLabel}>{getStatLabel(key)}</span>
                <span className={styles.statValue}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>技能</h3>
          <div className={styles.skillsList}>
            {hero.skills.map(skill => (
              <div key={skill.id} className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <div className={styles.skillMeta}>
                    <span className={styles.skillDamage}>伤害: {skill.damage}</span>
                    <span className={styles.skillCooldown}>冷却: {skill.cooldown}s</span>
                    <span className={styles.skillMana}>蓝耗: {skill.manaCost}</span>
                  </div>
                </div>
                <p className={styles.skillDesc}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>推荐装备</h3>
          <div className={styles.equipmentsList}>
            {getRecommendedEquipments().map(equip => (
              <div key={equip.id} className={styles.equipmentItem}>
                <img className={styles.equipmentIcon} src={equip.iconUrl} alt={equip.name} />
                <div className={styles.equipmentInfo}>
                  <span className={styles.equipmentName}>{equip.name}</span>
                  <span className={styles.equipmentDesc}>{equip.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>羁绊</h3>
          <div className={styles.synergiesList}>
            {hero.synergies.map(synergy => (
              <span key={synergy} className={styles.synergyTag}>{synergy}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
