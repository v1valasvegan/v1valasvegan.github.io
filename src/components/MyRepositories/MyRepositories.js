import React from 'react';
import classnames from 'classnames';

import styles from './MyRepositories.module.css';

function MyRepositories({
  repoList,
  firstRepo,
  lastRepo,
  onClickNext,
  onClickPrevious
}) {
  return (
    <div className='styles.wrapper'>
      {repoList.length > 0 && (
        <section className={styles.section}>
          <ul className={styles['repo-list']}>
            {repoList.slice(firstRepo, lastRepo).map(repo => (
              <li className={styles.repo} key={repo.id}>
                <h1 className={styles.heading}>{repo.name}</h1>
                <span
                  className={classnames({
                    [styles.language]: true,
                    [styles.html]: repo.language === 'HTML',
                    [styles.css]: repo.language === 'CSS',
                    [styles.php]: repo.language === 'PHP'
                  })}
                >
                  {repo.language}
                </span>
                <span className={styles.stars}>{repo.stargazers_count}</span>
                <span className={styles.forks}>{repo.forks_count}</span>
                <span className={styles.updated}>{repo.updated_at}</span>
              </li>
            ))}
          </ul>
          <button
            className={styles['button-back'] + ' ' + styles.button}
            disabled={firstRepo - 5 < 0}
            onClick={() => onClickPrevious()}
          >
            Назад
          </button>
          <button
            className={styles['button-next'] + ' ' + styles.button}
            disabled={repoList.length - lastRepo < 5}
            onClick={() => onClickNext()}
          >
            Далее
          </button>
        </section>
      )}
      {(!repoList || (repoList.length === 0)) && (
        <section className={styles['section_snafu'] + ' ' + styles.section}>
          <h2 className={styles.subheading}>Репозитории на github.com</h2>
          <img className={styles.snafu} src={require('../../img/snafu.svg')} alt='snafu' />
          <p className={styles.paragraph}>
            Добавьте как минимум один резопзиторий на{' '}
            <a href='www.github.com'>www.github.com</a>
          </p>
        </section>
      )}
    </div>
  );
}

export default MyRepositories;
