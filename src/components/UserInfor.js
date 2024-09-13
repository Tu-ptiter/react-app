import React from "react";

class UserInfor extends React.Component{
    
    //define state
    state = {
        name: "Tu",
        address: "Hung Yen",
        age: 19,
        year:2024
    };




    handleOnChange = (event)=>{
        this.setState({
            name: event.target.value
        })
        console.log(event.target.value);
    }

    handleOnChangeAge = (event)=>{
        this.setState({
            age: event.target.value,
        })
    }

    handleOnChangeYear = (event) =>{
        this.setState({
            year: event.target.value
        })
    }

    render(){
        return (
            <div>
            My name is {this.state.name} and 
                I'm  {this.state.age} year old,
                Year {this.state.year}
                <form>
                    <label>Your name</label>
                    <input type="text" value={this.state.name} onChange={(event)=>{this.handleOnChange(event)}}/>

                    <label>Your age</label>
                    <input type="text" value={this.state.age} onChange={(event)=>{this.handleOnChangeAge(event)}}/>

                    <label>Your address</label>
                    <input type="text" value={this.state.address} onChange={(event)=>{this.handleOnChange(event)}}></input>
                    
                    <label>year</label>
                    <input type="text" value={this.state.year} onChange={(event) =>{this.handleOnChangeYear(event)}}></input>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


export default UserInfor;