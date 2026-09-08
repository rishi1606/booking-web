"use client";

import styles from './LoginForm.module.css';

export function LoginForm() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign in or create an account</h1>
      <p className={styles.subtitle}>
        You can sign in using your Booking.com account to access our services.
      </p>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="Enter your email address"
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Continue with email
        </button>
      </form>

      <div className={styles.divider}>
        <span className={styles.dividerText}>or use one of these options</span>
      </div>

      <div className={styles.socialOptions}>
        <button className={styles.socialButton} aria-label="Sign in with Google">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" className={styles.socialIcon} />
        </button>
        <button className={styles.socialButton} aria-label="Sign in with Apple">
          <svg viewBox="0 0 384 512" className={styles.socialIcon}><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
        </button>
        <button className={styles.socialButton} aria-label="Sign in with Facebook">
          <svg viewBox="0 0 320 512" className={styles.socialIcon} fill="#1877f2"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
        </button>
      </div>

      <div className={styles.links}>
        <p className={styles.recoveryLink}>
          Lost access to your email? <a href="#">Recover your account</a>
        </p>
      </div>

      <div className={styles.footer}>
        <p>
          By signing in or creating an account, you agree with our{' '}
          <a href="#">Terms & Conditions</a> and <a href="#">Privacy Statement</a>
        </p>
        <p className={styles.copyright}>
          All rights reserved.
          <br />
          Copyright (2006-2026) - Booking.com™
        </p>
      </div>
    </div>
  );
}
