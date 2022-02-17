import React, { Component } from "react";
import "../css/Collections.css";
import Movies from "./Movies";

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  addMovies() {
    let movies = this.state.movies;
    movies.push({
      id: Date.now(),
    });
    this.setState({
      movies: this.state.movies,
    });
  }

  deleteMovies(id) {
    let newMovieArray = this.state.movies;
    newMovieArray.map((movies, index) => {
      if(id === movies.id){
        newMovieArray.splice(index, 1)
        }
    });
    this.setState(
      {
        movies: newMovieArray
      }
    );
  }

  render() {

    return (
      <div>
        <div className="div-board">
          <div className="row">
            {
                this.state.movies.map((movies) => {
                    return <Movies key={movies.id} id={movies.id} deleteHandler={this.deleteMovies.bind(this)}/>
                }) 
            }
          </div>
        </div>
        <div>
         <button className="btn btn-success btn-add" onClick={this.addMovies.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}

export default Collections;
