import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import styles from './page.module.scss';

export default function Home() {
  return (
    <body className={styles.main}>
      <Header activeMenuItem={'home'} />
      <Main />
      <Footer />
    </body>
  );
}

