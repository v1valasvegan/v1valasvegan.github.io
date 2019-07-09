import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../const/routes';

import styles from './Header.module.css';

function Header() {
  return (
      <header className={styles.header}>
      <a href='www.webheroschool.ru' className={styles.link}>
      <img src={require('../../img/whs.png')} alt='webheroschool' width='50' />
      </a>
        {routes.map(item => (
          <NavLink
            className={styles.navlink}
            activeClassName={styles.active}
            to={item.link}
            key={item.id}
            exact={ item.link === '/' }
          >
            {item.value}
          </NavLink>
        ))}
      </header>
  );
}

export default Header;
