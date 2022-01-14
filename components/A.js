import Link from 'next/link';
import styles from '../styles/A.module.css';

export default function A({ text, href, locale = 'en' }) {
  return (
    <Link href={href} locale={locale}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
}
