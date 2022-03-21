import React, { PropTypes, Component } from 'react';
// import styles from './MoviePage.css';
// import withStyles from '../../decorators/withStyles';
import MoviePoster from '../MoviePoster';

// @withStyles(styles)
class MoviePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Contact Us';

    this.context.onSetTitle(title);
    return (// eslint-disable-line no-extra-parens
      <div className="MoviePage">
        <div className="MoviePage-container">
          <MoviePoster url={this.props.movie} />
          <h1>{this.props.tmdb.title}</h1>
          <p>..hi.</p>
        </div>
      </div>
    );
  }

}

export default MoviePage;
