import { CATEGORIES, RATINGS } from '../data/mockData';
import styles from './FilterModule.module.css';

interface FilterModuleProps {
  activeCategory: string;
  activeRating: string;
  searchKeyword: string;
  onCategoryChange: (category: string) => void;
  onRatingChange: (rating: string) => void;
  onSearchChange: (keyword: string) => void;
}

export default function FilterModule({
  activeCategory,
  activeRating,
  searchKeyword,
  onCategoryChange,
  onRatingChange,
  onSearchChange,
}: FilterModuleProps) {
  return (
    <section className={styles.filter}>
      <div className={styles.banner}>
        <span className={styles.bannerText}>⚡ 阵容推荐中心</span>
      </div>

      <div className={styles.categories}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.categoryBtnActive : ''}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.row}>
        <div className={styles.ratings}>
          {RATINGS.map((r) => (
            <button
              key={r}
              className={`${styles.ratingBtn} ${activeRating === r ? styles.ratingBtnActive : ''}`}
              onClick={() => onRatingChange(activeRating === r ? '' : r)}
            >
              {r}
            </button>
          ))}
        </div>

        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="搜索阵容或英雄名称..."
            value={searchKeyword}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="搜索阵容"
          />
        </div>
      </div>
    </section>
  );
}
