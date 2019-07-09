import React from 'react';

import styles from './AboutMe.module.css';

function AboutMe({ userData }) {
  return (
    <section className={styles.section}>
      <img className={styles.image} src={userData.avatar_url} alt='Avatar' />
      <h1 className={styles.heading}>{userData.name}</h1>
      <p className={styles.paragraph}>{userData.bio}</p>
      <p className={styles.paragraph}>
        <a className={styles.mail} href='mailto: veejou@gmail.com'>
          veejou@gmail.com
        </a>
        <a
          className={styles.telegram}
          href='tg://resolve?domain=tremendouslebowski'
        >
          +7 (926) 321-25-41
        </a>
      </p>
      <div className={styles.social}>
        <a href={userData.html_url} className={styles.github}>
          <img src={require('../../img/github.svg')} alt='github' />
        </a>
        <a href='http://vk.com' className={styles.vk}>
          <img src={require('../../img/vk.svg')} alt='vk' />
        </a>
        <a
          href='https://www.linkedin.com/in/victor-zhuravlev-992a50182/'
          className={styles.linkedin}
        >
          <img src={require('../../img/linkedin.svg')} alt='linkedin' />
        </a>
        <a
          href='https://www.facebook.com/victor.zhuravlev.12'
          className={styles.facebook}
        >
          <img src={require('../../img/facebook.svg')} alt='facebook' />
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
