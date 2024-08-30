// class component
//function component

import React from "react";

class MyComponent extends React.Component {
    
    state = {
        name: "Tu",
        address: "Hung Yen",
        age: 19
    };


    handleClick(){
        console.log("My name is ", this.state.name);
        console.log("random:", Math.floor(Math.random()* 100 + 1));

        //merge State => class State
        this.setState({
            name: "Co",
            age: Math.floor(Math.random()* 100 + 1)
        })

      
    }
    handleOnMouse(event){
        console.log(event.pageX);
    }
    //JSX
    render(){
        return (
            <div >
                My name is {this.state.name} and 
                I'm  {this.state.age} year old,

                <button onClick={(event) =>{this.handleClick(event) }}>Click me</button>
                <br></br>
                <button onMouseOver= {(event) =>{this.handleOnMouse(event)}}>Hover me</button>
                
            </div>
        )

    }
}

export default MyComponent;