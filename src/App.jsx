import { useState } from "react";

import movies from "./data/movies.json";

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const [title, setTitle] = useState("");

  const [rating, setRating] = useState("");

  const [imgUrl, setImage] = useState("");


  const deleteMovie = (movieTitle) => {
    const newList = moviesToDisplay.filter((element) => {
      return element.title !== movieTitle;
    });
    setMoviesToDisplay(newList);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: title,
      rating: rating,
      imgURL: imgUrl
    }

    const newList = [newMovie, ...moviesToDisplay];

    setMoviesToDisplay(newList);

    setTitle(""); // clear form
    setRating("");
    setImage("");



  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section>
        <form onSubmit={handleSubmit}>

          <label>Title:
            <input
              type="text"
              name="title"
              placeholder="enter the title"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </label>

          <label>Rating:
            <input
              type="number"
              min="1"
              max="10"
              name="rating"
              placeholder="1-10"
              value={rating}
              onChange={(e) => { setRating(e.target.value) }}
            />
          </label>

          <label> Image:
            <input
              type="text"
              name="imgUrl"
              placeholder="add image URL"
              value={imgUrl}
              onChange={(e) => { setImage(e.target.value) }}
            />
          </label>

          <button>Create</button>

        </form>
      </section>

      <Main movies={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </>
  )
}

export default App
