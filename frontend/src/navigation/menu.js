import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
    } from 'react-router-dom'
import AccueilClass from '../component/AceuillClass'
import Apropos from '../component/apropo'
import ListDeparts from '../component/listeDepart'
    

function Menu() {
  return (
    <Router>
      <nav>
          <ul>
            <li><Link to="/accueil">Accueil</Link> </li>
            <li><Link to="/apropos">A propos</Link></li>
            <li><Link to="/departs">Liste des départements</Link></li>
          </ul>
      </nav>
      <div>
       <Routes>
        <Route path='/accueil' element={<AccueilClass/>}></Route>
        <Route path='/apropos' element={<Apropos/>}></Route>
        <Route path='/departs' element={<ListDeparts/>}></Route>
       </Routes>
      </div>
    </Router>



  )
}

export default Menu