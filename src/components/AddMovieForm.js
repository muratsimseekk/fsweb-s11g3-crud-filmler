import axios from 'axios';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { REQ_TYPES, useAxios } from '../hooks/useAxios';

function AddMovieForm(props) {
  //formdan gelecek degerler tutulacak

  const {movies , setMovies} = props;
  const [title , setTitle] = useState('');
  const [director , setDirector] = useState('');
  const [metascore , setMetascore] = useState(0);
  const [genre , setGenre] = useState('');
  const [description , setDescription] = useState('');
  
  const newMovie = {
    id: Date.now(),
    title: title,
    director: director,
    metascore: metascore,
    genre: genre,
    description: description,
  }

  const history = useHistory();
  const [ data , reqFunction] = useAxios({requestType:REQ_TYPES.POST , endpointUrl:'http://localhost:9000/api/movies' ,payload:newMovie })
  const handleSubmit = (e) => {
    e.preventDefault();
    reqFunction();
    history.push('/')
  }
 

  // tutulan degerler bir state degiskenine yazilacak
  //form onSubmit={handleSubmit} ile submit edilecek
  //state degiskenindeki datayi post req atilacak ve yeni bir movie olusturulacak

  // bu movie app.jsdeki state i guncelleyecek ve movie list e eklenecek 


  return (
    
      <div className="bg-white rounded-md shadow flex-1">
        <form onSubmit={handleSubmit}>
          <div className="p-5 pb-3 border-b border-zinc-200">
            <h4 className="text-xl font-bold">Yeni Film Olusturuluyor</h4>
          </div>
  
          <div className="px-5 py-3">
            <div className="py-2">
              <label className="block pb-1 text-lg">Title</label>
              <input
                
                onChange={(e)=>setTitle(e.target.value) }
                name="title"
                type="text"
              />
            </div>
            <div className="py-2">
              <label className="block pb-1 text-lg">Director</label>
              <input
                onChange={(e)=>setDirector(e.target.value) }
                name="director"
                type="text"
              />
            </div>
            <div className="py-2">
              <label className="block pb-1 text-lg">Genre</label>
              <input
              
                onChange={(e)=>setGenre(e.target.value) }
                name="genre"
                type="text"
              />
            </div>
            <div className="py-2">
              <label className="block pb-1 text-lg">Metascore</label>
              <input
                onChange={(e)=> setMetascore(e.target.value)}
                name="metascore"
                type="number"
              />
            </div>
            <div className="py-2">
              <label className="block pb-1 text-lg">Description</label>
              <textarea
                onChange={(e)=>setDescription(e.target.value)}
                name="description"
              ></textarea>
            </div>
          </div>
  
          <div className="px-5 py-4 border-t border-zinc-200 flex justify-end gap-2">
            <Link to={`/movies`} className="myButton bg-zinc-500">
              Vazgeç
            </Link>
            <button
              type="submit"
              className="myButton bg-green-700 hover:bg-green-600"
            >
              Ekle
            </button>
          </div>
        </form>
      </div>
    );
  
}

export default AddMovieForm