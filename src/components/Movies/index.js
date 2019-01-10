import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import logo from '../Nav/logo.svg';
import Nav from '../Nav';
import Home from '../../Pages/Home';
import Search from '../../Pages/Search';
import Details from '../../Pages/Details';
import './index.scss';


const Movies = () => (
                <Router>
                    <div>
                        <header className="Movie-header">
                            <img src={logo} className="Movie-logo" alt="logo" />
                            <h1>THE MOVIE DB API by Rosa</h1>
                            <Nav />
                        </header>
                        <Switch>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/search" component={Search}/> 
                            <Route exact path="/:id" component={Details}/>
                            <Redirect from='/' to='/home' />
                        </Switch>
                    </div>
                </Router>
                );


export default Movies;