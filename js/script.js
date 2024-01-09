"use strict";
const numberOfFilms = +prompt("How many films did you watch?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("Один из последних просмотренных фильмов?", ""),
  c = prompt("На сколько оцените его?", ""),
  e = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = c;
personalMovieDB.movies[b] = e;

console.log(personalMovieDB);
