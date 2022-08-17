import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const msg = "Bienvenue à notre site de la société : Ma société ! "
class AccueilClass extends Component {
    state = {  } 
    render() { 
        return ( <div>
            <h1>{msg}</h1>    
        </div>);
    }
}
 
export default AccueilClass;