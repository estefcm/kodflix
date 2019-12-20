import React from 'react';
import Tvshow from './Tvshow';
import getGallery from './gallery-get';
 
 export default function Gallery() {

const [shows, setShows] = React.useState([])

React.useEffect(() => {
  fetch('/rest/shows')
  .then(res => res.json())
  .then(data => setShows(data))
}, [])
  
console.log('HOLA ESTEFANIA', shows);

    return (
      <div>
        <div className='container'>
         {
           getGallery().map(tvshow =>(
             <Tvshow 
             key={tvshow.id}
             id={tvshow.id} 
             name={tvshow.name} 
             logo={tvshow.logo}/>
            ))
         }
        </div>
      </div>
      
    );
  }

  