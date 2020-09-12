import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import MainPage from './pages/main-page/main-page.component';
import AnimalsPage from './pages/animals-page/animals-page.component';
import AnimalPage from './pages/animal-page/animal-page.component';
import './app.styles.css';
const app = () => {

    

    return (
        <div>
           <Header />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/animals/:type' component={AnimalsPage}/> 
                <Route path='/animal-page/:id' component={AnimalPage}/>
            </Switch>
        </div>

    )
}

export default app;