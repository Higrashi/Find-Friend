import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import MainPage from './pages/main-page/main-page.component';
import Homepage from './pages/homepage.component';
import CatsPage from './pages/cats-page/cats-page.component';
import DogsPage from './pages/dogs-page/dogs-page.component';
import AnimalsPage from './pages/animals-page/animals-page.component';
import AnimalPage from './pages/animal-page/animal-page.component';
import './app.styles.css';
const app = () => {

    

    return (
        <div>
           <Header />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/all' component={Homepage} />
                <Route path='/cats-page' component={CatsPage} />
                <Route path='/dogs-page' component={DogsPage}/> 
                {/* <Route path='/animals/:type' component={AnimalsPage}/> */}
                <Route path='/animal-page/:id' component={AnimalPage}/>
            </Switch>
        </div>

    )
}

export default app;