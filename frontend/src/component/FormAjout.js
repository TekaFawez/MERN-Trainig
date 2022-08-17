import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class FormAjout extends Component {
    state = { 
        newDepart : ''
    }

    changeHandler=(event)=>{
        this.setState({
            newDepart : event.target.value
        })
    }

    addDepart=(event)=>{
        event.preventDefault();
        this.props.ajoutDepart(this.state.newDepart)
        

    }

    render() {
        return (
            <div>
                <form onSubmit={this.addDepart}>
                    <input type="text" onChange={this.changeHandler} />
                    <button>Ajouter département</button>
                </form>
            </div>
        );
    }
}

export default FormAjout;