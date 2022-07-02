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
        .then(json => {console.log('json', json.contents.jokes[0].joke)
        this.setState( { joke: json.contents.jokes[0].joke })
    });
  
        }
    

    render() {
    var { joke } = this.state.joke;
    
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <p>{ joke }</p>
            </div>
        )
    }
}

export default Jokes;