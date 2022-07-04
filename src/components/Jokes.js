import React, { Component } from 'react';

class Jokes extends Component {
    state = { joke: {} };

    componentDidMount() {
        var headers={
            'Content-Type': 'application/json'
        }
        fetch('https://api.jokes.one/jod', {
            method: 'GET',
            headers: headers
        }).then(response => response.json() )
        .then(json => {
         //console.log('json', json.contents.jokes[0].joke.text)
         this.setState( { joke: json.contents.jokes[0].joke.text })
    })
    .catch(error => alert(error.message));
  
        }
    

    render() {
     var joke = JSON.stringify(this.state.joke);
    //  og('joke', typeof this.state.joke);
     joke.replace('\r\n/g', '');
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <p>{ joke }</p>
            </div>
        )
    }
}

export default Jokes;