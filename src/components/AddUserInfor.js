import React from "react";

class AddUserInfor extends React.Component{
    
    //define state
    state = {
        name: "",
        address: "Hung Yen",
        age: '',
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

  

    handleOnSubmit = (event) =>{
        event.preventDefault();
        this.props.handleAddNewUser({
            name: this.state.name,
            age: this.state.age

        });

    }


    render(){
        return (
            <>
            My name is {this.state.name} and 
                I'm  {this.state.age} year old,
                Year {this.state.year}
                <form>
                    <label>Your name</label>
                    <input type="text" value={this.state.name} onChange={(event)=>{this.handleOnChange(event)}}/>

                    <label>Your age</label>
                    <input type="text" value={this.state.age} onChange={(event)=>{this.handleOnChangeAge(event)}}/>


                    <button onClick={(event)=>{this.handleOnSubmit(event)}}>Submit</button>
                </form>
            </>
        )
    }
}


export default AddUserInfor;