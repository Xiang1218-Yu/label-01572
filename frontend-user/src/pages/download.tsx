import styles from './placeholder.module.css';

export default function DownloadPage() {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>📱</span>
      <h1 className={styles.title}>App 正在开发中</h1>
      <p className={styles.desc}>移动端 App 即将上线，敬请期待！</p>
    </div>
  );
}
