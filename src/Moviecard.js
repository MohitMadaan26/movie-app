import React from "react";

class Moviecard extends React.Component {
  render() {
    const { title, plot, price, rating, stars, fav, cart, poster } =
      this.props.movies;

    const { addstars, subStars, favouriteBtn, movies, cartBtn } = this.props;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" src={poster} />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs {price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  onClick={() => subStars(this.props.movies)}
                />

                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                  className="stars"
                />
                <img
                  onClick={() => {
                    addstars(this.props.movies);
                  }}
                  alt="increase"
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                />

                <span>{stars}</span>
              </div>

              {fav ? (
                <button
                  onClick={() => favouriteBtn(movies)}
                  className="unfavourite-btn"
                >
                  Un-Favourite
                </button>
              ) : (
                <button
                  onClick={() => favouriteBtn(movies)}
                  className="favourite-btn"
                >
                  Favourite
                </button>
              )}

              <button
                onClick={() => cartBtn(movies)}
                className={cart ? "removecart-btn" : "cart-btn"}
              >
                {cart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
