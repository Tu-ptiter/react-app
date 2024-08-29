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
        console.log("My name is", this.state.name)
    }
    handleOnMouse(event){
        console.log(event.pageX);
    }
    //JSX
    render(){
        return (
            <div >
                My name is {this.state.name} and 
                I'm from {this.state.address}

                <button onClick={this.handleClick}>Click me</button>
                <br></br>
                <button onMouseOver={this.handleOnMouse}>Hover me</button>
                
            </div>
        )

    }
}

export default MyComponent;