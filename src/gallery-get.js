
import homeland from './images/homeland.jpg';
import jane from './images/jane.jpg';
import lacasaflores from './images/lacasaflores.jpg';
import laschicasdelcable from './images/laschicasdelcable.jpg';
import narcos from './images/narcos.jpg';
import orangenewblack from './images/orangenewblack.jpg';
 
export default function getGallery(){
    return [
      {id:'homeland', name:'react', logo:homeland},
      {id:'jane', name:'jane', logo:jane},
      {id:'casa flores', name:'La casa de flores', logo:lacasaflores},
      {id:'chicas cable', name:'Las chicas del cable', logo:laschicasdelcable},
      {id:'narcos', name:'Narcos', logo:narcos},
      {id:'orange black', name:'Orange is the new black', logo:orangenewblack}
    ];
  }