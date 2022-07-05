import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title'
import profile from '../assets/Anjana (1).jpg'
import Jokes from './Jokes';

// class RegularClass{

// }

// class ComponentClass extends Component{

// }

// const regularCLassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log("regularCLassInstance",regularCLassInstance);
// console.log("componentClassInstance",componentClassInstance);

class App extends Component {
    state = { displayBio: false}
// constructor(){
//     super();
//     this.state={ displayBio:false };
//     console.log("component", this);

//     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
// }

toggleDisplayBio = () => {
    console.log("readMore", this);
    this.setState({ displayBio: !this.state.displayBio });

}

render(){

    return(
        <div>
            <img src={profile} alt='profile' className='profile' />
            <h1> Hello! </h1>
            <p> My name is Anjana.</p>
            {/* To know about component unmount, use the following code. When displayBio is false, we are not displaying title, thus unmounting the component.
            Then componentWillUnmount method will be called. 
            { this.state.displayBio? <Title/> : null }
            */}
            <Title />
            <p> I'm always looking forward to working on meaningful projects. </p>
            {
                this.state.displayBio ? (
                    <div>
                        <p>I live in Bangalore and code everyday.</p>
                        <p>My favourite languages are Java and JavaScript.</p>
                        <p>Besides coding, I like music and ramen!</p>
                        <button onClick={ this.toggleDisplayBio }>Show less</button>
                   </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio }>Read more</button>
                   </div>
                )
           }
           <hr />
            <Projects />
            <hr />
            <SocialProfiles />
        </div>
    )
    }
}
export default App;