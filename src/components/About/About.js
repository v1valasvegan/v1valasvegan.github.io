import React from 'react';
import Octokit from '@octokit/rest';
import AboutMe from '../AboutMe/AboutMe';
import MyRepositories from '../MyRepositories/MyRepositories';
import { user } from '../../const/user';

import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: {
        aboutMe: true,
        myRepos: true
      },
      firstRepo: 0,
      lastRepo: 5,
      repoList: [],
      hasError: false,
      error: {}
    };
  }

  componentDidMount() {
    octokit.repos
      .listForUser({
        username: user
      })
      .then(({ data }) => {
        this.setState({
          repoList: data,
          isLoading: { myRepos: false }
        });
      })
      .catch(err =>
        this.setState({
          hasError: true,
          error: err,
          isLoading: false
        })
      );

    octokit.users
      .getByUsername({
        username: user
      })
      .then(({ data }) => {
        this.setState({
          userData: data,
          isLoading: { aboutMe: false }
        });
      })
      .catch(err =>
        this.setState({
          hasError: true,
          error: err,
          isLoading: false
        })
      );
  }

  onClickPrevious = () =>
    this.setState(state => ({
      firstRepo: this.state.firstRepo - 5,
      lastRepo: this.state.lastRepo - 5
    }));

  onClickNext = () =>
    this.setState(state => ({
      firstRepo: this.state.firstRepo + 5,
      lastRepo: this.state.lastRepo + 5
    }));

  render() {
    const { isLoading } = this.state;

    return (
      <main className={styles.main}>
        {this.state.hasError && (
          <div className={styles['wrapper_error']}>
            <img
              className={styles.snafu}
              src={require('../../img/snafu.svg')}
              alt='snafu'
            />
            <h2 className={styles.subheading}>Что-то пошло не так...</h2>
            <p className={styles.paragraph}>
              Попробуйте <a href='.'>загрузить</a> еще раз
            </p>
          </div>
        )}

        {(isLoading.myRepos || isLoading.aboutMe) && (
          <div className={styles['wrapper_loader']} />
        )}

        {!isLoading.myRepos && !isLoading.aboutMe && !this.state.hasError && (
          <AboutMe userData={this.state.userData} />
        )}
        {!isLoading.myRepos && !isLoading.aboutMe && !this.state.hasError && (
          <MyRepositories
            repoList={this.state.repoList}
            firstRepo={this.state.firstRepo}
            lastRepo={this.state.lastRepo}
            onClickNext={this.onClickNext}
            onClickPrevious={this.onClickPrevious}
          />
        )}
      </main>
    );
  }
}

export default About;
