const _title = new WeakMap();
const _year = new WeakMap();
const _imdbID = new WeakMap();
const _type = new WeakMap();
const _poster = new WeakMap();

class MovieList {
  constructor(title, year, imdbID, type, poster) {
    _title.set(this, title);
    _year.set(this, year);
    _imdbID.set(this, imdbID);
    _type.set(this, type);
    _poster.set(this, poster);
  }

  get title() {
    return _title.get(this);
  }

  get year() {
    return _year.get(this);
  }

  get imdbID() {
    return _imdbID.get(this);
  }

  get type() {
    return _type.get(this);
  }

  get poster() {
    return _poster.get(this);
  }
}

export default MovieList;
