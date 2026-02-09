import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links}>
        <a className={styles.link} href="#">关于我们</a>
        <a className={styles.link} href="#">使用条款</a>
        <a className={styles.link} href="#">隐私政策</a>
        <a className={styles.link} href="#">联系我们</a>
        <a className={styles.link} href="#">帮助中心</a>
      </nav>
      <p className={styles.copyright}>© 2026 游戏助手 GameHelper. All rights reserved.</p>
    </footer>
  );
}
