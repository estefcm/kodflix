
import homeland from './images/homeland.jpg';
import jane from './images/jane.jpg';
import lacasaflores from './images/lacasaflores.jpg';
import laschicasdelcable from './images/laschicasdelcable.jpg';
import narcos from './images/narcos.jpg';
import orangenewblack from './images/orangenewblack.jpg';
 
export default function getGallery(){
    return [
      {id:'homeland', name:'Homeland', logo:homeland, details:'Homeland is an American psychological thriller television series developed by Howard Gordon and Alex Gansa, based on the Israeli series Prisoners of War created by Gideon Raff. This wiki is dedicated to the show.'},
      {id:'jane', name:'Jane', logo:jane, details:'A young, devout Catholic woman discovers that she was accidentally artificially inseminated.'},
      {id:'casa flores', name:'La casa de flores', logo:lacasaflores, details:"In this dark comedy, a wealthy matriarch tries to maintain her family's facade of perfection after her husband's mistress exposes their dirty secrets."},
      {id:'chicas cable', name:'Las chicas del cable', logo:laschicasdelcable, details:'In 1920s Madrid, four women at the National Telephone Company ring in revolution as they manage romance, friendship and the modern workplace.'},
      {id:'narcos', name:'Narcos', logo:narcos, details:"The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series."},
      {id:'orange black', name:'Orange is the new black', logo:orangenewblack, details:"A privileged New Yorker ends up in a women's prison when a past crime catches up with her in this Emmy-winning series from the creator of 'Weeds.'"}
    ];
  }