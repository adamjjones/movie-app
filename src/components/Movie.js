import React, { Component } from 'react'

export class Movie extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=785c5d04247a97014c1e2374403ebdc2'
    )
      .then(resp => {
        return resp.json()
      })

      .then(data => {
        console.log(data)
        this.setState({
          movies: data.results
        })
      })
  }

  render() {
    return (
      <div className="container">
        <ul>
          {this.state.movies.map(movie => {
            const picserver = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
            const url1 = picserver + movie.poster_path
            const url2 = picserver + movie.backdrop_path

            return (
              <section idName="content">
                <div className="images">
                  <img src={url1} />
                  <img src={url2} />
                </div>

                <li className="title"> {movie.title} </li>
                <li className="overview">{movie.overview}</li>
              </section>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default Movie
