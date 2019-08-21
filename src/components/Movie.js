import React, { Component } from 'react'

export class Movie extends Component {
  state = {
    title: '',
    poster: '',
    overview: ''
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
          title: {data.page}
          })
            })
  // updateState = () => {
  //   })
  // }

  render() {
    return (
      <div>
        <ul>
          <li>{this.state.title}</li>
          <li>{this.state.poster}</li>
          <li>{this.state.overview}</li>
        </ul>
      </div>
      )
    }
  }
export default Movie
