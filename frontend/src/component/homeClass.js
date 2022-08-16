import  { React } from 'react';
import  { Component } from 'react';

const msg ="Ma societe"
class Accueil extends Component {
   
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Bienvenue à notre Sociéte:{msg}</h1>

            </div>

         );
    }
}
 
export default Accueil;