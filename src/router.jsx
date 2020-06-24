import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Home from './pages/home/home.jsx';
import Contacts from './pages/contacts/contacts.jsx';
import Post from './pages/post/post.jsx';
import Author from './pages/author/author.jsx';


export default function Router(){
    return(
        <Switch>
            <Route path='/author/:id' component={Author} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/' exact component={Home} />
            <Route path='/post/:id' component={Post} />
           
        </Switch>
    )
}