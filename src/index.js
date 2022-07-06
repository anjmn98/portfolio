import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Jokes from './components/Jokes'
import App from './components/App';
import Header from './components/Header';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
        </Switch>
    </Router>, 
    document.getElementById('root'));

// Promise example code
// new Promise((resolve, reject) => {
//     return reject(new Error('No bears'))
//     setTimeout(()=> {
//         console.log("Bears");
//         resolve('Bears, Beets, Gallactica');
//     }, 2000);
// }).then(quote => {
//     console.log(quote);
//  //   console.log("Gallacica");
// })
// .catch(error => {
//     console.log('error', error);
// })
