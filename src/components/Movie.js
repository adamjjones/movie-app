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
      <div>
        <ul>
          {this.state.movies.map(movie => {
            return <li> {movie.title} </li>
          })}

          {this.state.movies.map(movie => {
            return (
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                  movie['poster_path']
                }`}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
export default Movie
