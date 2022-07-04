import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

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
