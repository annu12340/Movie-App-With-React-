import React from "react";

function Details({ data, closePopup }) {
   return (
      <section className='popup'>
         <br />

         <div className='content'>
            <h2>
               {data.Title} <span>{data.Year}</span>
            </h2>
            <p className='rating'>Rating: {data.imdbRating}</p>

            <div className='plot'>
               <img src={data.Poster} />

               <p>
                  <b>Plot </b>
                  <br />
                  {data.Plot}
                  <br /> <br /> <br />
                  <b>Actors</b> <br />
                  {data.Actors}
                  Genre: {data.Genre}
                  <br />
                  <br />
                  <br />
                  <br />
                  Awards:{data.Awards}
               </p>
            </div>
            <button className='close' onClick={closePopup}>
               Close
            </button>
         </div>
      </section>
   );
}

export default Details;
