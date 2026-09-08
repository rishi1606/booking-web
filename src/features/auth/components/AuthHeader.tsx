import styles from './AuthHeader.module.css';

export function AuthHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Booking.com
        </div>
        <div className={styles.actions}>

        </div>
      </div>
    </header>
  );
}
