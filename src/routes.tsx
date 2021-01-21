import React from 'react';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from   './pages/Home';
import Animes from './pages/Animes/Animes';
import Books from  './pages/Books/Books';
import Mangas from './pages/Mangas/Mangas';
import Movies from './pages/Movies/Movies';
import Novels from './pages/Novels/Novels';
import Novel from './pages/Novel/Novel';
import Series from './pages/Series/Series';
import AddSerie from './pages/Series/AddSerie';

function Routes(){
    return (    
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route path='/' exact component={Home}/>        
                <Route path='/Animes' component={Animes}/>
                <Route path='/Books'  component={Books}/>
                <Route path='/Mangas' component={Mangas}/>
                <Route path='/Movies' component={Movies}/>
                <Route path='/Novels' component={Novels}/>
                <Route path='/Novel' component={Novel}/>          
                <Route path='/Series' exact component={Series}/>
                <Route path='/AddSerie' component={AddSerie}/>   
            </Switch>
        </Router>
    );
}

export default Routes;