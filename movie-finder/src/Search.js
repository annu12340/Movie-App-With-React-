import React, { useState } from "react";
import Movie from "./Movie";
import Details from "./Details";
import Axios from "axios";

function Search() {
   const [State, setState] = useState({
      Value: "",
      results: [],
   });

   const handleChange = (e) => {
      setState((prevState) => {
         return { ...prevState, Value: e.target.value };
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      Axios.get(`http://www.omdbapi.com/?apikey=703624f&s=${State.Value}`).then(({ data }) => {
         setState((prevState) => {
            return { ...prevState, results: data.Search };
         });
      });
      console.log("result is", State.results);
   };

   return (
      <div>
         <form action='' onSubmit={handleSubmit} className='searchbox-wrap'>
            <input className='searchbox' value={State.Value || ""} type='text' onChange={handleChange} />
         </form>

         <Movie results={State.results} />
      </div>
   );
}

export default Search;
