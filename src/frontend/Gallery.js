import React from 'react';
import Tvshow from './Tvshow';
import getGallery from './gallery-get';
 
 export default function gallery() {
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

  