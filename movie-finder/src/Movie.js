import React, { useState } from "react";
import Axios from "axios";
import Details from "./Details";

function Movie({ results }) {
   const [Selected, setSelected] = useState({});

   const details = (id) => {
      console.log(id);
      Axios.get(`http://www.omdbapi.com/?apikey=<ENTER YOUR OWN KEY>&i=${id}`).then(({ data }) => {
         {
            setSelected(data);

            console.log("called");
         }
      });
   };
   const closePopup = () => {
      console.log("closePopup");
      return setSelected({});
   };

   return (
      <>
         <div className='results'>
            {results.map((movie) => (
               <div className='result' onClick={() => details(movie.imdbID)} key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <img src={movie.Poster} alt='none' />
               </div>
            ))}
         </div>

         {Object.keys(Selected).length !== 0 && <Details data={Selected} closePopup={closePopup} />}
      </>
   );
}
export default Movie;
