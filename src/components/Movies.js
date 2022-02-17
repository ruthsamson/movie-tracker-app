import React, { Component } from "react";
import "../css/Movies.css";
import PropTypes from "prop-types";

const GENERIC_TITLE = "Title";
const GENERIC_YEAR = "0000";
const GENERIC_GENRE = "Genre";
const GENERIC_DESCRIPTION = "Description";


class Movies extends Component {
  constructor(props) {
    super(props);

    this.titleContent = React.createRef();
    this.yearContent = React.createRef();
    this.genreContent = React.createRef();
    this.descriptionContent = React.createRef();

    this.state = {
        title: GENERIC_TITLE,
        year: GENERIC_YEAR,
        genre: GENERIC_GENRE,
        description: GENERIC_DESCRIPTION,
        editMode: false
    }
  }

  handleEdit(){
      this.setState({
          editMode: true
      });
  }

  handleSave(){
      this.setState({
          title: this.titleContent.current.value,
          year: this.yearContent.current.value,
          genre: this.genreContent.current.value,
          description: this.descriptionContent.current.value,
          editMode: false 
      })
  }

  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }
 
  render() {
    let titleElement, yearElement, genreElement, descriptionElement, buttonArea;

    if(this.state.editMode) {
        titleElement = <textarea ref={this.titleContent} className="title-textarea textarea" defaultValue={this.state.title}></textarea>
        yearElement = <textarea ref={this.yearContent} className="year-textarea textarea" defaultValue={this.state.year}></textarea>
        genreElement = <textarea ref={this.genreContent} className="genre-textarea textarea" defaultValue={this.state.genre}></textarea>
        descriptionElement = <textarea ref={this.descriptionContent} className="description-textarea textarea" defaultValue={this.state.description}></textarea>
        buttonArea = (
          <div>
            <button className="btn btn-primary btn-save" onClick={this.handleSave.bind(this)}>Save</button>
          </div>
        )
    } else {
      titleElement = <h5 className="card-title">{this.state.title}</h5>;
      yearElement = <p className="card-year">{this.state.year}</p>;
      genreElement= <p className="card-genre">{this.state.genre}</p>;
      descriptionElement = <p className="card-description">{this.state.description}</p>;
      buttonArea = (
      <div className="buttons">
              <button className="btn btn-success btn-component" onClick={this.handleEdit.bind(this)}>Edit</button>
              <button className="btn btn-danger btn-component" onClick={this.handleDelete.bind(this)}>Delete</button>
              <span className="switch-indicator">
                <span className=" watch-indicator not-watched">Haven't Watched</span>
                <label className="switch btn-component">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <span className="watch-indicator watched">Watched</span>
              </span> 
        </div>
      );
    }

    return (
      <div className='col-sm-6 card-overall'>
        <div className="card card-view">
          <div className="card-body">
            {titleElement}
            {yearElement}
            {genreElement}
            {descriptionElement}
            {buttonArea}
          </div>
        </div>
      </div>
    );
  }
}

Movies.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.number,
  genre: PropTypes.string,
};

export default Movies;
