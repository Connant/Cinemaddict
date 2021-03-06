import Abstract from './abstract.js';
import { UserLevel } from '../constants';

export const userRankTemplate = (films) => {

  const getProfileRating = (elements) => {
    if (elements >= 1 && elements < 10) {
      return UserLevel.NOVICE;
    }
    if (elements >= 10 && elements < 20) {
      return UserLevel.FAN;
    }
    if (elements >= 20) {
      return UserLevel.MOVIE_BUFF;
    }
    if (elements === 0) {
      return '';
    }
  };

  const watchedFilms = films.filter((film) => film.userDetails.alreadyWatched === true);

  return `<section class="header__profile profile">
    <p class="profile__rating">${getProfileRating(watchedFilms.length)}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};
export default class UserRank extends Abstract {
  constructor(films) {
    super();
    this._films = films;
  }

  getTemplate() {
    return userRankTemplate(this._films);
  }
}
