import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import { routes } from '../../const/routes';

import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        {routes.map(item => (
          <Route
            path={item.link}
            exact={item.link === '/'}
            component={item.component}
            key={item.id}
          />
        ))}
      </div>
    </Router>
  );
}

export default App;
