import React from "react";
import Moviecard from "./Moviecard";

class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [
        {
          title: "The Avengers",
          plot: "",
          price: 199,
          rating: 9.9,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://i.pinimg.com/736x/15/26/74/152674a9cfbf49651aba04d5ea25f824.jpg",
        },
        {
          title: "Games of Thrones",
          plot: "",
          price: 250,
          rating: 9.8,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://i.pinimg.com/originals/10/3f/30/103f3043108706357715dca2af460cdc.jpg",
        },
        {
          title: "Peaky Blinders",
          plot: "",
          price: 130,
          rating: 9.3,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://i.pinimg.com/736x/10/cb/fe/10cbfe7d874626732d30899578de3ba8.jpg",
        },
      ],
    };
  }

  handleIncreaseStars = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);

    if (movies[movieIndex].stars < 5) {
      movies[movieIndex].stars += 0.5;
    }

    this.setState({
      movies: movies,
    });
  };

  handleDecreaseStars = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);

    if (movies[movieIndex].stars > 0) movies[movieIndex].stars -= 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleFavouriteBtn = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);

    movies[movieIndex].fav = !movies[movieIndex].fav;

    this.setState({
      movies: movies,
    });
  };

  handleCartBtn = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);

    movies[movieIndex].cart = !movies[movieIndex].cart;

    this.setState({
      movies: movies,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.map((movie, index) => (
          <Moviecard
            key={index}
            movies={movie}
            addstars={this.handleIncreaseStars}
            subStars={this.handleDecreaseStars}
            favouriteBtn={this.handleFavouriteBtn}
            cartBtn={this.handleCartBtn}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
